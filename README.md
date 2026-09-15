# 🌿 Bella Bolivia

Sitio web tipo "PedidosYa" pero para promocionar empresas de **skincare, maquillaje y ropa**, nacionales y extranjeras, en **La Paz, Cochabamba y Santa Cruz** (Bolivia).

## 📂 Estructura del proyecto

```
bella-bolivia/
├── index.html         → Página de inicio (bienvenida + carrusel + departamentos)
├── nosotros.html       → Acerca de nosotros (misión, visión, historia, equipo de 5 personas)
├── empresas.html       → Catálogo con filtros por departamento y tipo de empresa
├── contacto.html       → Formulario de contacto + suscripción a ofertas
├── css/
│   └── style.css       → Todos los estilos (colores crema, café y verde)
├── js/
│   ├── data.js          → Aquí están TODAS las empresas, productos y reseñas
│   ├── main.js           → Toda la lógica: modales, carruseles, filtros, formularios
│   └── footer.js          → Pie de página compartido en todas las páginas
└── README.md
```

## ▶️ Cómo abrirlo en Visual Studio Code

1. Descomprime la carpeta `bella-bolivia`.
2. Ábrela en VS Code (`Archivo → Abrir carpeta...`).
3. Instala la extensión **Live Server** (de Ritwick Dey) si no la tienes.
4. Click derecho sobre `index.html` → **"Open with Live Server"**.
5. ¡Listo! El sitio se abre en tu navegador y se actualiza solo cada vez que guardas un cambio.

> No necesita `npm install` ni ningún paso de compilación: es HTML, CSS y JavaScript puro.

## ✏️ Cómo agregar o editar una empresa

Todo el contenido de las empresas vive en **`js/data.js`**. Busca el departamento (`la-paz`, `cochabamba` o `santa-cruz`) y copia un bloque `{ ... }` completo dentro de su lista para crear una empresa nueva, o edita uno existente. Cada empresa tiene:

- `mision` / `vision` → se muestran en el paso 1 del modal (la "advertencia" al entrar).
- `productos` → arreglo de objetos `{ nombre, desc, precio }` (se muestran en el carrusel del modal).
- `reseñas` → arreglo de objetos `{ autor, estrellas, texto }`.
- `direccion` → se usa para generar automáticamente el mapa de Google Maps embebido.
- `whatsapp` → número sin espacios ni `+` para el botón de contacto directo.

No necesitas tocar el HTML para agregar empresas nuevas: el JavaScript arma las tarjetas y el modal automáticamente.

## 🖼️ Dónde poner tus propias imágenes

**Ya generé imágenes de ejemplo (placeholder) para TODO el sitio**, con borde punteado café y el nombre de lo que va ahí escrito encima, para que sepas exactamente cuál reemplazar. Solo tienes que guardar tu foto real **con el mismo nombre de archivo** encima del placeholder (o cambiar la ruta en el código si prefieres otro nombre).

```
assets/img/
├── logo.png                          → 📸 tu logo (usado en el header, footer y bienvenida)
├── hero.jpg                          → 📸 foto principal de portada (index.html)
├── departamentos/
│   ├── la-paz.jpg                     → 📸 foto de La Paz
│   ├── cochabamba.jpg                  → 📸 foto de Cochabamba
│   └── santa-cruz.jpg                   → 📸 foto de Santa Cruz
├── equipo/
│   ├── integrante-1.jpg                → 📸 foto de María Fernanda Aguilar
│   ├── integrante-2.jpg                 → 📸 foto de Rodrigo Terán
│   ├── integrante-3.jpg                  → 📸 foto de Camila Rojas
│   ├── integrante-4.jpg                   → 📸 foto de Sebastián Choque
│   └── integrante-5.jpg                    → 📸 foto de Luciana Paz
└── productos/
    ├── lp-bella-corea-1.jpg              → 📸 producto 1 de "Bella Corea Skincare" (La Paz)
    ├── lp-bella-corea-2.jpg               → 📸 producto 2 de la misma empresa
    ├── lp-bella-corea-3.jpg                → 📸 producto 3 de la misma empresa
    └── ... (una imagen por cada uno de los 3 productos × 24 empresas = 72 fotos)
```

**Cómo reemplazar una imagen:**
1. Abre la carpeta `assets/img/...` correspondiente en tu explorador de archivos.
2. Arrastra tu foto real y ponle **exactamente el mismo nombre** que el placeholder que quieres reemplazar (por ejemplo `hero.jpg`).
3. Guarda y recarga el navegador (con Live Server se actualiza solo).

**¿Prefieres nombres o rutas distintas?** También puedes hacerlo así:
- Para el **logo**: cambia `assets/img/logo.png` en el `<img>` del header de `index.html`, `empresas.html`, `nosotros.html`, `contacto.html` y en `js/footer.js` (busca el comentario `📸 CAMBIAR AQUÍ`).
- Para el **hero y los departamentos**: busca los comentarios `📸 CAMBIAR AQUÍ` dentro de `index.html`.
- Para el **equipo**: edita el campo `foto` de cada persona en el arreglo `EQUIPO` al final de `js/data.js`.
- Para los **productos**: cada producto tiene su propio campo `imagen` dentro de `js/data.js` (búscalo por el nombre de la empresa), por ejemplo:
  ```js
  { imagen: "assets/img/productos/lp-bella-corea-1.jpg", nombre: "Esencia de Caracol 96%", desc: "...", precio: 145 }
  ```
  Solo cambia el valor de `imagen` por la ruta de tu foto real (local o una URL de internet, ambas funcionan).

## 🎨 Paleta de colores

| Nombre | Uso | Hex |
|---|---|---|
| Crema | Fondo general | `#F6EFE2` |
| Marfil | Tarjetas | `#FFFBF3` |
| Café oscuro | Textos, header, footer | `#4A3222` |
| Café medio | Acentos secundarios | `#8A5A34` |
| Verde salvia | Acentos, badges | `#93A57C` |
| Verde oscuro | Botones principales | `#56663E` |
| Terracota | Botones de acción / precios | `#B5652F` |

Todo está centralizado como variables CSS (`:root`) en la parte superior de `css/style.css`, así que puedes cambiar toda la paleta editando solo esas líneas.

## 💡 Ideas para seguir mejorando

- Reemplazar las fotos de ejemplo (picsum.photos / pravatar.cc) por fotos reales de cada empresa y del equipo.
- Conectar el formulario de contacto y la suscripción a un backend real (por ejemplo con Formspree, EmailJS o tu propio servidor) — ahora mismo el envío es simulado con `localStorage`.
- Agregar una página de "login" para que cada empresa administre su propio catálogo.
- Sumar un buscador de productos por nombre o rango de precio.
- Agregar más departamentos (Sucre, Tarija, Oruro, Potosí, Beni, Pando) siguiendo el mismo patrón en `data.js`.

---
Proyecto de ejemplo con fines educativos. Los nombres de empresas, direcciones, teléfonos y reseñas son ficticios.
