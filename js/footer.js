
document.addEventListener("DOMContentLoaded", () => {
  const destino = document.getElementById("footer-incluido");
  if (!destino) return;

  destino.innerHTML = `
    <div class="footer-grid">
      <div>
        <div class="footer-logo"><img src="assets/img/logo.jpg" alt="Logo KROMA" class="sello-img"> KROMA</div>
        <p style="color:#D8C9B4; font-size:.88rem; max-width:32ch;">
          La vitrina digital de belleza y moda, nacional y extranjera, para La Paz, Cochabamba y Santa Cruz.
        </p>
      </div>
      <div>
        <h4>Navegación</h4>
        <ul>
          <li><a href="index.html">Inicio</a></li>
          <li><a href="nosotros.html">Acerca de nosotros</a></li>
          <li><a href="empresas.html">Empresas</a></li>
          <li><a href="contacto.html">Contáctanos</a></li>
        </ul>
      </div>
      <div>
        <h4>Departamentos</h4>
        <ul>
          <li><a href="empresas.html?depto=la-paz">La Paz</a></li>
          <li><a href="empresas.html?depto=cochabamba">Cochabamba</a></li>
          <li><a href="empresas.html?depto=santa-cruz">Santa Cruz</a></li>
        </ul>
      </div>
      <div>
        <h4>Contacto</h4>
        <ul>
          <li><a href="mailto:kroma@gmail.com">kroma@gmail.com</a></li>
          <li><a href="https://wa.me/59162279222" target="_blank" rel="noopener">WhatsApp: +591 62279222</a></li>
          <li><a href="contacto.html">Formulario de contacto</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} KROMA.</span>
      <span>Hecho por Bolivianos</span>
    </div>
  `;
});
