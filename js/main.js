/* ==========================================================================
   BELLA BOLIVIA — main.js
   Toda la interactividad del sitio: bienvenida, menú móvil, carruseles,
   filtros de empresas, modal de empresa (misión/visión -> productos ->
   reseñas -> visita), newsletter y formulario de contacto.
   Este archivo se comparte en todas las páginas; cada función revisa que
   el elemento exista antes de usarlo, para no romper páginas que no lo usan.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  inicializarNavMovil();
  inicializarBienvenida();
  inicializarCarruselDestacados();
  inicializarPaginaEmpresas();
  inicializarNewsletter();
  inicializarFormularioContacto();
  marcarEnlaceActivo();
});

/* ---------- Utilidad: toast de confirmación ---------- */
function mostrarToast(mensaje) {
  let toast = document.querySelector(".toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `✅ &nbsp; ${mensaje}`;
  requestAnimationFrame(() => toast.classList.add("visible"));
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove("visible"), 3800);
}

/* ---------- Menú móvil ---------- */
function inicializarNavMovil() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => links.classList.toggle("abierto"));
}

/* ---------- Marcar el link de navegación activo ---------- */
function marcarEnlaceActivo() {
  const actual = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(a => {
    if (a.getAttribute("href") === actual) a.classList.add("activo");
  });
}

/* ==========================================================================
   BIENVENIDA — modal de entrada mostrando misión/visión de la plataforma
   ========================================================================== */
function inicializarBienvenida() {
  const overlay = document.getElementById("modal-bienvenida");
  if (!overlay) return;
  overlay.classList.add("visible");
  document.body.style.overflow = "hidden";

  const cerrar = () => {
    overlay.classList.remove("visible");
    document.body.style.overflow = "";
  };
  overlay.querySelectorAll("[data-cerrar-bienvenida]").forEach(btn =>
    btn.addEventListener("click", cerrar)
  );
  overlay.addEventListener("click", e => { if (e.target === overlay) cerrar(); });
}

/* ==========================================================================
   CARRUSEL DE PRODUCTOS DESTACADOS (página de inicio)
   ========================================================================== */
function inicializarCarruselDestacados() {
  const pista = document.getElementById("pista-destacados");
  if (!pista) return;

  // Reunimos hasta 10 productos de distintas empresas / departamentos
  const destacados = [];
  Object.keys(EMPRESAS).forEach(depto => {
    EMPRESAS[depto].slice(0, 4).forEach(emp => {
      destacados.push({ depto, empresa: emp, producto: emp.productos[0] });
    });
  });

  pista.innerHTML = destacados.map((d, i) => `
    <article class="producto-card-mini">
      <div class="foto"><img src="${d.producto.imagen}" alt="${d.producto.nombre}" loading="lazy"></div>
      <div class="info">
        <span class="empresa-tag">${d.empresa.icono} ${d.empresa.nombre}</span>
        <h4>${d.producto.nombre}</h4>
        <span class="precio">Bs. ${d.producto.precio}</span>
        <button class="btn btn-terracota btn-sm" style="margin-top:8px;" data-agregar-destacado="${i}">🛒 Agregar</button>
      </div>
    </article>
  `).join("");

  pista.querySelectorAll("[data-agregar-destacado]").forEach(btn => {
    btn.addEventListener("click", () => {
      const d = destacados[Number(btn.dataset.agregarDestacado)];
      if (typeof window.agregarAlCarrito === "function") {
        window.agregarAlCarrito({
          id: `${d.empresa.id}__0`,
          nombre: d.producto.nombre,
          empresa: d.empresa.nombre,
          precio: d.producto.precio,
          imagen: d.producto.imagen
        });
      }
    });
  });

  const btnPrev = document.getElementById("destacados-prev");
  const btnNext = document.getElementById("destacados-next");
  const paso = 282;
  btnPrev && btnPrev.addEventListener("click", () => pista.scrollBy({ left: -paso * 2, behavior: "smooth" }));
  btnNext && btnNext.addEventListener("click", () => pista.scrollBy({ left: paso * 2, behavior: "smooth" }));
}

/* ==========================================================================
   VALORACIONES — puntuación de cada empresa (reseñas base + votos guardados)
   ========================================================================== */
function leerValoraciones() {
  return JSON.parse(localStorage.getItem("kroma_valoraciones") || "{}");
}
function guardarValoraciones(val) {
  localStorage.setItem("kroma_valoraciones", JSON.stringify(val));
}
function leerMiValoracion() {
  return JSON.parse(localStorage.getItem("kroma_mi_valoracion") || "{}");
}
function guardarMiValoracion(obj) {
  localStorage.setItem("kroma_mi_valoracion", JSON.stringify(obj));
}

function obtenerPromedio(empresa) {
  const base = empresa.reseñas.map(r => r.estrellas);
  const extra = leerValoraciones()[empresa.id] || [];
  const todas = base.concat(extra);
  const promedio = todas.length ? todas.reduce((a, b) => a + b, 0) / todas.length : 0;
  return { promedio, cantidad: todas.length };
}

function renderEstrellasPromedio(promedio) {
  const llenas = Math.round(promedio);
  return "★".repeat(llenas) + "☆".repeat(5 - llenas);
}

function votarEmpresa(empresaId, estrellas) {
  const val = leerValoraciones();
  if (!val[empresaId]) val[empresaId] = [];
  const mias = leerMiValoracion();

  // Si ya había votado antes, reemplaza su voto anterior en vez de sumarlo dos veces
  if (mias[empresaId] != null) {
    const idx = val[empresaId].indexOf(mias[empresaId]);
    if (idx !== -1) val[empresaId].splice(idx, 1);
  }
  val[empresaId].push(estrellas);
  guardarValoraciones(val);

  mias[empresaId] = estrellas;
  guardarMiValoracion(mias);
}

/* ==========================================================================
   PÁGINA EMPRESAS — filtros por departamento/tipo + grid + modal detalle
   ========================================================================== */
let filtroDeptoActual = "la-paz";
let filtroTipoActual = "todas";

function inicializarPaginaEmpresas() {
  const grid = document.getElementById("empresas-grid");
  if (!grid) return;

  const filtrosDepto = document.querySelectorAll(".filtro-btn");
  filtrosDepto.forEach(btn => {
    btn.addEventListener("click", () => {
      filtrosDepto.forEach(b => b.classList.remove("activo"));
      btn.classList.add("activo");
      filtroDeptoActual = btn.dataset.depto;
      renderEmpresas();
    });
  });

  const filtrosTipo = document.querySelectorAll(".chip-btn");
  filtrosTipo.forEach(btn => {
    btn.addEventListener("click", () => {
      filtrosTipo.forEach(b => b.classList.remove("activo"));
      btn.classList.add("activo");
      filtroTipoActual = btn.dataset.tipo;
      renderEmpresas();
    });
  });

  // Si la URL trae ?depto=cochabamba, preseleccionamos ese filtro
  const params = new URLSearchParams(location.search);
  const deptoUrl = params.get("depto");
  if (deptoUrl && EMPRESAS[deptoUrl]) {
    filtroDeptoActual = deptoUrl;
    filtrosDepto.forEach(b => b.classList.toggle("activo", b.dataset.depto === deptoUrl));
  }

  renderEmpresas();
  inicializarModalEmpresa();
}

function renderEmpresas() {
  const grid = document.getElementById("empresas-grid");
  if (!grid) return;
  let lista = EMPRESAS[filtroDeptoActual] || [];
  if (filtroTipoActual !== "todas") {
    lista = lista.filter(e => e.tipo === filtroTipoActual);
  }

  if (lista.length === 0) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#7a6a5a;">No hay empresas para este filtro todavía.</p>`;
    return;
  }

  grid.innerHTML = lista.map(emp => {
    const { promedio, cantidad } = obtenerPromedio(emp);
    return `
    <button class="empresa-card" data-id="${emp.id}" data-depto="${filtroDeptoActual}">
      <div class="empresa-top">
        <div class="empresa-icono">${emp.icono}</div>
        <div>
          <div class="empresa-nombre">${emp.nombre}</div>
          <div class="empresa-pais"> ${emp.pais}</div>
        </div>
      </div>
      <div class="badges">
        <span class="badge ${emp.tipo === 'extranjera' ? 'badge-extranjera' : 'badge-nacional'}">${emp.tipo === 'extranjera' ? 'Extranjera' : 'Nacional'}</span>
        <span class="badge badge-categoria">${emp.categoria}</span>
      </div>
      <div class="empresa-valoracion">
        <span class="estrellas">${renderEstrellasPromedio(promedio)}</span>
        <span class="valoracion-num">${cantidad ? `${promedio.toFixed(1)} (${cantidad})` : "Sin votos todavía"}</span>
      </div>
      <span class="ver-mas">Ver misión, productos y reseñas →</span>
    </button>
  `;
  }).join("");

  grid.querySelectorAll(".empresa-card").forEach(card => {
    card.addEventListener("click", () => abrirModalEmpresa(card.dataset.depto, card.dataset.id));
  });
}

/* ---------- Modal de empresa: paso 1 (misión/visión) y paso 2 (detalle) ---------- */
let productoActualIndex = 0;

function inicializarModalEmpresa() {
  const overlay = document.getElementById("modal-empresa");
  if (!overlay) return;
  overlay.querySelectorAll("[data-cerrar-modal]").forEach(btn =>
    btn.addEventListener("click", cerrarModalEmpresa)
  );
  overlay.addEventListener("click", e => { if (e.target === overlay) cerrarModalEmpresa(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") cerrarModalEmpresa(); });
}

function cerrarModalEmpresa() {
  const overlay = document.getElementById("modal-empresa");
  if (!overlay) return;
  overlay.classList.remove("visible");
  document.body.style.overflow = "";
}

function abrirModalEmpresa(depto, id) {
  const empresa = EMPRESAS[depto].find(e => e.id === id);
  if (!empresa) return;
  const overlay = document.getElementById("modal-empresa");
  const contenido = document.getElementById("modal-empresa-contenido");
  productoActualIndex = 0;

  contenido.innerHTML = renderPasoAdvertencia(empresa, depto);
  overlay.classList.add("visible");
  document.body.style.overflow = "hidden";

  const btnEntrar = contenido.querySelector("[data-entrar]");
  btnEntrar.addEventListener("click", () => {
    contenido.innerHTML = renderPasoDetalle(empresa, depto);
    activarLogicaDetalle(empresa);
  });
}

function renderPasoAdvertencia(empresa, depto) {
  return `
    <div class="modal-panel advertencia">
      <div class="empresa-icono">${empresa.icono}</div>
      <span class="eyebrow">Antes de entrar</span>
      <h3>${empresa.nombre}</h3>
      <div class="mv-bloque">
        <span class="eyebrow"> Misión</span>
        <p>${empresa.mision}</p>
      </div>
      <div class="mv-bloque vision">
        <span class="eyebrow"> Visión</span>
        <p>${empresa.vision}</p>
      </div>
      <button class="btn btn-primario btn-block" data-entrar>Entendido, ver la tienda →</button>
    </div>
  `;
}

function renderPasoDetalle(empresa) {
  const { promedio, cantidad } = obtenerPromedio(empresa);
  return `
    <div class="modal-panel">
      <div class="detalle-header">
        <div class="empresa-icono">${empresa.icono}</div>
        <div>
          <h3>${empresa.nombre}</h3>
          <span class="empresa-pais">📍 ${empresa.direccion}</span>
          <div class="empresa-valoracion" style="margin-top:6px;">
            <span class="estrellas">${renderEstrellasPromedio(promedio)}</span>
            <span class="valoracion-num">${cantidad ? `${promedio.toFixed(1)} (${cantidad} valoraciones)` : "Sin votos todavía"}</span>
          </div>
        </div>
      </div>

      <div class="tabs-detalle">
        <button class="tab-btn activo" data-tab="productos">Productos</button>
        <button class="tab-btn" data-tab="resenas">Reseñas</button>
        <button class="tab-btn" data-tab="visita">Visitar / Contactar</button>
      </div>

      <div class="panel-tab activo" data-panel="productos">
        <div class="prod-carrusel">
          <div class="prod-nav">
            <button class="carrusel-btn" data-prod-prev>‹</button>
            <button class="carrusel-btn" data-prod-next>›</button>
          </div>
          ${empresa.productos.map((p, i) => `
            <div class="prod-slide ${i === 0 ? 'activo' : ''}" data-slide="${i}">
              <img src="${p.imagen}" alt="${p.nombre}">
              <div>
                <h4>${p.nombre}</h4>
                <p>${p.desc}</p>
                <span class="precio">Bs. ${p.precio}</span>
                <div style="margin-top:10px;">
                  <button class="btn btn-terracota btn-sm" data-agregar-carrito="${i}">🛒 Agregar al carrito</button>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
        <div class="prod-dots">
          ${empresa.productos.map((_, i) => `<button class="prod-dot ${i === 0 ? 'activo' : ''}" data-dot="${i}"></button>`).join("")}
        </div>
      </div>

      <div class="panel-tab" data-panel="resenas">
        <div class="valoracion-picker">
          <span>¿Cómo calificarías a ${empresa.nombre}?</span>
          <div class="picker-estrellas" data-picker-estrellas>
            ${[1, 2, 3, 4, 5].map(n => `
              <button class="picker-estrella ${n <= (leerMiValoracion()[empresa.id] || 0) ? 'seleccionada' : ''}" data-valor="${n}" aria-label="${n} estrellas">★</button>
            `).join("")}
          </div>
        </div>
        ${empresa.reseñas.map(r => `
          <div class="resena">
            <div class="resena-top">
              <b>${r.autor}</b>
              <span class="estrellas">${"".repeat(r.estrellas)}${"☆".repeat(5 - r.estrellas)}</span>
            </div>
            <p>${r.texto}</p>
          </div>
        `).join("")}
      </div>

      <div class="panel-tab" data-panel="visita">
        <div class="mapa-caja">
          <iframe src="https://www.google.com/maps?q=${encodeURIComponent(empresa.direccion)}&output=embed" loading="lazy" title="Mapa de ${empresa.nombre}"></iframe>
        </div>
        <div class="direccion-linea"> <span>${empresa.direccion}</span></div>
        <div class="direccion-linea"> <span>${empresa.telefono}</span></div>
        <div class="direccion-linea"> <span>${empresa.email}</span></div>
        <div class="acciones-detalle">
          <a class="btn btn-primario" target="_blank" rel="noopener" href="https://www.google.com/maps?q=${encodeURIComponent(empresa.direccion)}">🗺️ Visitar tienda en el mapa</a>
          <a class="btn btn-terracota" target="_blank" rel="noopener" href="https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent('Hola ' + empresa.nombre + ', vi su tienda en KROMA y quisiera más información.')}">💬 Contactar por WhatsApp</a>
        </div>
      </div>
    </div>
  `;
}

function activarLogicaDetalle(empresa) {
  const contenido = document.getElementById("modal-empresa-contenido");

  // Tabs
  const tabs = contenido.querySelectorAll(".tab-btn");
  const paneles = contenido.querySelectorAll(".panel-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("activo"));
      paneles.forEach(p => p.classList.remove("activo"));
      tab.classList.add("activo");
      contenido.querySelector(`.panel-tab[data-panel="${tab.dataset.tab}"]`).classList.add("activo");
    });
  });

  // Mini carrusel de productos
  const slides = contenido.querySelectorAll(".prod-slide");
  const dots = contenido.querySelectorAll(".prod-dot");
  const irASlide = i => {
    productoActualIndex = (i + slides.length) % slides.length;
    slides.forEach(s => s.classList.remove("activo"));
    dots.forEach(d => d.classList.remove("activo"));
    slides[productoActualIndex].classList.add("activo");
    dots[productoActualIndex].classList.add("activo");
  };
  contenido.querySelector("[data-prod-prev]")?.addEventListener("click", () => irASlide(productoActualIndex - 1));
  contenido.querySelector("[data-prod-next]")?.addEventListener("click", () => irASlide(productoActualIndex + 1));
  dots.forEach(d => d.addEventListener("click", () => irASlide(Number(d.dataset.dot))));

  // Agregar al carrito
  contenido.querySelectorAll("[data-agregar-carrito]").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.agregarCarrito);
      const p = empresa.productos[idx];
      if (typeof window.agregarAlCarrito === "function") {
        window.agregarAlCarrito({
          id: `${empresa.id}__${idx}`,
          nombre: p.nombre,
          empresa: empresa.nombre,
          precio: p.precio,
          imagen: p.imagen
        });
      }
    });
  });

  // Valoración por estrellas
  contenido.querySelectorAll("[data-valor]").forEach(btn => {
    btn.addEventListener("click", () => {
      const valor = Number(btn.dataset.valor);
      votarEmpresa(empresa.id, valor);
      mostrarToast("¡Gracias por tu valoración!");

      contenido.querySelectorAll("[data-valor]").forEach(b => {
        b.classList.toggle("seleccionada", Number(b.dataset.valor) <= valor);
      });

      const { promedio, cantidad } = obtenerPromedio(empresa);
      contenido.querySelectorAll(".valoracion-num").forEach(el => {
        el.textContent = `${promedio.toFixed(1)} (${cantidad} valoraciones)`;
      });
      contenido.querySelector(".detalle-header .estrellas").textContent = renderEstrellasPromedio(promedio);

      renderEmpresas(); // refresca el promedio en la tarjeta de la grilla
    });
  });
}

/* ==========================================================================
   NEWSLETTER — suscripción a notificaciones de ofertas
   ========================================================================== */
function inicializarNewsletter() {
  const forms = document.querySelectorAll(".form-suscripcion");
  forms.forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const input = form.querySelector("input[type='email']");
      if (!input || !input.value) return;

      const suscritos = JSON.parse(localStorage.getItem("bb_suscritos") || "[]");
      if (!suscritos.includes(input.value)) suscritos.push(input.value);
      localStorage.setItem("bb_suscritos", JSON.stringify(suscritos));

      const confirm = form.parentElement.querySelector(".mensaje-confirm");
      if (confirm) {
        confirm.textContent = ` ¡Listo! Te avisaremos a ${input.value} cuando haya nuevas ofertas.`;
        confirm.classList.add("visible");
      }
      mostrarToast("Te suscribiste a las notificaciones de ofertas.");
      input.value = "";
    });
  });
}

/* ==========================================================================
   FORMULARIO DE CONTACTO
   ========================================================================== */
function inicializarFormularioContacto() {
  const form = document.getElementById("form-contacto");
  if (!form) return;
  form.addEventListener("submit", e => {
    e.preventDefault();
    mostrarToast("¡Gracias! Tu mensaje fue enviado, te responderemos pronto.");
    form.reset();
  });
}
