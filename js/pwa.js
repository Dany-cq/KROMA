/* ==========================================================================
   KROMA — pwa.js
   Registra el service worker y muestra un botón "Instalar app" cuando el
   navegador lo permite (Chrome/Edge/Android). En iPhone no existe ese botón:
   se instala manualmente desde "Compartir → Agregar a inicio".
   ========================================================================== */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      /* si falla (por ejemplo abierto como archivo local sin servidor), no rompe la página */
    });
  });
}

let eventoInstalacionDiferido = null;

window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault();
  eventoInstalacionDiferido = event;
  mostrarBotonInstalar();
});

window.addEventListener("appinstalled", () => {
  eventoInstalacionDiferido = null;
  ocultarBotonInstalar();
});

function mostrarBotonInstalar() {
  document.querySelectorAll(".nav").forEach(nav => {
    if (nav.querySelector(".instalar-toggle")) return;
    const boton = document.createElement("button");
    boton.className = "btn btn-secundario btn-sm instalar-toggle";
    boton.innerHTML = `⬇ <span class="instalar-texto">Instalar app</span>`;
    const toggle = nav.querySelector(".nav-toggle");
    if (toggle) {
      nav.insertBefore(boton, toggle);
    } else {
      nav.appendChild(boton);
    }
    boton.addEventListener("click", async () => {
      if (!eventoInstalacionDiferido) return;
      eventoInstalacionDiferido.prompt();
      await eventoInstalacionDiferido.userChoice;
      eventoInstalacionDiferido = null;
      ocultarBotonInstalar();
    });
  });
}

function ocultarBotonInstalar() {
  document.querySelectorAll(".instalar-toggle").forEach(b => b.remove());
}
