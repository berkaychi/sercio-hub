const profileName = document.getElementById("profileName");
const profileBio = document.getElementById("profileBio");
const profileImage = document.getElementById("profileImage");
const socialLinksContainer = document.getElementById("socialLinks");
const serversGrid = document.getElementById("serversGrid");
const videosGrid = document.getElementById("videosGrid");
const loading = document.getElementById("loading");

if (profileImage) {
  profileImage.addEventListener("error", () => {
    profileImage.style.display = "none";
  });
}

export function renderProfile(profile) {
  profileName.textContent = profile.name;
  profileBio.textContent = profile.bio;
  if (profile.image) {
    profileImage.src = profile.image;
    profileImage.style.display = "block";
  }
}

export function renderSocialLinks(links) {
  socialLinksContainer.replaceChildren();

  const sortedLinks = [...links].sort(
    (a, b) => (a.order || 0) - (b.order || 0),
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

    const iconDiv = document.createElement("div");
    iconDiv.className = "social-icon";
    if (link.icon) {
      const iconEl = document.createElement("i");
      iconEl.className = link.icon;
      iconDiv.appendChild(iconEl);
    }

    const infoDiv = document.createElement("div");
    infoDiv.className = "social-info";

    const nameH3 = document.createElement("h3");
    nameH3.textContent = link.name;

    const descP = document.createElement("p");
    descP.textContent = link.description;

    infoDiv.appendChild(nameH3);
    infoDiv.appendChild(descP);

    const contentDiv = document.createElement("div");
    contentDiv.className = "social-link-content";
    contentDiv.appendChild(iconDiv);
    contentDiv.appendChild(infoDiv);

    const arrow = document.createElement("span");
    arrow.className = "social-arrow";
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "→";

    linkElement.appendChild(contentDiv);
    linkElement.appendChild(arrow);
    socialLinksContainer.appendChild(linkElement);
  });
}

async function fetchVideoTitle(videoId) {
  const cacheKey = `vt_${videoId}`;
  try {
    const cached = sessionStorage.getItem(cacheKey);
    if (cached) return cached;
  } catch {
    /* sessionStorage erişilemez */
  }

  try {
    const response = await fetch(
      `https://noembed.com/embed?url=https://www.youtube.com/watch?v=${videoId}`,
    );
    const data = await response.json();
    const title = data.title || "Video";
    try {
      sessionStorage.setItem(cacheKey, title);
    } catch {
      /* quota */
    }
    return title;
  } catch {
    return "Video";
  }
}

export async function renderVideos(videoIds) {
  videosGrid.replaceChildren();

  const cards = videoIds.map((videoId) => {
    const card = document.createElement("a");
    card.href = `https://www.youtube.com/watch?v=${videoId}`;
    card.className = "video-card";
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    const thumbnailDiv = document.createElement("div");
    thumbnailDiv.className = "video-thumbnail";

    const img = document.createElement("img");
    img.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    img.alt = "Video küçük resmi";
    img.loading = "lazy";
    img.width = 320;
    img.height = 180;

    const playBtn = document.createElement("div");
    playBtn.className = "video-play-btn";
    const playSpan = document.createElement("span");
    playSpan.textContent = "▶";
    playBtn.appendChild(playSpan);

    thumbnailDiv.appendChild(img);
    thumbnailDiv.appendChild(playBtn);

    const infoDiv = document.createElement("div");
    infoDiv.className = "video-info";

    const titleH4 = document.createElement("h4");
    titleH4.className = "video-title";
    titleH4.textContent = "Yükleniyor...";

    infoDiv.appendChild(titleH4);
    card.appendChild(thumbnailDiv);
    card.appendChild(infoDiv);
    videosGrid.appendChild(card);
    return { card, titleH4 };
  });

  const titles = await Promise.all(videoIds.map(fetchVideoTitle));
  titles.forEach((title, i) => {
    cards[i].titleH4.textContent = title;
    const img = cards[i].card.querySelector(".video-thumbnail img");
    if (img) img.alt = `${title} - YouTube video küçük resmi`;
  });
}

export function renderServers(servers) {
  serversGrid.replaceChildren();

  servers.forEach((server) => {
    const card = document.createElement("a");
    card.href = server.url;
    card.className = "server-card";
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    let faviconUrl = "";
    try {
      const domain = new URL(server.url).hostname;
      faviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    } catch {
      /* geçersiz URL */
    }

    const logoDiv = document.createElement("div");
    logoDiv.className = "server-logo";

    if (server.logo || faviconUrl) {
      const img = document.createElement("img");
      img.src = server.logo || faviconUrl;
      img.alt = server.name;
      if (!server.logo && faviconUrl) {
        const iconSpan = document.createElement("span");
        iconSpan.className = "server-icon";
        iconSpan.textContent = server.icon || "🎮";
        iconSpan.style.display = "none";
        img.addEventListener("error", () => {
          img.style.display = "none";
          iconSpan.style.display = "flex";
        });
        logoDiv.appendChild(img);
        logoDiv.appendChild(iconSpan);
      } else {
        img.addEventListener("error", () => {
          img.src = faviconUrl;
        });
        logoDiv.appendChild(img);
      }
    } else {
      const iconSpan = document.createElement("span");
      iconSpan.className = "server-icon";
      iconSpan.textContent = server.icon || "🎮";
      logoDiv.appendChild(iconSpan);
    }

    const statusDiv = document.createElement("div");
    statusDiv.className = `server-status ${server.status}`;
    logoDiv.appendChild(statusDiv);

    const infoDiv = document.createElement("div");
    infoDiv.className = "server-info";

    const nameH4 = document.createElement("h4");
    nameH4.textContent = server.name;

    infoDiv.appendChild(nameH4);

    card.appendChild(logoDiv);
    card.appendChild(infoDiv);
    serversGrid.appendChild(card);
  });
}

export function renderTopluEP(topluEP) {
  const panel = document.getElementById("bonusluEpPanel");
  const panelContent = document.getElementById("epPanelContent");
  const panelIcon = document.getElementById("epPanelIcon");
  const liveBadge = document.getElementById("epLiveBadge");

  if (panel) panel.style.display = "block";

  if (!topluEP || !topluEP.active) {
    if (panel) panel.classList.add("inactive");
    if (panelIcon) panelIcon.textContent = "⏸️";
    if (liveBadge) {
      liveBadge.textContent = "BEKLEMEDE";
      liveBadge.classList.add("inactive");
    }
    if (panelContent) {
      panelContent.replaceChildren();

      const msg = document.createElement("div");
      msg.className = "ep-inactive-message";

      const icon = document.createElement("span");
      icon.className = "ep-inactive-icon";
      icon.textContent = "🎯";

      const text = document.createElement("p");
      text.className = "ep-inactive-text";
      text.textContent = "Şu anda aktif bonuslu EP fırsatı bulunmamaktadır.";

      const subtext = document.createElement("p");
      subtext.className = "ep-inactive-subtext";
      subtext.textContent = "Yeni fırsatlar için takipte kalın!";

      msg.appendChild(icon);
      msg.appendChild(text);
      msg.appendChild(subtext);
      panelContent.appendChild(msg);
    }
    return;
  }

  if (panel) panel.classList.remove("inactive");
  if (panelIcon) panelIcon.textContent = "🔥";
  if (liveBadge) {
    liveBadge.textContent = "AKTİF";
    liveBadge.classList.remove("inactive");
  }

  if (panelContent) {
    panelContent.replaceChildren();

    const rows = [
      { label: "📍 Sunucu", value: topluEP.serverName },
      { label: "📅 Tarih", value: topluEP.date },
      { label: "⏰ Saat", value: topluEP.time },
    ];

    rows.forEach(({ label, value }) => {
      const row = document.createElement("div");
      row.className = "ep-info-row";

      const labelSpan = document.createElement("span");
      labelSpan.className = "ep-label";
      labelSpan.textContent = label;

      const valueSpan = document.createElement("span");
      valueSpan.className = "ep-value";
      valueSpan.textContent = value;

      row.appendChild(labelSpan);
      row.appendChild(valueSpan);
      panelContent.appendChild(row);
    });

    const desc = document.createElement("p");
    desc.className = "ep-description";
    desc.textContent = topluEP.description;
    panelContent.appendChild(desc);

    const btn = document.createElement("a");
    btn.href = topluEP.serverUrl;
    btn.target = "_blank";
    btn.rel = "noopener noreferrer";
    btn.className = "ep-panel-btn";
    btn.textContent = topluEP.buttonText;
    panelContent.appendChild(btn);
  }
}

export function renderDuyurular(duyurular) {
  const duyurularList = document.getElementById("duyurularList");
  if (!duyurularList) return;

  duyurularList.replaceChildren();

  if (!duyurular || duyurular.length === 0) {
    const emptyItem = document.createElement("div");
    emptyItem.className = "duyuru-item";

    const tarihSpan = document.createElement("span");
    tarihSpan.className = "duyuru-tarih";
    tarihSpan.textContent = "-";

    const mesajSpan = document.createElement("span");
    mesajSpan.className = "duyuru-mesaj";
    mesajSpan.textContent = "Henüz duyuru yok";

    emptyItem.appendChild(tarihSpan);
    emptyItem.appendChild(mesajSpan);
    duyurularList.appendChild(emptyItem);
    return;
  }

  duyurular.forEach((d) => {
    const tip = d.tip || "normal";
    const tipConfig = getDuyuruTipConfig(tip);

    const item = document.createElement("div");
    item.className = `duyuru-item ${tip}`;

    const leftDiv = document.createElement("div");
    leftDiv.className = "duyuru-left";

    const badge = document.createElement("span");
    badge.className = `duyuru-tip-badge ${tip}`;
    badge.textContent = tipConfig.badge;

    const tarih = document.createElement("span");
    tarih.className = "duyuru-tarih";
    tarih.textContent = formatDuyuruTarih(d.tarih);

    leftDiv.appendChild(badge);
    leftDiv.appendChild(tarih);

    const contentDiv = document.createElement("div");
    contentDiv.className = "duyuru-content";

    const mesajSpan = document.createElement("span");
    mesajSpan.className = "duyuru-mesaj";
    mesajSpan.textContent = d.mesaj;

    if (d.saat) {
      const saatSpan = document.createElement("span");
      saatSpan.className = "duyuru-saat";
      saatSpan.textContent = `⏰ ${d.saat}`;
      mesajSpan.appendChild(document.createTextNode(" "));
      mesajSpan.appendChild(saatSpan);
    }

    contentDiv.appendChild(mesajSpan);

    if (d.link && tipConfig.buttonText) {
      const linkBtn = document.createElement("a");
      linkBtn.href = d.link;
      linkBtn.target = "_blank";
      linkBtn.rel = "noopener noreferrer";
      linkBtn.className = `duyuru-link-btn ${tip}`;
      linkBtn.textContent = tipConfig.buttonText;
      contentDiv.appendChild(linkBtn);
    }

    item.appendChild(leftDiv);
    item.appendChild(contentDiv);
    duyurularList.appendChild(item);
  });
}

function getDuyuruTipConfig(tip) {
  const configs = {
    normal: { badge: "📢", buttonText: "" },
    link: { badge: "🔗 YENİ", buttonText: "Git →" },
    yayin: { badge: "🔴 CANLI", buttonText: "İzle →" },
    onemli: { badge: "⚠️ ÖNEMLİ", buttonText: "" },
    etkinlik: { badge: "🎮 ETKİNLİK", buttonText: "Katıl →" },
  };
  return configs[tip] || configs.normal;
}

function formatDuyuruTarih(tarih) {
  if (!tarih) return "-";
  const parts = tarih.split(".");
  if (parts.length >= 2) {
    return `${parts[0]}.${parts[1]}`;
  }
  return tarih;
}

export function showToast(message, type = "error") {
  const existingToast = document.querySelector(".toast-notification");
  if (existingToast) existingToast.remove();

  const toast = document.createElement("div");
  toast.className = `toast-notification ${type}`;
  toast.setAttribute("role", "alert");
  toast.setAttribute("aria-live", "assertive");
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => toast.classList.add("show"), 10);

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

export function hideLoading() {
  if (loading) loading.classList.add("hidden");
}
