// Firebase kullanımı için bu satırı aktif edin:
// import { firebaseConfig } from './firebase-config.js';

// Firebase SDK'yı CDN'den yükle
const loadFirebaseSDK = async () => {
  // Firebase modüllerini dinamik olarak yükle
  const { initializeApp } = await import(
    "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js"
  );
  const { getFirestore, collection, getDocs } = await import(
    "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js"
  );

  return { initializeApp, getFirestore, collection, getDocs };
};

// Firebase kullanımı için true yapın
const USE_FIREBASE = false;

// Sample data (Firebase olmadan test için)
const sampleData = {
  profile: {
    name: "Sercio",
    bio: "Bizi Takip Edin",
    image: "", // Boş bırakıldığında gizlenir
  },
  socialLinks: [
    {
      name: "YouTube",
      description: "Videoları takip et",
      url: "https://youtube.com/@mokrr",
      icon: "🎥",
      order: 1,
    },
    {
      name: "Discord",
      description: "Topluluğumuza katıl",
      url: "https://discord.gg/mokrr",
      icon: "💬",
      order: 2,
    },
    {
      name: "TikTok",
      description: "Kısa videolar",
      url: "https://tiktok.com/@mokrr",
      icon: "🎵",
      order: 3,
    },
    {
      name: "WhatsApp",
      description: "İletişim kanalımız",
      url: "https://wa.me/905xxxxxxxxx",
      icon: "📱",
      order: 4,
    },
  ],
  activeServers: [
    {
      name: "Azure2 MT2",
      logo: "https://via.placeholder.com/80x80/ff6b00/ffffff?text=AZ",
      url: "https://azure2mt2.com",
      status: "active",
    },
    {
      name: "Phoenix MT2",
      logo: "https://via.placeholder.com/80x80/ff4500/ffffff?text=PH",
      url: "https://phoenixmt2.com",
      status: "active",
    },
    {
      name: "Dragon MT2",
      logo: "https://via.placeholder.com/80x80/ffd700/000000?text=DR",
      url: "https://dragonmt2.com",
      status: "active",
    },
  ],
  footer: {
    text: "İletişim: info@mokrr.com",
  },
};

// DOM elementleri
const profileName = document.getElementById("profileName");
const profileBio = document.getElementById("profileBio");
const profileImage = document.getElementById("profileImage");
const socialLinksContainer = document.getElementById("socialLinks");
const serversGrid = document.getElementById("serversGrid");
const footerText = document.getElementById("footerText");
const loading = document.getElementById("loading");

// Profil bilgilerini render et
function renderProfile(profile) {
  profileName.textContent = profile.name;
  profileBio.textContent = profile.bio;
  if (profile.image) {
    profileImage.src = profile.image;
    profileImage.style.display = "block";
  }
}

// Sosyal medya linklerini render et
function renderSocialLinks(links) {
  socialLinksContainer.innerHTML = "";

  // Order'a göre sırala
  const sortedLinks = [...links].sort(
    (a, b) => (a.order || 0) - (b.order || 0)
  );

  sortedLinks.forEach((link) => {
    const linkElement = document.createElement("a");
    linkElement.href = link.url;
    linkElement.className = "social-link";
    linkElement.target = "_blank";
    linkElement.rel = "noopener noreferrer";

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

// Aktif sunucuları render et
function renderServers(servers) {
  serversGrid.innerHTML = "";

  servers.forEach((server) => {
    const card = document.createElement("a");
    card.href = server.url;
    card.className = "server-card";
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    card.innerHTML = `
            <div class="server-logo">
                <img src="${server.logo}" alt="${server.name}" onerror="this.src='https://via.placeholder.com/80x80/1a1a1a/ffd700?text=MT2'">
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

// Footer'ı render et
function renderFooter(footer) {
  footerText.textContent = footer.text;
}

// Loading'i gizle
function hideLoading() {
  setTimeout(() => {
    loading.classList.add("hidden");
  }, 500);
}

// Firebase'den veri çek
async function loadDataFromFirebase() {
  if (!USE_FIREBASE) {
    console.log("Firebase devre dışı, örnek veriler kullanılıyor");
    return sampleData;
  }

  try {
    // Firebase config'i import et
    const { firebaseConfig } = await import("./firebase-config.js");
    const { initializeApp, getFirestore, collection, getDocs } =
      await loadFirebaseSDK();

    // Firebase'i başlat
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // Firestore'dan verileri çek
    const profileSnapshot = await getDocs(collection(db, "profile"));
    const linksSnapshot = await getDocs(collection(db, "socialLinks"));
    const platformsSnapshot = await getDocs(collection(db, "platforms"));
    const settingsSnapshot = await getDocs(collection(db, "settings"));

    const data = {
      profile: profileSnapshot.docs[0]?.data() || sampleData.profile,
      socialLinks: linksSnapshot.docs.map((doc) => doc.data()),
      platforms: platformsSnapshot.docs.map((doc) => doc.data()),
      footer: settingsSnapshot.docs[0]?.data() || sampleData.footer,
    };

    return data;
  } catch (error) {
    console.warn(
      "Firebase yüklenirken hata oluştu, örnek veriler kullanılıyor:",
      error
    );
    return sampleData;
  }
}

// Uygulamayı başlat
async function initApp() {
  try {
    const data = await loadDataFromFirebase();

    renderProfile(data.profile);
    renderSocialLinks(data.socialLinks);
    renderServers(data.activeServers || sampleData.activeServers);
    renderFooter(data.footer);

    hideLoading();
  } catch (error) {
    console.error("Uygulama başlatılırken hata:", error);
    // Hata durumunda da örnek verileri göster
    renderProfile(sampleData.profile);
    renderSocialLinks(sampleData.socialLinks);
    renderServers(sampleData.activeServers);
    renderFooter(sampleData.footer);
    hideLoading();
  }
}

// ============ FIRE PARTICLES ANIMATION ============
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

  // Ateş kıvılcımları - yukarı doğru hareket eden
  class Spark {
    constructor() {
      this.reset();
    }

    reset() {
      // Ekranın alt kısmından başla
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + 10;
      this.size = Math.random() * 2.5 + 0.5;
      this.speedX = (Math.random() - 0.5) * 1.5;
      this.speedY = -(Math.random() * 2 + 1.5); // Yukarı doğru
      this.opacity = Math.random() * 0.8 + 0.2;
      this.life = Math.random() * 150 + 100;
      this.maxLife = this.life;
      // Ateş renkleri: sarı, turuncu, kırmızı
      const colors = [
        { r: 255, g: 215, b: 0 }, // Sarı
        { r: 255, g: 170, b: 0 }, // Turuncu
        { r: 255, g: 107, b: 0 }, // Koyu turuncu
        { r: 255, g: 69, b: 0 }, // Kırmızımsı
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

      // Core
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity})`;
      ctx.fill();

      // Glow
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${this.opacity * 0.2})`;
      ctx.fill();
    }
  }

  // Yavaş hareket eden korlar - atmosfer için
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

      // Titreşim efekti
      const pulseOpacity = this.opacity + Math.sin(this.pulse) * 0.15;

      if (this.y < -20) {
        this.reset();
      }

      return Math.max(0, pulseOpacity);
    }

    draw(pulseOpacity) {
      // Soft amber glow
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 180, 50, ${pulseOpacity})`;
      ctx.fill();

      // Outer glow
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
      spark.y = Math.random() * canvas.height; // İlk başta dağıt
      spark.life = Math.random() * spark.maxLife;
      sparks.push(spark);
    }

    for (let i = 0; i < emberCount; i++) {
      embers.push(new Ember());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Embers (arka planda)
    embers.forEach((ember) => {
      const pulseOpacity = ember.update();
      ember.draw(pulseOpacity);
    });

    // Sparks (ön planda)
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

// Sayfa yüklendiğinde uygulamayı başlat
document.addEventListener("DOMContentLoaded", () => {
  initApp();
  initParticles();
});
