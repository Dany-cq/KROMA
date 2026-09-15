/* ==========================================================================
   KROMA — carrito.js
   Carrito de compras simple, guardado en localStorage (sin backend).
   Se incluye en todas las páginas: agrega el botón del carrito al header,
   crea el panel lateral y expone window.agregarAlCarrito(item) para que
   main.js lo use desde los productos de cada empresa.
   ========================================================================== */

const CARRITO_KEY = "kroma_carrito";
const CARRITO_WHATSAPP = "59162279222"; // mismo número de contacto del footer

function leerCarrito() {
  return JSON.parse(localStorage.getItem(CARRITO_KEY) || "[]");
}

function guardarCarrito(items) {
  localStorage.setItem(CARRITO_KEY, JSON.stringify(items));
  actualizarBadgeCarrito();
}

function agregarAlCarrito(item) {
  const items = leerCarrito();
  const existente = items.find(i => i.id === item.id);
  if (existente) {
    existente.cantidad += 1;
  } else {
    items.push({ ...item, cantidad: 1 });
  }
  guardarCarrito(items);
  renderCarrito();
  if (typeof mostrarToast === "function") {
    mostrarToast(`${item.nombre} se agregó al carrito.`);
  }
}
window.agregarAlCarrito = agregarAlCarrito;

function cambiarCantidadCarrito(id, delta) {
  const items = leerCarrito();
  const item = items.find(i => i.id === id);
  if (!item) return;
  item.cantidad += delta;
  const resultado = item.cantidad <= 0 ? items.filter(i => i.id !== id) : items;
  guardarCarrito(resultado);
  renderCarrito();
}

function eliminarDelCarrito(id) {
  guardarCarrito(leerCarrito().filter(i => i.id !== id));
  renderCarrito();
}

function vaciarCarrito() {
  guardarCarrito([]);
  renderCarrito();
}

function totalCarrito(items) {
  return items.reduce((suma, i) => suma + i.precio * i.cantidad, 0);
}

function actualizarBadgeCarrito() {
  const cantidad = leerCarrito().reduce((suma, i) => suma + i.cantidad, 0);
  document.querySelectorAll(".carrito-badge").forEach(badge => {
    badge.textContent = cantidad;
    badge.style.display = cantidad > 0 ? "flex" : "none";
  });
}

function abrirCarrito() {
  const overlay = document.getElementById("carrito-overlay");
  if (!overlay) return;
  renderCarrito();
  overlay.classList.add("visible");
  document.body.style.overflow = "hidden";
}

function cerrarCarrito() {
  const overlay = document.getElementById("carrito-overlay");
  if (!overlay) return;
  overlay.classList.remove("visible");
  document.body.style.overflow = "";
}

function renderCarrito() {
  const lista = document.getElementById("carrito-lista");
  const totalEl = document.getElementById("carrito-total");
  if (!lista || !totalEl) return;

  const items = leerCarrito();

  if (items.length === 0) {
    lista.innerHTML = `<p class="carrito-vacio">Tu carrito está vacío todavía.<br>Explora las empresas y agrega tus productos favoritos.</p>`;
  } else {
    lista.innerHTML = items.map(i => `
      <div class="carrito-item">
        <img src="${i.imagen}" alt="${i.nombre}">
        <div class="carrito-item-info">
          <span class="carrito-item-empresa">${i.empresa}</span>
          <h4>${i.nombre}</h4>
          <span class="precio">Bs. ${i.precio}</span>
          <div class="carrito-cant">
            <button data-menos="${i.id}" aria-label="Quitar uno">−</button>
            <span>${i.cantidad}</span>
            <button data-mas="${i.id}" aria-label="Agregar uno">+</button>
          </div>
        </div>
        <button class="carrito-quitar" data-quitar="${i.id}" aria-label="Eliminar producto">✕</button>
      </div>
    `).join("");
  }

  totalEl.textContent = `Bs. ${totalCarrito(items)}`;

  lista.querySelectorAll("[data-mas]").forEach(b =>
    b.addEventListener("click", () => cambiarCantidadCarrito(b.dataset.mas, 1))
  );
  lista.querySelectorAll("[data-menos]").forEach(b =>
    b.addEventListener("click", () => cambiarCantidadCarrito(b.dataset.menos, -1))
  );
  lista.querySelectorAll("[data-quitar]").forEach(b =>
    b.addEventListener("click", () => eliminarDelCarrito(b.dataset.quitar))
  );
}

function finalizarPedidoWhatsapp() {
  const items = leerCarrito();
  if (items.length === 0) return;

  let mensaje = "Hola KROMA, quiero hacer este pedido:%0A%0A";
  items.forEach(i => {
    mensaje += `• ${i.nombre} (${i.empresa}) x${i.cantidad} — Bs. ${i.precio * i.cantidad}%0A`;
  });
  mensaje += `%0ATotal: Bs. ${totalCarrito(items)}`;

  window.open(`https://wa.me/${CARRITO_WHATSAPP}?text=${mensaje}`, "_blank");
}

/* ---------- Inyecta el botón del carrito y el panel lateral ---------- */
function inicializarCarrito() {
  document.querySelectorAll(".nav").forEach(nav => {
    if (nav.querySelector(".carrito-toggle")) return;
    const toggle = nav.querySelector(".nav-toggle");
    const boton = document.createElement("button");
    boton.className = "carrito-toggle";
    boton.setAttribute("aria-label", "Abrir carrito de compras");
    boton.innerHTML = `🛒<span class="carrito-badge">0</span>`;
    if (toggle) {
      nav.insertBefore(boton, toggle);
    } else {
      nav.appendChild(boton);
    }
    boton.addEventListener("click", abrirCarrito);
  });

  if (!document.getElementById("carrito-overlay")) {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay carrito-overlay";
    overlay.id = "carrito-overlay";
    overlay.innerHTML = `
      <div class="carrito-caja">
        <div class="carrito-header">
          <h3>🛒 Tu carrito</h3>
          <button class="modal-cerrar" id="carrito-cerrar" aria-label="Cerrar carrito">✕</button>
        </div>
        <div class="carrito-lista" id="carrito-lista"></div>
        <div class="carrito-footer">
          <div class="carrito-total-linea">
            <span>Total</span>
            <span id="carrito-total">Bs. 0</span>
          </div>
          <button class="btn btn-terracota btn-block" id="carrito-whatsapp">💬 Finalizar pedido por WhatsApp</button>
          <button class="btn btn-secundario btn-block" id="carrito-vaciar">Vaciar carrito</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    overlay.addEventListener("click", e => { if (e.target === overlay) cerrarCarrito(); });
    document.getElementById("carrito-cerrar").addEventListener("click", cerrarCarrito);
    document.getElementById("carrito-whatsapp").addEventListener("click", finalizarPedidoWhatsapp);
    document.getElementById("carrito-vaciar").addEventListener("click", vaciarCarrito);
    document.addEventListener("keydown", e => { if (e.key === "Escape") cerrarCarrito(); });
  }

  actualizarBadgeCarrito();
}

document.addEventListener("DOMContentLoaded", inicializarCarrito);
