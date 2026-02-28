// ============================================================
// app.js — Uygulama giriş noktası (bootstrap)
// ============================================================
import { sampleData, loadingData } from "./js/data.js";
import { loadDataFromSheets, USE_SHEETS } from "./js/api.js";
import {
  renderProfile,
  renderSocialLinks,
  renderVideos,
  renderServers,
  renderTopluEP,
  renderDuyurular,
  hideLoading,
} from "./js/ui.js";
import { initParticles } from "./js/particles.js";

/** Sheets gelmezsee / hata durumunda statik verilerle render et */
function renderFallback() {
  renderVideos(sampleData.youtubeVideos);
  renderServers(sampleData.activeServers);
  renderTopluEP(sampleData.topluEP);
  renderDuyurular(sampleData.duyurular);
}

async function initApp() {
  try {
    // Profil ve sosyal linkler statik veriden hızlıca göster
    renderProfile(sampleData.profile);
    renderSocialLinks(sampleData.socialLinks);

    if (USE_SHEETS) {
      // Sheets yüklenirken yükleniyor durumunu göster
      renderVideos(loadingData.youtubeVideos);
      renderServers(loadingData.activeServers);
      renderTopluEP(loadingData.topluEP);
      renderDuyurular(loadingData.duyurular);
    } else {
      renderFallback();
    }

    hideLoading();

    if (USE_SHEETS) {
      const sheetsData = await loadDataFromSheets(sampleData);
      if (sheetsData) {
        renderSocialLinks(sheetsData.socialLinks);
        renderVideos(sheetsData.youtubeVideos);
        renderServers(sheetsData.activeServers);
        renderTopluEP(sheetsData.topluEP);
        renderDuyurular(sheetsData.duyurular);
      } else {
        renderFallback();
      }
    }
  } catch (error) {
    console.error("Uygulama başlatılırken hata:", error);
    renderFallback();
    hideLoading();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initApp();
  initParticles();
});
