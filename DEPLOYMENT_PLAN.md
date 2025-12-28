# 🚀 Sercio Hub - Deployment Planı

## 📋 Genel Bakış

Bu doküman, Sercio Hub sitesinin GitHub Pages üzerinde deploy edilmesi ve içerik yönetimi için hazırlanmıştır.

---

## 🏗️ Yapı

```
seco/
├── index.html          # Ana sayfa
├── style.css           # Stiller
├── app.js              # Ana uygulama kodu (sabit)
├── data.json           # Sık değişen veriler (YouTube kanalı, videolar)
├── firebase-config.js  # Firebase (opsiyonel, şimdilik kullanılmıyor)
└── README.md           # Proje açıklaması
```

---

## 📦 Deploy Adımları

### 1. GitHub Repository Oluşturma

```bash
# Repo sahibinin yapacakları:
1. GitHub'da yeni repo oluştur (örn: "sercio-hub" veya "hub")
2. Repo ayarları > Settings > Pages
3. Source: "Deploy from a branch"
4. Branch: "main" / root
5. Save
```

### 2. Dosyaları Yükleme

**Seçenek A - Git ile:**

```bash
git clone https://github.com/KULLANICI/REPO.git
# Dosyaları kopyala
git add -A
git commit -m "Initial deploy"
git push origin main
```

**Seçenek B - GitHub Web:**

1. Repo sayfasında "Add file" > "Upload files"
2. Tüm dosyaları sürükle-bırak
3. "Commit changes"

### 3. Site Adresi

Deploy sonrası site şu adreste yayında olacak:

```
https://KULLANICI.github.io/REPO-ADI/
```

---

## 🔄 İçerik Güncelleme Sistemi

### data.json Yapısı (Oluşturulacak)

```json
{
  "youtubeChannel": "https://youtube.com/@KANAL_ADI",
  "videoIds": ["VIDEO_ID_1", "VIDEO_ID_2", "VIDEO_ID_3"],
  "lastUpdated": "2025-12-28"
}
```

### Güncelleme Adımları

**Yeni Video Eklemek:**

1. GitHub'da `data.json` dosyasını aç
2. "Edit" (kalem ikonu) tıkla
3. `videoIds` dizisine yeni ID ekle:
   ```json
   "videoIds": [
     "YENI_VIDEO_ID",  // ← Yeni video (en üste)
     "VIDEO_ID_1",
     "VIDEO_ID_2"
   ]
   ```
4. "Commit changes" tıkla
5. ~1-2 dakika içinde site güncellenir

**YouTube Kanalı Değiştirmek:**

1. `data.json` aç
2. `youtubeChannel` değerini güncelle
3. Commit et

---

## 🌐 Özel Domain (Opsiyonel)

### Adımlar:

1. Domain satın al (Namecheap, GoDaddy, Cloudflare)
2. GitHub repo > Settings > Pages > Custom domain
3. Domain adını gir (örn: `sercio.com`)
4. DNS ayarlarını yap:

**A Kayıtları:**

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**veya CNAME:**

```
KULLANICI.github.io
```

5. "Enforce HTTPS" işaretle (ücretsiz SSL)

---

## ✅ Yapılacaklar Listesi

- [ ] `data.json` dosyası oluştur
- [ ] `app.js`'i data.json'dan veri çekecek şekilde güncelle
- [ ] GitHub repo oluştur (repo sahibi)
- [ ] Dosyaları yükle
- [ ] GitHub Pages aktif et
- [ ] Test et
- [ ] (Opsiyonel) Özel domain bağla

---

## 📱 İçerik Yönetimi Özeti

| Değişiklik          | Nasıl Yapılır                    | Süre    |
| ------------------- | -------------------------------- | ------- |
| Yeni video          | data.json'a ID ekle              | ~2 dk   |
| Kanal değiştir      | data.json güncelle               | ~2 dk   |
| Sosyal medya        | app.js'te sampleData güncelle    | ~5 dk   |
| Sunucu ekle/çıkar   | app.js'te activeServers güncelle | ~5 dk   |
| Tasarım değişikliği | style.css düzenle                | Değişir |

---

## 🔐 Güvenlik

- GitHub hesabı = Site yönetimi yetkisi
- Sadece repo'ya erişimi olan kişiler düzenleme yapabilir
- Her değişiklik git geçmişinde kayıtlı (geri alınabilir)
- HTTPS otomatik (GitHub Pages)

---

## 📞 Destek

Sorun yaşanırsa:

1. GitHub Actions > Son deploy'u kontrol et
2. Browser console'da hata var mı bak (F12)
3. data.json formatı doğru mu kontrol et (JSON validator)

---

_Son güncelleme: 28 Aralık 2025_
