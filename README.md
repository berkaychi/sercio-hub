# 🔥 Sercio - Metin2 İçerik Üreticisi Hub

Metin2 içerik üreticisi **Sercio** için tasarlanmış, sarı-siyah neon temalı sosyal medya hub sitesi.

![Version](https://img.shields.io/badge/version-v10-gold)
![HTML](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## 📋 İçindekiler

- [Özellikler](#-özellikler)
- [Ekran Yapısı](#-ekran-yapısı)
- [Kurulum](#-kurulum)
- [Yapılandırma](#️-yapılandırma)
- [Dosya Yapısı](#-dosya-yapısı)
- [Teknolojiler](#️-teknolojiler)
- [Versiyon Geçmişi](#-versiyon-geçmişi)

---

## ✨ Özellikler

### 🎨 Tema & Tasarım

- **Sarı-Siyah Neon Tema**: Metin2 ateş/oyun temasına uygun renk paleti
- **Glassmorphism Efektleri**: Modern cam efektli kartlar
- **Ateş Parçacık Animasyonu**: Canvas tabanlı kıvılcım ve kor efektleri
- **Neon Glow Efektleri**: Tüm interaktif elementlerde parlama animasyonları
- **Tam Responsive**: Mobil, tablet ve masaüstü uyumlu (4→2→1 sütun)
- **Erişilebilirlik**: `prefers-reduced-motion` desteği, ARIA etiketleri, skip-link

### 👤 Profil Bölümü

- Profil fotoğrafı (logo.jpeg)
- İsim ve bio bilgisi
- Merkezi konumlandırma
- Neon border animasyonu

### 🔗 Sosyal Medya Linkleri

| Platform  | Renk                  | İkon              |
| --------- | --------------------- | ----------------- |
| YouTube   | 🔴 Kırmızı (#FF0000) | FontAwesome       |
| Instagram | 🟣 Pembe (#E4405F)   | FontAwesome       |
| Facebook  | 🔵 Mavi (#1877F2)    | FontAwesome       |
| WhatsApp  | 🟢 Yeşil (#25D366)   | FontAwesome       |

- Her platform kendi orijinal renginde FontAwesome ikonu kullanır
- Hover efektleri ve geçiş animasyonları
- Sıralama `order` değeriyle kontrol edilir

### 📢 Duyurular Paneli

- Tip bazlı duyurular: Normal, Link, Canlı Yayın, Önemli, Etkinlik
- Her tip için farklı renk ve badge
- Tarih, saat ve aksiyon butonları
- Google Sheets'ten dinamik yükleme

### 🎮 Aktif Sunucular

- Otomatik favicon çekme (Google Favicon API)
- Aktif/pasif durum göstergesi (yeşil nokta)
- Sunucu adı
- Hover animasyonu

### 📺 YouTube Videoları

- Video thumbnail gösterimi (lazy loading)
- Otomatik başlık çekme (noembed API) + sessionStorage cache
- Play butonu overlay
- Grid düzeni

### 🎯 Bonuslu EP Sistemi

Metin2 oyuncuları için bonuslu EP çekimi duyuru paneli.

- Sol sütunda inline panel
- Aktif/Beklemede durumu
- Sunucu adı, tarih, saat bilgileri
- Discord'a yönlendirme butonu
- Glow animasyonu (aktifken)

### 💬 Discord Pop-up

- Sağ altta sabit pop-up banner (dc.png)
- Discord sunucusuna davet linki
- Slide-in animasyonu

### 🔥 Ateş Parçacık Animasyonu

- **Sparks (Kıvılcımlar)**: Alttan yukarı hareket eden parlak noktalar
- **Embers (Korlar)**: Yavaş hareket eden atmosferik parçacıklar
- Canvas tabanlı performanslı render
- Sarı, turuncu, kırmızı renk paleti
- `prefers-reduced-motion` desteği (hareket hassas kullanıcılarda devre dışı)

---

## 🖼️ Ekran Yapısı

```
┌──────────────────────────────────────────────────────────────┐
│                    ┌──────────┐                              │
│                    │  ⚡ LOGO │                              │
│                    │  Sercio  │                              │
│                    │ Bizi ... │                              │
│                    └──────────┘                              │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │ BONUSLU  │  │  🔗      │  │ 📢       │  │ 🎮 AKTİF │    │
│  │ EP PANELİ│  │ YouTube  │  │ Duyurular │  │ SUNUCULAR│    │
│  │  🔥      │  │ Instagram│  │  Canlı    │  │ Reborn   │    │
│  │ Sunucu   │  │ Facebook │  │  Etkinlik │  │ Truva    │    │
│  │ Tarih    │  │ WhatsApp │  │  Link     │  │          │    │
│  │ Discord  │  │          │  │           │  │          │    │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘    │
│                                                              │
│            ┌────────────────────────────────┐                │
│            │       📺 SON VİDEOLARIM        │                │
│            │  ┌────────┐┌────────┐┌────────┐│                │
│            │  │ vid 1  ││ vid 2  ││ vid 3  ││                │
│            │  └────────┘└────────┘└────────┘│                │
│            └────────────────────────────────┘                │
│                                                              │
│              © 2026 Sercio. Tüm hakları saklıdır.           │
│         🔥 ateş parçacıkları animasyonu 🔥                   │
│                                         ┌──────────┐        │
│                                         │ DC Popup │        │
│                                         └──────────┘        │
└──────────────────────────────────────────────────────────────┘
```

**4 Sütun Layout:**

1. **Sol Sütun**: Bonuslu EP paneli
2. **Orta Sütun**: Sosyal medya bağlantıları
3. **Duyurular Sütunu**: Duyurular paneli
4. **Sağ Sütun**: Aktif sunucular

---

## 🚀 Kurulum

### Gereksinimler

- Modern web tarayıcı (Chrome, Firefox, Edge, Safari)
- Yerel sunucu (opsiyonel, ES Modules için)

### Adımlar

1. **Projeyi indirin veya klonlayın**

   ```bash
   git clone <repo-url>
   cd seco
   ```

2. **Yerel sunucu başlatın** (3 seçenek)

   **Python ile:**

   ```bash
   python -m http.server 8000
   ```

   **Node.js ile:**

   ```bash
   npx serve
   ```

   **VS Code Live Server ile:**

   - index.html'e sağ tık
   - "Open with Live Server" seçin

3. **Tarayıcıda açın**
   ```
   http://localhost:8000
   ```

---

## ⚙️ Yapılandırma

### Veri Kaynağı

Proje iki veri kaynağını destekler:

1. **Google Sheets (varsayılan)**: `js/api.js` içindeki `USE_SHEETS = true` ile aktif. Videolar, sunucular, EP bilgileri ve duyurular Sheets'ten çekilir.
2. **Statik veri (fallback)**: Sheets erişilemezse `js/data.js` içindeki `sampleData` kullanılır.

### 👤 Profil Bilgileri

`js/data.js` dosyasında:

```javascript
profile: {
  name: "Sercio",
  bio: "Bizi Takip Edin",
  image: "logo.jpeg",
}
```

### 🔗 Sosyal Medya Linkleri

`js/data.js` dosyasında:

```javascript
socialLinks: [
  {
    name: "YouTube",
    description: "",
    url: "https://www.youtube.com/@Sercio-m4d",
    icon: "fa-brands fa-youtube",
    color: "#FF0000",
    order: 1,
  },
  // ...diğer linkler
]
```

### 🎮 Aktif Sunucular

```javascript
activeServers: [
  {
    name: "Reborn MT2",
    logo: "",          // Boş = otomatik favicon
    icon: "⚔️",       // Fallback emoji
    url: "https://reborn2.com",
    status: "active",  // "active" veya "inactive"
  },
]
```

### 📺 YouTube Videoları

```javascript
// Video ID'lerini YouTube URL'den alın
// https://youtube.com/watch?v=VIDEO_ID
youtubeVideos: ["2IlU7GLny2E", "1H2_z9JWjWo", "4Z5Qc-UsGjw"]
```

### 🎯 Bonuslu EP Ayarları

```javascript
topluEP: {
  active: true,                    // true = göster, false = beklemede
  serverName: "Reborn MT2",
  serverUrl: "https://discord.gg/sercio",
  date: "Bugün",
  time: "21:00",
  description: "Bonuslu EP çekimine katılmak için Discord sunucumuza gel!",
  buttonText: "Discord'a Katıl",
}
```

### 📢 Duyurular

```javascript
duyurular: [
  {
    tarih: "06.01.2026",
    mesaj: "Canlı yayın başlıyor!",
    tip: "yayin",        // normal | link | yayin | onemli | etkinlik
    link: "https://youtube.com/@Sercio-x3s/live",
    saat: "21:00",
  },
]
```

### Google Sheets Yapılandırması

`js/api.js` dosyasındaki `SHEETS_CONFIG` objesinde her sekme için CSV publish URL'leri tanımlıdır:

```javascript
export const SHEETS_CONFIG = {
  videolar: "https://docs.google.com/spreadsheets/d/e/.../pub?gid=0&output=csv",
  sunucular: "https://docs.google.com/spreadsheets/d/e/.../pub?gid=...&output=csv",
  topluEP: "https://docs.google.com/spreadsheets/d/e/.../pub?gid=...&output=csv",
  duyurular: "https://docs.google.com/spreadsheets/d/e/.../pub?gid=...&output=csv",
};

export const USE_SHEETS = true; // false = yalnızca statik veri
```

---

## 📁 Dosya Yapısı

```
seco/
├── index.html              # Ana HTML — SEO meta, yapı, CSS/JS bağlantıları
├── app.js                  # Uygulama giriş noktası (bootstrap)
│
├── js/
│   ├── data.js             # Statik/fallback veri (sampleData, loadingData)
│   ├── api.js              # Google Sheets CSV çekme, parse, URL doğrulama
│   ├── ui.js               # DOM render fonksiyonları (profil, linkler, videolar...)
│   └── particles.js        # Canvas ateş parçacık animasyonu
│
├── css/
│   ├── variables.css       # CSS custom properties (:root değişkenleri)
│   ├── base.css            # Reset, body, skip-link, focus, reduced-motion
│   ├── animations.css      # Tüm @keyframes tanımları
│   ├── layout.css          # Grid, container, sütun yapısı
│   ├── profile.css         # Profil bölümü
│   ├── social-links.css    # Sosyal medya bağlantı kartları
│   ├── discord.css         # Discord wrapper stilleri
│   ├── videos.css          # YouTube video kartları
│   ├── servers.css         # Aktif sunucu kartları
│   ├── duyurular.css       # Duyurular paneli
│   ├── ep-panel.css        # Bonuslu EP inline paneli
│   ├── toplu-ep.css        # Toplu EP butonu ve modal
│   ├── footer.css          # Footer
│   ├── utilities.css       # Loading, toast, Discord popup, smoke efekti
│   └── responsive.css      # Media queries (1200px, 768px, 400px)
│
├── logo.jpeg               # Profil logosu
├── dc.png                  # Discord pop-up banner görseli
├── CNAME                   # GitHub Pages custom domain
├── robots.txt              # Arama motoru yönergeleri
├── sitemap.xml             # Site haritası
├── .gitignore              # Git ignore kuralları
└── README.md               # Bu dosya
```

---

## 🛠️ Teknolojiler

### Frontend

| Teknoloji              | Kullanım                             |
| ---------------------- | ------------------------------------ |
| **HTML5**              | Semantik yapı, ARIA erişilebilirlik  |
| **CSS3**               | Modüler stiller, animasyonlar, glassmorphism |
| **Vanilla JavaScript** | ES Modules, DOM manipülasyonu        |
| **Canvas API**         | Ateş parçacık animasyonu             |

### Veri Kaynağı

| Kaynak                 | Kullanım                              |
| ---------------------- | ------------------------------------- |
| **Google Sheets CSV**  | Videolar, sunucular, EP, duyurular    |
| **Statik JS (fallback)** | Sheets erişilemezse yedek veri      |

### API'ler

| API                    | Kullanım                 |
| ---------------------- | ------------------------ |
| **Google Favicon API** | Otomatik sunucu logoları |
| **noembed API**        | YouTube video başlıkları |

### Fontlar

- **Poppins** (Google Fonts) — 300, 400, 600, 700 ağırlıkları

### CSS Özellikleri

- CSS Custom Properties (`:root` değişkenleri)
- Flexbox & CSS Grid (4 sütun responsive)
- `backdrop-filter: blur()` (Glassmorphism)
- `@keyframes` animasyonları
- Media queries (1200px, 768px, 400px breakpoint'ler)
- `prefers-reduced-motion` desteği
- `box-shadow` neon efektleri

### JavaScript Özellikleri

- ES6+ Modules (`import` / `export`)
- Async/await + Promise.all
- Fetch API + AbortController (10s timeout)
- sessionStorage caching
- Canvas 2D rendering
- URL doğrulama (XSS koruması)

### Güvenlik

- SRI (Subresource Integrity) — FontAwesome CDN
- `rel="noopener noreferrer"` — tüm external linkler
- URL sanitization — Google Sheets verileri

---

## 🎨 Renk Paleti

### Ana Renkler

```css
:root {
  --primary-yellow: #ffd700;
  --secondary-yellow: #ffaa00;
  --neon-glow: #ffcc00;
  --dark-bg: #050505;
  --card-bg: rgba(20, 20, 20, 0.6);
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
}
```

### Sosyal Medya Renkleri

| Platform  | Renk       | Hex       |
| --------- | ---------- | --------- |
| YouTube   | 🔴 Kırmızı | `#FF0000` |
| Instagram | 🟣 Pembe   | `#E4405F` |
| Facebook  | 🔵 Mavi    | `#1877F2` |
| WhatsApp  | 🟢 Yeşil   | `#25D366` |
| Discord   | 🔵 İndigo  | `#5865F2` |

---

## 📜 Versiyon Geçmişi

| Versiyon | Tarih      | Değişiklikler                                          |
| -------- | ---------- | ------------------------------------------------------ |
| **v1**   | -          | İlk versiyon, temel yapı                               |
| **v2**   | -          | Layout düzenlemeleri                                   |
| **v3**   | -          | Discord widget eklendi                                 |
| **v4**   | -          | YouTube videoları eklendi                              |
| **v5**   | -          | 3 sütun layout, aktif sunucular                        |
| **v6**   | -          | Discord özel kart tasarımı (banner)                    |
| **v7**   | -          | SVG logolar, Instagram eklendi                         |
| **v8**   | -          | Logo renkleri + sarı neon kutu                         |
| **v9**   | 28.12.2026 | Toplu EP sistemi, sarı-siyah tema uyumu                |
| **v10**  | 09.03.2026 | Modüler CSS/JS, Google Sheets, duyurular, a11y, güvenlik |

---

## 💡 İpuçları

### Yeni Sosyal Medya Eklemek

1. `js/data.js` içindeki `sampleData.socialLinks` dizisine yeni obje ekleyin
2. FontAwesome ikon sınıfını [FontAwesome](https://fontawesome.com/icons) 'dan bulun
3. `order` değeri ile sıralamayı ayarlayın

### Yeni Sunucu Eklemek

1. `js/data.js` içindeki `sampleData.activeServers` dizisine yeni obje ekleyin
2. Veya Google Sheets'teki "sunucular" sekmesine satır ekleyin
3. Logo otomatik olarak Google Favicon API'den çekilir

### Bonuslu EP Kapatmak

```javascript
topluEP: {
  active: false,  // Panel "Beklemede" moduna geçer
  // ...
}
```

### Performans

- Ateş animasyonu Canvas API kullanır (GPU hızlandırmalı)
- Parçacık sayısı optimize edilmiş (40 kıvılcım, 25 kor)
- Video başlıkları sessionStorage ile cache'lenir
- YouTube thumbnail'leri lazy loading ile yüklenir
- CSS dosyaları paralel `<link>` etiketleriyle yüklenir (@import waterfall yok)
- FontAwesome non-blocking yüklenir (`media="print"` + `onload`)

---

## 📝 Notlar

- Veriler öncelikle Google Sheets'ten çekilir, erişilemezse `js/data.js` fallback olarak kullanılır
- `js/api.js` içinde `USE_SHEETS = false` yaparak Sheets'i devre dışı bırakabilirsiniz
- Mobil cihazlarda 4 sütun layout tek sütuna dönüşür
- `prefers-reduced-motion` tercihli kullanıcılarda tüm animasyonlar devre dışı kalır
- HTTPS olmadan bazı API'ler çalışmayabilir (yerel sunucu kullanın)

---

## 👨‍💻 Geliştirici

Bu proje **Sercio** için özel olarak tasarlanmıştır.

---

## 📄 Lisans

Bu proje özel kullanım içindir. Tüm hakları saklıdır.

---

<div align="center">

**🔥 Sercio Hub v10 🔥**

_Metin2 İçerik Üreticisi_

</div>
