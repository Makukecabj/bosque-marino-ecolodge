/* ========================================
   Landing Page Generator - Main JS
   Multi-property version (Bosque Marino + Whale House)
   ======================================== */

const ICONS = {
    bed: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 10.5 12 4l9 6.5M5 9v10h14V9M9 19v-6h6v6"/></svg>',
    kitchen: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 21V9a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v12M4 21h16M8 21v-6h8v6"/></svg>',
    tv: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M8 13c1 1.5 2.3 2 4 2s3-.5 4-2M9 9h.01M15 9h.01"/></svg>',
    grill: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 18v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M4 18h16M6 10V6h4v4"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
    wifi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M2 8.5a16 16 0 0 1 20 0M5.5 12a11 11 0 0 1 13 0M9 15.5a6 6 0 0 1 6 0M12 19h.01"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg>',
    car: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="7" width="18" height="12" rx="2"/><path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/></svg>',
    instagram: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>',
    facebook: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 9h3V6h-3a3 3 0 0 0-3 3v2H8v3h3v7h3v-7h3l1-3h-4V9a1 1 0 0 1 1-1z"/></svg>',
    whatsapp: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 20l1.1-5.4A8.5 8.5 0 1 1 21 11.5Z"/></svg>',
    tiktok: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>',
    location: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    truck: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>',
    card: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
    group: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    trust: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8Z"/><circle cx="12" cy="10" r="3"/></svg>',
    web: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>',
    maps: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8Z"/><circle cx="12" cy="10" r="3"/></svg>',
};

const TRUST_ICONS = [ICONS.pin, ICONS.star, ICONS.trust];

const I18N = {
    es: {
        nav_about: "Quiénes somos",
        nav_amenities: "Comodidades",
        nav_rooms: "Habitaciones",
        nav_gallery: "Galería",
        nav_pricing: "Precios",
        nav_faq: "Preguntas",
        nav_location: "Ubicación",
        nav_cta: "Reservar",
        hero_cta: "Reservar por WhatsApp",
        hero_scroll: "Deslizá para conocernos",
        about_eyebrow: "Quiénes somos",
        amenities_eyebrow: "Comodidades",
        amenities_title: "Todo lo que necesitás, a mano.",
        amenities_wifi_label: "WiFi",
        amenities_wifi_desc: "WiFi gratis en todo el lugar.",
        rooms_eyebrow: "Habitaciones",
        rooms_title: "Elegí tu habitación",
        room_book: "Reservar",
        gallery_eyebrow: "Galería",
        gallery_title_prefix: "Conocé cada rincón",
        faq_eyebrow: "Preguntas frecuentes",
        faq_title: "Lo que más nos preguntan",
        loc_eyebrow: "Cómo llegar",
        loc_highlights_title: "Lo que hay cerca",
        loc_maps_btn: "Abrir en Google Maps",
        contact_whatsapp_title: "Reservá por WhatsApp",
        contact_whatsapp_desc: "Respondemos en el día. Contanos las fechas y cuántos son.",
        contact_whatsapp_btn: "Escribir por WhatsApp",
        contact_email_title: "Escribinos un email",
        contact_email_desc: "Para consultas grupales, eventos o reservas de temporada completa.",
        contact_phone_title: "Llamanos",
        contact_phone_desc: "Consultas y reservas por teléfono.",
        contact_website_title: "Sitio oficial",
        contact_website_desc: "Más información, habitaciones y tours de avistamiento.",
        foot_nav: "Navegación",
        mobile_bar: "Reservar ahora",
        lang_btn: "EN",
        bk_eyebrow: "Reservá",
        bk_title: "Reservá directo, sin vueltas",
        bk_checkin: "Llegada",
        bk_checkout: "Salida",
        bk_guests: "Huéspedes",
        bk_guest_one: "persona",
        bk_guest_many: "personas",
        bk_night_one: "noche",
        bk_night_many: "noches",
        bk_submit: "Continuar en WhatsApp",
        bk_note: "Completá los datos y te llevamos a WhatsApp con la consulta ya armada.",
        bk_error_missing: "Elegí las fechas para continuar.",
        bk_error_order: "La fecha de salida tiene que ser posterior a la de llegada.",
        bk_error_past: "La fecha de llegada no puede ser anterior a hoy.",
        bk_selected: "Estás reservando",
        bk_clear: "Quitar habitación",
        bk_room_undefined: "a definir",
        steps_eyebrow: "Cómo reservar",
        steps_title: "Tres pasos y estás adentro",
        step1_title: "Escribinos",
        step1_text: "Mandanos un WhatsApp con tus fechas y cuántos son.",
        step2_title: "Te confirmamos",
        step2_text: "Te respondemos al toque con disponibilidad y precio real.",
        step3_title: "Prepará tus valijas y vení",
        step3_text: "Sin comisiones ni intermediarios. Directo con nosotros.",
        loc_reviews_btn: "Ver reseñas en Google",
        tst_eyebrow: "Testimonios",
        tst_title: "Lo que dicen nuestros viajeros",
        tst_reviews_word: "reseñas en Google",
        tst_extract_note: "Extracto de una reseña",
        share_btn: "Compartir",
        hero_ghost: "Ver instalaciones",
        aria_theme: "Cambiar tema",
        aria_lang: "Cambiar idioma",
        aria_menu: "Abrir menú",
        lb_close: "Cerrar",
        lb_prev: "Anterior",
        lb_next: "Siguiente",
        price_fallback: "Consultar",
        property_tablist: "Elegí el alojamiento",
        social_website: "Sitio web",
        social_maps: "Google Maps",
    },
    en: {
        nav_about: "About us",
        nav_amenities: "Amenities",
        nav_rooms: "Rooms",
        nav_gallery: "Gallery",
        nav_pricing: "Pricing",
        nav_faq: "FAQ",
        nav_location: "Location",
        nav_cta: "Book now",
        hero_cta: "Book via WhatsApp",
        hero_scroll: "Scroll to know us",
        about_eyebrow: "About us",
        amenities_eyebrow: "Amenities",
        amenities_title: "Everything you need, at hand.",
        amenities_wifi_label: "WiFi",
        amenities_wifi_desc: "Free WiFi throughout the property.",
        rooms_eyebrow: "Rooms",
        rooms_title: "Choose your room",
        room_book: "Book",
        gallery_eyebrow: "Gallery",
        gallery_title_prefix: "Explore every corner",
        faq_eyebrow: "Frequently asked questions",
        faq_title: "What people ask us the most",
        loc_eyebrow: "How to get here",
        loc_highlights_title: "What's nearby",
        loc_maps_btn: "Open in Google Maps",
        contact_whatsapp_title: "Book via WhatsApp",
        contact_whatsapp_desc: "We reply the same day. Tell us the dates and how many guests.",
        contact_whatsapp_btn: "Write on WhatsApp",
        contact_email_title: "Send us an email",
        contact_email_desc: "For group inquiries, events, or full-season bookings.",
        contact_phone_title: "Call us",
        contact_phone_desc: "Phone inquiries and bookings.",
        contact_website_title: "Official website",
        contact_website_desc: "More information, rooms and whale-watching tours.",
        foot_nav: "Navigation",
        mobile_bar: "Book now",
        lang_btn: "ES",
        bk_eyebrow: "Book now",
        bk_title: "Book direct, no middlemen",
        bk_checkin: "Check-in",
        bk_checkout: "Check-out",
        bk_guests: "Guests",
        bk_guest_one: "guest",
        bk_guest_many: "guests",
        bk_night_one: "night",
        bk_night_many: "nights",
        bk_submit: "Continue on WhatsApp",
        bk_note: "Fill in your details and we'll open WhatsApp with your inquiry ready to send.",
        bk_error_missing: "Please choose your dates to continue.",
        bk_error_order: "Check-out must be after check-in.",
        bk_error_past: "Check-in can't be before today.",
        bk_selected: "You're booking",
        bk_clear: "Remove room",
        bk_room_undefined: "to be defined",
        steps_eyebrow: "How to book",
        steps_title: "Three steps and you're in",
        step1_title: "Message us",
        step1_text: "Send us a WhatsApp with your dates and group size.",
        step2_title: "We confirm",
        step2_text: "We reply right away with availability and real prices.",
        step3_title: "Pack your bags and come",
        step3_text: "No fees, no middlemen. Straight with us.",
        loc_reviews_btn: "See Google reviews",
        tst_eyebrow: "Testimonials",
        tst_title: "What our travelers say",
        tst_reviews_word: "Google reviews",
        tst_extract_note: "Extract from a review",
        share_btn: "Share",
        hero_ghost: "See facilities",
        aria_theme: "Change theme",
        aria_lang: "Change language",
        aria_menu: "Open menu",
        lb_close: "Close",
        lb_prev: "Previous",
        lb_next: "Next",
        price_fallback: "Ask us",
        property_tablist: "Choose your stay",
        social_website: "Website",
        social_maps: "Google Maps",
    }
};

let currentLang = localStorage.getItem('lang') || 'es';
let currentTheme = localStorage.getItem('theme') || 'light';
let savedConfig = null;
let lbItems = [];
let lbIndex = 0;
let waBase = '#';
let waNameGlobal = '';
let activeProperty = 'bosque';
let activeRoom = null;
let galleryLbItems = [];
let heroProofInstagramIcon = '';

function el(id) { return document.getElementById(id); }

function cleanDisplayName(str) {
    return String(str == null ? '' : str).replace(/[.\-_]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function t(key) { return (I18N[currentLang] || I18N.es)[key] || key; }

function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function safeHtml(str) {
    if (str == null) return '';
    const allowed = ['br', 'b', 'i', 'em', 'strong'];
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/&lt;(\/?)(\w+)([^&]*?)&gt;/gi, (match, slash, tag, attrs) => {
            return allowed.includes(tag.toLowerCase()) ? `<${slash}${tag}${attrs}>` : match;
        });
}

function deepMerge(base, override) {
    if (!override) return base;
    const result = Array.isArray(base) ? [...base] : { ...base };
    for (const key of Object.keys(override)) {
        if (override[key] && typeof override[key] === 'object' && !Array.isArray(override[key]) && base[key] && typeof base[key] === 'object' && !Array.isArray(base[key])) {
            result[key] = deepMerge(base[key], override[key]);
        } else {
            result[key] = override[key];
        }
    }
    return result;
}

function getLocalizedConfig(c) {
    if (currentLang === 'es' || !c.i18n || !c.i18n[currentLang]) return c;
    return deepMerge(c, c.i18n[currentLang]);
}

function normalizeProperty(value) {
    const v = String(value == null ? '' : value).toLowerCase().replace(/^#/, '').trim();
    if (v === 'whale' || v === 'whale-house' || v === 'whale-house-hotel') return 'whale';
    if (v === 'bosque' || v === 'bosque-marino' || v === 'bosque-marino-ecolodge') return 'bosque';
    return null;
}

function detectProperty() {
    const fromHash = normalizeProperty(window.location.hash);
    if (fromHash) return fromHash;
    try {
        const params = new URLSearchParams(window.location.search);
        const fromQuery = normalizeProperty(params.get('propiedad') || params.get('property'));
        if (fromQuery) return fromQuery;
    } catch (e) { /* no-op */ }
    return normalizeProperty(localStorage.getItem('active_property')) || 'bosque';
}

function getActiveProperty(c) {
    const lc = getLocalizedConfig(c);
    const props = lc.properties || {};
    return props[activeProperty] || props.bosque || lc;
}

function getPropertyName(p) {
    return cleanDisplayName((p && (p.label || p.name)) || '');
}

function getWhatsAppBase(con) {
    if (!con || !con.whatsapp) return '';
    return /^https?:\/\//.test(con.whatsapp) ? con.whatsapp : `https://wa.me/${con.whatsapp}`;
}

function findRoom(p, roomId) {
    if (!p || !roomId) return null;
    return (p.rooms || []).find(room => room.id === roomId) || null;
}

function updatePropertyTabs() {
    document.querySelectorAll('.property-tab').forEach(tab => {
        const isActive = tab.dataset.property === activeProperty;
        tab.classList.toggle('active', isActive);
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
        tab.tabIndex = isActive ? 0 : -1;
    });
}

function setProperty(property, opts = {}) {
    const next = normalizeProperty(property) || 'bosque';
    if (next === activeProperty && !opts.force) return;
    activeProperty = next;
    activeRoom = null;
    localStorage.setItem('active_property', next);
    if (opts.updateHash !== false) {
        const hash = next === 'whale' ? '#whale-house' : '#bosque-marino';
        try {
            history.replaceState(null, '', hash);
        } catch (e) {
            window.location.hash = hash;
        }
    }
    if (savedConfig) render(savedConfig);
    if (opts.scroll !== false) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const sun = document.getElementById('theme-icon-sun');
    const moon = document.getElementById('theme-icon-moon');
    if (sun && moon) {
        sun.style.display = theme === 'dark' ? 'none' : 'block';
        moon.style.display = theme === 'dark' ? 'block' : 'none';
    }
}

function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang === 'es' ? 'es-AR' : 'en';
    if (savedConfig) render(savedConfig);
}

function toggleTheme() { applyTheme(currentTheme === 'dark' ? 'light' : 'dark'); }
function toggleLang() { applyLang(currentLang === 'es' ? 'en' : 'es'); }

function openLightbox(idx) {
    if (!lbItems.length) return;
    lbIndex = idx;
    updateLightbox();
    el('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    el('lightbox').classList.remove('active');
    document.body.style.overflow = '';
}

function updateLightbox() {
    const item = lbItems[lbIndex];
    if (!item) return;
    const content = el('lb-content');
    if (item.type === 'video') {
        content.innerHTML = '<video controls autoplay style="max-width:100%;max-height:85vh;border-radius:8px;"><source src="' + escapeHtml(item.src) + '" type="video/mp4"></video>';
    } else {
        content.innerHTML = '<img src="' + escapeHtml(item.src) + '" alt="' + escapeHtml(item.alt || '') + '">';
    }
    el('lb-counter').textContent = (lbIndex + 1) + ' / ' + lbItems.length;
}

function prevSlide() { lbIndex = (lbIndex - 1 + lbItems.length) % lbItems.length; updateLightbox(); }
function nextSlide() { lbIndex = (lbIndex + 1) % lbItems.length; updateLightbox(); }

function setMeta(prop, id, value) {
    if (id) { const e = document.getElementById(id); if (e) e.setAttribute('content', value); }
    document.querySelector(`meta[property="${prop}"]`)?.setAttribute('content', value);
}

function buildSchema(c) {
    const base = c.schema_ld || {};
    const graph = JSON.parse(JSON.stringify(base['@graph'] || []));
    const withoutFaq = graph.filter(node => node && node['@type'] !== 'FAQPage');
    const p = getActiveProperty(c);
    const faq = p.faq || [];
    if (faq.length) {
        withoutFaq.push({
            '@type': 'FAQPage',
            mainEntity: faq.map(item => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: { '@type': 'Answer', text: item.answer }
            }))
        });
    }
    return { '@context': 'https://schema.org', '@graph': withoutFaq };
}

async function loadConfig() {
    if (window.__CONFIG) return window.__CONFIG;
    try {
        const resp = await fetch('config.json');
        if (!resp.ok) throw new Error('not found');
        return await resp.json();
    } catch (e) {
        document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:Manrope,sans-serif;text-align:center;padding:40px;"><div><h1 style="font-family:Fraunces,serif;margin-bottom:16px;">Error: config no encontrado</h1><p style="color:#5C6660;">Asegurate de que <code>config-data.js</code> o <code>config.json</code> estén en la misma carpeta que index.html.<br><span style="font-size:0.9em;">(Make sure <code>config-data.js</code> or <code>config.json</code> are in the same folder as index.html.)</span></p></div></div>';
        return null;
    }
}

function renderRooms(p) {
    const grid = el('rooms-grid');
    const section = document.getElementById('habitaciones');
    if (!grid) return;
    const rooms = p.rooms || [];
    if (!rooms.length) {
        if (section) section.style.display = 'none';
        grid.innerHTML = '';
        return;
    }
    if (section) section.style.display = '';
    const photoWord = currentLang === 'en' ? 'photo' : 'foto';
    grid.innerHTML = rooms.map(room => {
        const images = room.images || [];
        const slides = images.map((src, i) => `
      <button type="button" class="room-slide${i === 0 ? ' active' : ''}" data-index="${i}"
        aria-label="${escapeHtml(room.name)} — ${photoWord} ${i + 1}">
        <img src="${escapeHtml(src)}" alt="${escapeHtml(room.name)} — ${escapeHtml(getPropertyName(p))} ${i + 1}" loading="lazy">
      </button>`).join('');
        const amenities = (room.amenities || []).map(a => `<li>${escapeHtml(a)}</li>`).join('');
        const controls = images.length > 1 ? `
          <button type="button" class="room-nav prev" data-dir="-1" aria-label="${t('lb_prev')}">&#8249;</button>
          <button type="button" class="room-nav next" data-dir="1" aria-label="${t('lb_next')}">&#8250;</button>
          <span class="room-counter">1 / ${images.length}</span>` : '';
        return `
      <article class="room-card reveal${room.id === activeRoom ? ' selected' : ''}" data-room-id="${escapeHtml(room.id)}" data-index="0">
        <div class="room-media">
          ${slides}
          ${controls}
        </div>
        <div class="room-body">
          <div class="room-head">
            <h3>${escapeHtml(room.name)}</h3>
            ${room.capacity ? `<span class="room-cap">${escapeHtml(room.capacity)}</span>` : ''}
          </div>
          ${room.tagline ? `<p class="room-tagline">${escapeHtml(room.tagline)}</p>` : ''}
          ${room.description ? `<p class="room-desc">${escapeHtml(room.description)}</p>` : ''}
          ${room.beds ? `<p class="room-specs">${ICONS.bed}<span>${escapeHtml(room.beds)}</span></p>` : ''}
          ${amenities ? `<ul class="room-amenities">${amenities}</ul>` : ''}
          <div class="room-foot">
            <span class="room-price">${escapeHtml(room.price || t('price_fallback'))}</span>
            <button type="button" class="btn btn-gold room-book" data-room-id="${escapeHtml(room.id)}">${t('room_book')}</button>
          </div>
        </div>
      </article>`;
    }).join('');
    updateRoomSelection();
}

function updateRoomSelection() {
    document.querySelectorAll('.room-card').forEach(card => {
        card.classList.toggle('selected', card.dataset.roomId === activeRoom);
    });
}

function updateBookingSelection(p) {
    const chip = el('booking-selection');
    const text = el('booking-selection-text');
    const label = el('booking-selection-label');
    const clear = el('booking-selection-clear');
    if (!chip || !text) return;
    if (label) label.textContent = t('bk_selected');
    if (clear) clear.setAttribute('aria-label', t('bk_clear'));
    const room = findRoom(p, activeRoom);
    if (room) {
        activeRoom = room.id;
        text.textContent = `${room.name} · ${getPropertyName(p)}`;
        chip.hidden = false;
    } else {
        activeRoom = null;
        text.textContent = '';
        chip.hidden = true;
    }
    updateRoomSelection();
}

function moveRoomSlide(card, direction) {
    if (!card) return;
    const slides = Array.from(card.querySelectorAll('.room-slide'));
    if (!slides.length) return;
    let idx = parseInt(card.dataset.index || '0', 10);
    idx = (idx + direction + slides.length) % slides.length;
    card.dataset.index = String(idx);
    slides.forEach((slide, i) => slide.classList.toggle('active', i === idx));
    const counter = card.querySelector('.room-counter');
    if (counter) counter.textContent = `${idx + 1} / ${slides.length}`;
}

function selectRoom(roomId) {
    if (!savedConfig) return;
    const p = getActiveProperty(savedConfig);
    const room = findRoom(p, roomId);
    if (!room) return;
    activeRoom = room.id;
    updateBookingSelection(p);
    const target = document.getElementById('reservas');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    const checkin = el('bk-checkin');
    if (checkin) checkin.focus({ preventScroll: true });
}

function render(c) {
    const lc = getLocalizedConfig(c);
    const p = getActiveProperty(c);
    const b = lc.business || {};
    const h = p.hero || {};
    const loc = p.location || {};
    const con = p.contact || {};
    const soc = p.social || {};
    const ab = p.about || {};
    const g = p.gallery || {};
    const pr = p.pricing || {};
    const ft = lc.footer || {};
    const propName = getPropertyName(p) || cleanDisplayName(b.short_name || b.name || '');
    const waMsg = currentLang === 'en'
        ? `Hi! I'd like to check availability at ${propName}.`
        : `Hola, quiero consultar disponibilidad en ${propName}.`;
    let waLink = '#';
    waBase = getWhatsAppBase(con);
    if (waBase) {
        waLink = `${waBase}?text=${encodeURIComponent(waMsg)}`;
    }
    waNameGlobal = propName;

    document.body.setAttribute('data-property', activeProperty);

    const seo = lc.seo || {};
    const pageTitle = seo.title || `${b.name || ''} | ${b.category || ''}`;
    const pageDescription = seo.description || b.description || '';
    document.title = pageTitle;
    setMeta('description', 'meta-description', pageDescription);
    setMeta('og:title', 'og-title', pageTitle);
    setMeta('og:description', 'og-description', pageDescription);
    setMeta('twitter:title', 'twitter-title', pageTitle);
    setMeta('twitter:description', 'twitter-description', pageDescription);
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink && !canonicalLink.href) {
        canonicalLink.href = window.location.origin + window.location.pathname;
    }
    const ogImage = (g.images && g.images[0] && g.images[0].src) || h.poster || '';
    if (ogImage) {
        const fullUrl = ogImage.startsWith('http') ? ogImage : `${window.location.origin}/${ogImage}`;
        setMeta('og:image', 'og-image', fullUrl);
        setMeta('twitter:image', 'twitter-image', fullUrl);
    }

    const schemaEl = el('schema-json');
    if (schemaEl) schemaEl.textContent = JSON.stringify(buildSchema(c));

    el('nav-logo-text').textContent = cleanDisplayName(b.name || b.short_name || '');
    // El splash se elimina del DOM despues del primer render; en
    // re-renders (cambio de idioma) hay que no tocarlo o corta todo.
    const splashLogo = el('splash-logo');
    if (splashLogo) splashLogo.textContent = cleanDisplayName(b.short_name || b.name || '');

    // Logo en nav (img)
    const navLogoImg = el('nav-logo').querySelector('img');
    if (navLogoImg && c.logo) {
        navLogoImg.src = c.logo;
        navLogoImg.style.display = '';
    } else if (navLogoImg) {
        navLogoImg.style.display = 'none';
    }
    el('foot-logo').textContent = cleanDisplayName(b.name || b.short_name || '');

    // Selector de propiedad
    const props = lc.properties || {};
    const tabBosque = el('tab-name-bosque');
    const tabWhale = el('tab-name-whale');
    if (tabBosque && props.bosque) tabBosque.textContent = cleanDisplayName(props.bosque.label || 'Bosque Marino');
    if (tabWhale && props.whale) {
        tabWhale.textContent = cleanDisplayName(props.whale.label || 'Whale House Hotel').replace(/\s+Hotel$/i, '');
    }
    const tabList = el('property-tabs');
    if (tabList) tabList.setAttribute('aria-label', t('property_tablist'));
    updatePropertyTabs();

    el('nav-cta').href = waLink;
    el('nav-cta').textContent = t('nav_cta');
    const heroBg = el('hero-bg');
    if (heroBg) heroBg.src = h.poster || h.image || '';
    const heroSection = document.querySelector('.hero');
    if (heroSection) heroSection.classList.remove('no-video');
    el('hero-eyebrow').textContent = h.eyebrow || '';
    const titleLine1 = h.title_line1 || (currentLang === 'en' ? 'Stay at' : 'Hospédate en');
    const titleEm = h.title_em || propName;
    const titleLine2 = h.title_line2 || '';
    el('hero-title').textContent = `${titleLine1} ${titleEm}${titleLine2 ? ' ' + titleLine2 : ''}`.trim();
    el('hero-subtitle').textContent = h.subtitle || '';

    const followers = b.followers || 0;
    const socialProofBadge = el('hero-social-proof');
    if (socialProofBadge) {
        const tm = p.testimonials_meta || {};
        const proofSvg = socialProofBadge.querySelector('svg');
        if (tm.source === 'google' && tm.rating && tm.count) {
            el('hero-social-proof-text').textContent = currentLang === 'en'
                ? `★ ${tm.rating} · ${tm.count} Google reviews`
                : `★ ${tm.rating} · ${tm.count} reseñas en Google`;
            if (proofSvg) proofSvg.outerHTML = ICONS.star;
            socialProofBadge.style.display = 'inline-flex';
        } else {
            if (proofSvg && heroProofInstagramIcon) proofSvg.outerHTML = heroProofInstagramIcon;
            if (followers >= 300) {
                const formatted = followers.toLocaleString(currentLang === 'en' ? 'en-US' : 'es-AR');
                el('hero-social-proof-text').textContent = currentLang === 'en'
                    ? `+${formatted} followers on Instagram`
                    : `+${formatted} seguidores en Instagram`;
                socialProofBadge.style.display = 'inline-flex';
            } else {
                socialProofBadge.style.display = 'none';
            }
        }
    }

    el('hero-cta-primary').href = waLink;
    el('hero-cta-primary').textContent = t('hero_cta');
    const ghostBtn = el('hero-actions').querySelector('.btn-ghost');
    if (ghostBtn) {
        ghostBtn.textContent = t('hero_ghost');
        ghostBtn.setAttribute('href', '#comodidades');
    }
    document.querySelector('.scroll-cue').textContent = t('hero_scroll');

    const trustHtml = (p.trust_bar || []).map((txt, i) =>
        `<div class="trust-item"><span class="trust-icon">${TRUST_ICONS[i % TRUST_ICONS.length]}</span><span>${escapeHtml(txt)}</span></div>`
    ).join('');
    el('trust-bar-inner').innerHTML = trustHtml;

    el('about-eyebrow').textContent = ab.eyebrow || t('about_eyebrow');
    el('about-title').textContent = ab.title || '';
    // About paragraphs: se traducen completos desde el config (getLocalizedConfig mergea)
    el('about-paragraphs').innerHTML = (ab.paragraphs || []).map(paragraph => `<p style="color:var(--ink-soft);font-size:1.02rem;max-width:480px;margin-bottom:14px;">${safeHtml(paragraph)}</p>`).join('');
    const photos = ab.photos || [];
    el('about-photos').innerHTML = photos.map((photo, i) =>
        `<img src="${escapeHtml(photo.src)}" alt="${escapeHtml(photo.alt || '')}" class="about-photo ${i === 0 ? 'p1' : 'p2'}">`
    ).join('');

    const amenitiesList = (p.amenities && p.amenities.length) ? p.amenities : [
        { icon: 'wifi', title: t('amenities_wifi_label'), description: t('amenities_wifi_desc') }
    ];
    el('amenities-grid').innerHTML = amenitiesList.map(a =>
        `<div class="tag-card reveal">${ICONS[a.icon] ? `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">${ICONS[a.icon].replace(/<svg[^>]*>/, '').replace('</svg>', '')}</svg>` : ''}<h3>${escapeHtml(a.title)}</h3><p>${escapeHtml(a.description)}</p></div>`
    ).join('');

    renderRooms(p);

    el('gallery-title').textContent = `${t('gallery_title_prefix')}.`;
    const galleryEyebrow = el('gallery-eyebrow');
    if (galleryEyebrow) galleryEyebrow.style.display = 'none';
    let galleryHtml = '';
    galleryLbItems = [];
    (g.images || []).forEach((img, i) => {
        galleryHtml += `<div class="gallery-item reveal" data-index="${i}"><img src="${escapeHtml(img.src)}" alt="${escapeHtml(img.alt || '')}" loading="lazy"></div>`;
        galleryLbItems.push({ type: 'image', src: img.src, alt: img.alt || '' });
    });
    el('gallery-grid').innerHTML = galleryHtml;

    el('pricing-amount').textContent = pr.amount || t('price_fallback');
    el('pricing-period').textContent = pr.period || '';
    el('pricing-title').textContent = pr.title || '';
    const pricingNote = el('pricing-note');
    if (pricingNote) {
        pricingNote.textContent = pr.note || '';
        pricingNote.hidden = !pr.note;
    }
    el('pricing-cta').href = waLink;
    el('pricing-cta').textContent = pr.cta_text || t('nav_cta');
    const pricingSection = document.getElementById('precios');
    if (pricingSection) pricingSection.style.display = '';

    const faqItems = (p.faq && p.faq.length) ? p.faq : [
        { question: currentLang === 'en' ? 'Is there WiFi?' : '¿Hay WiFi?', answer: currentLang === 'en' ? 'Yes, free WiFi throughout the property.' : 'Sí, WiFi gratis en todo el alojamiento.' },
        { question: currentLang === 'en' ? 'Is there parking?' : '¿Tienen estacionamiento?', answer: currentLang === 'en' ? 'Yes, free parking on-site.' : 'Sí, estacionamiento gratuito en el lugar.' },
        { question: currentLang === 'en' ? 'How do I book?' : '¿Cómo reservo?', answer: currentLang === 'en' ? 'Message us on WhatsApp and we\'ll confirm right away.' : 'Escribinos por WhatsApp y te confirmamos al toque.' }
    ];
    el('faq-list').innerHTML = faqItems.map(faq =>
        `<div class="faq-item"><button class="faq-q"><span>${escapeHtml(faq.question)}</span><span class="plus">+</span></button><div class="faq-a"><p>${escapeHtml(faq.answer)}</p></div></div>`
    ).join('');

    const testimonials = (p.testimonials || []).map(item => {
        const stars = (item.rating && !item.extract)
            ? `<div class="stars">${'★'.repeat(item.rating)}${'☆'.repeat(5 - item.rating)}</div>`
            : '';
        const note = item.extract
            ? `<div class="quote-note">${escapeHtml(t('tst_extract_note'))}</div>`
            : '';
        return `
      <div class="testimonial-card">
        ${stars}
        <div class="quote">"${escapeHtml(item.text || item.quote || '')}"</div>
        <div class="author">— ${escapeHtml(item.author || '')}</div>
        ${note}
      </div>`;
    }).join('');
    const testimonialsSection = document.getElementById('testimonios');
    if (testimonials && p.testimonials && p.testimonials.length) {
        el('testimonials-grid').innerHTML = testimonials;
        if (testimonialsSection) testimonialsSection.style.display = '';
    } else {
        if (testimonialsSection) testimonialsSection.style.display = 'none';
    }
    // Botón compartir
    const shareBtn = el('share-btn');
    if (shareBtn) {
        shareBtn.textContent = t('share_btn');
        shareBtn.onclick = async () => {
            if (navigator.share) {
                try { await navigator.share({title: document.title, url: window.location.href}); } catch(e) {}
            } else {
                navigator.clipboard.writeText(window.location.href);
                alert(currentLang === 'en' ? 'Link copied!' : 'Link copiado!');
            }
        };
    }
    const tstMeta = el('testimonials-meta');
    if (tstMeta) {
        const tm = p.testimonials_meta || {};
        if (tm.source === 'google' && tm.rating && tm.count) {
            tstMeta.textContent = `★ ${tm.rating} / 5 · ${tm.count} ${t('tst_reviews_word')}`;
            tstMeta.href = tm.url || loc.reviews_url || '#';
            tstMeta.hidden = false;
        } else {
            tstMeta.hidden = true;
            tstMeta.removeAttribute('href');
        }
    }

    const mapQuery = loc.map_query || '';
    const isCoast = typeof loc.is_coast === 'boolean'
        ? loc.is_coast
        : /costa|mar|playa|beach/i.test(b.name + ' ' + (loc.district || '') + ' ' + (loc.city || ''));
    const locTitleSuffix = isCoast
        ? (currentLang === 'en' ? ', steps from the beach' : ', a metros de las playas')
        : (currentLang === 'en' ? ', close to everything' : ', cerca de todo');
    el('loc-eyebrow').textContent = t('loc_eyebrow');
    el('loc-title').textContent = `${loc.district || loc.city || ''}${locTitleSuffix}`.trim();
    const address = loc.address || '';
    const city = loc.city || '';
    el('loc-address').textContent = city && !address.toLowerCase().includes(city.toLowerCase())
        ? `${address}, ${city}`
        : address;
    el('loc-description').textContent = loc.description || '';
    const highlights = loc.highlights || [];
    const highlightsEl = el('loc-highlights');
    if (highlightsEl) {
        highlightsEl.innerHTML = highlights.length ? `<h4 style="font-family:'IBM Plex Mono',monospace;font-size:0.72rem;letter-spacing:0.1em;text-transform:uppercase;color:var(--gold-soft);margin-bottom:10px;">${t('loc_highlights_title')}</h4>` + highlights.map(highlight =>
            `<div class="loc-highlight">${ICONS[highlight.icon] ? ICONS[highlight.icon] : ''}<span>${escapeHtml(highlight.text)}</span></div>`
        ).join('') : '';
    }
    el('loc-maps-btn').href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`;
    el('loc-maps-btn').textContent = t('loc_maps_btn');
    const reviewsBtn = document.getElementById('loc-reviews-btn');
    if (reviewsBtn) {
        if (mapQuery || loc.reviews_url) {
            reviewsBtn.href = loc.reviews_url || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;
            reviewsBtn.textContent = t('loc_reviews_btn');
            reviewsBtn.style.display = '';
        } else {
            reviewsBtn.style.display = 'none';
        }
    }
    const locMapContainer = document.querySelector('.map-embed');
    if (locMapContainer) {
        const existingOverlay = locMapContainer.querySelector('.map-overlay');
        if (existingOverlay) existingOverlay.style.display = 'none';
        const existingIframe = locMapContainer.querySelector('iframe');
        if (existingIframe) existingIframe.remove();
        const mapEmbedUrl = loc.map_embed || `https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
        const mapIframe = document.createElement('iframe');
        mapIframe.src = mapEmbedUrl;
        mapIframe.width = '100%';
        mapIframe.height = '100%';
        mapIframe.style.border = '0';
        mapIframe.style.position = 'absolute';
        mapIframe.style.inset = '0';
        mapIframe.allowFullscreen = true;
        mapIframe.loading = 'lazy';
        mapIframe.referrerPolicy = 'no-referrer-when-downgrade';
        locMapContainer.appendChild(mapIframe);
        const locText = currentLang === 'en' ? 'View location' : 'Ver ubicación';
        el('loc-map-text').textContent = `${loc.district || loc.city || ''} · ${locText}`;
    }

    let contactHtml = '';
    if (con.whatsapp) {
        contactHtml += `<div class="contact-card"><h3>${t('contact_whatsapp_title')}</h3><p>${t('contact_whatsapp_desc')}</p><a href="${escapeHtml(waLink)}" target="_blank" rel="noopener" class="btn btn-gold">${t('contact_whatsapp_btn')}</a></div>`;
    }
    if (con.phone) {
        const tel = String(con.phone).replace(/[^\d+]/g, '');
        contactHtml += `<div class="contact-card"><h3>${t('contact_phone_title')}</h3><p>${t('contact_phone_desc')}</p><a href="tel:${escapeHtml(tel)}" class="btn btn-ghost contact-email-btn">${escapeHtml(con.phone)}</a></div>`;
    }
    if (con.email) {
        contactHtml += `<div class="contact-card"><h3>${t('contact_email_title')}</h3><p>${t('contact_email_desc')}</p><a href="mailto:${escapeHtml(con.email)}" class="btn btn-ghost contact-email-btn">${escapeHtml(con.email)}</a></div>`;
    }
    if (soc.website) {
        contactHtml += `<div class="contact-card"><h3>${t('contact_website_title')}</h3><p>${t('contact_website_desc')}</p><a href="${escapeHtml(soc.website)}" target="_blank" rel="noopener" class="btn btn-ghost contact-email-btn">${t('social_website')}</a></div>`;
    }
    el('contact-grid').innerHTML = contactHtml;
    const contactSection = document.querySelector('.contact');
    if (contactSection) contactSection.style.display = contactHtml ? '' : 'none';

    el('foot-description').textContent = ft.description || '';
    el('foot-copyright').textContent = ft.copyright || '';
    el('foot-made-by').textContent = ft.made_by || '';

    let socialHtml = '';
    function socialLink(cond, href, icon, label) {
        if (!cond) return '';
        return `<a href="${escapeHtml(href)}" target="_blank" rel="noopener" aria-label="${label}">${icon}</a>`;
    }
    // Instagram real -> icono de Instagram; Google Maps -> icono de mapa;
    // web propia -> icono de web.
    if (soc.instagram) {
        const igHref = soc.instagram;
        let icon = ICONS.web, label = t('social_website');
        if (/instagram\.com/.test(igHref)) { icon = ICONS.instagram; label = 'Instagram'; }
        else if (/google\.com\/maps|maps\.google/.test(igHref) || soc.place_url) { icon = ICONS.maps; label = t('social_maps'); }
        socialHtml += socialLink(true, igHref, icon, label);
    }
    if (soc.facebook) socialHtml += socialLink(true, soc.facebook, ICONS.facebook, 'Facebook');
    if (soc.place_url) socialHtml += socialLink(true, soc.place_url, ICONS.maps, t('social_maps'));
    if (soc.website) socialHtml += socialLink(true, soc.website, ICONS.web, t('social_website'));
    if (con.whatsapp) socialHtml += socialLink(true, waLink, ICONS.whatsapp, 'WhatsApp');
    if (soc.tiktok) socialHtml += socialLink(true, soc.tiktok, ICONS.tiktok, 'TikTok');
    el('social-row').innerHTML = socialHtml;

    el('wa-float').href = waLink;
    el('mobile-bar-link').href = waLink;
    el('mobile-bar-text').textContent = t('mobile_bar');

    const bookingSection = document.getElementById('reservas');
    if (bookingSection) {
        // Al cambiar de idioma, un error viejo quedaria en el idioma anterior
        const bkErr = document.getElementById('bk-error');
        if (bkErr) bkErr.hidden = true;
        if (!con.whatsapp) {
            bookingSection.style.display = 'none';
        } else {
            bookingSection.style.display = '';
            el('booking-eyebrow').textContent = t('bk_eyebrow');
            el('booking-title').textContent = t('bk_title');
            el('bk-label-checkin').textContent = t('bk_checkin');
            el('bk-label-checkout').textContent = t('bk_checkout');
            el('bk-label-guests').textContent = t('bk_guests');
            el('bk-submit').textContent = t('bk_submit');
            el('bk-note').textContent = t('bk_note');
            updateBookingSelection(p);
            const sel = el('bk-guests');
            const prevVal = sel.value;
            if (!sel.options.length) {
                for (let i = 1; i <= 9; i++) {
                    const opt = document.createElement('option');
                    opt.value = i;
                    opt.textContent = i;
                    sel.appendChild(opt);
                }
                const optPlus = document.createElement('option');
                optPlus.value = '10';
                optPlus.textContent = '+9';
                sel.appendChild(optPlus);
            }
            sel.value = prevVal || '2';
            const isoToday = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
            const now = new Date();
            el('bk-checkin').min = isoToday(now);
            el('bk-checkout').min = isoToday(now);
        }
    }

    applyTheme(currentTheme);

    el('nav-link-about').textContent = t('nav_about');
    el('nav-link-amenities').textContent = t('nav_amenities');
    el('nav-link-rooms').textContent = t('nav_rooms');
    el('nav-link-gallery').textContent = t('nav_gallery');
    el('nav-link-pricing').textContent = t('nav_pricing');
    el('nav-link-faq').textContent = t('nav_faq');
    el('nav-link-location').textContent = t('nav_location');

    el('amenities-eyebrow').textContent = t('amenities_eyebrow');
    el('amenities-title').textContent = t('amenities_title');
    el('rooms-eyebrow').textContent = t('rooms_eyebrow');
    el('rooms-title').textContent = t('rooms_title');
    el('gallery-eyebrow').textContent = t('gallery_eyebrow');
    el('faq-eyebrow').textContent = t('faq_eyebrow');
    el('faq-title').textContent = t('faq_title');

    const stepsEyebrow = document.getElementById('steps-eyebrow');
    if (stepsEyebrow) {
        stepsEyebrow.textContent = t('steps_eyebrow');
        el('steps-title').textContent = t('steps_title');
        el('step1-title').textContent = t('step1_title');
        el('step1-text').textContent = t('step1_text');
        el('step2-title').textContent = t('step2_title');
        el('step2-text').textContent = t('step2_text');
        el('step3-title').textContent = t('step3_title');
        el('step3-text').textContent = t('step3_text');
    }
    const tstEyebrow = document.getElementById('testimonials-eyebrow');
    if (tstEyebrow) {
        tstEyebrow.textContent = t('tst_eyebrow');
        el('testimonials-title').textContent = t('tst_title');
    }

    // aria-labels localizados (accesibilidad)
    [['theme-toggle', 'aria_theme'], ['lang-toggle', 'aria_lang'],
     ['burger', 'aria_menu'], ['lb-close', 'lb_close'],
     ['lb-prev', 'lb_prev'], ['lb-next', 'lb_next']].forEach(([aid, akey]) => {
        const node = document.getElementById(aid);
        if (node) node.setAttribute('aria-label', t(akey));
    });

    el('lang-toggle').textContent = t('lang_btn');

    const footerNav = el('foot-cols');
    if (footerNav) {
        const h4 = footerNav.querySelector('h4');
        if (h4) h4.textContent = t('foot_nav');
        const footLinks = {
            'foot-link-about': 'nav_about',
            'foot-link-amenities': 'nav_amenities',
            'foot-link-rooms': 'nav_rooms',
            'foot-link-gallery': 'nav_gallery',
            'foot-link-pricing': 'nav_pricing',
            'foot-link-location': 'nav_location'
        };
        Object.keys(footLinks).forEach(id => {
            const node = document.getElementById(id);
            if (node) node.textContent = t(footLinks[id]);
        });
    }

    initInteractions();

    const splash = document.getElementById('splash');
    if (splash) {
        splash.classList.add('hide');
        setTimeout(() => splash.remove(), 500);
    }
}

function initInteractions() {
    const header = document.getElementById('header');
    if (window._onScroll) window.removeEventListener('scroll', window._onScroll);
    window._onScroll = () => {
        header.classList.toggle('scrolled', window.scrollY > 40);
        const bar = document.getElementById('scroll-progress');
        if (bar) {
            const total = document.documentElement.scrollHeight - window.innerHeight;
            bar.style.width = total > 0 ? `${(window.scrollY / total) * 100}%` : '0%';
        }
    };
    window.addEventListener('scroll', window._onScroll);

    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');
    if (window._onBurgerClick) burger.removeEventListener('click', window._onBurgerClick);
    window._onBurgerClick = () => navLinks.classList.toggle('open');
    burger.addEventListener('click', window._onBurgerClick);
    navLinks.querySelectorAll('a').forEach(a => {
        if (window._onNavLinkClick) a.removeEventListener('click', window._onNavLinkClick);
        window._onNavLinkClick = () => navLinks.classList.remove('open');
        a.addEventListener('click', window._onNavLinkClick);
    });

    document.querySelectorAll('.faq-item').forEach(item => {
        const q = item.querySelector('.faq-q');
        const a = item.querySelector('.faq-a');
        if (item._faqHandler) q.removeEventListener('click', item._faqHandler);
        item._faqHandler = () => {
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item.open').forEach(o => {
                o.classList.remove('open');
                o.querySelector('.faq-a').style.maxHeight = null;
            });
            if (!isOpen) {
                item.classList.add('open');
                a.style.maxHeight = a.scrollHeight + 'px';
            }
        };
        q.addEventListener('click', item._faqHandler);
    });

    if (window._revealObserver) window._revealObserver.disconnect();
    window._revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(node => window._revealObserver.observe(node));

    // Lightbox de la galería (delegación, una sola vez)
    const galleryGrid = el('gallery-grid');
    if (galleryGrid && !galleryGrid._lbInit) {
        galleryGrid._lbInit = true;
        galleryGrid.addEventListener('click', (e) => {
            const item = e.target.closest('.gallery-item');
            if (!item) return;
            lbItems = galleryLbItems.slice();
            openLightbox(parseInt(item.dataset.index, 10) || 0);
        });
    }

    // Carruseles y reserva de habitaciones (delegación, una sola vez)
    const roomsGrid = el('rooms-grid');
    if (roomsGrid && !roomsGrid._roomInit) {
        roomsGrid._roomInit = true;
        roomsGrid.addEventListener('click', (e) => {
            const nav = e.target.closest('.room-nav');
            if (nav) {
                e.preventDefault();
                moveRoomSlide(nav.closest('.room-card'), parseInt(nav.dataset.dir, 10) || 1);
                return;
            }
            const book = e.target.closest('.room-book');
            if (book) {
                e.preventDefault();
                selectRoom(book.dataset.roomId);
                return;
            }
            const slide = e.target.closest('.room-slide');
            if (slide) {
                const card = slide.closest('.room-card');
                const room = findRoom(getActiveProperty(savedConfig), card && card.dataset.roomId);
                if (!room) return;
                lbItems = (room.images || []).map((src, i) => ({
                    type: 'image',
                    src,
                    alt: `${room.name} — ${getPropertyName(getActiveProperty(savedConfig))} ${i + 1}`
                }));
                openLightbox(parseInt(slide.dataset.index, 10) || 0);
            }
        });

        let touchStartX = 0;
        let touchCard = null;
        roomsGrid.addEventListener('touchstart', (e) => {
            const card = e.target.closest('.room-card');
            if (!card) return;
            touchCard = card;
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        roomsGrid.addEventListener('touchend', (e) => {
            if (!touchCard) return;
            const delta = e.changedTouches[0].screenX - touchStartX;
            if (Math.abs(delta) > 40) moveRoomSlide(touchCard, delta > 0 ? -1 : 1);
            touchCard = null;
        });
    }
}

function initBookingForm() {
    const form = document.getElementById('booking-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const errEl = document.getElementById('bk-error');
        if (!savedConfig) return;
        const p = getActiveProperty(savedConfig);
        const con = p.contact || {};
        const base = getWhatsAppBase(con);
        if (!base) return;
        const ciV = el('bk-checkin').value;
        const coV = el('bk-checkout').value;
        const guestsRaw = parseInt(el('bk-guests').value, 10) || 2;
        const guests = guestsRaw >= 10 ? '+9' : String(guestsRaw);
        if (!ciV || !coV) {
            errEl.textContent = t('bk_error_missing');
            errEl.hidden = false;
            return;
        }
        const ci = new Date(ciV + 'T12:00:00');
        const co = new Date(coV + 'T12:00:00');
        const today = new Date();
        today.setHours(12, 0, 0, 0);
        if (co <= ci) {
            errEl.textContent = t('bk_error_order');
            errEl.hidden = false;
            return;
        }
        if (ci < today) {
            errEl.textContent = t('bk_error_past');
            errEl.hidden = false;
            return;
        }
        errEl.hidden = true;
        const nights = Math.round((co - ci) / 86400000);
        const fmt = d => `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
        const nWord = nights === 1 ? t('bk_night_one') : t('bk_night_many');
        const guestWord = guestsRaw === 1 ? t('bk_guest_one') : t('bk_guest_many');
        const room = findRoom(p, activeRoom);
        const propName = getPropertyName(p);
        const roomName = room ? room.name : t('bk_room_undefined');
        const msg = currentLang === 'en'
            ? `Hi! I'd like to book at ${propName}.\nRoom: ${roomName}.\nFrom ${fmt(ci)} to ${fmt(co)} (${nights} ${nWord}).\nGuests: ${guests} ${guestWord}.\nIs it available?`
            : `Hola, quiero reservar en ${propName}.\nHabitación: ${roomName}.\nDel ${fmt(ci)} al ${fmt(co)} (${nights} ${nWord}).\nHuéspedes: ${guests} ${guestWord}.\n¿Hay disponibilidad?`;
        window.open(`${base}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    activeProperty = detectProperty();
    document.body.setAttribute('data-property', activeProperty);
    heroProofInstagramIcon = el('hero-social-proof')?.querySelector('svg')?.outerHTML || '';

    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('lang-toggle').addEventListener('click', toggleLang);

    initBookingForm();

    const propertyTabs = Array.from(document.querySelectorAll('.property-tab'));
    propertyTabs.forEach((tab, i) => {
        tab.addEventListener('click', () => setProperty(tab.dataset.property));
        tab.addEventListener('keydown', (e) => {
            if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
            e.preventDefault();
            const direction = e.key === 'ArrowRight' ? 1 : -1;
            const next = propertyTabs[(i + direction + propertyTabs.length) % propertyTabs.length];
            next.focus();
            setProperty(next.dataset.property);
        });
    });

    window.addEventListener('hashchange', () => {
        const fromHash = normalizeProperty(window.location.hash);
        if (fromHash && fromHash !== activeProperty && savedConfig) {
            setProperty(fromHash, { updateHash: false });
        }
    });

    const clearSelection = el('booking-selection-clear');
    if (clearSelection) {
        clearSelection.addEventListener('click', () => {
            activeRoom = null;
            if (savedConfig) updateBookingSelection(getActiveProperty(savedConfig));
        });
    }

    el('lb-close').addEventListener('click', closeLightbox);
    el('lb-prev').addEventListener('click', prevSlide);
    el('lb-next').addEventListener('click', nextSlide);
    el('lightbox').addEventListener('click', (e) => {
        if (e.target === el('lightbox')) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
        if (!el('lightbox').classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
    let touchStartX = 0;
    el('lightbox').addEventListener('touchstart', (e) => { touchStartX = e.changedTouches[0].screenX; });
    el('lightbox').addEventListener('touchend', (e) => {
        const delta = e.changedTouches[0].screenX - touchStartX;
        if (Math.abs(delta) > 50) { delta > 0 ? prevSlide() : nextSlide(); }
    });

    const config = await loadConfig();
    if (config) {
        savedConfig = config;
        render(config);
    }
});
