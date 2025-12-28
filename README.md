# MokRR Social Hub 🌟

Modern, responsive bir sosyal medya hub sayfası. Sarı-siyah temalı şık tasarım.

## 🚀 Özellikler

- ✨ Modern sarı-siyah gradient tasarım
- 🎨 Smooth animasyonlar ve hover efektleri
- 📱 Tamamen responsive (mobil uyumlu)
- 🔥 Firebase entegrasyonu (Firestore)
- ⚡ Vanilla JavaScript (framework yok)
- 🎯 SEO dostu yapı

## 📦 Kurulum

### 1. Dosyaları İndirin

Projedeki tüm dosyalar hazır.

### 2. Firebase Kurulumu

#### Firebase Console'da Proje Oluşturma:

1. [Firebase Console](https://console.firebase.google.com/) 'a gidin
2. "Add Project" butonuna tıklayın
3. Proje adı verin (örn: mokrr-social-hub)
4. Google Analytics'i istediğiniz gibi ayarlayın
5. "Create Project" butonuna tıklayın

#### Firebase Config Alma:

1. Sol menüden "Project Settings" (⚙️) tıklayın
2. "General" sekmesinde "Your apps" bölümüne gidin
3. Web icon'una (</>) tıklayın
4. App nickname verin ve "Register app" tıklayın
5. `firebaseConfig` objesi görünecek

#### Config'i Projeye Ekleyin:

`firebase-config.js` dosyasını açın ve bilgileri yapıştırın:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123",
};
```

#### Firestore Database Oluşturma:

1. Sol menüden "Firestore Database" seçin
2. "Create database" butonuna tıklayın
3. "Start in **test mode**" seçin (geliştirme için)
4. Location seçin (europe-west için Belgium)
5. "Enable" tıklayın

#### Koleksiyonları Oluşturma:

**1. Profile Koleksiyonu:**

```
Collection: profile
Document ID: main
Fields:
  - name: "MokRR" (string)
  - bio: "Bizi Takip Edin" (string)
  - image: "" (string) - Boş bırakabilirsiniz
```

**2. SocialLinks Koleksiyonu:**

```
Collection: socialLinks
Document ID: (Auto-generate)
Fields:
  - name: "YouTube" (string)
  - description: "Videoları takip et" (string)
  - url: "https://youtube.com/@mokrr" (string)
  - icon: "🎥" (string)
  - order: 1 (number)

// Diğer linkler için de aynı şekilde document ekleyin
```

**3. Platforms Koleksiyonu:**

```
Collection: platforms
Document ID: (Auto-generate)
Fields:
  - name: "YouTube" (string)
  - icon: "🎥" (string)
  - url: "https://youtube.com/@mokrr" (string)

// Diğer platformlar için de aynı şekilde
```

**4. Settings Koleksiyonu:**

```
Collection: settings
Document ID: footer
Fields:
  - text: "İletişim: info@mokrr.com" (string)
```

### 3. Yerel Test

Basit bir HTTP sunucusu çalıştırın:

```bash
# Python 3 varsa:
python -m http.server 8000

# Veya Node.js http-server:
npx http-server
```

Tarayıcıda `http://localhost:8000` adresini açın.

### 4. Firebase Hosting ile Deploy

```bash
# Firebase CLI kur
npm install -g firebase-tools

# Firebase'e login
firebase login

# Projeyi başlat
firebase init

# Hosting seç
# Public directory: . (nokta)
# Single-page app: No

# Deploy et
firebase deploy
```

## 🎨 Tasarımı Özelleştirme

### Renkler

`style.css` dosyasındaki CSS değişkenlerini düzenleyin:

```css
:root {
  --primary-yellow: #ffd700;
  --secondary-yellow: #ffc107;
  --dark-bg: #0a0a0a;
  /* ... */
}
```

### İçerik

Firebase Console'dan Firestore'daki verileri düzenleyebilirsiniz.

## 📱 Responsive Tasarım

- Desktop: 600px geniş container
- Tablet: Uyumlu grid yapısı
- Mobil: Optimize edilmiş boyutlar

## 🔧 Özelleştirme İpuçları

1. **Emoji yerine SVG icon kullanmak:**

   - Font Awesome veya Iconify ekleyin
   - Icon string'lerini değiştirin

2. **Profil resmi eklemek:**

   - Firebase Storage kullanın
   - Veya direkt URL verin

3. **Analytics eklemek:**

   - Firebase Analytics otomatik gelir
   - Google Analytics 4 ekleyebilirsiniz

4. **Admin panel:**
   - Firebase Authentication ekleyin
   - Admin sayfası oluşturun

## 📄 Dosya Yapısı

```
seco/
├── index.html          # Ana HTML
├── style.css           # Stil dosyası
├── app.js              # Ana JavaScript
├── firebase-config.js  # Firebase ayarları
└── README.md           # Bu dosya
```

## 🎯 Örnek Veri

Proje Firebase olmadan da çalışır. `app.js` içinde örnek veriler var.

## 🐛 Sorun Giderme

**Firebase çalışmıyor:**

- Console'da hata var mı kontrol edin
- firebase-config.js doğru dolduruldu mu?
- Firestore rules "test mode"da mı?

**Sayfa açılmıyor:**

- HTTP sunucu çalışıyor mu?
- file:// protokolü yerine http:// kullanın

## 📝 Lisans

MIT License - İstediğiniz gibi kullanabilirsiniz!
