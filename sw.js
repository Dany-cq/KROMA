/* ==========================================================================
   KROMA — sw.js (Service Worker)
   Permite instalar KROMA como aplicación y que siga abriendo (con lo básico
   ya visitado) aunque no haya internet. Cachea el "app shell" al instalar y
   va guardando en caché las imágenes de productos a medida que se visitan.
   ========================================================================== */

const CACHE_VERSION = "kroma-v1";
const APP_SHELL = [
  "./",
  "index.html",
  "empresas.html",
  "nosotros.html",
  "contacto.html",
  "css/style.css",
  "js/data.js",
  "js/main.js",
  "js/carrito.js",
  "js/footer.js",
  "js/pwa.js",
  "manifest.json",
  "assets/icons/icon-192.png",
  "assets/icons/icon-512.png",
  "assets/img/logo.jpg"
];

/* ---------- Instalación: guarda el app shell ---------- */
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

/* ---------- Activación: borra cachés de versiones viejas ---------- */
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(nombres =>
      Promise.all(
        nombres.filter(n => n !== CACHE_VERSION).map(n => caches.delete(n))
      )
    )
  );
  self.clients.claim();
});

/* ---------- Fetch ----------
   - Páginas HTML: red primero, si falla usa la copia guardada (offline).
   - Todo lo demás (css, js, imágenes): caché primero, y si no está,
     lo pide a la red y lo guarda para la próxima vez. */
self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;

  const esNavegacion = req.mode === "navigate" || (req.headers.get("accept") || "").includes("text/html");

  if (esNavegacion) {
    event.respondWith(
      fetch(req)
        .then(res => {
          const copia = res.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(req, copia));
          return res;
        })
        .catch(() => caches.match(req).then(res => res || caches.match("index.html")))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(cacheado => {
      if (cacheado) return cacheado;
      return fetch(req).then(res => {
        if (res && res.status === 200 && res.type === "basic") {
          const copia = res.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(req, copia));
        }
        return res;
      }).catch(() => cacheado);
    })
  );
});
