# Plan de implementación — Bosque Marino Ecolodge + Whale House Hotel

> **Estado:** pausado. Listo para retomar en implementación.
> **Última actualización:** 2026-11-09
> **Proyecto:** `bosque-marino-ecolodge`
> **Objetivo:** sumar Whale House Hotel a la web actual de Bosque Marino, manteniendo una sola página con pestañas para cada hospedaje, habitaciones propias y botón de reserva por habitación.

---

## 1. Resumen ejecutivo

La web actual es un template estático de una sola propiedad. Se va a evolucionar a una web de **dos alojamientos**:

- **Bosque Marino Ecolodge** (propiedad existente).
- **Whale House Hotel** (propiedad nueva, en Puerto López).

La página tendrá un **selector de propiedad** con dos pestañas. Al cambiar de pestaña se actualiza todo el contenido: hero, quiénes somos, comodidades, habitaciones, galería, precios, reseñas, ubicación, contacto y reservas.

Cada propiedad tendrá su propia sección de **Habitaciones** con tarjetas, fotos, capacidad, servicios y botón **“Reservar”**. Ese botón llevará al formulario con la propiedad y la habitación ya seleccionadas, y el formulario armará un mensaje de WhatsApp con todos los datos.

---

## 2. Decisiones confirmadas

| Tema | Decisión |
|---|---|
| Estructura | Pestañas que cambian el contenido de la página |
| Reseñas de Whale House | Mostrar solo reseñas positivas o mixtas, sin inventar nada |
| WhatsApp | Usar el mismo número para ambas propiedades: `+593 99 546 4860` |
| Precios | Mostrar “Consultar según temporada”, sin tarifas fijas |
| Diseño | Mantener la estética dorada/verde actual; Whale House con acento azul océano sutil |
| Marca principal | Bosque Marino Ecolodge, con Whale House como segunda propiedad |
| Idioma | Mantener el toggle ES/EN existente y agregar traducciones para el contenido nuevo |
| Templates | No tocar `preview-A.html`, `preview-B.html`, `preview-C.html` ni `js/switcher.js` |

---

## 3. Datos de las propiedades

### 3.1 Bosque Marino Ecolodge

**Datos base**

- Nombre: Bosque Marino Ecolodge.
- Ubicación: Puerto López, Manabí, Ecuador.
- Google: **4,3 / 5** con **34 reseñas**.
- Teléfono / WhatsApp: `+593 99 546 4860`.
- Coordenadas Google: `-1.5551455, -80.8061529`.
- Place ID: `0x902c209eeb27818d:0xc771e304521e46a4`.

**Descripción y servicios oficiales**

- 4.000 m² de jardín.
- A 300 m del mar.
- Piscina con forma de ballena.
- Billar y ping pong.
- Horno de pan.
- 4 habitaciones + 2 suites vacacionales con cocina.
- TV cable y WiFi.
- Habitaciones amplias y luminosas con vista al jardín.
- Espacio exclusivo para familias.

**Habitaciones propuestas**

> Los nombres comerciales deben confirmarse con el cliente. Se proponen tres categorías comercializables:

1. **Suite Vacacional con cocina**.
2. **Habitación Familiar**.
3. **Habitación Doble / Matrimonial**.

---

### 3.2 Whale House Hotel

**Datos base**

- Nombre: Whale House Hotel.
- Categoría Google: Hotel.
- Dirección: Mal. Julio Izurieta, 131950 Puerto López, Ecuador.
- Coordenadas Google: `-1.5513784, -80.8107681`.
- Place ID: `0x902e9f9fdc41f685:0x425659d61d247a7f`.
- Google: **3,6 / 5** con **24 reseñas**.
- Teléfono Google: `(05) 230-0289` / `+593 5-230-0289`.
- Web oficial: `whalewatchingecuador.com`.
- WhatsApp oficial de reservas: `099 422 5099` (no se usará, por decisión del cliente).
- Email oficial: `palosanto22@gmail.com`.

**Descripción y servicios oficiales**

- Primer hotel temático de ballenas en Ecuador.
- Frente al mar.
- A 3 minutos del malecón y del muelle.
- A 10 minutos a pie del centro.
- WiFi fibra óptica.
- Agua caliente.
- TV.
- Desayuno local incluido.
- Estacionamiento privado.
- Restaurante y bar.
- 10% de descuento en tours.
- Precios por habitación.
- Anticipo del 30%.
- Tarifas especiales para grupos.

**Habitaciones**

1. **Ocean View Deluxe**.
2. **Matrimonial / Doble / Triple**.
3. **Familiar**.

---

## 4. Arquitectura de la página

### 4.1 Selector de propiedades

Se agrega una barra de selección con dos botones:

```text
[ Bosque Marino ]   [ Whale House Hotel ]
```

**Ubicación propuesta:** debajo del header fijo, como barra compacta con fondo blur y borde inferior sutil. En mobile se muestran los dos botones a ancho completo o con scroll horizontal si no entran.

**Comportamiento**

- `activeProperty` arranca en `bosque`.
- Al hacer clic en una pestaña:
  - se actualiza el estado activo;
  - se vuelve a renderizar el contenido de esa propiedad;
  - se actualiza el hash de la URL sin recargar;
  - se mantiene la posición de scroll o se lleva suavemente al inicio de la sección de la propiedad.
- El estado se conserva al cambiar de idioma o de tema.
- Opcional: guardar la última propiedad elegida en `localStorage` con la clave `active_property`.
- Opcional: leer `?propiedad=whale` además del hash.

**Enlaces directos**

- `#bosque-marino`
- `#whale-house`

Al cargar la página con uno de esos hashes, se activa la propiedad correspondiente antes del primer render visible.

**Accesibilidad**

- Contenedor con `role="tablist"`.
- Botones con `role="tab"`, `aria-selected="true|false"` y `aria-controls`.
- Navegación con teclado: flechas izquierda/derecha y Enter/Espacio.
- El botón activo debe tener un indicador visual claro, no solo color.

---

### 4.2 Secciones que cambian según la propiedad

| Sección | ¿Cambia? | Detalle |
|---|---|---|
| Header / logo | Parcial | El logo principal se mantiene; el nombre de la propiedad activa aparece en el hero y en el selector |
| Hero | Sí | Video/poster, eyebrow, título, subtítulo y CTA |
| Trust bar | Sí | Beneficios de la propiedad activa |
| Quiénes somos | Sí | Texto y fotos |
| Comodidades | Sí | Servicios de la propiedad activa |
| Habitaciones | Sí | Tarjetas propias de cada propiedad |
| Galería | Sí | Fotos y lightbox |
| Precios | Sí | Mismo criterio “Consultar según temporada” |
| Cómo reservar | Parcial | Pasos generales; el mensaje de WhatsApp cambia según propiedad |
| Formulario de reserva | Sí | Propiedad y habitación activas |
| Testimonios | Sí | Reseñas de la propiedad activa |
| FAQ | Sí | Preguntas específicas de cada propiedad |
| Ubicación | Sí | Dirección, mapa, enlaces y descripción |
| Contacto | Sí | WhatsApp, teléfono, email y redes de la propiedad activa |
| Footer | Parcial | Marca general + enlaces generales |

---

### 4.3 Navegación

La navegación actual incluye:

`Quiénes somos · Comodidades · Galería · Precios · Preguntas · Ubicación · Reservar`

Propuesta:

- Mantener los enlaces actuales.
- Agregar **“Habitaciones”**.
- Agregar **“Propiedades”** como enlace al selector o a la sección superior.
- El CTA **“Reservar”** sigue visible y usa el WhatsApp de la propiedad activa.

En mobile, el menú hamburguesa debe seguir funcionando y cerrarse al tocar un enlace.

---

### 4.4 Estética

- Se mantiene la paleta actual: verde pino, dorado, marfil y carbón.
- Whale House tendrá un acento azul océano sutil, aplicado solamente a:
  - el botón activo del selector;
  - un badge o línea decorativa del hero;
  - pequeños detalles de las tarjetas de habitaciones.
- No se reemplaza la paleta global para no romper la identidad de Bosque Marino.
- Modo oscuro y claro deben seguir funcionando en ambas propiedades.

---

## 5. Modelo de datos

### 5.1 Estructura general de `config-data.js` / `config.json`

Se pasa de una configuración plana a una configuración con propiedad activa:

```js
{
  business: {
    name: "Bosque Marino Ecolodge",
    short_name: "Bosque Marino Ecolodge",
    tagline: "Bosque Marino & Whale House · Puerto López",
    description: "...",
    category: "Hospedaje"
  },

  properties: {
    bosque: {
      id: "bosque",
      label: "Bosque Marino",
      hero: {},
      about: {},
      trust_bar: [],
      amenities: [],
      rooms: [],
      gallery: {},
      pricing: {},
      testimonials: [],
      testimonials_meta: {},
      faq: [],
      location: {},
      contact: {},
      social: {}
    },

    whale: {
      id: "whale",
      label: "Whale House Hotel",
      hero: {},
      about: {},
      trust_bar: [],
      amenities: [],
      rooms: [],
      gallery: {},
      pricing: {},
      testimonials: [],
      testimonials_meta: {},
      faq: [],
      location: {},
      contact: {},
      social: {}
    }
  },

  i18n: {
    en: {
      // overrides generales
      properties: {
        bosque: {},
        whale: {}
      }
    }
  },

  footer: {},
  schema_ld: {}
}
```

> `config.json` debe quedar sincronizado con `config-data.js`. El sitio usa `window.__CONFIG` cuando existe, pero el fallback `config.json` debe seguir siendo válido.

---

### 5.2 Objeto de propiedad

Cada propiedad debe tener, como mínimo:

```js
{
  id: "whale",
  label: "Whale House Hotel",
  hero: {
    video: "",
    poster: "fotos/whale/general/g01.jpg",
    eyebrow: "Puerto López · Ecuador",
    title_line1: "Hospédate en",
    title_em: "Whale House Hotel",
    title_line2: "",
    subtitle: "Frente al mar, con desayuno incluido y vista al Pacífico."
  },
  about: {
    eyebrow: "Quiénes somos",
    title: "...",
    paragraphs: [],
    photos: []
  },
  trust_bar: [],
  amenities: [
    { icon: "wifi", title: "WiFi fibra óptica", description: "..." }
  ],
  rooms: [],
  gallery: {
    images: []
  },
  pricing: {
    eyebrow: "Precios",
    amount: "Consultar",
    period: "SEGÚN TEMPORADA",
    title: "Escribinos y te enviamos los precios actualizados según fechas.",
    cta_text: "Consultar disponibilidad"
  },
  testimonials: [],
  testimonials_meta: {
    source: "google",
    rating: 3.6,
    count: 24,
    url: "..."
  },
  faq: [],
  location: {
    address: "Mal. Julio Izurieta, 131950 Puerto López",
    district: "Puerto López",
    city: "Puerto López",
    province: "Manabí",
    country: "Ecuador",
    map_query: "Whale House Hotel, Puerto López, Ecuador",
    map_embed: "https://maps.google.com/maps?q=Whale+House+Hotel,+Puerto+L%C3%B3pez,+Ecuador&t=&z=16&ie=UTF8&iwloc=&output=embed",
    description: "...",
    highlights: []
  },
  contact: {
    whatsapp: "https://wa.me/593995464860",
    phone: "+593995464860",
    email: ""
  },
  social: {
    instagram: "",
    place_url: "https://www.google.com/maps/place/Whale+House+Hotel/...",
    website: "https://whalewatchingecuador.com",
    facebook: "",
    tiktok: ""
  }
}
```

---

### 5.3 Objeto de habitación

Cada habitación debe tener:

```js
{
  id: "ocean-view-deluxe",
  name: "Ocean View Deluxe",
  tagline: "Balcón privado frente al mar",
  description: "Habitación con 1 o 2 camas de dos plazas, balcón privado frente al mar, ducha con agua caliente y amenities biodegradables.",
  capacity: "1–2 huéspedes",
  beds: "1 o 2 camas de dos plazas",
  size: "",
  amenities: [
    "Balcón privado",
    "Vista al mar",
    "Agua caliente",
    "Amenities biodegradables"
  ],
  images: [
    "fotos/whale/ocean-view/01.jpg",
    "fotos/whale/ocean-view/02.jpg"
  ],
  price: "Consultar",
  whatsapp_message: "Hola, quiero reservar la habitación Ocean View Deluxe en Whale House Hotel."
}
```

Campos opcionales: `size`, `price_note`, `featured`, `order`.

---

## 6. Habitaciones

### 6.1 Whale House Hotel

#### Ocean View Deluxe

- 1 o 2 camas de dos plazas.
- Balcón privado frente al mar.
- Ducha con agua caliente.
- Amenities biodegradables.
- Vista al mar.
- Fotos: galerías oficiales `579620` y `579624`.

#### Matrimonial / Doble / Triple

- Cama king o dos camas.
- Vista montaña o interior.
- Escritorio.
- Closet.
- Ducha con agua caliente.
- Fotos: galerías oficiales `579627` y `579631`.

#### Familiar

- 3 o 4 camas de dos plazas.
- Con o sin cocina y menaje.
- Escritorio.
- Closet.
- Ducha con agua caliente.
- Fotos: galerías oficiales `579638` y `579642`.

---

### 6.2 Bosque Marino Ecolodge

> Nombres propuestos a confirmar con el cliente.

#### Suite Vacacional con cocina

- Ideal para familias o estadías largas.
- Cocina equipada.
- Vista al jardín.
- TV cable y WiFi.
- Fotos: reutilizar las mejores fotos actuales de Bosque Marino; opcionalmente sumar galerías oficiales `579619` y `595321`.

#### Habitación Familiar

- Amplia y luminosa.
- Vista al jardín.
- TV cable y WiFi.
- Baño privado.
- Fotos: fotos actuales de Bosque Marino.

#### Habitación Doble / Matrimonial

- Cama matrimonial o dos camas.
- Vista al jardín.
- TV cable y WiFi.
- Baño privado.
- Fotos: fotos actuales de Bosque Marino.

---

### 6.3 Sección “Habitaciones”

**Ubicación:** después de Comodidades y antes de Galería.

**Título propuesto:** “Habitaciones” / “Elegí tu habitación”.

**Tarjeta de habitación**

- Carrusel de fotos con flechas y contador.
- Nombre de la habitación.
- Tagline.
- Descripción.
- Capacidad y camas.
- Lista de servicios con iconos.
- Botón **“Reservar”**.
- En mobile: una columna, carrusel táctil o botones grandes.

**Comportamiento del botón “Reservar”**

1. Guarda `activeRoom` y `activeProperty`.
2. Hace scroll suave a `#reservas`.
3. Muestra un chip visible: “Estás reservando: {habitación} · {propiedad}”.
4. Al enviar el formulario, el mensaje de WhatsApp incluye propiedad, habitación, fechas y huéspedes.

---

## 7. Fotos y assets

### 7.1 Fuentes

**Whale House — Google Maps**

- 21 fotos descargadas en:
  `C:\Users\Matias\AppData\Local\Temp\opencode\whale-photos\g01.jpg` … `g21.jpg`.
- URL de origen:
  `https://www.google.com/maps/place/Whale+House+Hotel/@-1.5513784,-80.813343,17z/...`

**Whale House — sitio oficial**

- Página general:
  `https://whalewatchingecuador.com/es/hotel-puerto-lopez`
- Ocean View Deluxe:
  `https://whalewatchingecuador.com/es/oceanviewroom`
- Matrimonial / Doble:
  `https://whalewatchingecuador.com/es/oceanviewroom-copy`
- Familiar:
  `https://whalewatchingecuador.com/es/oceanviewroom-copy-copy`
- Galerías CloudFront:
  - Ocean View Deluxe: `579620`, `579624`.
  - Matrimonial: `579627`, `579631`.
  - Familiar: `579638`, `579642`.
  - General Whale House: `136344`, `590668`, `590669`, `590670`, `590671`.
  - Bosque Marino: `579619`, `595321`.

**Bosque Marino — assets existentes**

- `fotos/foto-01.jpg` a `foto-12.jpg`.
- `fotos/foto-01.webp` a `foto-12.webp`.
- No renombrar ni mover: la config actual los referencia.

---

### 7.2 Destino de las fotos

```text
fotos/
  whale/
    general/
      g01.jpg ... g21.jpg
      oficial-01.jpg ...
    ocean-view/
      01.jpg ...
    matrimonial/
      01.jpg ...
    familiar/
      01.jpg ...
  foto-01.jpg ... foto-12.jpg   (Bosque Marino, sin cambios)
```

Opcional:

```text
fotos/
  bosque/
    suite/
    familiar/
    doble/
```

Si se agregan fotos nuevas de Bosque Marino, usar `fotos/bosque/` y actualizar la config sin romper las existentes.

---

### 7.3 Uso de las fotos

- **Tarjetas de habitaciones Whale House:** usar las fotos oficiales de alta resolución, porque están asociadas a cada tipo de habitación.
- **Galería general Whale House:** usar las 21 fotos de Google Maps.
- **Hero Whale House:** elegir una foto general impactante; si no se puede validar visualmente, usar `g01.jpg` y dejar comentario para revisión.
- **Bosque Marino:** mantener las fotos actuales; sumar oficiales solo si mejoran la calidad.
- **Lightbox:** incluir las imágenes de la galería activa y permitir navegación con flechas, teclado y swipe.
- **Lazy loading:** todas las imágenes nuevas con `loading="lazy"` excepto el poster del hero.
- **Alt text:** descriptivo y honesto, por ejemplo:
  - `Whale House Hotel — vista general`
  - `Ocean View Deluxe — Whale House Hotel`
  - `Habitación Familiar — Whale House Hotel`
  - `Bosque Marino Ecolodge — jardín y piscina`

> No se pudo inspeccionar visualmente cada imagen durante el relevamiento. La asignación de fotos generales de Google es tentativa; antes de publicar hay que revisar que no haya fotos repetidas, borrosas o de otra propiedad.

---

## 8. WhatsApp y reservas

### 8.1 Número único

Todas las reservas usan:

```text
+593 99 546 4860
https://wa.me/593995464860
```

No se usará el `099 422 5099` de Whale House, salvo que el cliente lo pida más adelante.

---

### 8.2 Mensajes

**Consulta general**

```text
Hola, quiero consultar disponibilidad en {propiedad}.
```

**Reserva desde una habitación**

```text
Hola, quiero reservar en {propiedad}.
Habitación: {habitación}.
Llegada: {fecha}.
Salida: {fecha}.
Huéspedes: {cantidad}.
¿Hay disponibilidad?
```

**Formulario de reserva**

```text
Hola, quiero reservar en {propiedad}.
Habitación: {habitación o "a definir"}.
Del {llegada} al {salida} ({noches} noches).
Huéspedes: {cantidad}.
¿Hay disponibilidad?
```

En inglés se usa el mismo formato traducido.

---

### 8.3 CTAs que deben usar el WhatsApp de la propiedad activa

- Botón “Reservar” del header.
- Botón principal del hero.
- Botón de la sección Precios.
- Botón flotante de WhatsApp.
- Barra móvil inferior.
- Tarjeta de contacto.
- Botón “Reservar” de cada habitación (vía formulario).
- Enlaces de redes si corresponden.

---

### 8.4 Formulario de reserva

El formulario actual ya valida:

- fecha de llegada;
- fecha de salida;
- orden de fechas;
- fechas pasadas;
- cantidad de huéspedes.

Se debe extender para:

- guardar `activeProperty` y `activeRoom`;
- mostrar un chip con la habitación seleccionada;
- limpiar la habitación si el usuario cambia de propiedad;
- armar el mensaje con propiedad y habitación;
- mantener el mismo número de WhatsApp;
- no romper el re-render al cambiar de idioma.

**Detalle importante:** `initBookingForm()` se ejecuta una sola vez al cargar. Debe leer el estado global `activeProperty` / `activeRoom` en el momento del submit, no capturarlo en una clausura vieja.

---

## 9. Estrategia de reseñas

### 9.1 Criterio general

- Mostrar únicamente reseñas **positivas o mixtas**.
- No inventar reseñas.
- No cambiar el sentido de una reseña.
- Si se usa un extracto, indicarlo como “Extracto de una reseña” y no presentarlo como la reseña completa.
- No mostrar estrellas individuales si no se pueden verificar.
- Mostrar el promedio real de Google con enlace a la fuente.

---

### 9.2 Whale House Hotel

**Datos reales**

- Promedio Google: **3,6 / 5**.
- Cantidad: **24 reseñas**.
- Distribución Google (1★ → 5★): `4, 2, 4, 3, 11`.

**Reseñas disponibles y decisión**

| Autor | Tono | Uso propuesto |
|---|---|---|
| Emmanuelle Vigneron | Mixta | Usar extracto positivo: “El diseño está interesante y el desayuno está rico”. Indicar que es un extracto. |
| Marco Bravo | Mixta | Usar extracto positivo: “El lugar es acogedor y familiar, justo frente a la playa”. Indicar que es un extracto. |
| Hugo Auria Estrella | Negativa | No usar. |
| Carlos Aguirre | Negativa | No usar. |
| Melanie V | Negativa | No usar. |

**Presentación propuesta**

```text
Opiniones de huéspedes
★ 3,6 / 5 · 24 reseñas en Google
[Ver reseñas en Google]
```

Debajo, hasta 2 o 3 tarjetas con los extractos positivos/mixtos y el nombre del autor.

**Si no alcanzan las reseñas positivas/mixtas**

- Mostrar solo las disponibles.
- No completar con reseñas inventadas.
- No atribuir a Google reseñas de Booking.com o TripAdvisor sin aclarar la fuente.
- Opcional futuro: sumar reseñas positivas de Booking.com o TripAdvisor indicando claramente “Booking.com” o “TripAdvisor”, previa aprobación del cliente.

---

### 9.3 Bosque Marino Ecolodge

- Mantener los testimonios actuales si el cliente no pidió cambiarlos.
- Revisar que no se presenten como reseñas verificadas de Google si son demo.
- Si se consiguen reseñas reales de Google, reemplazarlos y mostrar el promedio real `4,3 / 5` con `34 reseñas`.
- No inventar testimonios nuevos.

---

## 10. Precios

### 10.1 Decisión

No mostrar tarifas fijas. Usar:

```js
pricing: {
  eyebrow: "Precios",
  amount: "Consultar",
  period: "SEGÚN TEMPORADA",
  title: "Escribinos y te enviamos los precios actualizados según fechas.",
  cta_text: "Consultar disponibilidad"
}
```

### 10.2 Detalle técnico importante

El `main.js` actual oculta la sección de precios cuando `amount` es `"Consultar"`:

```js
const hasPrice = pr.amount && pr.amount !== 'Consultar' && pr.amount !== 'Ask us';
pricingSection.style.display = hasPrice ? '' : 'none';
```

Hay que modificar esa lógica para que la sección siga visible con el mensaje “Consultar según temporada”. Opciones:

- eliminar el ocultamiento; o
- agregar una bandera `always_show: true`; o
- considerar “Consultar” como un estado válido.

La opción recomendada es que la sección siempre se muestre y que el CTA lleve a WhatsApp.

### 10.3 Contenido adicional

Se puede mencionar en la descripción de Whale House:

- anticipo del 30%;
- tarifas especiales para grupos;
- 10% de descuento en tours.

No se muestran montos exactos.

---

## 11. SEO y metadatos

### 11.1 Título y descripción

**Título propuesto**

```text
Bosque Marino Ecolodge & Whale House Hotel | Puerto López, Ecuador
```

**Descripción propuesta**

```text
Dos alojamientos frente al mar en Puerto López: Bosque Marino Ecolodge y Whale House Hotel. Habitaciones para familias, parejas y grupos, con WiFi, piscina y desayuno. Reservá directo por WhatsApp.
```

Actualizar:

- `<title id="meta-title">`.
- `<meta name="description" id="meta-description">`.
- `og:title`, `og:description`, `og:image`.
- `twitter:title`, `twitter:description`, `twitter:image`.
- canonical si cambia el dominio.

### 11.2 Schema JSON-LD

Reemplazar el `schema_ld` actual por un `@graph` con:

- `LodgingBusiness` / `Hotel` de Bosque Marino.
- `LodgingBusiness` / `Hotel` de Whale House.
- `FAQPage` con preguntas reales y verificadas.
- Opcional: `WebSite`.

Datos a incluir por propiedad:

- `name`;
- `description`;
- `url`;
- `telephone`;
- `email` si existe;
- `image`;
- `sameAs` con Google Maps;
- `address` con `streetAddress`, `addressLocality`, `addressRegion`, `addressCountry`;
- `geo` con latitud/longitud;
- `amenityFeature` con servicios reales;
- `starRating` solo si se decide mostrar el promedio.

**Importante:** el schema actual de Bosque Marino afirma “aire acondicionado”. Hay que revisar si es correcto antes de mantenerlo. Para Whale House no se debe afirmar aire acondicionado: las reseñas indican que no tiene.

Actualizar también el JSON-LD inline de `index.html` para que el HTML sin JavaScript tenga datos coherentes.

### 11.3 Sitemap

Actualizar `sitemap.xml`:

- `lastmod` a la fecha de implementación.
- Mantener la URL principal.
- Opcional: agregar anclas no es estándar en sitemap; no es necesario.

---

## 12. Archivos a modificar y crear

| Archivo | Acción |
|---|---|
| `config-data.js` | Reorganizar con `properties.bosque` y `properties.whale`; agregar habitaciones, reseñas, contactos, galerías y textos. |
| `config.json` | Sincronizar con `config-data.js`. |
| `index.html` | Agregar selector de propiedades, sección de habitaciones, estilos inline, navegación y metadatos. |
| `js/main.js` | Refactorizar render por propiedad, habitaciones, reservas, WhatsApp, mapa, galería y schema. |
| `sitemap.xml` | Actualizar fecha. |
| `PLAN_WHALE_HOUSE.md` | Este documento. |
| `fotos/whale/general/*` | Nuevas fotos generales de Whale House. |
| `fotos/whale/ocean-view/*` | Fotos de la habitación Ocean View Deluxe. |
| `fotos/whale/matrimonial/*` | Fotos de Matrimonial / Doble / Triple. |
| `fotos/whale/familiar/*` | Fotos de la habitación Familiar. |
| `fotos/bosque/*` | Opcional, solo si se suman fotos nuevas de Bosque Marino. |

**No modificar**

- `preview-A.html`
- `preview-B.html`
- `preview-C.html`
- `js/main-A.js`
- `js/main-B.js`
- `js/main-C.js`
- `js/switcher.js`
- `B-styles.css`
- `C-styles.css` (se puede usar como referencia visual, pero `index.html` no la carga)

---

## 13. Orden de implementación

### Fase 1 — Assets

1. Crear la estructura `fotos/whale/`.
2. Copiar las 21 fotos de Google desde el temp a `fotos/whale/general/`.
3. Descargar las galerías oficiales por habitación.
4. Revisar duplicados, imágenes borrosas y fotos que no correspondan.
5. Definir la foto de hero de Whale House.

### Fase 2 — Configuración

1. Crear `properties.bosque` reutilizando el contenido actual.
2. Crear `properties.whale` con los datos relevados.
3. Agregar `rooms` a cada propiedad.
4. Agregar `testimonials` y `testimonials_meta` de Whale House.
5. Agregar contactos, ubicación y redes por propiedad.
6. Agregar traducciones EN para el contenido nuevo.
7. Sincronizar `config.json`.

### Fase 3 — HTML y CSS

1. Agregar la barra de pestañas.
2. Agregar la sección `#habitaciones`.
3. Agregar el chip de habitación seleccionada en el formulario.
4. Agregar estilos de tabs, tarjetas de habitaciones, carrusel y responsive.
5. Agregar el acento azul océano para Whale House.
6. Agregar “Habitaciones” a la navegación y al footer.

### Fase 4 — JavaScript

1. Agregar `activeProperty` y `activeRoom`.
2. Implementar `getActiveProperty(c)`.
3. Refactorizar `render(c)` para leer la propiedad activa.
4. Renderizar habitaciones.
5. Implementar carruseles de habitaciones.
6. Actualizar todos los CTAs de WhatsApp.
7. Actualizar mapa y reseñas por propiedad.
8. Actualizar el formulario de reserva.
9. Implementar deep links y persistencia.
10. Actualizar schema y metadatos.

### Fase 5 — QA

1. Probar las dos pestañas en desktop y mobile.
2. Probar deep links `#bosque-marino` y `#whale-house`.
3. Probar cada botón “Reservar” de cada habitación.
4. Probar el formulario con fechas válidas e inválidas.
5. Probar cambio de idioma ES/EN.
6. Probar modo claro/oscuro.
7. Probar lightbox y carruseles.
8. Revisar que no haya imágenes rotas.
9. Revisar que `preview-A/B/C` y el switcher sigan funcionando.
10. Revisar schema con validador.

---

## 14. Detalles técnicos y riesgos

### 14.1 `main.js` actual es plano

`render(c)` lee claves de primer nivel (`c.hero`, `c.about`, etc.). Hay que introducir una capa de propiedad activa sin romper:

- `savedConfig`;
- `applyLang()`;
- `applyTheme()`;
- `initInteractions()`;
- `initBookingForm()`;
- lightbox;
- splash;
- scroll progress;
- footer.

**Estrategia recomendada:**

```js
let activeProperty = 'bosque';
let activeRoom = null;

function getActiveProperty(c) {
  const lc = getLocalizedConfig(c);
  return lc.properties?.[activeProperty] || lc.properties?.bosque || lc;
}
```

Luego `render(c)` usa `const p = getActiveProperty(c)` para las secciones de propiedad y mantiene `b = lc.business` para la marca general.

### 14.2 Re-render y eventos

- `initInteractions()` vuelve a enlazar eventos; los carruseles de habitaciones deben usar delegación de eventos o re-inicializarse después de cada render.
- `initBookingForm()` se enlaza una sola vez; debe leer el estado global en el submit.
- El lightbox usa índices; al cambiar de propiedad hay que reconstruir `lbItems` antes de asignar clicks.
- El mapa elimina el iframe anterior y crea uno nuevo; verificar que no queden iframes duplicados.

### 14.3 Precios

Corregir la lógica que oculta la sección cuando `amount === 'Consultar'`.

### 14.4 Footer

`footerNav` usa índices fijos (`links[0]` a `links[4]`). Si se agrega “Habitaciones”, actualizar los índices y las traducciones.

### 14.5 Schema

Hay dos fuentes de schema:

- el JSON-LD inline de `index.html`;
- `config.schema_ld`, que `render()` inyecta en `#schema-json`.

Actualizar ambas para que no se contradigan.

### 14.6 Imágenes

- No hay ImageMagick instalado; no se puede convertir a WebP automáticamente en este entorno.
- Usar JPG/WebP existentes.
- Evitar imágenes de más de ~500 KB si es posible.
- Mantener `loading="lazy"` y dimensiones estables para evitar saltos de layout.

### 14.7 Reseñas

- No hay estrellas individuales confiables en la vista pública de Google.
- No inventar calificaciones por reseña.
- Mostrar solo promedio general y textos verificados.

### 14.8 Datos a corregir de Bosque Marino

La configuración actual tiene datos genéricos:

- `city: "Ecuador"`, `country: "Argentina"`, `map_query: "Puerto López, Ecuador, Ecuador"`.
- Hay que corregir a:
  - `city: "Puerto López"`;
  - `province: "Manabí"`;
  - `country: "Ecuador"`;
  - `map_query: "Bosque Marino Ecolodge, Puerto López, Ecuador"`.

### 14.9 FAQ

Revisar las preguntas actuales y no afirmar servicios no verificados. Ejemplo: la FAQ actual dice que hay aire acondicionado; para Whale House no corresponde y para Bosque Marino hay que confirmarlo.

---

## 15. Checklist de aceptación

- [ ] La página muestra dos pestañas: Bosque Marino y Whale House Hotel.
- [ ] Al cambiar de pestaña cambian hero, about, comodidades, habitaciones, galería, reseñas, mapa y reservas.
- [ ] Los deep links `#bosque-marino` y `#whale-house` activan la propiedad correcta.
- [ ] Cada propiedad tiene su propia sección de habitaciones.
- [ ] Cada habitación tiene fotos, capacidad, servicios y botón “Reservar”.
- [ ] El botón “Reservar” lleva al formulario con la habitación y propiedad seleccionadas.
- [ ] El formulario arma un mensaje de WhatsApp con propiedad, habitación, fechas y huéspedes.
- [ ] Todos los CTAs usan `+593 99 546 4860`.
- [ ] La sección de precios muestra “Consultar según temporada”.
- [ ] Whale House muestra solo reseñas positivas/mixtas y el promedio real 3,6/5 con enlace a Google.
- [ ] Bosque Marino mantiene sus fotos actuales y sus datos corregidos.
- [ ] El cambio ES/EN funciona en ambas propiedades.
- [ ] El modo claro/oscuro funciona en ambas propiedades.
- [ ] La galería y el lightbox funcionan en ambas propiedades.
- [ ] El mapa de cada propiedad es correcto.
- [ ] No hay imágenes rotas.
- [ ] `preview-A/B/C` y `switcher.js` siguen funcionando.
- [ ] El schema JSON-LD es válido y no afirma servicios falsos.
- [ ] `sitemap.xml` está actualizado.

---

## 16. Fuentes y referencias

### Google Maps

- Whale House Hotel:
  `https://www.google.com/maps/place/Whale+House+Hotel/@-1.5513784,-80.813343,17z/data=!3m1!4b1!4m9!3m8!1s0x902e9f9fdc41f685:0x425659d61d247a7f!5m2!4m1!1i2!8m2!3d-1.5513784!4d-80.8107681!16s%2Fg%2F11lh5k7x16`
- Bosque Marino Ecolodge:
  `https://www.google.com/maps/place/Bosque+Marino+Ecolodge/data=!4m10!3m9!1s0x902c209eeb27818d:0xc771e304521e46a4!5m2!4m1!1i2!8m2!3d-1.5551455!4d-80.8061529!16s%2Fg%2F11cs5m7vh3`

### Sitio oficial Whale House / Palo Santo

- `https://whalewatchingecuador.com/es/hotel-puerto-lopez`
- `https://whalewatchingecuador.com/es/oceanviewroom`
- `https://whalewatchingecuador.com/es/oceanviewroom-copy`
- `https://whalewatchingecuador.com/es/oceanviewroom-copy-copy`

### Archivos temporales del relevamiento

- `C:\Users\Matias\AppData\Local\Temp\opencode\whale-preview.json`
- `C:\Users\Matias\AppData\Local\Temp\opencode\whale-photos\` (21 fotos `g01.jpg`–`g21.jpg`)
- `C:\Users\Matias\AppData\Local\Temp\opencode\bosque-preview.json`

### Archivos del proyecto relevantes

- `index.html`
- `config-data.js`
- `config.json`
- `js/main.js`
- `fotos/foto-01.jpg` a `foto-12.jpg`
- `fotos/foto-01.webp` a `foto-12.webp`
- `C-styles.css` (referencia de estilos de habitaciones, no cargado por `index.html`)
- `sitemap.xml`
- `vercel.json`

---

## 17. Pendientes y notas para la próxima sesión

1. **Confirmar nombres comerciales de las habitaciones de Bosque Marino.** Se propusieron “Suite Vacacional con cocina”, “Habitación Familiar” y “Habitación Doble / Matrimonial”.
2. **Confirmar si alcanza con 2 reseñas mixtas de Whale House** o si se quieren sumar reseñas positivas de Booking.com / TripAdvisor indicando la fuente.
3. **Revisar visualmente las 21 fotos de Google** para asignar hero, galería y descartar fotos repetidas o de baja calidad. El modelo actual no pudo inspeccionarlas.
4. **Confirmar servicios de Bosque Marino** antes de mantener FAQ/schema actuales, especialmente aire acondicionado.
5. **Definir si la barra de pestañas es fija o queda dentro del hero.** La recomendación es fija debajo del header, con blur y responsive.
6. **Verificar el número de WhatsApp** antes de publicar: la decisión es usar `+593 99 546 4860` para ambas propiedades.
7. **No implementar todavía.** Este documento queda como plan de trabajo para retomar en VS Code.

---

## 18. Criterio de éxito

La implementación se considera terminada cuando una persona puede:

1. Entrar a la web y entender que hay dos alojamientos.
2. Cambiar entre Bosque Marino y Whale House sin recargar.
3. Ver las habitaciones de cada propiedad.
4. Tocar “Reservar” en una habitación.
5. Llegar al formulario con la habitación correcta.
6. Enviar la consulta por WhatsApp con todos los datos.
7. Ver la información, fotos, servicios y reseñas correctas de cada propiedad.
8. Usar la web correctamente en celular, en modo claro y oscuro, y en español o inglés.
