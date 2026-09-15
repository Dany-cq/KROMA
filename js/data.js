const EMPRESAS = {

  "la-paz": [
    {
      id: "lp-bella-corea",
      nombre: "Bella Corea Skincare",
      tipo: "extranjera",
      pais: "Corea del Sur",
      categoria: "Cuidado de la piel",
      icono: "🌸",
      mision: "Llevar la excelencia, la innovación y la ciencia de la cosmética coreana a cada hogar, democratizando el acceso a fórmulas de alta tecnología, resultados visibles y rituales de belleza conscientes que respeten la salud de la piel y el bienestar integral de las personas.",
      vision: "Ser la empresa líder y referente número uno en la distribución de skincare coreano, consolidando una presencia sólida en el mercado nacional e internacional, y transformando la manera en que las personas entienden y practican el cuidado de la piel a través de la educación, marcas auténticas y productos de primer nivel.",
      dueños: "Sucursal boliviana — atendida por representantes locales",
      direccion: "Av. 6 de Agosto #2140, Sopocachi, La Paz",
      telefono: "+591 700 11 221",
      whatsapp: "59170011221",
      email: "hola@bellacorea.bo",
      productos: [
        { imagen: "assets/img/productos/lp-bella-corea-caracol.jpg", nombre: "Esencia de Caracol 96%", desc: "Reduce marcas y da luminosidad; ideal para el clima seco de altura.", precio: 145 },
        { imagen: "assets/img/productos/lp-bella-corea-mascarilla.jpg", nombre: "Mascarilla de Arroz Glow", desc: "Mascarilla nocturna que ilumina e hidrata en profundidad.", precio: 89 },
        { imagen: "assets/img/productos/lp-bella-corea-protector solar.jpg", nombre: "Protector Solar Ligero SPF50", desc: "Textura invisible, sin efecto blanco, resistente al sudor.", precio: 110 },
        { imagen: "assets/img/productos/lp-bella-corea-snail-cream.jpg", nombre: "Advanced Snail 92 All in One Cream", desc: "Crema facial ligera y nutritiva que hidrata profundamente, evita la descamación de la piel y ayuda a atenuar pequeñas manchas.", precio: 315 },
        { imagen: "assets/img/productos/lp-bella-corea-gel-cleanser.jpg", nombre: "Low pH Good Morning Gel Cleanser", desc: "Limpiador facial en gel de pH bajo que remueve suavemente el exceso de grasa sin resecar ni irritar la piel.", precio: 257 },
        { imagen: "assets/img/productos/lp-bella-corea-advanced-snail-96-mucin.jpg", nombre: "Advanced Snail 96 Mucin Power Essence", desc: "Esencia facial formulada con 96% de filtrado de secreción de caracol. Repara la barrera cutánea, calma la irritación e hidrata profundamente.", precio: 215 },
        { imagen: "assets/img/productos/lp-bella-corea-base-liquida-resist-todo.jpg", nombre: "Base Líquida Resist Todo el Día FPS 15", desc: "Base de maquillaje de larga duración con acabado mate, resistente al sudor, calor e humedad.", precio: 72 },
        { imagen: "assets/img/productos/lp-bella-corea-mascara-de-pestanas-resist.jpg", nombre: "Máscara de Pestañas Resist", desc: "Mascara para pestañas a prueba de agua formulada para otorgar volumen, definición y longitud sin dejar grumos.", precio: 52 },
        { imagen: "assets/img/productos/lp-bella-corea-tonico-facial-rosa-mosqueta.jpg", nombre: "Tónico Facial Rosa Mosqueta", desc: "Tónico facial enriquecido con rosa mosqueta que equilibra el pH, tonifica y prepara la piel para la hidratación.", precio: 82 },
        { imagen: "assets/img/productos/lp-bella-corea-crema-facial-humectante-rosa.jpg", nombre: "Crema Facial Humectante Rosa Mosqueta", desc: "Crema de uso diario enfocada en la regeneración e hidratación profunda aprovechando las propiedades antioxidantes de la rosa mosqueta.", precio: 98 }
      ],
      reseñas: [
        { autor: "Camila R.", estrellas: 5, texto: "Mi piel nunca se sintió tan hidratada con la sequedad de La Paz." },
        { autor: "Fernanda Q.", estrellas: 5, texto: "El protector solar es lo mejor que he probado, no deja nada blanco." },
        { autor: "Gabriela T.", estrellas: 4, texto: "Un poco caro pero vale la pena, atención muy buena." }
      ]
    },
    {
      id: "lp-piel-andina-col",
      nombre: "Piel Andina Colombia",
      tipo: "extranjera",
      pais: "Colombia",
      categoria: "Cuidado de la piel",
      icono: "🌿",
      mision: "Desarrollar y ofrecer soluciones para el cuidado de la piel basadas en la riqueza botánica de los Andes colombianos, fusionando la sabiduría ancestral de la tierra con la innovación cosmética sostenible, para brindar productos seguros, honestos y de alta eficacia que exalten la belleza natural y respeten el medio ambiente.",
      vision: "Consolidarnos como una marca líder y referente en cosmética natural y consciente en Colombia y la región, reconocidos por nuestro compromiso con la economía circular, el comercio justo con comunidades locales y la excelencia en formulaciones que nutren la piel en armonía con el planeta.",
      dueños: "Distribuidora autorizada en Bolivia",
      direccion: "Calle Illampu #789, La Paz",
      telefono: "+591 700 33 445",
      whatsapp: "59170033445",
      email: "contacto@pielandina.co",
      productos: [
        { imagen: "assets/img/productos/lp-piel-andina-col-crema.jpg", nombre: "Crema de Aloe y Café Verde", desc: "Nutre e ilumina la piel opaca por el frío.", precio: 75 },
        { imagen: "assets/img/productos/lp-piel-andina-col-agua de rosas.jpg", nombre: "Tónico de Rosa Mosqueta", desc: "Cierra poros y calma la piel irritada.", precio: 60 },
        { imagen: "assets/img/productos/lp-piel-andina-col-exfoliante.jpg", nombre: "Exfoliante de Panela", desc: "Renueva la piel dejándola suave y luminosa.", precio: 55 },
        { imagen: "assets/img/productos/lp-piel-andina-col-serum-hialuronico.jpg", nombre: "Sérum Rellenador Ácido Hialurónico", desc: "Sérum liviano para hidratar, dar volumen a la piel y aliviar la tirantez facial.", precio: 140 },
        { imagen: "assets/img/productos/lp-piel-andina-col-aceite-rosa-mosqueta.jpg", nombre: "Aceite Facial Reparador de Rosa Mosqueta", desc: "Aceite nocturno que repara áreas muy resecas, atenúa marcas y aporta luminosidad.", precio: 135 },
        { imagen: "assets/img/productos/lp-piel-andina-col-jean-mom-fit-tiro.jpg", nombre: "Jean Mom Fit Tiro Alto", desc: "Pantalón de mezclilla corte Mom Fit con tela elástica y diseño de tiro alto favorecedor.", precio: 180 },
        { imagen: "assets/img/productos/lp-piel-andina-col-poncho-urbano-reversible-en.jpg", nombre: "Poncho Urbano Reversible en Alpaca", desc: "Prenda de abrigo versátil con diseño geométrico y tela gruesa de alpaca con dos vistas combinables.", precio: 240 },
        { imagen: "assets/img/productos/lp-piel-andina-col-squirt-plumping-gloss-stick.jpg", nombre: "Squirt Plumping Gloss Stick", desc: "Bálsamo labial con efecto de volumen que brinda brillo, hidratación y un tinte de color con sensación refrescante.", precio: 250 },
        { imagen: "assets/img/productos/lp-piel-andina-col-matte-lipstick-ruby-woo.jpg", nombre: "Matte Lipstick (Ruby Woo)", desc: "Labial icónico de alta pigmentación, cobertura total y acabado mate intenso de larga duración.", precio: 230 },
        { imagen: "assets/img/productos/lp-piel-andina-col-high-end-cream-cushion.jpg", nombre: "High End Cream Cushion / Blusher", desc: "Rubor en crema en empaque compacto estilo cushion que otorga un acabado jugoso y natural a las mejillas.", precio: 60 }
      ],
      reseñas: [
        { autor: "Ana M.", estrellas: 5, texto: "El tónico de rosa mosqueta cambió mi piel por completo." },
        { autor: "Daniela C.", estrellas: 4, texto: "Huele delicioso y se siente muy natural." },
        { autor: "Rocío P.", estrellas: 5, texto: "Entrega rápida y productos originales." }
      ]
    },
    {
      id: "lp-glow-mexico",
      nombre: "Glow México Maquillaje",
      tipo: "extranjera",
      pais: "México",
      categoria: "Maquillaje",
      icono: "💄",
      mision: "Ofrecer maquillaje profesional mexicano de larga duración, adaptado a los tonos de piel latinoamericanos.",
      vision: "Ser la marca de maquillaje extranjera más querida por las paceñas para el 2028.",
      dueños: "Franquicia oficial en Bolivia",
      direccion: "Av. Arce #2450, La Paz",
      telefono: "+591 700 55 667",
      whatsapp: "59170055667",
      email: "ventas@glowmexico.mx",
      productos: [
        { imagen: "assets/img/productos/lp-glow-mexico-base.jpg", nombre: "Base Larga Duración 24h", desc: "Cobertura completa, resiste hasta 24 horas.", precio: 130 },
        { imagen: "assets/img/productos/lp-glow-mexico-paleta.jpg", nombre: "Paleta de Sombras Tierra", desc: "12 tonos cálidos pigmentados, ideal para el día a día.", precio: 95 },
        { imagen: "assets/img/productos/lp-glow-mexico-labial.jpg", nombre: "Labial Líquido Mate", desc: "No reseca los labios y dura todo el día.", precio: 45 },
        { imagen: "assets/img/productos/lp-glow-mexico-base-polvo.jpg", nombre: "Base en Polvo Vogue Resist 12h", desc: "Base en polvo que elimina el brillo al instante, retoca imperfecciones y controla la grasa logrando un acabado mate.", precio: 72 },
        { imagen: "assets/img/productos/lp-glow-mexico-labial-liquido.jpg", nombre: "Labial Líquido Vogue Resist 14h", desc: "Labial líquido de larga duración y acabado mate que no se transfiere.", precio: 60 },
        { imagen: "assets/img/productos/lp-glow-mexico-mattifying-compact-powder.jpg", nombre: "Mattifying Compact Powder", desc: "Polvo compacto de textura fina que ayuda a sellar el maquillaje y controlar el exceso de brillo durante el día.", precio: 52 },
        { imagen: "assets/img/productos/lp-glow-mexico-lash-princess-false-lash.jpg", nombre: "Lash Princess False Lash Effect Mascara", desc: "Máscara de pestañas con cepillo de fibras cónicas que otorga longitud dramática y efecto de pestañas postizas.", precio: 58 },
        { imagen: "assets/img/productos/lp-glow-mexico-catrice-hd-liquid-coverage.jpg", nombre: "Catrice HD Liquid Coverage Foundation", desc: "Base líquida de textura ultra fluida con gotero que ofrece alta cobertura con efecto segunda piel por 24 horas.", precio: 68 },
        { imagen: "assets/img/productos/lp-glow-mexico-essence-keep-me-matte.jpg", nombre: "Essence Keep Me Matte Liquid Makeup", desc: "Base matificante de cobertura media diseñada para unificar el tono y controlar el sebo diario a un precio muy accesible.", precio: 45 },
        { imagen: "assets/img/productos/lp-glow-mexico-maybelline-fit-me-matte.jpg", nombre: "Maybelline Fit Me Matte + Poreless Foundation", desc: "Base líquida ligera de cobertura media construible que matifica la piel, controla el brillo y disimula los poros.", precio: 72 }
      ],
      reseñas: [
        { autor: "Valeria S.", estrellas: 5, texto: "La base aguanta todo el día de trabajo, ¡increíble!" },
        { autor: "Paola L.", estrellas: 4, texto: "Muy buenos pigmentos, se nota la calidad." },
        { autor: "Ximena B.", estrellas: 5, texto: "El labial no reseca nada, mi favorito." }
      ]
    },
    {
      id: "lp-buenos-aires-textil",
      nombre: "Buenos Aires Textil",
      tipo: "extranjera",
      pais: "Argentina",
      categoria: "Ropa",
      icono: "👗",
      mision: "Vestir a la mujer boliviana con diseños argentinos de tendencia, con telas de calidad y precios justos.",
      vision: "Abrir tienda propia en cada capital de departamento de Bolivia antes del 2029.",
      dueños: "Importadora oficial",
      direccion: "Calle Potosí #920, La Paz",
      telefono: "+591 700 77 889",
      whatsapp: "59170077889",
      email: "info@baires-textil.com.ar",
      productos: [
        { imagen: "assets/img/productos/lp-buenos-aires-textil-over.jpg", nombre: "Blazer Oversize", desc: "Corte moderno, ideal para looks de oficina o casuales.", precio: 220 },
        { imagen: "assets/img/productos/lp-buenos-aires-textil-jean.jpg", nombre: "Jean Mom Fit", desc: "Tela elástica cómoda, tiro alto favorecedor.", precio: 180 },
        { imagen: "assets/img/productos/lp-buenos-aires-textil-alpaca.jpg", nombre: "Sweater de Alpaca Mix", desc: "Combina algodón y alpaca para máximo abrigo.", precio: 195 },
        { imagen: "assets/img/productos/lp-buenos-aires-textil-vestido-midi.jpg", nombre: "Vestido Midi de Punto", desc: "Vestido abrigador y cómodo que se amolda al cuerpo para proteger del frío.", precio: 190 },
        { imagen: "assets/img/productos/lp-buenos-aires-textil-abrigo-lana.jpg", nombre: "Abrigo Tapado de Lana", desc: "Prenda abrigada de alta calidad y confección elegante para el frío intenso.", precio: 280 },
        { imagen: "assets/img/productos/lp-buenos-aires-textil-blazer-estructurado-solapa-ancha.jpg", nombre: "Blazer Estructurado Solapa Ancha Tono Beige", desc: "Chaqueta formal de corte holgado en tono beige claro con hombreras ligeras y botones frontales.", precio: 215 },
        { imagen: "assets/img/productos/lp-buenos-aires-textil-saco-oversize-estilo-masculino.jpg", nombre: "Saco Oversize Estilo Masculino Café Claro", desc: "Blazer holgado de inspiración masculina con bolsillos con solapa y forro interior suave.", precio: 225 },
        { imagen: "assets/img/productos/lp-buenos-aires-textil-blazer-liviano-minimalista-khaki.jpg", nombre: "Blazer Liviano Minimalista Khaki", desc: "Blazer de silueta holgada sin botones visibles, de diseño limpio y tejido ligero para todo el año.", precio: 195 },
        { imagen: "assets/img/productos/lp-buenos-aires-textil-saco-tailored-fit-holgado.jpg", nombre: "Saco Tailored Fit Holgado Moka", desc: "Blazer de sastrería premium con solapa en V profunda y bolsillos funcionales en tono moka suave.", precio: 245 },
        { imagen: "assets/img/productos/lp-buenos-aires-textil-blazer-cruzado-casual-tono.jpg", nombre: "Blazer Cruzado Casual Tono Arena", desc: "Blazer de doble botonadura en tono neutro, diseñado para un look ejecutivo o de calle.", precio: 205 }
      ],
      reseñas: [
        { autor: "Michelle A.", estrellas: 5, texto: "El blazer me quedó perfecto, tela de excelente calidad." },
        { autor: "Carla V.", estrellas: 4, texto: "Los jeans son cómodos y el talle es real." },
        { autor: "Andrea H.", estrellas: 5, texto: "El sweater abriga muchísimo, ideal para La Paz." }
      ]
    },
    {
      id: "lp-espanol-cosmetics",
      nombre: "Sabor Español Cosmetics",
      tipo: "extranjera",
      pais: "España",
      categoria: "Maquillaje",
      icono: "💋",
      mision: "Combinar la tradición cosmética española con ingredientes activos modernos, accesibles para el mercado boliviano.",
      vision: "Ser sinónimo de elegancia europea accesible en Bolivia para el 2027.",
      dueños: "Distribuidor exclusivo La Paz",
      direccion: "Av. Ecuador #1560, Sopocachi, La Paz",
      telefono: "+591 700 99 001",
      whatsapp: "59170099001",
      email: "hola@saborespanol.es",
      productos: [
        { imagen: "assets/img/productos/lp-espanol-cosmetics-rubor.jpg", nombre: "Rubor en Crema", desc: "Efecto natural 'recién sonrojada', fácil de difuminar.", precio: 68 },
        { imagen: "assets/img/productos/lp-espanol-cosmetics-cejas.jpg", nombre: "Perfilador de Cejas Micro", desc: "Trazo ultra fino, resistente al agua.", precio: 52 },
        { imagen: "assets/img/productos/lp-espanol-cosmetics-bruma.jpg", nombre: "Bruma Fijadora de Maquillaje", desc: "Fija el maquillaje hasta 12 horas con un toque fresco.", precio: 78 },
        { imagen: "assets/img/productos/lp-espanol-cosmetics-labial-cremoso.jpg", nombre: "Labial Cremoso Larga Duración", desc: "Labial cremoso con alta pigmentación que aporta color continuo sin resecar los labios.", precio: 50 },
        { imagen: "assets/img/productos/lp-espanol-cosmetics-serum-iluminador.jpg", nombre: "Sérum Facial Hidratante Iluminador", desc: "Sérum de rápida absorción que hidrata al instante y le da un brillo saludable a la piel.", precio: 85 },
        { imagen: "assets/img/productos/lp-espanol-cosmetics-nyx-matte-finish-setting.jpg", nombre: "NYX Matte Finish Setting Spray", desc: "Spray fijador ligero que sella el maquillaje y elimina el brillo no deseado dejando un acabado mate prolongado.", precio: 82 },
        { imagen: "assets/img/productos/lp-espanol-cosmetics-maybelline-lasting-fix-setting.jpg", nombre: "Maybelline Lasting Fix Setting Spray", desc: "Fijador de maquillaje matificante que controla la grasa y extiende la duración de los cosméticos hasta por 16 horas.", precio: 78 },
        { imagen: "assets/img/productos/lp-espanol-cosmetics-l-oreal-infallible-magic.jpg", nombre: "L'Oréal Infallible Magic Setting Spray", desc: "Bruma microfina fijadora que crea una capa invisible resistente al sudor y al roce.", precio: 92 },
        { imagen: "assets/img/productos/lp-espanol-cosmetics-wet-n-wild-fight.jpg", nombre: "Wet n Wild Fight Dirty Detox Setting Spray", desc: "Spray fijador matificante con ingredientes botánicos que purifican y sellan el rostro contra la contaminación.", precio: 60 },
        { imagen: "assets/img/productos/lp-espanol-cosmetics-essence-instant-matt-make.jpg", nombre: "Essence Instant Matt Make-up Setting Spray", desc: "Fórmula enriquecida con complejo matificante que fija el maquillaje instantáneamente con una sensación fresca.", precio: 45 }
      ],
      reseñas: [
        { autor: "Sofía N.", estrellas: 5, texto: "El rubor en crema se ve súper natural, amo la textura." },
        { autor: "Renata D.", estrellas: 5, texto: "La bruma fijadora sí funciona todo el día." },
        { autor: "Lucía F.", estrellas: 4, texto: "Buena calidad, un poco cara pero rinde mucho." }
      ]
    },
    {
      id: "lp-flor-illimani",
      nombre: "Flor de Illimani",
      tipo: "nacional",
      pais: "Bolivia",
      categoria: "Cuidado de la piel",
      icono: "🏔️",
      mision: "Elaborar cosmética natural boliviana con plantas altiplánicas como la muña, el yareta y la maca para cuidar la piel de altura.",
      vision: "Posicionar los ingredientes andinos como la nueva tendencia mundial en skincare natural.",
      dueños: "Emprendimiento familiar paceño",
      direccion: "Feria 16 de Julio, El Alto, La Paz",
      telefono: "+591 700 12 121",
      whatsapp: "59170012121",
      email: "flordeillimani@gmail.com",
      productos: [
        { imagen: "assets/img/productos/lp-flor-illimani-balsamo.jpg", nombre: "Bálsamo Labial de Maca", desc: "Repara labios agrietados por el viento y el frío.", precio: 25 },
        { imagen: "assets/img/productos/lp-flor-illimani-crema.jpg", nombre: "Crema Facial de Muña", desc: "Calma la piel irritada y refresca el rostro.", precio: 48 },
        { imagen: "assets/img/productos/lp-flor-illimani-jabon.jpg", nombre: "Jabón Artesanal de Yareta", desc: "Limpia sin resecar, elaborado a mano en pequeños lotes.", precio: 20 },
        { imagen: "assets/img/productos/lp-flor-illimani-crema-corporal.jpg", nombre: "Crema Corporal de Caléndula y Manzanilla", desc: "Crema corporal que calma la picazón, reduce las rojeces y combate la resequedad en pieles secas.", precio: 35 },
        { imagen: "assets/img/productos/lp-flor-illimani-jabon-lavanda.jpg", nombre: "Jabón Artesanal de Lavanda y Miel", desc: "Jabón de ingredientes naturales con aroma relajante para limpiar suavemente e hidratar la piel sensible.", precio: 22 },
        { imagen: "assets/img/productos/lp-flor-illimani-gel-cream-calmante-de.jpg", nombre: "Gel Cream Calmante de Centella Asiática", desc: "Hidratante en textura gel de rápida absorción formulado para reducir rojeces y calmar pieles irritadas o con brotes.", precio: 95 },
        { imagen: "assets/img/productos/lp-flor-illimani-crema-facial-refresh-de.jpg", nombre: "Crema Facial Refresh de Menta y Aloe Vera", desc: "Crema ligera refrescante con extractos naturales que hidratan profundamente mientras aportan una sensación helada reconfortante.", precio: 68 },
        { imagen: "assets/img/productos/lp-flor-illimani-crema-facial-botanica-de.jpg", nombre: "Crema Facial Botánica de Eucalipto y Árbol de Té", desc: "Hidratante purificante que calma el enrojecimiento mientras ayuda a controlar el exceso de bacterias en la piel.", precio: 62 },
        { imagen: "assets/img/productos/lp-flor-illimani-locion-facial-calmente-de.jpg", nombre: "Loción Facial Calmente de Avena y B5", desc: "Emulsión ligera enriquecida con provitamina B5 para restaurar la barrera cutánea dañada y prevenir la irritación.", precio: 82 },
        { imagen: "assets/img/productos/lp-flor-illimani-balsemo-calmente-de-calendula.jpg", nombre: "Bálsemo Calmente de Caléndula y Manzanilla", desc: "Tratamiento facial reparador diseñado para aliviar la tirantez, descamación y reactividad cutánea.", precio: 78 }
      ],
      reseñas: [
        { autor: "Wara C.", estrellas: 5, texto: "Amo que sea 100% boliviano y natural, mi piel lo agradece." },
        { autor: "Nayra S.", estrellas: 5, texto: "El bálsamo de maca me salvó en época de viento." },
        { autor: "Israel Q.", estrellas: 4, texto: "Buen producto, empaque sencillo pero funciona muy bien." }
      ]
    },
    {
      id: "lp-kantuta-moda",
      nombre: "Kantuta Moda",
      tipo: "nacional",
      pais: "Bolivia",
      categoria: "Ropa",
      icono: "🌺",
      mision: "Diseñar ropa boliviana que combine identidad andina y tendencias urbanas, confeccionada por manos paceñas.",
      vision: "Llevar la moda boliviana con identidad propia a las calles de Sudamérica.",
      dueños: "Taller textil familiar, Zona Sur",
      direccion: "Calle 21 de Calacoto #340, La Paz",
      telefono: "+591 700 34 343",
      whatsapp: "59170034343",
      email: "kantutamoda@gmail.com",
      productos: [
        { imagen: "assets/img/productos/lp-kantuta-moda-chompa.jpg", nombre: "Chompa Bordada Kantuta", desc: "Bordado floral inspirado en la flor nacional, tejido a mano.", precio: 160 },
        { imagen: "assets/img/productos/lp-kantuta-moda-poncho.jpg", nombre: "Poncho Urbano Reversible", desc: "Dos estilos en una sola prenda, tela gruesa de alpaca.", precio: 240 },
        { imagen: "assets/img/productos/lp-kantuta-moda-falda.jpg", nombre: "Falda Wayra Plisada", desc: "Corte moderno con telar tradicional en la cintura.", precio: 135 },
        { imagen: "assets/img/productos/lp-kantuta-moda-cardigan.jpg", nombre: "Cárdigan Abierto de Hilo", desc: "Suéter ligero y versátil para complementar atuendos de diario.", precio: 145 },
        { imagen: "assets/img/productos/lp-kantuta-moda-chalina-alpaca.jpg", nombre: "Chalina de Alpaca Tejida a Mano", desc: "Accesorio liviano y muy abrigador para proteger el cuello contra el frío.", precio: 120 },
        { imagen: "assets/img/productos/lp-kantuta-moda-blusa-bordada-flor-kantuta.jpg", nombre: "Blusa Bordada Flor de Kantuta", desc: "Blusa de algodón con bordado floral artesanal inspirado en la flor nacional.", precio: 110 },
        { imagen: "assets/img/productos/lp-kantuta-moda-falda-larga-tejida-andina.jpg", nombre: "Falda Larga Tejida Andina", desc: "Falda de corte recto con detalles tejidos a telar en la cintura, ideal para el día a día.", precio: 150 },
        { imagen: "assets/img/productos/lp-kantuta-moda-chompa-alpaca-cuello-alto.jpg", nombre: "Chompa de Alpaca Cuello Alto", desc: "Chompa gruesa 100% alpaca con cuello alto, pensada para el frío intenso de la ciudad.", precio: 210 },
        { imagen: "assets/img/productos/lp-kantuta-moda-gorro-guantes-alpaca-baby.jpg", nombre: "Set Gorro y Guantes de Alpaca Baby", desc: "Accesorios tejidos en alpaca baby, suaves y muy abrigadores, ideales para las mañanas frías.", precio: 95 }
      ],
      reseñas: [
        { autor: "Alejandra M.", estrellas: 5, texto: "La chompa es una obra de arte, súper abrigadora." },
        { autor: "Yolanda P.", estrellas: 5, texto: "Me encanta apoyar el trabajo boliviano, calidad excelente." },
        { autor: "Brenda R.", estrellas: 4, texto: "El poncho es hermoso, tal cual la foto." }
      ]
    },
    {
      id: "lp-wara-beauty",
      nombre: "Wara Beauty",
      tipo: "nacional",
      pais: "Bolivia",
      categoria: "Maquillaje",
      icono: "✨",
      mision: "Crear maquillaje boliviano adaptado a la altura, con fórmulas que no se sequen ni se cuarteen por el clima paceño.",
      vision: "Ser la primera marca 100% boliviana de maquillaje reconocida a nivel nacional.",
      dueños: "Emprendimiento de dos hermanas paceñas",
      direccion: "Galería Doryan, local 45, La Paz",
      telefono: "+591 700 45 454",
      whatsapp: "59170045454",
      email: "warabeauty.bo@gmail.com",
      productos: [
        { imagen: "assets/img/productos/lp-wara-beauty-polvo.jpg", nombre: "Polvo Compacto Matificante", desc: "Controla el brillo típico de la altura sin resecar.", precio: 58 },
        { imagen: "assets/img/productos/lp-wara-beauty-delineador.jpg", nombre: "Delineador en Gel Waterproof", desc: "Resistente al sol y al sudor, trazo preciso.", precio: 40 },
        { imagen: "assets/img/productos/lp-wara-beauty-set de brochas.jpg", nombre: "Set de Brochas Andinas", desc: "5 brochas con mango de madera de queñua.", precio: 90 },
        { imagen: "assets/img/productos/lp-wara-beauty-paleta-sombras.jpg", nombre: "Paleta de Sombras Tonos Andinos", desc: "Paleta con sombras mates y brillosas altamente pigmentadas para maquillaje de ojos.", precio: 110 },
        { imagen: "assets/img/productos/lp-wara-beauty-esponja.jpg", nombre: "Esponja de Maquillaje Ergonómica", desc: "Herramienta suave para aplicar y difuminar bases o correctores de forma uniforme y natural.", precio: 30 },
        { imagen: "assets/img/productos/lp-wara-beauty-labial-mate-larga-duracion.jpg", nombre: "Labial Mate Larga Duración Andino", desc: "Labial líquido de alta pigmentación y acabado mate que no reseca los labios en la altura.", precio: 45 },
        { imagen: "assets/img/productos/lp-wara-beauty-base-liquida-ligera-altura.jpg", nombre: "Base Líquida Ligera Altura", desc: "Base de cobertura media que se adapta al clima seco paceño sin marcar líneas de expresión.", precio: 78 },
        { imagen: "assets/img/productos/lp-wara-beauty-corrector-de-ojeras-alta-cobertura.jpg", nombre: "Corrector de Ojeras Alta Cobertura", desc: "Corrector cremoso que disimula ojeras e imperfecciones con acabado natural.", precio: 42 },
        { imagen: "assets/img/productos/lp-wara-beauty-mascara-de-pestanas-volumen-andino.jpg", nombre: "Máscara de Pestañas Volumen Andino", desc: "Rímel a prueba de agua que aporta volumen y curvatura sin dejar grumos.", precio: 48 }
      ],
      reseñas: [
        { autor: "Estefanía L.", estrellas: 5, texto: "Por fin un polvo que no se ve reseco en La Paz." },
        { autor: "Mariana O.", estrellas: 4, texto: "Buena calidad y precio justo, apoyo lo boliviano." },
        { autor: "Jhoselin A.", estrellas: 5, texto: "El set de brochas es hermoso y funciona genial." }
      ]
    }
  ],

  "cochabamba": [
    {
      id: "cb-seoul-skin-lab",
      nombre: "Seoul Skin Lab",
      tipo: "extranjera",
      pais: "Corea del Sur",
      categoria: "Cuidado de la piel",
      icono: "🧴",
      mision: "Llevar la innovación coreana en skincare a Cochabamba, con rutinas simples y efectivas para climas cálidos.",
      vision: "Ser el laboratorio de belleza coreano preferido del valle cochabambino para el 2027.",
      dueños: "Sucursal boliviana",
      direccion: "Av. Ballivián (El Prado) #789, Cochabamba",
      telefono: "+591 700 21 212",
      whatsapp: "59170021212",
      email: "hola@seoulskinlab.kr",
      productos: [
        { imagen: "assets/img/productos/cb-seoul-skin-lab-serum.jpg", nombre: "Serum de Niacinamida 10%", desc: "Controla la grasa y minimiza los poros visibles.", precio: 98 },
        { imagen: "assets/img/productos/cb-seoul-skin-lab-limbiador te verde.jpg", nombre: "Espuma Limpiadora de Té Verde", desc: "Limpieza profunda sin resecar la piel.", precio: 55 },
        { imagen: "assets/img/productos/cb-seoul-skin-lab-parche.jpg", nombre: "Parche de Hidrocoloide Anti-granitos", desc: "Absorbe impurezas y acelera la cicatrización.", precio: 30 },
        { imagen: "assets/img/productos/cb-seoul-skin-lab-niacinamida-ordinary.jpg", nombre: "Sérum Niacinamida 10% + Zinc 1%", desc: "Fórmula concentrada rica en vitaminas y minerales que reduce las imperfecciones de la piel y equilibra el exceso de sebo.", precio: 82 },
        { imagen: "assets/img/productos/cb-seoul-skin-lab-serum-effaclar.jpg", nombre: "Sérum Ultra Concentrado Anti-Imperfecciones", desc: "Combinación de ácidos exfoliantes y niacinamida para corregir imperfecciones persistentes y marcas en pieles grasas.", precio: 195 },
        { imagen: "assets/img/productos/cb-seoul-skin-lab-serum-niacinamida-10-zinc.jpg", nombre: "Sérum Niacinamida 10% + Zinc 1% (The Ordinary)", desc: "Fórmula concentrada rica en vitaminas y minerales que reduce las imperfecciones de la piel y equilibra el exceso de sebo.", precio: 82 },
        { imagen: "assets/img/productos/cb-seoul-skin-lab-serum-niacinamida-b3-anti.jpg", nombre: "Sérum Niacinamida B3 Anti-Manchas (L'Oréal Revitalift)", desc: "Tratamiento fluido ligero formulado para reducir marcas oscuras y unificar el tono con rápida absorción.", precio: 105 },
        { imagen: "assets/img/productos/cb-seoul-skin-lab-serum-discoloration-defense-skinceuticals.jpg", nombre: "Sérum Discoloration Defense (Skinceuticals / Alternative)", desc: "Corrector de manchas de uso diario que ayuda a prevenir y corregir la hiperpigmentación de la cara.", precio: 130 },
        { imagen: "assets/img/productos/cb-seoul-skin-lab-serum-niacinamide-10-revolution.jpg", nombre: "Sérum Niacinamide 10% (Revolution Skincare)", desc: "Suero clarificante ideal para pieles con tendencia a imperfecciones, congestionadas y con poros dilatados.", precio: 68 },
        { imagen: "assets/img/productos/cb-seoul-skin-lab-serum-effaclar-serum-ultra.jpg", nombre: "Sérum Effaclar Serum Ultra Concentrado (La Roche-Posay)", desc: "Combinación de ácidos exfoliantes y niacinamida para corregir imperfecciones persistentes y marcas en pieles grasas.", precio: 195 }
      ],
      reseñas: [
        { autor: "Diana T.", estrellas: 5, texto: "El sérum de niacinamida controló mi piel grasa en dos semanas." },
        { autor: "Melissa R.", estrellas: 4, texto: "Muy buena espuma, deja la piel fresca." },
        { autor: "Katherine V.", estrellas: 5, texto: "Los parches son un salvavidas, los amo." }
      ]
    },
    {
      id: "cb-bogota-glow",
      nombre: "Bogotá Glow",
      tipo: "extranjera",
      pais: "Colombia",
      categoria: "Cuidado de la piel",
      icono: "🌷",
      mision: "Democratizar el acceso a cosmética colombiana de calidad para el consumidor cochabambino.",
      vision: "Ser la marca extranjera con mejor relación calidad-precio en el valle para el 2026.",
      dueños: "Distribuidora regional",
      direccion: "Av. Salamanca #456, Cochabamba",
      telefono: "+591 700 43 434",
      whatsapp: "59170043434",
      email: "info@bogotaglow.co",
      productos: [
        { imagen: "assets/img/productos/cb-bogota-crema hidratante de aguacate.jpg", nombre: "Crema Hidratante de Aguacate", desc: "Nutre profundamente la piel reseca por el sol del valle.", precio: 62 },
        { imagen: "assets/img/productos/cb-bogota-serum de vitamina c.jpg", nombre: "Sérum Vitamina C", desc: "Ilumina el tono y unifica las manchas solares.", precio: 85 },
        { imagen: "assets/img/productos/cb-bogota-protector solar en barra.jpg", nombre: "Protector Solar en Barra", desc: "Cómodo de reaplicar, ideal para actividades al aire libre.", precio: 70 },
        { imagen: "assets/img/productos/cb-bogota-hydro-boost-neutrogena.jpg", nombre: "Crema Facial Hydro Boost Water Gel", desc: "Gel hidratante con ácido hialurónico que renueva los niveles de agua de la piel sin obstruir los poros.", precio: 87 },
        { imagen: "assets/img/productos/cb-bogota-avocado-ponds.jpg", nombre: "Crema Facial Nutritiva Avocado & Hyaluronic", desc: "Crema de nutrición intensiva que combina aceites naturales de aguacate y complejo hidratante diario.", precio: 52 },
        { imagen: "assets/img/productos/cb-bogota-glow-crema-facial-hydro-boost.jpg", nombre: "Crema Facial Hydro Boost Water Gel (Neutrogena)", desc: "Gel hidratante con ácido hialurónico que renueva los niveles de agua de la piel sin obstruir los poros.", precio: 88 },
        { imagen: "assets/img/productos/cb-bogota-glow-crema-facial-nutritiva-avocado.jpg", nombre: "Crema Facial Nutritiva Avocado & Hyaluronic (Pond's)", desc: "Crema de nutrición intensiva que combina aceites naturales de aguacate y complejo hidratante diario.", precio: 52 },
        { imagen: "assets/img/productos/cb-bogota-glow-gel-cream-acido-hialuronico.jpg", nombre: "Gel Cream Ácido Hialurónico + Ceramidas (Cerave)", desc: "Loción facial hidratante que restaura la barrera protectora cutánea y mantiene la humedad.", precio: 100 },
        { imagen: "assets/img/productos/cb-bogota-glow-crema-facial-bio-hydratante.jpg", nombre: "Crema Facial Bio Hydratante (Nivea Soft / Natural)", desc: "Crema multipropósito refrescante con aceite de jojoba y vitamina E para rostro y cuerpo.", precio: 42 },
        { imagen: "assets/img/productos/cb-bogota-glow-crema-gel-revitalift-acido.jpg", nombre: "Crema Gel Revitalift Ácido Hialurónico (L'Oréal)", desc: "Crema ligera rellena-arrugas que aporta hidratación profunda por 24 horas sin dejar sensación grasa.", precio: 92 }
      ],
      reseñas: [
        { autor: "Tatiana G.", estrellas: 5, texto: "El protector en barra es súper práctico para reaplicar." },
        { autor: "Verónica L.", estrellas: 4, texto: "El sérum de vitamina C aclaró mis manchitas." },
        { autor: "Carolina Z.", estrellas: 5, texto: "Excelente calidad, se nota que es colombiano de verdad." }
      ]
    },
    {
      id: "cb-milano-style",
      nombre: "Milano Style",
      tipo: "extranjera",
      pais: "Italia",
      categoria: "Ropa",
      icono: "🧥",
      mision: "Traer la sastrería italiana a Cochabamba con prendas atemporales y de alta costura accesible.",
      vision: "Vestir a la mujer cochabambina con el estilo elegante y cálido de Milán.",
      dueños: "Boutique con licencia italiana",
      direccion: "Calle España #234, Cochabamba",
      telefono: "+591 700 65 656",
      whatsapp: "59170065656",
      email: "boutique@milanostyle.it",
      productos: [
        { imagen: "assets/img/productos/cb-milano-style-vestido camisero.jpg", nombre: "Vestido Camisero Lino", desc: "Fresco y elegante, ideal para el clima templado del valle.", precio: 260 },
        { imagen: "assets/img/productos/cb-milano-style-cartera de cuero.jpg", nombre: "Cartera de Cuero Italiano", desc: "Cuero genuino trabajado a mano en Milán.", precio: 340 },
        { imagen: "assets/img/productos/cb-milano-style-panuelo.jpg", nombre: "Pañuelo de Seda Estampado", desc: "Accesorio versátil para el cuello o el cabello.", precio: 95 },
        { imagen: "assets/img/productos/cb-milano-style-tote-cuero.jpg", nombre: "Tote Bag de Cuero Genuino", desc: "Bolso de hombro espacioso confeccionado en cuero vacuno natural con compartimento para laptop.", precio: 325 },
        { imagen: "assets/img/productos/cb-milano-style-satchel-cuero.jpg", nombre: "Cartera Estilo Satchel de Cuero", desc: "Bolso estructurado con correa ajustable para cruzar y asas superiores reforzadas.", precio: 300 },
        { imagen: "assets/img/productos/cb-milano-style-tote-bag-de-cuero.jpg", nombre: "Tote Bag de Cuero Genuino Marrón/Negro", desc: "Bolso de hombro espacioso confeccionado en cuero vacuno natural con compartimento para laptop.", precio: 325 },
        { imagen: "assets/img/productos/cb-milano-style-cartera-estilo-satchel-de.jpg", nombre: "Cartera Estilo Satchel de Cuero Minimalista", desc: "Bolso estructurado con correa ajustable para cruzar y asas superiores reforzadas.", precio: 300 },
        { imagen: "assets/img/productos/cb-milano-style-bolso-shopper-elegante-saffiano.jpg", nombre: "Bolso Shopper Elegante Saffiano", desc: "Cartera de gran capacidad con textura labrada anti-rayaduras y herrajes dorados.", precio: 270 },
        { imagen: "assets/img/productos/cb-milano-style-cartera-ejecutiva-con-multiples.jpg", nombre: "Cartera Ejecutiva con Múltiples Compartimentos", desc: "Bolso formal de cuero rígido con divisiones con cierre para organizar documentos y pertenencias.", precio: 340 },
        { imagen: "assets/img/productos/cb-milano-style-bolso-tote-de-cuero.jpg", nombre: "Bolso Tote de Cuero Sintético Premium Crossbody", desc: "Bolso versátil con textura granulada tipo cuero, incluye correa estampada intercambiable.", precio: 200 }
      ],
      reseñas: [
        { autor: "Isabela C.", estrellas: 5, texto: "El vestido es una joya, tela y corte perfectos." },
        { autor: "Fabiola M.", estrellas: 5, texto: "La cartera es de calidad excepcional, vale cada boliviano." },
        { autor: "Priscila N.", estrellas: 4, texto: "Hermoso pañuelo, llegó bien empacado." }
      ]
    },
    {
      id: "cb-sao-paulo-cosmeticos",
      nombre: "São Paulo Cosméticos",
      tipo: "extranjera",
      pais: "Brasil",
      categoria: "Maquillaje",
      icono: "💅",
      mision: "Acercar la explosión de color y vitalidad del maquillaje brasileño al público cochabambino.",
      vision: "Ser la marca brasileña líder en maquillaje tropical en Bolivia para el 2028.",
      dueños: "Franquicia con distribuidor local",
      direccion: "Av. América Este #1120, Cochabamba",
      telefono: "+591 700 87 878",
      whatsapp: "59170087878",
      email: "vendas@saopaulocosmeticos.br",
      productos: [
        { imagen: "assets/img/productos/cb-sao-paulo-cosmeticos-polvo.jpg", nombre: "Bronceador en Polvo", desc: "Efecto piel besada por el sol, muy pigmentado.", precio: 66 },
        { imagen: "assets/img/productos/cb-sao-paulo-cosmeticos-labial gloss.jpg", nombre: "Gloss Labial Efecto Volumen", desc: "Hidrata y da un efecto voluminoso instantáneo.", precio: 48 },
        { imagen: "assets/img/productos/cb-sao-paulo-cosmeticos-mascara.jpg", nombre: "Máscara de Pestañas Waterproof", desc: "Volumen intenso resistente al calor y al agua.", precio: 58 },
        { imagen: "assets/img/productos/cb-sao-paulo-cosmeticos-lash-sensational.jpg", nombre: "Máscara Lash Sensational Sky High", desc: "Máscara de pestañas con cepillo flexible que extiende y aporta volumen desde la raíz sin pesadez.", precio: 78 },
        { imagen: "assets/img/productos/cb-sao-paulo-cosmeticos-lash-paradise.jpg", nombre: "Máscara Voluminous Lash Paradise", desc: "Máscara con cepillo de cerdas suaves que proporciona volumen denso y longitud espectacular.", precio: 82 },
        { imagen: "assets/img/productos/cb-sao-paulo-cosmeticos-maybelline-lash-sensational-sky.jpg", nombre: "Maybelline Lash Sensational Sky High", desc: "Máscara de pestañas con cepillo flexible que extiende y aporta volumen desde la raíz sin pesadez.", precio: 78 },
        { imagen: "assets/img/productos/cb-sao-paulo-cosmeticos-l-oreal-voluminous-lash.jpg", nombre: "L'Oréal Voluminous Lash Paradise", desc: "Máscara con cepillo de cerdas suaves que proporciona volumen denso y longitud espectacular.", precio: 82 },
        { imagen: "assets/img/productos/cb-sao-paulo-cosmeticos-vogue-mascara-pestanas-muneca.jpg", nombre: "Vogue Máscara Pestañas Muñeca XL", desc: "Rímel económico que alarga y curvea las pestañas con fórmula resistente al agua.", precio: 40 },
        { imagen: "assets/img/productos/cb-sao-paulo-cosmeticos-wet-n-wild-mega.jpg", nombre: "Wet n Wild Mega Length Mascara", desc: "Máscara alargadora con cepillo de precisión fino enriquecida con vitamina E para definir las pestañas.", precio: 45 },
        { imagen: "assets/img/productos/cb-sao-paulo-cosmeticos-essence-i-love-extreme.jpg", nombre: "Essence I Love Extreme Crazy Volume", desc: "Rímel con cepillo de elastómero gigante que ofrece un volumen extremo e impacto visual inmediato.", precio: 50 }
      ],
      reseñas: [
        { autor: "Luana F.", estrellas: 5, texto: "El bronceador da un efecto natural hermoso." },
        { autor: "Bianca S.", estrellas: 4, texto: "El gloss no es pegajoso, me encantó." },
        { autor: "Rayssa D.", estrellas: 5, texto: "La máscara aguanta todo el día sin correrse." }
      ]
    },
    {
      id: "cb-french-beauty-paris",
      nombre: "French Beauty Paris",
      tipo: "extranjera",
      pais: "Francia",
      categoria: "Cuidado de la piel",
      icono: "🥐",
      mision: "Ofrecer la rutina de skincare minimalista francesa, enfocada en calidad sobre cantidad, al mercado boliviano.",
      vision: "Convertir el 'no-makeup look' francés en tendencia en Cochabamba.",
      dueños: "Importadora exclusiva",
      direccion: "Av. Aniceto Arce #310, Cochabamba",
      telefono: "+591 700 98 989",
      whatsapp: "59170098989",
      email: "bonjour@frenchbeautyparis.fr",
      productos: [
        { imagen: "assets/img/productos/cb-french-beauty-paris-agua micelar.jpg", nombre: "Agua Micelar Clásica", desc: "Desmaquilla y limpia en un solo paso, sin enjuague.", precio: 72 },
        { imagen: "assets/img/productos/cb-french-beauty-paris-aceite.jpg", nombre: "Aceite Facial Seco", desc: "Nutre sin dejar sensación grasa, aroma suave a lavanda.", precio: 118 },
        { imagen: "assets/img/productos/cb-french-beauty-paris-agua termal.jpg", nombre: "Bruma Facial de Agua Termal", desc: "Refresca y calma la piel en segundos.", precio: 65 },
        { imagen: "assets/img/productos/cb-french-beauty-paris-sensibio-h2o.jpg", nombre: "Agua Micelar Limpiadora Sensibio H2O", desc: "Solución micelar dermatológica que limpia, desmaquilla y calma la piel sensible respetando su equilibrio.", precio: 122 },
        { imagen: "assets/img/productos/cb-french-beauty-paris-revitalift.jpg", nombre: "Agua Micelar Rellenadora Revitalift", desc: "Limpiador micelar con ácido hialurónico que remueve impurezas mientras hidrata y suaviza el rostro.", precio: 72 },
        { imagen: "assets/img/productos/cb-french-beauty-paris-agua-micelar-limpiadora-sensibio.jpg", nombre: "Agua Micelar Limpiadora Sensibio H2O (Bioderma)", desc: "Solución micelar dermatológica que limpia, desmaquilla y calma la piel sensible respetando su equilibrio.", precio: 122 },
        { imagen: "assets/img/productos/cb-french-beauty-paris-agua-micelar-rellenadora-revitalift.jpg", nombre: "Agua Micelar Rellenadora Revitalift (L'Oréal)", desc: "Limpiador micelar con ácido hialurónico que remueve impurezas mientras hidrata y suaviza el rostro.", precio: 72 },
        { imagen: "assets/img/productos/cb-french-beauty-paris-agua-micelar-bifasica-con.jpg", nombre: "Agua Micelar Bifásica con Aceite de Argan (Garnier Alternative)", desc: "Solución en dos fases especial para retirar maquillaje a prueba de agua y de larga duración sin esfuerzo.", precio: 68 },
        { imagen: "assets/img/productos/cb-french-beauty-paris-agua-micelar-hydro-boost.jpg", nombre: "Agua Micelar Hydro Boost (Neutrogena)", desc: "Limpiador 3 en 1 enriquecido con ácido hialurónico que remueve impurezas y refuerza la hidratación.", precio: 78 },
        { imagen: "assets/img/productos/cb-french-beauty-paris-agua-micelar-desmaquillante-simple.jpg", nombre: "Agua Micelar Desmaquillante Simple Kind to Skin", desc: "Fórmula pura sin perfume ni colorantes artificiales que limpia e hidrata suavemente pieles sensibles.", precio: 58 }
      ],
      reseñas: [
        { autor: "Josefina B.", estrellas: 5, texto: "El agua micelar es un básico que ya no puedo dejar." },
        { autor: "Ariana P.", estrellas: 4, texto: "El aceite facial huele delicioso y se absorbe rápido." },
        { autor: "Milenka H.", estrellas: 5, texto: "La bruma es perfecta para refrescar en las tardes calurosas." }
      ]
    },
    {
      id: "cb-valle-bello",
      nombre: "Valle Bello",
      tipo: "nacional",
      pais: "Bolivia",
      categoria: "Cuidado de la piel",
      icono: "🌻",
      mision: "Elaborar cosmética natural con frutas del valle cochabambino como el durazno, la tuna y el maní.",
      vision: "Que cada hogar cochabambino tenga un producto Valle Bello en su rutina de belleza.",
      dueños: "Emprendimiento familiar de La Cancha",
      direccion: "Mercado La Cancha, puesto 212, Cochabamba",
      telefono: "+591 700 15 151",
      whatsapp: "59170015151",
      email: "vallebello.cbba@gmail.com",
      productos: [
        { imagen: "assets/img/productos/cb-valle-bello-exfo.jpg", nombre: "Exfoliante de Durazno", desc: "Renueva la piel con partículas naturales de carozo molido.", precio: 35 },
        { imagen: "assets/img/productos/cb-valle-bello-tuna.jpg", nombre: "Mascarilla de Tuna", desc: "Hidrata y calma la piel irritada por el sol.", precio: 32 },
        { imagen: "assets/img/productos/cb-valle-bello-aceite de mani.jpg", nombre: "Aceite de Maní para Cuerpo", desc: "Nutre profundamente la piel seca del cuerpo.", precio: 45 },
        { imagen: "assets/img/productos/cb-valle-bello-vestido-floral-a.jpg", nombre: "Vestido Midi Floral Corte A", desc: "Prenda ligera de tela fresca con estampado de flores silvestres, cintura marcada y falda fluida.", precio: 162 },
        { imagen: "assets/img/productos/cb-valle-bello-vestido-vintage.jpg", nombre: "Vestido Estilo Vintage de Flores", desc: "Vestido retro con escote en V, abotonadura frontal y estampado botánico en fondo claro.", precio: 152 },
        { imagen: "assets/img/productos/cb-valle-bello-vestido-midi-floral-corte.jpg", nombre: "Vestido Midi Floral Corte A con Manga Corta", desc: "Prenda ligera de tela fresca con estampado de flores silvestres, cintura marcada y falda fluida.", precio: 162 },
        { imagen: "assets/img/productos/cb-valle-bello-vestido-estilo-vintage-de.jpg", nombre: "Vestido Estilo Vintage de Flores con Botones", desc: "Vestido retro con escote en V, abotonadura frontal y estampado botánico en fondo claro.", precio: 152 },
        { imagen: "assets/img/productos/cb-valle-bello-vestido-largo-maxi-floral.jpg", nombre: "Vestido Largo Maxi Floral de Tirantes", desc: "Vestido largo de estilo bohemio con tirantes ajustables y falda con elástico en la espalda.", precio: 175 },
        { imagen: "assets/img/productos/cb-valle-bello-vestido-casual-escote-cuadrado.jpg", nombre: "Vestido Casual Escote Cuadrado Floral", desc: "Prenda con mangas abullonadas, escote cuadrado favorecedor y estampado continuo de flores.", precio: 148 },
        { imagen: "assets/img/productos/cb-valle-bello-vestido-corto-camisero-floral.jpg", nombre: "Vestido Corto Camisero Floral", desc: "Vestido liviano con cuello camisero, lazo para entallar en la cintura y motivos florales pastel.", precio: 142 }
      ],
      reseñas: [
        { autor: "Norah G.", estrellas: 5, texto: "El exfoliante de durazno huele delicioso y funciona genial." },
        { autor: "Belén C.", estrellas: 5, texto: "Apoyo lo local y los productos son de excelente calidad." },
        { autor: "Sheyla R.", estrellas: 4, texto: "La mascarilla de tuna dejó mi piel muy suave." }
      ]
    },
    {
      id: "cb-cochabamba-textil",
      nombre: "Cochabamba Textil",
      tipo: "nacional",
      pais: "Bolivia",
      categoria: "Ropa",
      icono: "🧵",
      mision: "Confeccionar ropa boliviana de algodón pima cochabambino con diseños frescos para el valle.",
      vision: "Posicionar el algodón cochabambino como sinónimo de calidad textil en toda Bolivia.",
      dueños: "Cooperativa textil de Quillacollo",
      direccion: "Av. Blanco Galindo km 5, Quillacollo, Cochabamba",
      telefono: "+591 700 26 262",
      whatsapp: "59170026262",
      email: "cochabambatextil@gmail.com",
      productos: [
        { imagen: "assets/img/productos/cb-textil-camisa de algodon.jpg", nombre: "Camisa de Algodón Pima", desc: "Tela fresca y suave, perfecta para el clima cálido del valle.", precio: 110 },
        { imagen: "assets/img/productos/cb-textil-vestido veraniego.jpg", nombre: "Vestido Veraniego Floral", desc: "Estampado inspirado en las flores del valle.", precio: 145 },
        { imagen: "assets/img/productos/cb-textil-short.jpg", nombre: "Short de Lino Cochabambino", desc: "Cómodo y transpirable para los días de calor.", precio: 85 },
        { imagen: "assets/img/productos/cb-textil-scrub-durazno.jpg", nombre: "Exfoliante Corporal de Durazno", desc: "Exfoliante profundo formulado con polvo de cáscara de nuez 100% natural para suavizar la piel áspera.", precio: 45 },
        { imagen: "assets/img/productos/cb-textil-scrub-frutos-pasion.jpg", nombre: "Exfoliante de Azúcar y Fruta de la Pasión", desc: "Scrub de gránulos de azúcar natural con aceites nutritivos que exfolian e hidratan simultáneamente.", precio: 72 },
        { imagen: "assets/img/productos/cb-cochabamba-textil-exfoliante-corporal-scrub-de.jpg", nombre: "Exfoliante Corporal Scrub de Albaricoque/Durazno (St. Ives)", desc: "Exfoliante profundo formulado con polvo de cáscara de nuez 100% natural para suavizar la piel áspera.", precio: 45 },
        { imagen: "assets/img/productos/cb-cochabamba-textil-exfoliante-de-azucar-y.jpg", nombre: "Exfoliante de Azúcar y Fruta de la Pasión (Tree Hut Alternative)", desc: "Scrub de gránulos de azúcar natural con aceites nutritivos que exfolian e hidratan simultáneamente.", precio: 72 },
        { imagen: "assets/img/productos/cb-cochabamba-textil-scrub-corporal-renovador-de.jpg", nombre: "Scrub Corporal Renovador de Sal Marina y Toronja", desc: "Exfoliante de sal marina enriquecido con extractos cítricos para revitalizar y refrescar la piel cansada.", precio: 62 },
        { imagen: "assets/img/productos/cb-cochabamba-textil-exfoliante-corporal-nutritivo-de.jpg", nombre: "Exfoliante Corporal Nutritivo de Sandía / Watermelon", desc: "Gel exfoliante suave con semillas naturales que refresca la piel dejando una fragancia dulce y frutal.", precio: 45 },
        { imagen: "assets/img/productos/cb-cochabamba-textil-exfoliante-corporal-suavizante-de.jpg", nombre: "Exfoliante Corporal Suavizante de Café y Coco", desc: "Mezcla de café molido y aceite de coco diseñada para estimular la circulación y remover célulasmuertas.", precio: 50 }
      ],
      reseñas: [
        { autor: "Lizeth A.", estrellas: 5, texto: "La camisa es fresquísima, ideal para el calor de Cochabamba." },
        { autor: "Ruth M.", estrellas: 4, texto: "Buena calidad de tela y buen precio." },
        { autor: "Ingrid V.", estrellas: 5, texto: "El vestido floral es hermoso, tal cual las fotos." }
      ]
    },
    {
      id: "cb-llajta-makeup",
      nombre: "Llajta Makeup",
      tipo: "nacional",
      pais: "Bolivia",
      categoria: "Maquillaje",
      icono: "🎨",
      mision: "Crear maquillaje boliviano resistente al calor y la humedad típicos del valle cochabambino.",
      vision: "Ser la marca de maquillaje nacional líder en el valle para el 2027.",
      dueños: "Emprendimiento cochabambino joven",
      direccion: "Av. Heroínas #560, Cochabamba",
      telefono: "+591 700 37 373",
      whatsapp: "59170037373",
      email: "llajtamakeup@gmail.com",
      productos: [
        { imagen: "assets/img/productos/cb-llajta-makeup-base anticolor.jpg", nombre: "Base Mate Anti-Calor", desc: "Controla el brillo en climas cálidos y húmedos.", precio: 62 },
        { imagen: "assets/img/productos/cb-llajta-makeup-labiales.jpg", nombre: "Paleta de Labiales Mini", desc: "6 tonos en formato viaje, larga duración.", precio: 50 },
        { imagen: "assets/img/productos/cb-llajta-makeup-fijador.jpg", nombre: "Spray Fijador Refrescante", desc: "Fija el maquillaje con una sensación fresca al instante.", precio: 40 },
        { imagen: "assets/img/productos/cb-llajta-makeup-fit-me.jpg", nombre: "Base Fit Me Matte + Poreless", desc: "Base líquida ligera de cobertura media construible que controla el brillo y disimula los poros.", precio: 72 },
        { imagen: "assets/img/productos/cb-llajta-makeup-photo-focus.jpg", nombre: "Base Photo Focus Matte", desc: "Base probada contra el reflejo blanco en fotos, con acabado mate aterciopelado y cobertura media.", precio: 50 },
        { imagen: "assets/img/productos/cb-llajta-makeup-maybelline-fit-me-matte.jpg", nombre: "Maybelline Fit Me Matte + Poreless Foundation", desc: "Base líquida ligera de cobertura media construible que controla el brillo y disimula los poros.", precio: 72 },
        { imagen: "assets/img/productos/cb-llajta-makeup-wet-n-wild-photo.jpg", nombre: "Wet n Wild Photo Focus Matte Foundation", desc: "Base probada contra el reflejo blanco en fotos que ofrece acabado mate aterciopelado y cobertura media.", precio: 50 },
        { imagen: "assets/img/productos/cb-llajta-makeup-l-oreal-infallible-24h.jpg", nombre: "L'Oréal Infallible 24H Matte Cover", desc: "Base fluida de alta pigmentación con acabado mate máximo que controla la grasa sin resecar.", precio: 100 },
        { imagen: "assets/img/productos/cb-llajta-makeup-revlon-colorstay-combination-oily.jpg", nombre: "Revlon ColorStay Combination/Oily Skin", desc: "Fórmula clásica libre de aceite que controla los brillos y ofrece cobertura media-alta de larga duración.", precio: 82 },
        { imagen: "assets/img/productos/cb-llajta-makeup-catrice-hd-liquid-coverage.jpg", nombre: "Catrice HD Liquid Coverage Foundation", desc: "Base de alta cobertura ultraligera con gotero que dura hasta 24 horas con acabado efecto segunda piel.", precio: 68 }
      ],
      reseñas: [
        { autor: "Fátima D.", estrellas: 5, texto: "La base aguanta perfecto con el calor de Cochabamba." },
        { autor: "Génesis P.", estrellas: 4, texto: "Los labiales son bonitos y duraderos." },
        { autor: "Marlene T.", estrellas: 5, texto: "El spray fijador se siente riquísimo, muy fresco." }
      ]
    }
  ],

  "santa-cruz": [
    {
      id: "sc-miami-beauty-usa",
      nombre: "Miami Beauty USA",
      tipo: "extranjera",
      pais: "Estados Unidos",
      categoria: "Cuidado de la piel",
      icono: "🌴",
      mision: "Traer la cosmética de alta tecnología de Miami al público cruceño, pensada para climas tropicales.",
      vision: "Ser la marca norteamericana referente en skincare tropical en Bolivia para el 2028.",
      dueños: "Distribuidora oficial Santa Cruz",
      direccion: "Av. San Martín #1450, Equipetrol, Santa Cruz",
      telefono: "+591 700 41 414",
      whatsapp: "59170041414",
      email: "hello@miamibeautyusa.com",
      productos: [
        { imagen: "assets/img/productos/sc-miami-beauty-usa-gel.jpg", nombre: "Gel Hidratante Oil-Free", desc: "Hidrata sin obstruir poros, ideal para climas calurosos.", precio: 92 },
        { imagen: "assets/img/productos/sc-miami-beauty-usa-protector solar.jpg", nombre: "Protector Solar Deportivo SPF60", desc: "Resistente al sudor y al agua hasta por 80 minutos.", precio: 105 },
        { imagen: "assets/img/productos/sc-miami-beauty-usa-serum.jpg", nombre: "Sérum Antioxidante de Vitamina E", desc: "Protege la piel del daño solar tropical.", precio: 115 },
        { imagen: "assets/img/productos/sc-miami-beauty-usa-fusion-water-spf50.jpg", nombre: "Fusion Water Magic SPF 50", desc: "Protector solar facial de fase acuosa que aporta hidratación intensa y absorción inmediata.", precio: 180 },
        { imagen: "assets/img/productos/sc-miami-beauty-usa-fusion-gel-sport.jpg", nombre: "Fusion Gel Sport SPF 50", desc: "Gel fotoprotector invisible y ultra fresco de secado inmediato, ideal para deportistas.", precio: 195 },
        { imagen: "assets/img/productos/sc-miami-beauty-usa-eryfotona-actinica-spf-100.jpg", nombre: "Eryfotona Actinica SPF 100+", desc: "Fotoprotección avanzada que repara el daño solar acumulado en la piel.", precio: 260 },
        { imagen: "assets/img/productos/sc-miami-beauty-usa-fotoprotector-hydrooil-spf-30.jpg", nombre: "Fotoprotector HydroOil SPF 30", desc: "Protector solar bifásico que protege y broncea la piel de forma natural.", precio: 210 },
        { imagen: "assets/img/productos/sc-miami-beauty-usa-isdinceutics-hyaluronic-concentrate.jpg", nombre: "Isdinceutics Hyaluronic Concentrate", desc: "Serum facial con ácido hialurónico puro que hidrata y rellena arrugas de expresión.", precio: 340 },
        { imagen: "assets/img/productos/sc-miami-beauty-usa-heliocare-360-airgel.jpg", nombre: "Heliocare 360° Airgel", desc: "Textura en espuma ultra ligera que se funde rápidamente con la piel.", precio: 225 }
      ],
      reseñas: [
        { autor: "Nicole F.", estrellas: 5, texto: "El protector solar es perfecto para el calor de Santa Cruz." },
        { autor: "Jimena R.", estrellas: 5, texto: "El gel hidratante no engrasa nada, ideal para acá." },
        { autor: "Alison T.", estrellas: 4, texto: "Excelente producto, envío rápido a Equipetrol." }
      ]
    },
    {
      id: "sc-k-glow-seul",
      nombre: "K-Glow Seúl",
      tipo: "extranjera",
      pais: "Corea del Sur",
      categoria: "Cuidado de la piel",
      icono: "🍑",
      mision: "Adaptar la rutina coreana de 10 pasos al clima tropical cruceño con fórmulas ligeras y frescas.",
      vision: "Ser la puerta de entrada al K-beauty en el oriente boliviano.",
      dueños: "Sucursal boliviana",
      direccion: "Calle Ballivián #240, Santa Cruz",
      telefono: "+591 700 52 525",
      whatsapp: "59170052525",
      email: "hola@kglowseul.kr",
      productos: [
        { imagen: "assets/img/productos/sc-k-glow-seul-esencia.jpg", nombre: "Esencia Ligera de Durazno", desc: "Textura acuosa que no pesa en climas calurosos.", precio: 88 },
        { imagen: "assets/img/productos/sc-k-glow-seul-mascarilla.jpg", nombre: "Mascarilla de Tela Refrescante", desc: "Calma la piel enrojecida por el sol tropical.", precio: 15 },
        { imagen: "assets/img/productos/sc-k-glow-seul-protector solar .jpg", nombre: "Protector Solar en Gel", desc: "Absorción instantánea, ideal para el calor cruceño.", precio: 100 },
        { imagen: "assets/img/productos/sc-k-glow-seul-heliocare-gel.jpg", nombre: "Heliocare 360° Gel Oil-Free SPF 50+", desc: "Protector solar facial en gel con toque seco para pieles mixtas y grasas.", precio: 205 },
        { imagen: "assets/img/productos/sc-k-glow-seul-heliocare-water-gel.jpg", nombre: "Heliocare 360° Water Gel SPF 50+", desc: "Fotoprotector ultra ligero con sistema de hidratación continua.", precio: 215 },
        { imagen: "assets/img/productos/sc-k-glow-seul-heliocare-360-color-gel.jpg", nombre: "Heliocare 360° Color Gel Oil-Free", desc: "Protector solar con cobertura de maquillaje ligera y acabado mate.", precio: 220 },
        { imagen: "assets/img/productos/sc-k-glow-seul-heliocare-ultra-d-capsulas.jpg", nombre: "Heliocare Ultra D Cápsulas Orales", desc: "Suplemento fotoprotector oral con Fernblock y vitamina D para reforzar defensas cutáneas.", precio: 280 },
        { imagen: "assets/img/productos/sc-k-glow-seul-heliocare-360-mineral-tolerance.jpg", nombre: "Heliocare 360° Mineral Tolerance Fluid", desc: "Filtros 100% minerales formulados para pieles sensibles o intolerantes.", precio: 230 },
        { imagen: "assets/img/productos/sc-k-glow-seul-heliocare-360-airgel.jpg", nombre: "Heliocare 360° Airgel", desc: "Textura en espuma ultra ligera que se funde rápidamente con la piel.", precio: 225 }
      ],
      reseñas: [
        { autor: "Camila O.", estrellas: 5, texto: "La esencia se siente súper ligera, perfecta para acá." },
        { autor: "Daniela K.", estrellas: 5, texto: "Las mascarillas son un gustito refrescante después del calor." },
        { autor: "Vanessa L.", estrellas: 4, texto: "Buen protector, se absorbe rápido sin pegotear." }
      ]
    },
    {
      id: "sc-buenos-aires-fashion",
      nombre: "Buenos Aires Fashion",
      tipo: "extranjera",
      pais: "Argentina",
      categoria: "Ropa",
      icono: "👚",
      mision: "Ofrecer moda argentina fresca y colorida, pensada para el clima cálido de Santa Cruz.",
      vision: "Ser la tienda de ropa argentina más grande del oriente boliviano para el 2029.",
      dueños: "Franquicia con local propio",
      direccion: "Av. Cristo Redentor #3er anillo, Santa Cruz",
      telefono: "+591 700 63 636",
      whatsapp: "59170063636",
      email: "info@bafashion.com.ar",
      productos: [
        { imagen: "assets/img/productos/sc-buenos-aires-fashion-vestido.jpg", nombre: "Vestido Fresco de Lino", desc: "Ideal para el calor cruceño, corte suelto y cómodo.", precio: 175 },
        { imagen: "assets/img/productos/sc-buenos-aires-fashion-top.jpg", nombre: "Top Cropped Algodón", desc: "Prenda versátil para looks casuales de calor.", precio: 90 },
        { imagen: "assets/img/productos/sc-buenos-aires-fashion-sandalias.jpg", nombre: "Sandalias de Cuero Trenzado", desc: "Diseño artesanal argentino, muy cómodas.", precio: 150 },
        { imagen: "assets/img/productos/sc-buenos-aires-fashion-delineador.jpg", nombre: "Delineador Líquido con Pincel", desc: "Delineador de alta pigmentación en tono negro intenso con aplicador fino de precisión.", precio: 35 },
        { imagen: "assets/img/productos/sc-buenos-aires-fashion-mascara-xxl.jpg", nombre: "Máscara de Pestañas Volumen XXL", desc: "Rímel a prueba de agua con cepillo de silicona para curvar y engrosar pestañas.", precio: 45 },
        { imagen: "assets/img/productos/sc-buenos-aires-fashion-delineador-liquido-con-pincel.jpg", nombre: "Delineador Líquido con Pincel para Ojos", desc: "Delineador de alta pigmentación en tono negro intenso con aplicador fino de precisión.", precio: 35 },
        { imagen: "assets/img/productos/sc-buenos-aires-fashion-labial-liquido-mate-larga.jpg", nombre: "Labial Líquido Mate Larga Duración", desc: "Labial líquido mate de textura ligera que no reseca los labios.", precio: 30 },
        { imagen: "assets/img/productos/sc-buenos-aires-fashion-lapiz-perfilador-de-cejas.jpg", nombre: "Lápiz Perfilador de Cejas Micro-Precision", desc: "Lápiz retráctil de punta fina con cepillo spoolie integrado para definir cejas.", precio: 25 },
        { imagen: "assets/img/productos/sc-buenos-aires-fashion-corrector-liquido-alta-cobertura.jpg", nombre: "Corrector Líquido Alta Cobertura", desc: "Corrector cremoso que disimula ojeras e imperfecciones con acabado natural.", precio: 40 },
        { imagen: "assets/img/productos/sc-buenos-aires-fashion-paleta-de-sombras-nude.jpg", nombre: "Paleta de Sombras Nude Essence (9 tonos)", desc: "Sombras compactas neutras con acabados mate y satinados de alta adherencia.", precio: 65 }
      ],
      reseñas: [
        { autor: "Brisa M.", estrellas: 5, texto: "El vestido es ideal para el calor de aquí, súper fresco." },
        { autor: "Yasmín Q.", estrellas: 4, texto: "Las sandalias son cómodas y bonitas." },
        { autor: "Estefany C.", estrellas: 5, texto: "Buena calidad de tela, se nota que es importado." }
      ]
    },
    {
      id: "sc-cosmetica-madrid",
      nombre: "Cosmética Madrid",
      tipo: "extranjera",
      pais: "España",
      categoria: "Maquillaje",
      icono: "💃",
      mision: "Llevar el maquillaje profesional español, resistente al calor, al oriente boliviano.",
      vision: "Ser la primera opción de maquillaje europeo en climas tropicales de Bolivia.",
      dueños: "Distribuidor autorizado Santa Cruz",
      direccion: "Av. Monseñor Rivero #560, Santa Cruz",
      telefono: "+591 700 74 747",
      whatsapp: "59170074747",
      email: "hola@cosmeticamadrid.es",
      productos: [
        { imagen: "assets/img/productos/sc-cosmetica-madrid-base.jpg", nombre: "Base Waterproof Tropical", desc: "No se corre con el calor ni la humedad.", precio: 128 },
        { imagen: "assets/img/productos/sc-cosmetica-madrid-polvo.jpg", nombre: "Polvo Suelto Matificante", desc: "Sella el maquillaje y controla el brillo todo el día.", precio: 70 },
        { imagen: "assets/img/productos/sc-cosmetica-madrid-delineador.jpg", nombre: "Delineador Líquido Resistente al Sudor", desc: "Trazo perfecto que no se corre en climas cálidos.", precio: 48 },
        { imagen: "assets/img/productos/sc-cosmetica-madrid-labial-cremoso-larga-duracion.jpg", nombre: "Labial Cremoso Larga Duración", desc: "Labial cremoso con alta pigmentación que aporta color continuo sin resecar los labios.", precio: 55 },
        { imagen: "assets/img/productos/sc-cosmetica-madrid-rubor-en-crema-sonrojo-natural.jpg", nombre: "Rubor en Crema Sonrojo Natural", desc: "Efecto natural 'recién sonrojada', fácil de difuminar incluso con calor.", precio: 68 },
        { imagen: "assets/img/productos/sc-cosmetica-madrid-perfilador-de-cejas-precision.jpg", nombre: "Perfilador de Cejas Precisión", desc: "Trazo ultra fino, resistente al agua y al sudor.", precio: 50 },
        { imagen: "assets/img/productos/sc-cosmetica-madrid-serum-facial-iluminador.jpg", nombre: "Sérum Facial Hidratante Iluminador", desc: "Sérum de rápida absorción que hidrata al instante y da un brillo saludable a la piel.", precio: 88 },
        { imagen: "assets/img/productos/sc-cosmetica-madrid-bruma-fijadora-12h.jpg", nombre: "Bruma Fijadora de Maquillaje 12H", desc: "Fija el maquillaje hasta 12 horas incluso en climas húmedos y calurosos.", precio: 76 },
        { imagen: "assets/img/productos/sc-cosmetica-madrid-sombras-tonos-tierra.jpg", nombre: "Paleta de Sombras Tonos Tierra", desc: "12 tonos cálidos y pigmentados, ideales para el día a día.", precio: 92 }
      ],
      reseñas: [
        { autor: "Milagros F.", estrellas: 5, texto: "La base aguanta el calor cruceño sin correrse, ¡al fin!" },
        { autor: "Solange B.", estrellas: 5, texto: "El delineador no se mancha ni con el sudor." },
        { autor: "Kimberly D.", estrellas: 4, texto: "Muy buen polvo, controla bien el brillo." }
      ]
    },
    {
      id: "sc-sao-paulo-trends",
      nombre: "São Paulo Trends",
      tipo: "extranjera",
      pais: "Brasil",
      categoria: "Ropa",
      icono: "🩱",
      mision: "Traer las tendencias brasileñas de moda urbana y playera para el estilo de vida cruceño.",
      vision: "Ser sinónimo de moda tropical brasileña en el oriente boliviano.",
      dueños: "Franquicia oficial",
      direccion: "Av. Beni km 4, Santa Cruz",
      telefono: "+591 700 85 858",
      whatsapp: "59170085858",
      email: "vendas@saopaulotrends.br",
      productos: [
        { imagen: "assets/img/productos/sc-sao-paulo-trends-vestido.jpg", nombre: "Vestido Playero Tropical", desc: "Estampado tropical, tela liviana ideal para el calor.", precio: 140 },
        { imagen: "assets/img/productos/sc-sao-paulo-trends-conjunto.jpg", nombre: "Conjunto Deportivo Ecológico", desc: "Fabricado con fibras recicladas, ideal para hacer ejercicio.", precio: 165 },
        { imagen: "assets/img/productos/sc-sao-paulo-trends-cangurera.jpg", nombre: "Cangurera Trendy", desc: "Accesorio práctico y de moda para el día a día.", precio: 80 },
        { imagen: "assets/img/productos/sc-sao-paulo-trends-vestido-midi-tropical-estampado.jpg", nombre: "Vestido Midi Tropical Estampado", desc: "Vestido midi fresco con estampado tropical, ideal para el calor cruceño.", precio: 165 },
        { imagen: "assets/img/productos/sc-sao-paulo-trends-blusa-cropped-verano.jpg", nombre: "Blusa Cropped de Verano", desc: "Prenda liviana y versátil, perfecta para looks casuales de calor.", precio: 85 },
        { imagen: "assets/img/productos/sc-sao-paulo-trends-short-deportivo-fresco.jpg", nombre: "Short Deportivo Fresco", desc: "Tela transpirable de secado rápido, ideal para el clima tropical.", precio: 70 },
        { imagen: "assets/img/productos/sc-sao-paulo-trends-sandalias-trenzadas-playeras.jpg", nombre: "Sandalias Trenzadas Playeras", desc: "Diseño artesanal brasileño, muy cómodas para el día a día.", precio: 140 },
        { imagen: "assets/img/productos/sc-sao-paulo-trends-bolso-tote-playero.jpg", nombre: "Bolso Tote Playero", desc: "Bolso espacioso de fibra natural, perfecto para ir a la playa o piscina.", precio: 120 },
        { imagen: "assets/img/productos/sc-sao-paulo-trends-panuelo-estampado-tropical.jpg", nombre: "Pañuelo Estampado Tropical", desc: "Accesorio versátil para el cuello, cabello o bolso.", precio: 65 }
      ],
      reseñas: [
        { autor: "Gimena L.", estrellas: 5, texto: "El vestido playero es hermoso y súper fresco." },
        { autor: "Karen S.", estrellas: 4, texto: "Buena calidad de tela, ideal para el calor." },
        { autor: "Nadia P.", estrellas: 5, texto: "El conjunto deportivo es cómodo y se ve genial." }
      ]
    },
    {
      id: "sc-tajibo-natural",
      nombre: "Tajibo Natural",
      tipo: "nacional",
      pais: "Bolivia",
      categoria: "Cuidado de la piel",
      icono: "🌼",
      mision: "Elaborar cosmética natural cruceña a base de frutas amazónicas como el asaí, el copoazú y el majo.",
      vision: "Que Bolivia entera conozca el poder de los frutos amazónicos en el cuidado de la piel.",
      dueños: "Emprendimiento familiar cruceño",
      direccion: "Mercado Los Pozos, puesto 88, Santa Cruz",
      telefono: "+591 700 16 161",
      whatsapp: "59170016161",
      email: "tajibonatural@gmail.com",
      productos: [
        { imagen: "assets/img/productos/sc-tajibo-natural-aceite.jpg", nombre: "Aceite de Copoazú", desc: "Nutre profundamente la piel reseca por el sol tropical.", precio: 55 },
        { imagen: "assets/img/productos/sc-tajibo-natural-mascarilla.jpg", nombre: "Mascarilla de Asaí Antioxidante", desc: "Protege la piel del daño ambiental amazónico.", precio: 40 },
        { imagen: "assets/img/productos/sc-tajibo-natural-jabon.jpg", nombre: "Jabón de Majo Artesanal", desc: "Limpieza suave, elaborado a mano en Santa Cruz.", precio: 22 },
        { imagen: "assets/img/productos/sc-tajibo-natural-crema-corporal-de-copoazu.jpg", nombre: "Crema Corporal de Copoazú", desc: "Crema corporal que calma la picazón y combate la resequedad causada por el sol tropical.", precio: 60 },
        { imagen: "assets/img/productos/sc-tajibo-natural-balsamo-labial-de-majo.jpg", nombre: "Bálsamo Labial de Majo", desc: "Repara labios resecos por el sol y el calor con aceite de majo amazónico.", precio: 25 },
        { imagen: "assets/img/productos/sc-tajibo-natural-exfoliante-de-cafe-amazonico.jpg", nombre: "Exfoliante de Café Amazónico", desc: "Mezcla de café molido y aceites naturales que estimula la circulación y renueva la piel.", precio: 48 },
        { imagen: "assets/img/productos/sc-tajibo-natural-aceite-corporal-de-buriti.jpg", nombre: "Aceite Corporal de Buriti", desc: "Aceite seco que nutre sin dejar sensación grasa, rico en antioxidantes amazónicos.", precio: 65 },
        { imagen: "assets/img/productos/sc-tajibo-natural-tonico-facial-de-aguaje.jpg", nombre: "Tónico Facial de Aguaje", desc: "Tónico refrescante que equilibra el pH y prepara la piel para la hidratación.", precio: 55 },
        { imagen: "assets/img/productos/sc-tajibo-natural-gel-refrescante-de-sabila.jpg", nombre: "Gel Refrescante de Sábila Amazónica", desc: "Hidratante en gel de rápida absorción que calma la piel irritada por el calor.", precio: 42 }
      ],
      reseñas: [
        { autor: "Yulissa G.", estrellas: 5, texto: "El aceite de copoazú es maravilloso para la piel reseca." },
        { autor: "Fabiana R.", estrellas: 5, texto: "Amo apoyar productos amazónicos bolivianos, calidad top." },
        { autor: "Cinthia M.", estrellas: 4, texto: "El jabón deja la piel muy suave y limpia." }
      ]
    },
    {
      id: "sc-crucena-fashion",
      nombre: "Cruceña Fashion",
      tipo: "nacional",
      pais: "Bolivia",
      categoria: "Ropa",
      icono: "🥻",
      mision: "Diseñar ropa boliviana fresca y colorida, inspirada en la alegría y el calor del oriente.",
      vision: "Vestir a la mujer cruceña con orgullo de lo hecho en Bolivia.",
      dueños: "Taller de costura de Santa Cruz",
      direccion: "Av. Cañoto #780, Santa Cruz",
      telefono: "+591 700 27 272",
      whatsapp: "59170027272",
      email: "crucenafashion@gmail.com",
      productos: [
        { imagen: "assets/img/productos/sc-crucena-fashion-vestido.jpg", nombre: "Vestido Camba Estampado", desc: "Diseño colorido inspirado en la flora cruceña.", precio: 150 },
        { imagen: "assets/img/productos/sc-crucena-fashion-blusa.jpg", nombre: "Blusa de Encaje Tropical", desc: "Tela fresca y transpirable, perfecta para el calor.", precio: 95 },
        { imagen: "assets/img/productos/sc-crucena-fashion-falda.jpg", nombre: "Falda Larga de Algodón", desc: "Corte cómodo y fresco para el día a día.", precio: 110 },
        { imagen: "assets/img/productos/sc-crucena-fashion-vestido-lino.jpg", nombre: "Vestido Fresco de Lino \"Santa Cruz\"", desc: "Vestido holgado de lino blanco ideal para el calor cruceño.", precio: 175 },
        { imagen: "assets/img/productos/sc-crucena-fashion-vestido-jardin.jpg", nombre: "Vestido Midi Algodón \"Jardín Oriental\"", desc: "Vestido midi con estampados florales inspirados en las orquídeas de la Chiquitania.", precio: 185 },
        { imagen: "assets/img/productos/sc-crucena-fashion-blusa-guipure-flor-de.jpg", nombre: "Blusa Guipure \"Flor de Patujú\"", desc: "Blusa corta de algodón con calados artesanales y detalles en cuello V.", precio: 120 },
        { imagen: "assets/img/productos/sc-crucena-fashion-mono-playero-llanos-del.jpg", nombre: "Mono Playero \"Llanos del Sur\"", desc: "Enterizo corto de tela fluida con escote drapeado para días de descanso.", precio: 165 },
        { imagen: "assets/img/productos/sc-crucena-fashion-salida-de-bano-brisa.jpg", nombre: "Salida de Baño \"Brisa Tropical\"", desc: "Túnica semi-transparente con borlas en los bordes para la playa o piscina.", precio: 130 },
        { imagen: "assets/img/productos/sc-crucena-fashion-falda-maxi-aroma-a.jpg", nombre: "Falda Maxi \"Aroma a Lino\"", desc: "Falda larga de lino rústico con botones frontales de madera.", precio: 150 }
      ],
      reseñas: [
        { autor: "Doris A.", estrellas: 5, texto: "El vestido es hermosísimo y fresco para el calor de acá." },
        { autor: "Ivonne M.", estrellas: 4, texto: "Buena calidad de tela, se nota el trabajo artesanal." },
        { autor: "Silvana T.", estrellas: 5, texto: "La blusa de encaje es preciosa, muy fresca." }
      ]
    },
    {
      id: "sc-camba-glow",
      nombre: "Camba Glow",
      tipo: "nacional",
      pais: "Bolivia",
      categoria: "Maquillaje",
      icono: "🔥",
      mision: "Crear maquillaje boliviano resistente al calor extremo del oriente, con colores vibrantes y tropicales.",
      vision: "Ser la marca de maquillaje nacional que conquiste todo el oriente boliviano.",
      dueños: "Emprendimiento cruceño joven",
      direccion: "Av. Alemana #4to anillo, Santa Cruz",
      telefono: "+591 700 38 383",
      whatsapp: "59170038383",
      email: "cambaglow@gmail.com",
      productos: [
        { imagen: "assets/img/productos/sc-camba-glow-base.jpg", nombre: "Base Anti-Sudor Tropical", desc: "Formulada especialmente para climas de más de 30°C.", precio: 65 },
        { imagen: "assets/img/productos/sc-camba-glow-paleta.jpg", nombre: "Paleta de Sombras Tropicales", desc: "Colores vibrantes inspirados en la flora cruceña.", precio: 78 },
        { imagen: "assets/img/productos/sc-camba-glow-bruma.jpg", nombre: "Bruma Fijadora Refrescante de Coco", desc: "Fija el maquillaje con un aroma tropical a coco.", precio: 42 },
        { imagen: "assets/img/productos/sc-camba-glow-labial-liquido-tropical-mate.jpg", nombre: "Labial Líquido Tropical Mate", desc: "Labial líquido mate de textura ligera que no reseca los labios con el calor.", precio: 40 },
        { imagen: "assets/img/productos/sc-camba-glow-delineador-waterproof-anti-calor.jpg", nombre: "Delineador Waterproof Anti-Calor", desc: "Trazo negro intenso resistente al sudor y la humedad del oriente.", precio: 38 },
        { imagen: "assets/img/productos/sc-camba-glow-corrector-anti-sudor.jpg", nombre: "Corrector Anti-Sudor Alta Cobertura", desc: "Corrector cremoso de larga duración que no se corre con el calor.", precio: 45 },
        { imagen: "assets/img/productos/sc-camba-glow-iluminador-en-polvo-tropical.jpg", nombre: "Iluminador en Polvo Tropical", desc: "Polvo con efecto piel besada por el sol, muy pigmentado.", precio: 55 },
        { imagen: "assets/img/productos/sc-camba-glow-set-de-brochas-tropicales.jpg", nombre: "Set de Brochas Tropicales", desc: "5 brochas de cerdas suaves para un maquillaje profesional en casa.", precio: 85 },
        { imagen: "assets/img/productos/sc-camba-glow-primer-matificante-anti-calor.jpg", nombre: "Primer Matificante Anti-Calor", desc: "Prepara la piel y controla el brillo antes de aplicar el maquillaje.", precio: 58 }
      ],
      reseñas: [
        { autor: "Any V.", estrellas: 5, texto: "La base sí aguanta el calor cruceño, por fin algo que funciona." },
        { autor: "Lorena C.", estrellas: 5, texto: "Los colores de la paleta son hermosos y bien pigmentados." },
        { autor: "Pamela G.", estrellas: 4, texto: "La bruma huele riquísimo y refresca bastante." }
      ]
    }
  ]
};

/* Equipo de "KROMA" — los 5 integrantes fundadores de la plataforma */
const EQUIPO = [
  { nombre: "Amaya Daniela Cano Alcón", cargo: "Gestora de Alianzas Estratégicas", foto: "assets/img/equipo/amaya-daniela-cano.jpg" },
  { nombre: "Selene Samira Sanjines Cruz", cargo: "Marketing digital y diseño", foto: "assets/img/equipo/selene-samira-sanjines.jpg" },
  { nombre: "Julio Sebastián Melendres Garnica", cargo: "Desarrollador de Software", foto: "assets/img/equipo/julio-sebastian-melendres.jpg" },
  { nombre: "Julián Ernesto Davila Lezano", cargo: "Analista de Datos y Captura de Información", foto: "assets/img/equipo/julian-ernesto-davila.jpg" },
  { nombre: "Eliana Valentina Cruz Quiroz", cargo: "Coordinadora y Soporte de Aliados", foto: "assets/img/equipo/eliana-valentina-cruz.jpg" }
];
