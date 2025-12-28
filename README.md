# 🔥 Sercio - Metin2 İçerik Üreticisi Hub

Metin2 içerik üreticisi **Sercio** için tasarlanmış, sarı-siyah neon temalı sosyal medya hub sitesi.

![Version](https://img.shields.io/badge/version-v9-gold)
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
- **Tam Responsive**: Mobil, tablet ve masaüstü uyumlu

### 👤 Profil Bölümü

- Profil fotoğrafı (logo.jpeg)
- İsim ve bio bilgisi
- Merkezi konumlandırma
- Neon border animasyonu

### 🔗 Sosyal Medya Linkleri

| Platform  | Logo Rengi           | Açıklama                 |
| --------- | -------------------- | ------------------------ |
| YouTube   | 🔴 Kırmızı (#FF0000) | SVG logo, sarı neon kutu |
| WhatsApp  | 🟢 Yeşil (#25D366)   | SVG logo, sarı neon kutu |
| Instagram | 🟣 Pembe (#E4405F)   | SVG logo, sarı neon kutu |

- Her platform kendi orijinal renginde SVG logo kullanır
- Hover efektleri ve geçiş animasyonları

### 💬 Discord Kartı

- Özel banner resmi (logo2.jpeg)
- Discord sunucu bilgileri
- "Sunucuya Katıl" butonu
- Glassmorphism tasarım

### 🎮 Aktif Sunucular

- Otomatik favicon çekme (Google Favicon API)
- Aktif/pasif durum göstergesi (yeşil nokta)
- Sunucu adı ve "Aktif" badge
- Hover'da "Sunucuya Git →" animasyonu

### 📺 YouTube Videoları

- Video thumbnail gösterimi
- Otomatik başlık çekme (noembed API)
- Play butonu overlay
- 3 video grid düzeni

### 🎯 Toplu EP Sistemi

Metin2 oyuncuları için toplu EP (Experience Point) çekimi duyuru sistemi.

**Floating Button:**

- Sağ üstte sabit konum
- Pulse animasyonu
- "🔥 Toplu EP" yazısı
- Yeşil "canlı" göstergesi

**Modal Popup:**

- Sunucu adı
- Tarih ve saat bilgisi
- Açıklama metni
- Discord'a yönlendirme butonu
- Açma/kapama animasyonları

**Kontrol:**

```javascript
topluEP: {
  active: true,  // true = göster, false = gizle
  // ...
}
```

### 🔥 Ateş Parçacık Animasyonu

- **Sparks (Kıvılcımlar)**: Alttan yukarı hareket eden parlak noktalar
- **Embers (Korlar)**: Yavaş hareket eden atmosferik parçacıklar
- Canvas tabanlı performanslı render
- Sarı, turuncu, kırmızı renk paleti

---

## 🖼️ Ekran Yapısı

```
┌─────────────────────────────────────────────────────────┐
│                                              [🔥Toplu EP]│
│                                                         │
│                    ┌──────────┐                         │
│                    │  ⚡ LOGO │                         │
│                    │  Sercio  │                         │
│                    │ Bizi ... │                         │
│                    └──────────┘                         │
│                                                         │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐     │
│  │   DISCORD   │  │   YOUTUBE   │  │    AKTİF    │     │
│  │    KART     │  │   WHATSAPP  │  │  SUNUCULAR  │     │
│  │   banner    │  │  INSTAGRAM  │  │  Reborn MT2 │     │
│  │ Sunucuya    │  │             │  │  TruvaMT2   │     │
│  │   Katıl     │  │             │  │             │     │
│  └─────────────┘  └─────────────┘  └─────────────┘     │
│                                                         │
│              ┌───────────────────────┐                  │
│              │    YOUTUBE VİDEOLARI   │                  │
│              │  ┌─────┐┌─────┐┌─────┐│                  │
│              │  │vid 1││vid 2││vid 3││                  │
│              │  └─────┘└─────┘└─────┘│                  │
│              └───────────────────────┘                  │
│                                                         │
│              İletişim: info@sercio.com                  │
│         🔥 ateş parçacıkları animasyonu 🔥              │
└─────────────────────────────────────────────────────────┘
```

**3 Sütun Layout:**

1. **Sol Sütun**: Discord kartı
2. **Orta Sütun**: Sosyal medya linkleri
3. **Sağ Sütun**: Aktif sunucular

---

## 🚀 Kurulum

### Gereksinimler

- Modern web tarayıcı (Chrome, Firefox, Edge, Safari)
- Yerel sunucu (opsiyonel, CORS için)

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

Tüm ayarlar `app.js` dosyasındaki `sampleData` objesi içinde yapılır.

### 👤 Profil Bilgileri

```javascript
profile: {
  name: "Sercio",           // Görünen isim
  bio: "Bizi Takip Edin",   // Alt yazı
  image: "logo.jpeg",       // Profil fotoğrafı
}
```

### 🔗 Sosyal Medya Linkleri

```javascript
socialLinks: [
  {
    name: "YouTube",
    description: "Videoları takip et",
    url: "https://youtube.com/@mokrr",
    icon: "<svg>...</svg>", // SVG logo kodu
    color: "#FF0000", // Logo rengi
    order: 1, // Görüntülenme sırası
  },
  // ...diğer linkler
];
```

### 🎮 Aktif Sunucular

```javascript
activeServers: [
  {
    name: "Reborn MT2", // Sunucu adı
    logo: "", // Logo URL (boş = otomatik favicon)
    icon: "⚔️", // Fallback emoji
    url: "https://reborn2.com", // Sunucu web sitesi
    status: "active", // "active" veya "inactive"
  },
];
```

### 📺 YouTube Videoları

```javascript
// Video ID'lerini YouTube URL'den alın
// https://youtube.com/watch?v=VIDEO_ID
youtubeVideos: ["2IlU7GLny2E", "1H2_z9JWjWo", "4Z5Qc-UsGjw"];
```

### 💬 Discord Ayarları

```javascript
discord: {
  name: "Sercio Discord",              // Sunucu adı
  description: "Topluluğumuza katıl!", // Açıklama
  inviteLink: "https://discord.gg/sercio", // Davet linki
  banner: "logo2.jpeg",                // Banner resmi
}
```

### 🎯 Toplu EP Ayarları

```javascript
topluEP: {
  active: true,                    // true = göster, false = gizle
  serverName: "Reborn MT2",        // Hangi sunucuda
  serverUrl: "https://discord.gg/sercio", // Yönlendirme linki
  date: "Bugün",                   // Tarih
  time: "21:00",                   // Saat
  description: "Toplu EP çekimine katılmak için Discord sunucumuza gel!",
  buttonText: "Discord'a Katıl",   // Buton yazısı
}
```

### 📝 Footer

```javascript
footer: {
  text: "İletişim: info@sercio.com";
}
```

---

## 🔥 Firebase Entegrasyonu (Opsiyonel)

Verileri Firebase Firestore'dan çekmek için:

### 1. Firebase Projesi Oluşturun

1. [Firebase Console](https://console.firebase.google.com/) 'a gidin
2. Yeni proje oluşturun
3. Firestore Database'i aktif edin

### 2. Config Dosyası Oluşturun

`firebase-config.js` dosyası oluşturun:

```javascript
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

### 3. Firebase'i Aktif Edin

`app.js` dosyasında:

```javascript
const USE_FIREBASE = true; // false -> true
```

---

## 📁 Dosya Yapısı

```
seco/
├── index.html          # Ana HTML dosyası
│                       # - Meta taglar, SEO
│                       # - 3 sütun layout
│                       # - Toplu EP modal
│
├── style.css           # Tüm stiller (~1500 satır)
│                       # - CSS değişkenleri
│                       # - Responsive tasarım
│                       # - Animasyonlar
│                       # - Glassmorphism
│
├── app.js              # JavaScript mantığı (~570 satır)
│                       # - Veri yönetimi
│                       # - DOM render fonksiyonları
│                       # - Ateş animasyonu
│                       # - Firebase entegrasyonu
│
├── logo.jpeg           # Ana profil logosu
├── logo2.jpeg          # Discord banner resmi
├── README.md           # Bu dosya
└── firebase-config.js  # (Opsiyonel) Firebase ayarları
```

---

## 🛠️ Teknolojiler

### Frontend

| Teknoloji              | Kullanım                             |
| ---------------------- | ------------------------------------ |
| **HTML5**              | Semantik yapı                        |
| **CSS3**               | Stiller, animasyonlar, glassmorphism |
| **Vanilla JavaScript** | DOM manipülasyonu, API çağrıları     |
| **Canvas API**         | Ateş parçacık animasyonu             |

### API'ler

| API                    | Kullanım                 |
| ---------------------- | ------------------------ |
| **Google Favicon API** | Otomatik sunucu logoları |
| **noembed API**        | YouTube video başlıkları |

### Fontlar

- **Cinzel** - Başlıklar (oyun teması)
- **Poppins** - Genel metin

### CSS Özellikleri

- CSS Variables (`:root` değişkenleri)
- Flexbox & CSS Grid
- `backdrop-filter: blur()` (Glassmorphism)
- `@keyframes` animasyonları
- Media queries (responsive)
- `box-shadow` neon efektleri

### JavaScript Özellikleri

- ES6+ syntax
- Async/await
- Fetch API
- Template literals
- Canvas 2D rendering
- Event delegation

---

## 🎨 Renk Paleti

### Ana Renkler

```css
:root {
  --primary-yellow: #ffd700; /* Ana sarı - neon */
  --secondary-yellow: #ffaa00; /* İkincil sarı */
  --bg-dark: #0a0a0a; /* Arka plan */
  --card-bg: rgba(20, 20, 20, 0.9); /* Kart arka planı */
}
```

### Sosyal Medya Renkleri

| Platform  | Renk       | Hex       |
| --------- | ---------- | --------- |
| YouTube   | 🔴 Kırmızı | `#FF0000` |
| WhatsApp  | 🟢 Yeşil   | `#25D366` |
| Instagram | 🟣 Pembe   | `#E4405F` |
| Discord   | 🔵 Mavi    | `#5865F2` |

### Ateş Renkleri (Animasyon)

```javascript
const colors = [
  { r: 255, g: 215, b: 0 }, // Sarı
  { r: 255, g: 170, b: 0 }, // Turuncu
  { r: 255, g: 107, b: 0 }, // Koyu turuncu
  { r: 255, g: 69, b: 0 }, // Kırmızımsı
];
```

---

## 📜 Versiyon Geçmişi

| Versiyon | Tarih      | Değişiklikler                           |
| -------- | ---------- | --------------------------------------- |
| **v1**   | -          | İlk versiyon, temel yapı                |
| **v2**   | -          | Layout düzenlemeleri                    |
| **v3**   | -          | Discord widget eklendi                  |
| **v4**   | -          | YouTube videoları eklendi               |
| **v5**   | -          | 3 sütun layout, aktif sunucular         |
| **v6**   | -          | Discord özel kart tasarımı (banner)     |
| **v7**   | -          | SVG logolar, Instagram eklendi          |
| **v8**   | -          | Logo renkleri + sarı neon kutu          |
| **v9**   | 28.12.2024 | Toplu EP sistemi, sarı-siyah tema uyumu |

---

## 💡 İpuçları

### Yeni Sosyal Medya Eklemek

1. `sampleData.socialLinks` dizisine yeni obje ekleyin
2. SVG logosunu [Simple Icons](https://simpleicons.org/) 'dan alabilirsiniz
3. `order` değeri ile sıralamayı ayarlayın

### Yeni Sunucu Eklemek

1. `sampleData.activeServers` dizisine yeni obje ekleyin
2. Logo otomatik olarak Google Favicon API'den çekilir
3. `status: "active"` yeşil nokta gösterir

### Toplu EP Kapatmak

```javascript
topluEP: {
  active: false,  // Butonu ve modalı gizler
  // ...
}
```

### Performans

- Ateş animasyonu Canvas API kullanır (GPU hızlandırmalı)
- Parçacık sayısı optimize edilmiş (40 kıvılcım, 25 kor)
- Lazy loading: Video başlıkları asenkron yüklenir

---

## 📝 Notlar

- Tüm veriler `app.js` içindeki `sampleData` objesinden çekilir
- Firebase entegrasyonu hazır ama varsayılan olarak kapalı (`USE_FIREBASE = false`)
- Mobil cihazlarda 3 sütun layout tek sütuna dönüşür
- HTTPS olmadan bazı API'ler çalışmayabilir (yerel sunucu kullanın)

---

## 👨‍💻 Geliştirici

Bu proje **Sercio** için özel olarak tasarlanmıştır.

---

## 📄 Lisans

Bu proje özel kullanım içindir. Tüm hakları saklıdır.

---

<div align="center">

**🔥 Sercio Hub v9 🔥**

_Metin2 İçerik Üreticisi_

</div>
