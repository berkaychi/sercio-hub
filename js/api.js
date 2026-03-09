export const SHEETS_CONFIG = {
  videolar:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSEZFuyYVrvqWgRy1TBht1l8wIcvOlgnv4EHYEKRfWklLQ1z5ldS5pdP1uT8BOy6mOu2P7zwNEuCZpe/pub?gid=0&single=true&output=csv",
  sunucular:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSEZFuyYVrvqWgRy1TBht1l8wIcvOlgnv4EHYEKRfWklLQ1z5ldS5pdP1uT8BOy6mOu2P7zwNEuCZpe/pub?gid=1837165909&single=true&output=csv",
  topluEP:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSEZFuyYVrvqWgRy1TBht1l8wIcvOlgnv4EHYEKRfWklLQ1z5ldS5pdP1uT8BOy6mOu2P7zwNEuCZpe/pub?gid=1172641502&single=true&output=csv",
  duyurular:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSEZFuyYVrvqWgRy1TBht1l8wIcvOlgnv4EHYEKRfWklLQ1z5ldS5pdP1uT8BOy6mOu2P7zwNEuCZpe/pub?gid=1023942678&single=true&output=csv",
};

export const USE_SHEETS = true;

/**
 * Basit CSV ayrıştırıcı. Tırnak içindeki virgülleri doğru yönetir.
 * @param {string} csv
 * @returns {string[][]}
 */
export function parseCSV(csv) {
  const lines = csv.trim().split("\n");
  return lines.map((line) => {
    const result = [];
    let current = "";
    let inQuotes = false;

    for (let char of line) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === "," && !inQuotes) {
        result.push(current.trim());
        current = "";
      } else {
        current += char;
      }
    }
    result.push(current.trim());
    return result;
  });
}

/**
 * Google Sheets'ten tüm verileri çeker ve yapılandırılmış obje döndürür.
 * Hata durumunda null döndürür.
 * @param {object} sampleData — fallback için
 * @returns {Promise<object|null>}
 */
export async function loadDataFromSheets(sampleData) {
  if (!USE_SHEETS) return null;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);
    const [videolarRes, sunucularRes, topluEPRes, duyurularRes] =
      await Promise.all([
        fetch(SHEETS_CONFIG.videolar, { signal: controller.signal }),
        fetch(SHEETS_CONFIG.sunucular, { signal: controller.signal }),
        fetch(SHEETS_CONFIG.topluEP, { signal: controller.signal }),
        fetch(SHEETS_CONFIG.duyurular, { signal: controller.signal }).catch(
          () => null,
        ),
      ]);

    clearTimeout(timeoutId);

    const videolarCSV = await videolarRes.text();
    const sunucularCSV = await sunucularRes.text();
    const topluEPCSV = await topluEPRes.text();
    const duyurularCSV = duyurularRes ? await duyurularRes.text() : "";

    const videolarRows = parseCSV(videolarCSV);
    const youtubeChannel =
      videolarRows[0]?.[0] || sampleData.socialLinks[0].url;
    const videoIds = videolarRows
      .slice(1)
      .map((row) => row[0])
      .filter((id) => id);

    const sunucularRows = parseCSV(sunucularCSV);
    const activeServers = sunucularRows
      .slice(1)
      .map((row) => ({
        name: row[0] || "",
        url: row[1] || "",
        status: row[2] || "active",
        logo: "",
        icon: "🎮",
      }))
      .filter((s) => s.name && s.url);

    const topluEPRows = parseCSV(topluEPCSV);
    const topluEPData = {};
    topluEPRows.forEach((row) => {
      if (row[0] && row[1] !== undefined) {
        topluEPData[row[0]] = row[1];
      }
    });

    const topluEP = {
      active: topluEPData.active?.toLowerCase() === "true",
      serverName: topluEPData.serverName || "",
      serverUrl: topluEPData.serverUrl || "",
      date: topluEPData.date || "",
      time: topluEPData.time || "",
      description: topluEPData.description || "",
      buttonText: topluEPData.buttonText || "Discord'a Katıl",
    };

    let duyurular = [];
    if (duyurularCSV) {
      const duyurularRows = parseCSV(duyurularCSV);
      const firstRow = duyurularRows[0];
      const hasHeader =
        firstRow && firstRow[0] && !firstRow[0].match(/^\d{2}\.\d{2}\.\d{4}$/);

      const dataRows = hasHeader ? duyurularRows.slice(1) : duyurularRows;
      duyurular = dataRows
        .map((row) => {
          let link = row[3] || "";
          if (link && !link.match(/^https?:\/\//i)) {
            link = "https://" + link;
          }
          return {
            tarih: row[0] || "",
            mesaj: row[1] || "",
            tip: row[2] || "normal",
            link: link,
            saat: row[4] || "",
          };
        })
        .filter((d) => d.tarih && d.mesaj);
    }

    const socialLinks = sampleData.socialLinks.map((link) => {
      if (link.name === "YouTube") {
        return { ...link, url: youtubeChannel };
      }
      return link;
    });

    return {
      ...sampleData,
      socialLinks,
      youtubeVideos: videoIds.length > 0 ? videoIds : sampleData.youtubeVideos,
      activeServers:
        activeServers.length > 0 ? activeServers : sampleData.activeServers,
      topluEP: topluEP.serverName ? topluEP : sampleData.topluEP,
      duyurular: duyurular,
    };
  } catch (error) {
    if (error.name === "AbortError") {
      console.error("Sheets verisi çekilirken zaman aşımı (10s) oluştu.");
    } else {
      console.error("Sheets verisi çekilirken hata:", error);
    }
    return null;
  }
}
