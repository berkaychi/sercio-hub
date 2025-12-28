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
  platforms: [
    { name: "YouTube", icon: "🎥", url: "https://youtube.com/@mokrr" },
    { name: "Discord", icon: "💬", url: "https://discord.gg/mokrr" },
    { name: "Twitch", icon: "📺", url: "https://twitch.tv/mokrr" },
    { name: "Kick", icon: "⚡", url: "https://kick.com/mokrr" },
    { name: "TikTok", icon: "🎵", url: "https://tiktok.com/@mokrr" },
    { name: "Instagram", icon: "📸", url: "https://instagram.com/mokrr" },
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
const platformGrid = document.getElementById("platformGrid");
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

// Platform kartlarını render et
function renderPlatforms(platforms) {
  platformGrid.innerHTML = "";

  platforms.forEach((platform) => {
    const card = document.createElement("a");
    card.href = platform.url;
    card.className = "platform-card";
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    card.innerHTML = `
            <div class="platform-icon">${platform.icon}</div>
            <h4>${platform.name}</h4>
        `;

    platformGrid.appendChild(card);
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
    renderPlatforms(data.platforms);
    renderFooter(data.footer);

    hideLoading();
  } catch (error) {
    console.error("Uygulama başlatılırken hata:", error);
    // Hata durumunda da örnek verileri göster
    renderProfile(sampleData.profile);
    renderSocialLinks(sampleData.socialLinks);
    renderPlatforms(sampleData.platforms);
    renderFooter(sampleData.footer);
    hideLoading();
  }
}

// Sayfa yüklendiğinde uygulamayı başlat
document.addEventListener("DOMContentLoaded", initApp);
