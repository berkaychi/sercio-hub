// ============================================================
// data.js — Statik fallback veriler ve ikon SVG'leri
// ============================================================

export const loadingData = {
  youtubeVideos: [],
  activeServers: [
    { name: "Yükleniyor...", url: "#", status: "loading", icon: "⏳" },
  ],
  topluEP: {
    active: false,
  },
  duyurular: [],
};

export const sampleData = {
  profile: {
    name: "Sercio",
    bio: "Bizi Takip Edin",
    image: "logo.jpeg",
  },
  socialLinks: [
    {
      name: "YouTube",
      description: "",
      url: "https://www.youtube.com/@Sercio-m4d",
      icon: "fa-brands fa-youtube",
      color: "#FF0000",
      order: 1,
    },
    {
      name: "Instagram",
      description: "",
      url: "https://www.instagram.com/sserciiomt2/",
      icon: "fa-brands fa-instagram",
      color: "#E4405F",
      order: 2,
    },
    {
      name: "Facebook",
      description: "",
      url: "https://www.facebook.com/profile.php?id=61584788655501",
      icon: "fa-brands fa-facebook-f",
      color: "#1877F2",
      order: 3,
    },
    {
      name: "WhatsApp",
      description: "Duyuru Kanalımız (Numaralar Gözükmez)",
      url: "https://whatsapp.com/channel/0029Vb6A092LY6d1wD2PeZ3F",
      icon: "fa-brands fa-whatsapp",
      color: "#25D366",
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
  topluEP: {
    active: true,
    serverName: "Reborn MT2",
    serverUrl: "https://discord.gg/sercio",
    date: "Bugün",
    time: "21:00",
    description: "Bonuslu EP çekimine katılmak için Discord sunucumuza gel!",
    buttonText: "Discord'a Katıl",
  },
  duyurular: [
    {
      tarih: "06.01.2026",
      mesaj: "Canlı yayın başlıyor!",
      tip: "yayin",
      link: "https://youtube.com/@Sercio-x3s/live",
      saat: "21:00",
    },
    {
      tarih: "06.01.2026",
      mesaj: "Yeni kanal açıldı!",
      tip: "link",
      link: "https://www.youtube.com/@Sercio-x3s",
    },
    {
      tarih: "05.01.2026",
      mesaj: "Toplu EP çekimi var!",
      tip: "etkinlik",
      link: "https://discord.gg/sercio",
      saat: "22:00",
    },
    {
      tarih: "04.01.2026",
      mesaj: "Site güncellendi, yeni tasarım!",
      tip: "normal",
    },
    { tarih: "03.01.2026", mesaj: "Acil: Sunucu bakımda!", tip: "onemli" },
  ],
};
