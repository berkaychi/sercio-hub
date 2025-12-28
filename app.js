const SHEETS_CONFIG = {
  videolar:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSEZFuyYVrvqWgRy1TBht1l8wIcvOlgnv4EHYEKRfWklLQ1z5ldS5pdP1uT8BOy6mOu2P7zwNEuCZpe/pub?gid=0&single=true&output=csv",
  sunucular:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSEZFuyYVrvqWgRy1TBht1l8wIcvOlgnv4EHYEKRfWklLQ1z5ldS5pdP1uT8BOy6mOu2P7zwNEuCZpe/pub?gid=1837165909&single=true&output=csv",
  topluEP:
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSEZFuyYVrvqWgRy1TBht1l8wIcvOlgnv4EHYEKRfWklLQ1z5ldS5pdP1uT8BOy6mOu2P7zwNEuCZpe/pub?gid=1172641502&single=true&output=csv",
};

const USE_SHEETS = true;

const loadingData = {
  youtubeVideos: [],
  activeServers: [
    { name: "Yükleniyor...", url: "#", status: "loading", icon: "⏳" },
  ],
  topluEP: {
    active: false, // Sheets gelene kadar gizle
  },
};

const sampleData = {
  profile: {
    name: "Sercio",
    bio: "Bizi Takip Edin",
    image: "logo.jpeg",
  },
  socialLinks: [
    {
      name: "YouTube",
      description: "",
      url: "https://www.youtube.com/@Sercio-x3s",
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
      color: "#FF0000",
      order: 1,
    },
    {
      name: "WhatsApp",
      description: "Duyuru Kanalımız",
      url: "https://wa.me/905xxxxxxxxx",
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
      color: "#25D366",
      order: 2,
    },
    {
      name: "Instagram",
      description: "",
      url: "https://www.instagram.com/sserciio",
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
      color: "#E4405F",
      order: 3,
    },
    {
      name: "Facebook",
      description: "",
      url: "https://www.facebook.com/profile.php?id=61584788655501",
      icon: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
      color: "#1877F2",
      order: 4,
    },
  ],
  activeServers: [
    {
      name: "Reborn MT2",
      logo: "",
      icon: "⚔️",
      url: "https://reborn2.com",
      status: "active",
    },
    {
      name: "TruvaMT2",
      logo: "",
      icon: "🔥",
      url: "https://web.truvamt2.com",
      status: "active",
    },
  ],
  youtubeVideos: ["2IlU7GLny2E", "1H2_z9JWjWo", "4Z5Qc-UsGjw"],
  discord: {
    name: "Sercio Discord",
    description: "Topluluğumuza katıl!",
    inviteLink: "https://discord.gg/sercio",
    banner: "logo2.jpeg",
  },
  topluEP: {
    active: true,
    serverName: "Reborn MT2",
    serverUrl: "https://discord.gg/sercio",
    date: "Bugün",
    time: "21:00",
    description: "Bonuslu EP çekimine katılmak için Discord sunucumuza gel!",
    buttonText: "Discord'a Katıl",
  },
};

function parseCSV(csv) {
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

async function loadDataFromSheets() {
  if (!USE_SHEETS) {
    console.log("Sheets devre dışı, örnek veriler kullanılıyor");
    return null;
  }

  try {
    console.log("Google Sheets'ten veriler çekiliyor...");

    const [videolarRes, sunucularRes, topluEPRes] = await Promise.all([
      fetch(SHEETS_CONFIG.videolar),
      fetch(SHEETS_CONFIG.sunucular),
      fetch(SHEETS_CONFIG.topluEP),
    ]);

    const videolarCSV = await videolarRes.text();
    const sunucularCSV = await sunucularRes.text();
    const topluEPCSV = await topluEPRes.text();

    const videolarRows = parseCSV(videolarCSV);
    const youtubeChannel =
      videolarRows[0]?.[0] || sampleData.socialLinks[0].url;
    const videoIds = videolarRows
      .slice(1)
      .map((row) => row[0])
      .filter((id) => id);

    const sunucularRows = parseCSV(sunucularCSV);
    const sunucularHeader = sunucularRows[0];
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

    const socialLinks = sampleData.socialLinks.map((link) => {
      if (link.name === "YouTube") {
        return { ...link, url: youtubeChannel };
      }
      return link;
    });

    console.log("Sheets verileri yüklendi:", {
      videoIds,
      activeServers,
      topluEP,
    });

    return {
      ...sampleData,
      socialLinks,
      youtubeVideos: videoIds.length > 0 ? videoIds : sampleData.youtubeVideos,
      activeServers:
        activeServers.length > 0 ? activeServers : sampleData.activeServers,
      topluEP: topluEP.serverName ? topluEP : sampleData.topluEP,
    };
  } catch (error) {
    console.error("Sheets verisi çekilirken hata:", error);
    return null;
  }
}

const profileName = document.getElementById("profileName");
const profileBio = document.getElementById("profileBio");
const profileImage = document.getElementById("profileImage");
const socialLinksContainer = document.getElementById("socialLinks");
const serversGrid = document.getElementById("serversGrid");
const videosGrid = document.getElementById("videosGrid");
const loading = document.getElementById("loading");

function renderDiscordWidget(discord) {
  const discordWidget = document.querySelector(".discord-widget");
  if (!discordWidget) return;

  const { name, description, inviteLink, banner } = discord;

  discordWidget.innerHTML = `
    <div class="discord-card">
      <div class="discord-banner">
        <img src="${banner || "logo.jpeg"}" alt="Discord Banner">
      </div>
      <div class="discord-content">
        <div class="discord-icon">
          <svg width="28" height="28" viewBox="0 0 71 55" fill="white">
            <path d="M60.1 4.9A58.5 58.5 0 0 0 45.4.5a.2.2 0 0 0-.2.1 40.6 40.6 0 0 0-1.8 3.7 54 54 0 0 0-16.2 0A37.4 37.4 0 0 0 25.4.6a.2.2 0 0 0-.2-.1 58.4 58.4 0 0 0-14.7 4.4.2.2 0 0 0-.1.1A59.6 59.6 0 0 0 .3 43.8a.2.2 0 0 0 .1.2 58.9 58.9 0 0 0 17.7 8.9.2.2 0 0 0 .3-.1 42.1 42.1 0 0 0 3.6-5.9.2.2 0 0 0-.1-.3 38.8 38.8 0 0 1-5.5-2.6.2.2 0 0 1 0-.4l1.1-.9a.2.2 0 0 1 .2 0 42 42 0 0 0 35.8 0 .2.2 0 0 1 .2 0l1.1.9a.2.2 0 0 1 0 .4 36.4 36.4 0 0 1-5.5 2.6.2.2 0 0 0-.1.3 47.2 47.2 0 0 0 3.6 5.9.2.2 0 0 0 .2.1 58.7 58.7 0 0 0 17.7-8.9.2.2 0 0 0 .1-.2 59.1 59.1 0 0 0-10.2-38.8.2.2 0 0 0-.1-.1ZM23.7 35.9c-3.4 0-6.2-3.1-6.2-6.9s2.7-6.9 6.2-6.9 6.3 3.1 6.2 6.9c0 3.8-2.8 6.9-6.2 6.9Zm22.9 0c-3.4 0-6.2-3.1-6.2-6.9s2.7-6.9 6.2-6.9 6.3 3.1 6.2 6.9c0 3.8-2.7 6.9-6.2 6.9Z"/>
          </svg>
        </div>
        <h4 class="discord-name">${name}</h4>
        <p class="discord-desc">${description}</p>
        <a href="${inviteLink}" target="_blank" class="discord-btn">Sunucuya Katıl</a>
      </div>
    </div>
  `;
}

function renderProfile(profile) {
  profileName.textContent = profile.name;
  profileBio.textContent = profile.bio;
  if (profile.image) {
    profileImage.src = profile.image;
    profileImage.style.display = "block";
  }
}

function renderSocialLinks(links) {
  socialLinksContainer.innerHTML = "";

  const sortedLinks = [...links].sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  );

  sortedLinks.forEach((link) => {
    const linkElement = document.createElement("a");
    linkElement.href = link.url;
    linkElement.className = "social-link";
    linkElement.target = "_blank";
    linkElement.rel = "noopener noreferrer";

    if (link.color) {
      linkElement.style.setProperty("--link-color", link.color);
    }

    linkElement.innerHTML = `
            <div class="social-link-content">
                <div class="social-icon">${link.icon}</div>
                <div class="social-info">
                    <h3>${link.name}</h3>
                    <p>${link.description}</p>
                </div>
            </div>
            <span class="social-arrow">→</span>
        `;

    socialLinksContainer.appendChild(linkElement);
  });
}

async function fetchVideoTitle(videoId) {
  try {
    const response = await fetch(
      `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`
    );
    const data = await response.json();
    return data.title || "Video";
  } catch (error) {
    console.error("Video başlığı alınamadı:", error);
    return "Video";
  }
}

async function renderVideos(videoIds) {
  videosGrid.innerHTML = "";

  for (const videoId of videoIds) {
    const card = document.createElement("a");
    card.href = `https://www.youtube.com/watch?v=${videoId}`;
    card.className = "video-card";
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

    card.innerHTML = `
            <div class="video-thumbnail">
                <img src="${thumbnailUrl}" alt="Video">
                <div class="video-play-btn">
                    <span>▶</span>
                </div>
            </div>
            <div class="video-info">
                <h4 class="video-title" data-video-id="${videoId}">Yükleniyor...</h4>
            </div>
        `;

    videosGrid.appendChild(card);

    fetchVideoTitle(videoId).then((title) => {
      const titleElement = card.querySelector(".video-title");
      if (titleElement) {
        titleElement.textContent = title;
      }
    });
  }
}

function renderServers(servers) {
  serversGrid.innerHTML = "";

  servers.forEach((server) => {
    const card = document.createElement("a");
    card.href = server.url;
    card.className = "server-card";
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    let faviconUrl = "";
    try {
      const domain = new URL(server.url).hostname;
      faviconUrl = `https://icons.duckduckgo.com/ip3/${domain}.ico`;
    } catch (e) {
      console.warn("URL parse error:", server.url);
    }

    const logoContent = server.logo
      ? `<img src="${server.logo}" alt="${
          server.name
        }" onerror="this.onerror=null; this.src='${faviconUrl}';">
         <span class="server-icon" style="display:none;">${
           server.icon || "🎮"
         }</span>`
      : faviconUrl
      ? `<img src="${faviconUrl}" alt="${
          server.name
        }" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
         <span class="server-icon" style="display:none;">${
           server.icon || "🎮"
         }</span>`
      : `<span class="server-icon">${server.icon || "🎮"}</span>`;

    card.innerHTML = `
            <div class="server-logo">
                ${logoContent}
                <div class="server-status ${server.status}"></div>
            </div>
            <div class="server-info">
                <h4>${server.name}</h4>
                <span class="server-badge">Aktif</span>
            </div>
            <div class="server-hover-text">Sunucuya Git →</div>
        `;

    serversGrid.appendChild(card);
  });
}

function renderTopluEP(topluEP) {
  const btn = document.getElementById("topluEpBtn");
  const modalOverlay = document.getElementById("epModalOverlay");
  const modalContent = document.getElementById("epModalContent");
  const modalClose = document.getElementById("epModalClose");

  if (!topluEP || !topluEP.active) {
    if (btn) btn.style.display = "none";
    return;
  }

  if (btn) btn.style.display = "flex";

  if (modalContent) {
    modalContent.innerHTML = `
      <div class="ep-info-row">
        <span class="ep-label">📍 Sunucu</span>
        <span class="ep-value">${topluEP.serverName}</span>
      </div>
      <div class="ep-info-row">
        <span class="ep-label">📅 Tarih</span>
        <span class="ep-value">${topluEP.date}</span>
      </div>
      <div class="ep-info-row">
        <span class="ep-label">⏰ Saat</span>
        <span class="ep-value">${topluEP.time}</span>
      </div>
      <p class="ep-description">${topluEP.description}</p>
      <div class="ep-modal-actions">
        <a href="${topluEP.serverUrl}" target="_blank" class="ep-btn-primary">${
      topluEP.buttonText || "Discord'a Katıl"
    }</a>
        <button class="ep-btn-secondary" id="epCloseBtn">Kapat</button>
      </div>
    `;

    const closeBtn = document.getElementById("epCloseBtn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => {
        modalOverlay.classList.remove("active");
      });
    }
  }

  if (btn && modalOverlay) {
    btn.addEventListener("click", () => {
      modalOverlay.classList.add("active");
    });
  }

  if (modalClose && modalOverlay) {
    modalClose.addEventListener("click", () => {
      modalOverlay.classList.remove("active");
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
      }
    });
  }
}

function hideLoading() {
  loading.classList.add("hidden");
}

async function initApp() {
  try {
    renderProfile(sampleData.profile);
    renderSocialLinks(sampleData.socialLinks);
    renderDiscordWidget(sampleData.discord);

    if (USE_SHEETS) {
      renderVideos(loadingData.youtubeVideos);
      renderServers(loadingData.activeServers);
      renderTopluEP(loadingData.topluEP);
    } else {
      renderVideos(sampleData.youtubeVideos);
      renderServers(sampleData.activeServers);
      renderTopluEP(sampleData.topluEP);
    }

    hideLoading();

    if (USE_SHEETS) {
      const sheetsData = await loadDataFromSheets();
      if (sheetsData) {
        renderSocialLinks(sheetsData.socialLinks);
        renderVideos(sheetsData.youtubeVideos);
        renderServers(sheetsData.activeServers);
        renderTopluEP(sheetsData.topluEP);
        console.log("Sheets verileri uygulandı");
      } else {
        renderVideos(sampleData.youtubeVideos);
        renderServers(sampleData.activeServers);
        renderTopluEP(sampleData.topluEP);
      }
    }
  } catch (error) {
    console.error("Uygulama başlatılırken hata:", error);
    renderVideos(sampleData.youtubeVideos);
    renderServers(sampleData.activeServers);
    renderTopluEP(sampleData.topluEP);
    hideLoading();
  }
}

function initParticles() {
  const canvas = document.getElementById("particles-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let sparks = [];
  let embers = [];
  const sparkCount = 40;
  const emberCount = 25;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class Spark {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + 10;
      this.size = Math.random() * 2.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 1.5;
      this.speedY = -(Math.random() * 2 + 1.5);
      this.opacity = Math.random() * 0.8 + 0.2;
      this.life = Math.random() * 150 + 100;
      this.maxLife = this.life;
      const colors = [
        { r: 255, g: 215, b: 0 },
        { r: 255, g: 170, b: 0 },
        { r: 255, g: 107, b: 0 },
        { r: 255, g: 69, b: 0 },
      ];
      this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.x += this.speedX + Math.sin(this.life * 0.05) * 0.3;
      this.y += this.speedY;
      this.life--;
      this.opacity = (this.life / this.maxLife) * 0.8;
      this.size *= 0.998;

      if (this.life <= 0 || this.y < -10) {
        this.reset();
      }
    }

    draw() {
      const { r, g, b } = this.color;

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity * 0.2})`;
      ctx.fill();
    }
  }

  class Ember {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      this.x = Math.random() * canvas.width;
      this.y = initial ? Math.random() * canvas.height : canvas.height + 20;
      this.size = Math.random() * 1.5 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = -(Math.random() * 0.5 + 0.2);
      this.opacity = Math.random() * 0.4 + 0.1;
      this.pulse = Math.random() * Math.PI * 2;
      this.pulseSpeed = Math.random() * 0.05 + 0.02;
    }

    update() {
      this.x += this.speedX + Math.sin(this.pulse) * 0.2;
      this.y += this.speedY;
      this.pulse += this.pulseSpeed;

      const pulseOpacity = this.opacity + Math.sin(this.pulse) * 0.15;

      if (this.y < -20) {
        this.reset();
      }

      return Math.max(0, pulseOpacity);
    }

    draw(pulseOpacity) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 180, 50, ${pulseOpacity})`;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 150, 0, ${pulseOpacity * 0.15})`;
      ctx.fill();
    }
  }

  function init() {
    resize();
    sparks = [];
    embers = [];

    for (let i = 0; i < sparkCount; i++) {
      const spark = new Spark();
      spark.y = Math.random() * canvas.height;
      spark.life = Math.random() * spark.maxLife;
      sparks.push(spark);
    }

    for (let i = 0; i < emberCount; i++) {
      embers.push(new Ember());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    embers.forEach((ember) => {
      const pulseOpacity = ember.update();
      ember.draw(pulseOpacity);
    });

    sparks.forEach((spark) => {
      spark.update();
      spark.draw();
    });

    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", resize);

  init();
  animate();
}

document.addEventListener("DOMContentLoaded", () => {
  initApp();
  initParticles();
});
