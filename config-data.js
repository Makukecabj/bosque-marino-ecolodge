/* ============================================================
   Configuración del sitio — Bosque Marino Ecolodge & Whale House
   ------------------------------------------------------------
   La estructura nueva vive en `properties`. Las claves planas de
   primer nivel se mantienen como alias de Bosque Marino para que
   preview-A/B/C y main-A/B/C sigan funcionando sin cambios.
   ============================================================ */

(function () {
  const bosque = {
    id: "bosque",
    label: "Bosque Marino",
    hero: {
      video: "videos/city-video.mp4",
      poster: "fotos/foto-01.webp",
      eyebrow: "Puerto López · Manabí · Ecuador",
      title_line1: "Hospédate en",
      title_em: "Bosque Marino Ecolodge",
      title_line2: "",
      subtitle: "4.000 m² de jardín, piscina con forma de ballena y el mar a 300 metros."
    },
    about: {
      eyebrow: "Quiénes somos",
      title: "Un refugio verde a 300 metros del mar.",
      paragraphs: [
        "Bosque Marino Ecolodge es un alojamiento familiar en Puerto López, con 4.000 m² de jardín, piscina con forma de ballena y espacios pensados para descansar después de recorrer la costa.",
        "Contamos con 4 habitaciones y 2 suites vacacionales con cocina, TV cable y WiFi. Hay billar, ping pong y horno de pan para compartir en familia o con otros viajeros."
      ],
      photos: [
        { src: "fotos/foto-02.webp", alt: "Bosque Marino Ecolodge — espacios comunes" },
        { src: "fotos/foto-03.webp", alt: "Bosque Marino Ecolodge — jardín y piscina" }
      ]
    },
    trust_bar: [
      "4.000 m² de jardín",
      "A 300 m del mar",
      "Piscina con forma de ballena"
    ],
    amenities: [
      {
        key: "pool",
        icon: "sun",
        title: "Piscina con forma de ballena",
        description: "Rodeada de jardín, para refrescarte y disfrutar del aire libre."
      },
      {
        key: "wifi",
        icon: "wifi",
        title: "WiFi y TV cable",
        description: "Conexión en las habitaciones y en los espacios comunes."
      },
      {
        key: "rooms",
        icon: "bed",
        title: "Habitaciones amplias",
        description: "Opciones para parejas, familias y grupos, con vista al jardín."
      },
      {
        key: "kitchen",
        icon: "kitchen",
        title: "Suites con cocina",
        description: "Dos suites vacacionales con cocina equipada para estadías largas."
      },
      {
        key: "games",
        icon: "grill",
        title: "Billar, ping pong y horno de pan",
        description: "Espacios para compartir sin salir del alojamiento."
      }
    ],
    rooms: [
      {
        id: "suite-vacacional",
        name: "Suite Vacacional con cocina",
        tagline: "Ideal para familias y estadías largas",
        description: "Suite amplia con cocina equipada, vista al jardín, TV cable y WiFi. Pensada para quienes quieren cocinar y quedarse varios días.",
        capacity: "2–4 huéspedes",
        beds: "Cama matrimonial y espacio para camas adicionales",
        amenities: ["Cocina equipada", "Vista al jardín", "TV cable", "WiFi", "Baño privado"],
        images: [
          "fotos/foto-07.webp",
          "fotos/foto-06.webp",
          "fotos/foto-05.webp"
        ],
        price: "Consultar",
        whatsapp_message: "Hola, quiero reservar la Suite Vacacional con cocina en Bosque Marino Ecolodge."
      },
      {
        id: "habitacion-familiar",
        name: "Habitación Familiar",
        tagline: "Amplia y luminosa, con vista al jardín",
        description: "Habitación pensada para familias, con camas de dos plazas, baño privado, TV cable y WiFi. Un espacio exclusivo para descansar en grupo.",
        capacity: "3–4 huéspedes",
        beds: "Camas de dos plazas",
        amenities: ["Vista al jardín", "TV cable", "WiFi", "Baño privado"],
        images: [
          "fotos/foto-02.webp",
          "fotos/foto-03.webp",
          "fotos/foto-04.webp"
        ],
        price: "Consultar",
        whatsapp_message: "Hola, quiero reservar la Habitación Familiar en Bosque Marino Ecolodge."
      },
      {
        id: "doble-matrimonial",
        name: "Habitación Doble / Matrimonial",
        tagline: "Para parejas o viajeros que buscan tranquilidad",
        description: "Habitación con cama matrimonial o dos camas, baño privado, TV cable y WiFi. Vista al jardín y acceso a todos los espacios comunes.",
        capacity: "1–2 huéspedes",
        beds: "Cama matrimonial o dos camas",
        amenities: ["Vista al jardín", "TV cable", "WiFi", "Baño privado"],
        images: [
          "fotos/foto-08.webp",
          "fotos/foto-10.webp",
          "fotos/foto-11.webp"
        ],
        price: "Consultar",
        whatsapp_message: "Hola, quiero reservar la Habitación Doble / Matrimonial en Bosque Marino Ecolodge."
      }
    ],
    gallery: {
      images: [
        { src: "fotos/foto-01.webp", alt: "Bosque Marino Ecolodge — vista general" },
        { src: "fotos/foto-02.webp", alt: "Bosque Marino Ecolodge — espacios comunes" },
        { src: "fotos/foto-03.webp", alt: "Bosque Marino Ecolodge — jardín y piscina" },
        { src: "fotos/foto-04.webp", alt: "Bosque Marino Ecolodge — zona de descanso" },
        { src: "fotos/foto-05.webp", alt: "Bosque Marino Ecolodge — piscina con forma de ballena" },
        { src: "fotos/foto-06.webp", alt: "Bosque Marino Ecolodge — cocina de la suite" },
        { src: "fotos/foto-07.webp", alt: "Bosque Marino Ecolodge — habitación" },
        { src: "fotos/foto-08.webp", alt: "Bosque Marino Ecolodge — terraza" },
        { src: "fotos/foto-09.webp", alt: "Bosque Marino Ecolodge — entrada principal" },
        { src: "fotos/foto-10.webp", alt: "Bosque Marino Ecolodge — áreas verdes" },
        { src: "fotos/foto-11.webp", alt: "Bosque Marino Ecolodge — comedor" },
        { src: "fotos/foto-12.webp", alt: "Bosque Marino Ecolodge — living común" }
      ],
      videos: []
    },
    pricing: {
      eyebrow: "Precios",
      amount: "Consultar",
      period: "SEGÚN TEMPORADA",
      title: "Escribinos y te enviamos los precios actualizados según fechas.",
      note: "Tarifas por habitación. Consultanos por estadías largas y grupos.",
      cta_text: "Consultar disponibilidad"
    },
    testimonials: [
      {
        author: "Federico T.",
        rating: 4,
        text: "Hermosa experiencia. Cómodo, bien ubicado y con una atención que se nota hecha con cariño."
      },
      {
        author: "Tomás V.",
        rating: 5,
        text: "Ambiente único, te abren la puerta de casa. De las mejores estadías que tuvimos viajando."
      },
      {
        author: "Joaquín H.",
        rating: 5,
        text: "Excelente lugar para descansar después de recorrer. Recomendadísimo, volvemos seguro."
      },
      {
        author: "Nicolás S.",
        rating: 5,
        text: "Perfecto para desconectar. Tranquilo, limpio y con espacios para compartir con otros viajeros."
      }
    ],
    testimonials_meta: {
      source: "demo"
    },
    faq: [
      {
        question: "¿Dónde está ubicado Bosque Marino Ecolodge?",
        answer: "En Puerto López, Manabí, a 300 metros del mar y a pocos minutos del centro."
      },
      {
        question: "¿Tienen piscina?",
        answer: "Sí, una piscina con forma de ballena dentro de los 4.000 m² de jardín."
      },
      {
        question: "¿Hay cocina para usar?",
        answer: "Sí, las dos suites vacacionales incluyen cocina equipada."
      },
      {
        question: "¿Qué actividades hay dentro del alojamiento?",
        answer: "Billar, ping pong y horno de pan, además de espacios para compartir en familia."
      },
      {
        question: "¿Aceptan familias y grupos?",
        answer: "Sí, contamos con habitaciones familiares y espacio exclusivo para familias. Consultanos por grupos."
      },
      {
        question: "¿Cómo reservo?",
        answer: "Escribinos por WhatsApp y te confirmamos disponibilidad y precios según tus fechas."
      }
    ],
    location: {
      address: "Puerto López, Manabí, Ecuador",
      district: "Puerto López",
      city: "Puerto López",
      province: "Manabí",
      country: "Ecuador",
      destination_type: "city",
      is_coast: true,
      map_query: "Bosque Marino Ecolodge, Puerto López, Ecuador",
      map_embed: "https://maps.google.com/maps?q=Bosque+Marino+Ecolodge,+Puerto+L%C3%B3pez,+Ecuador&t=&z=16&ie=UTF8&iwloc=&output=embed",
      reviews_url: "https://www.google.com/maps/search/?api=1&query=Bosque+Marino+Ecolodge+Puerto+L%C3%B3pez",
      description: "A 300 metros del mar y a pocos minutos del centro de Puerto López, con 4.000 m² de jardín y piscina.",
      highlights: [
        { icon: "pin", text: "A 300 m del mar" },
        { icon: "sun", text: "Piscina con forma de ballena" },
        { icon: "bed", text: "4 habitaciones y 2 suites" },
        { icon: "clock", text: "A minutos del centro" }
      ],
      video: "videos/city-video.mp4"
    },
    contact: {
      whatsapp: "https://wa.me/593995464860",
      phone: "+593995464860",
      email: ""
    },
    social: {
      instagram: "",
      place_url: "https://www.google.com/maps/place/Bosque+Marino+Ecolodge/data=!4m10!3m9!1s0x902c209eeb27818d:0xc771e304521e46a4!5m2!4m1!1i2!8m2!3d-1.5551455!4d-80.8061529!16s%2Fg%2F11cs5m7vh3!19sChIJjYEn654gLJARpEYeUgTjccc?authuser=0&hl=es&g_ep=EgoyMDI2MTEwMS4wIJJjKgBIAVAD&rclk=1",
      website: "",
      facebook: "",
      tiktok: ""
    }
  };

  const whale = {
    id: "whale",
    label: "Whale House Hotel",
    hero: {
      video: "",
      poster: "fotos/whale/general/g01.jpg",
      eyebrow: "Puerto López · Manabí · Ecuador",
      title_line1: "Hospédate en",
      title_em: "Whale House Hotel",
      title_line2: "",
      subtitle: "Frente al mar, desayuno local incluido y vista al Pacífico."
    },
    about: {
      eyebrow: "Quiénes somos",
      title: "El primer hotel temático de ballenas en Ecuador.",
      paragraphs: [
        "Whale House Hotel está frente al mar, a 3 minutos caminando del malecón y del muelle, y a 10 minutos a pie del centro de Puerto López.",
        "Sus habitaciones tienen historias de ballenas pintadas a mano y están pensadas para descansar después de un día de tours. Incluye desayuno local, WiFi de fibra óptica, agua caliente, restaurante y bar, estacionamiento privado y 10% de descuento en tours de avistamiento."
      ],
      photos: [
        { src: "fotos/whale/general/g06.jpg", alt: "Whale House Hotel — vista general" },
        { src: "fotos/whale/general/g18.jpg", alt: "Whale House Hotel — habitaciones" }
      ]
    },
    trust_bar: [
      "Frente al mar",
      "Desayuno local incluido",
      "10% de descuento en tours"
    ],
    amenities: [
      {
        key: "sea",
        icon: "sun",
        title: "Frente al mar",
        description: "A 3 minutos del malecón y del muelle de embarque."
      },
      {
        key: "wifi",
        icon: "wifi",
        title: "WiFi fibra óptica",
        description: "Conexión estable en todo el hotel."
      },
      {
        key: "breakfast",
        icon: "kitchen",
        title: "Desayuno local incluido",
        description: "Productos y manos ecuatorianas, incluido con tu estadía."
      },
      {
        key: "hotwater",
        icon: "tv",
        title: "Agua caliente y TV",
        description: "Ducha con agua caliente y TV en las habitaciones."
      },
      {
        key: "restaurant",
        icon: "grill",
        title: "Restaurante y bar",
        description: "Para comer o tomar algo sin salir del hotel."
      },
      {
        key: "parking",
        icon: "car",
        title: "Estacionamiento privado",
        description: "Dejá tu vehículo en un espacio privado del hotel."
      }
    ],
    rooms: [
      {
        id: "ocean-view-deluxe",
        name: "Ocean View Deluxe",
        tagline: "Balcón privado frente al mar",
        description: "Acogedora habitación con una o dos camas de dos plazas, vista al mar y balcón privado. Ducha tipo regadera con vidrio templado y agua caliente, amenities biodegradables y diseño rústico con madera, bambú y mimbre.",
        capacity: "1–2 huéspedes",
        beds: "1 o 2 camas de dos plazas",
        amenities: ["Balcón privado", "Vista al mar", "Agua caliente", "Amenities biodegradables"],
        images: [
          "fotos/whale/ocean-view/01.jpg",
          "fotos/whale/ocean-view/02.jpg",
          "fotos/whale/ocean-view/03.jpg",
          "fotos/whale/ocean-view/04.jpg",
          "fotos/whale/ocean-view/05.jpg"
        ],
        price: "Consultar",
        whatsapp_message: "Hola, quiero reservar la habitación Ocean View Deluxe en Whale House Hotel."
      },
      {
        id: "matrimonial-doble-triple",
        name: "Matrimonial / Doble / Triple",
        tagline: "Vista a la montaña o al interior",
        description: "Habitación con una o dos camas de dos plazas y tamaño king. Vista a la montaña o al interior de Puerto López, escritorio, closet, ducha con agua caliente y amenities biodegradables.",
        capacity: "1–3 huéspedes",
        beds: "Cama king o dos camas",
        amenities: ["Vista a la montaña", "Escritorio", "Closet", "Agua caliente", "Amenities biodegradables"],
        images: [
          "fotos/whale/matrimonial/01.jpg",
          "fotos/whale/matrimonial/02.jpg",
          "fotos/whale/matrimonial/03.jpg",
          "fotos/whale/matrimonial/04.jpg"
        ],
        price: "Consultar",
        whatsapp_message: "Hola, quiero reservar la habitación Matrimonial / Doble / Triple en Whale House Hotel."
      },
      {
        id: "familiar",
        name: "Familiar",
        tagline: "Para familias, con o sin cocina",
        description: "Habitación amplia con tres o cuatro camas de dos plazas en un solo ambiente, ideal para familias con hijos. Incluye escritorio, closet, ducha con agua caliente y opción con cocina y menaje.",
        capacity: "3–4 huéspedes",
        beds: "3 o 4 camas de dos plazas",
        amenities: ["Con o sin cocina", "Escritorio", "Closet", "Agua caliente", "Amenities biodegradables"],
        images: [
          "fotos/whale/familiar/01.jpg",
          "fotos/whale/familiar/02.jpg",
          "fotos/whale/familiar/03.jpg",
          "fotos/whale/familiar/04.jpg"
        ],
        price: "Consultar",
        whatsapp_message: "Hola, quiero reservar la habitación Familiar en Whale House Hotel."
      }
    ],
    gallery: {
      images: [
        { src: "fotos/whale/general/g01.jpg", alt: "Whale House Hotel — vista general 01" },
        { src: "fotos/whale/general/g02.jpg", alt: "Whale House Hotel — vista general 02" },
        { src: "fotos/whale/general/g03.jpg", alt: "Whale House Hotel — vista general 03" },
        { src: "fotos/whale/general/g04.jpg", alt: "Whale House Hotel — vista general 04" },
        { src: "fotos/whale/general/g05.jpg", alt: "Whale House Hotel — vista general 05" },
        { src: "fotos/whale/general/g06.jpg", alt: "Whale House Hotel — vista general 06" },
        { src: "fotos/whale/general/g07.jpg", alt: "Whale House Hotel — vista general 07" },
        { src: "fotos/whale/general/g08.jpg", alt: "Whale House Hotel — vista general 08" },
        { src: "fotos/whale/general/g09.jpg", alt: "Whale House Hotel — vista general 09" },
        { src: "fotos/whale/general/g10.jpg", alt: "Whale House Hotel — vista general 10" },
        { src: "fotos/whale/general/g11.jpg", alt: "Whale House Hotel — vista general 11" },
        { src: "fotos/whale/general/g12.jpg", alt: "Whale House Hotel — vista general 12" },
        { src: "fotos/whale/general/g13.jpg", alt: "Whale House Hotel — vista general 13" },
        { src: "fotos/whale/general/g14.jpg", alt: "Whale House Hotel — vista general 14" },
        { src: "fotos/whale/general/g15.jpg", alt: "Whale House Hotel — vista general 15" },
        { src: "fotos/whale/general/g16.jpg", alt: "Whale House Hotel — vista general 16" },
        { src: "fotos/whale/general/g17.jpg", alt: "Whale House Hotel — vista general 17" },
        { src: "fotos/whale/general/g18.jpg", alt: "Whale House Hotel — vista general 18" },
        { src: "fotos/whale/general/g19.jpg", alt: "Whale House Hotel — vista general 19" },
        { src: "fotos/whale/general/g20.jpg", alt: "Whale House Hotel — vista general 20" },
        { src: "fotos/whale/general/g21.jpg", alt: "Whale House Hotel — vista general 21" }
      ],
      videos: []
    },
    pricing: {
      eyebrow: "Precios",
      amount: "Consultar",
      period: "SEGÚN TEMPORADA",
      title: "Escribinos y te enviamos los precios actualizados según fechas.",
      note: "Precios por habitación. Anticipo del 30% y tarifas especiales para grupos.",
      cta_text: "Consultar disponibilidad"
    },
    testimonials: [
      {
        author: "Emmanuelle Vigneron",
        text: "El diseño está interesante y el desayuno está rico.",
        source: "Google",
        extract: true
      },
      {
        author: "Marco Bravo",
        text: "El lugar es acogedor y familiar, justo frente a la playa.",
        source: "Google",
        extract: true
      }
    ],
    testimonials_meta: {
      source: "google",
      rating: 3.6,
      count: 24,
      url: "https://www.google.com/maps/search/?api=1&query=Whale+House+Hotel+Puerto+L%C3%B3pez"
    },
    faq: [
      {
        question: "¿Dónde está ubicado Whale House Hotel?",
        answer: "Frente al mar, en Mal. Julio Izurieta, a 3 minutos caminando del malecón y del muelle, y a 10 minutos a pie del centro."
      },
      {
        question: "¿El desayuno está incluido?",
        answer: "Sí, el desayuno local está incluido en la estadía."
      },
      {
        question: "¿Tienen estacionamiento?",
        answer: "Sí, el hotel cuenta con estacionamiento privado."
      },
      {
        question: "¿Hay restaurante y bar?",
        answer: "Sí, el hotel tiene restaurante y bar."
      },
      {
        question: "¿Ofrecen descuentos en tours?",
        answer: "Sí, 10% de descuento en tours de avistamiento de ballenas."
      },
      {
        question: "¿Cuánto es el anticipo?",
        answer: "El anticipo es del 30% del total de la reserva."
      },
      {
        question: "¿Hacen tarifas especiales para grupos?",
        answer: "Sí, consultanos por tarifas especiales para grupos."
      },
      {
        question: "¿Cómo reservo?",
        answer: "Escribinos por WhatsApp y te confirmamos disponibilidad, precio y anticipo."
      }
    ],
    location: {
      address: "Mal. Julio Izurieta, 131950 Puerto López",
      district: "Puerto López",
      city: "Puerto López",
      province: "Manabí",
      country: "Ecuador",
      destination_type: "city",
      is_coast: true,
      map_query: "Whale House Hotel, Puerto López, Ecuador",
      map_embed: "https://maps.google.com/maps?q=Whale+House+Hotel,+Puerto+L%C3%B3pez,+Ecuador&t=&z=16&ie=UTF8&iwloc=&output=embed",
      reviews_url: "https://www.google.com/maps/search/?api=1&query=Whale+House+Hotel+Puerto+L%C3%B3pez",
      description: "Frente al mar, a 3 minutos del malecón y del muelle, y a 10 minutos a pie del centro de Puerto López.",
      highlights: [
        { icon: "pin", text: "Mal. Julio Izurieta" },
        { icon: "sun", text: "Frente al mar" },
        { icon: "clock", text: "3 min del muelle" },
        { icon: "car", text: "Estacionamiento privado" }
      ]
    },
    contact: {
      whatsapp: "https://wa.me/593995464860",
      phone: "+593 5-230-0289",
      email: ""
    },
    social: {
      instagram: "",
      place_url: "https://www.google.com/maps/place/Whale+House+Hotel/@-1.5513784,-80.813343,17z/data=!3m1!4b1!4m9!3m8!1s0x902e9f9fdc41f685:0x425659d61d247a7f!5m2!4m1!1i2!8m2!3d-1.5513784!4d-80.8107681!16s%2Fg%2F11lh5k7x16",
      website: "https://whalewatchingecuador.com/es/hotel-puerto-lopez",
      facebook: "",
      tiktok: ""
    }
  };

  const enBosque = {
    hero: {
      eyebrow: "Puerto López · Manabí · Ecuador",
      title_line1: "Stay at",
      title_em: "Bosque Marino Ecolodge",
      title_line2: "",
      subtitle: "4,000 m² of garden, a whale-shaped pool and the sea 300 metres away."
    },
    about: {
      eyebrow: "About us",
      title: "A green retreat 300 metres from the sea.",
      paragraphs: [
        "Bosque Marino Ecolodge is a family-run stay in Puerto López, with 4,000 m² of garden, a whale-shaped pool and spaces designed to rest after exploring the coast.",
        "We have 4 rooms and 2 holiday suites with a kitchen, cable TV and WiFi. There is a billiard table, ping pong and a bread oven to share with family or other travellers."
      ],
      photos: [
        { src: "fotos/foto-02.webp", alt: "Bosque Marino Ecolodge — common areas" },
        { src: "fotos/foto-03.webp", alt: "Bosque Marino Ecolodge — garden and pool" }
      ]
    },
    trust_bar: [
      "4,000 m² of garden",
      "300 m from the sea",
      "Whale-shaped pool"
    ],
    amenities: [
      {
        key: "pool",
        icon: "sun",
        title: "Whale-shaped pool",
        description: "Surrounded by garden, to cool off and enjoy the outdoors."
      },
      {
        key: "wifi",
        icon: "wifi",
        title: "WiFi and cable TV",
        description: "Connection in the rooms and common areas."
      },
      {
        key: "rooms",
        icon: "bed",
        title: "Spacious rooms",
        description: "Options for couples, families and groups, with garden views."
      },
      {
        key: "kitchen",
        icon: "kitchen",
        title: "Suites with kitchen",
        description: "Two holiday suites with a fully equipped kitchen for longer stays."
      },
      {
        key: "games",
        icon: "grill",
        title: "Billiards, ping pong and bread oven",
        description: "Spaces to share without leaving the property."
      }
    ],
    rooms: [
      {
        id: "suite-vacacional",
        name: "Holiday Suite with Kitchen",
        tagline: "Ideal for families and long stays",
        description: "Spacious suite with a fully equipped kitchen, garden views, cable TV and WiFi. Made for guests who want to cook and stay a few days.",
        capacity: "2–4 guests",
        beds: "Double bed and space for extra beds",
        amenities: ["Equipped kitchen", "Garden view", "Cable TV", "WiFi", "Private bathroom"],
        images: [
          "fotos/foto-07.webp",
          "fotos/foto-06.webp",
          "fotos/foto-05.webp"
        ],
        price: "Ask us",
        whatsapp_message: "Hi, I'd like to book the Holiday Suite with Kitchen at Bosque Marino Ecolodge."
      },
      {
        id: "habitacion-familiar",
        name: "Family Room",
        tagline: "Spacious and bright, with garden views",
        description: "A room designed for families, with double beds, private bathroom, cable TV and WiFi. A private space to rest as a group.",
        capacity: "3–4 guests",
        beds: "Double beds",
        amenities: ["Garden view", "Cable TV", "WiFi", "Private bathroom"],
        images: [
          "fotos/foto-02.webp",
          "fotos/foto-03.webp",
          "fotos/foto-04.webp"
        ],
        price: "Ask us",
        whatsapp_message: "Hi, I'd like to book the Family Room at Bosque Marino Ecolodge."
      },
      {
        id: "doble-matrimonial",
        name: "Double / Matrimonial Room",
        tagline: "For couples or travellers looking for quiet",
        description: "Room with a double bed or two beds, private bathroom, cable TV and WiFi. Garden views and access to all common areas.",
        capacity: "1–2 guests",
        beds: "Double bed or two beds",
        amenities: ["Garden view", "Cable TV", "WiFi", "Private bathroom"],
        images: [
          "fotos/foto-08.webp",
          "fotos/foto-10.webp",
          "fotos/foto-11.webp"
        ],
        price: "Ask us",
        whatsapp_message: "Hi, I'd like to book the Double / Matrimonial Room at Bosque Marino Ecolodge."
      }
    ],
    gallery: {
      images: [
        { src: "fotos/foto-01.webp", alt: "Bosque Marino Ecolodge — general view" },
        { src: "fotos/foto-02.webp", alt: "Bosque Marino Ecolodge — common areas" },
        { src: "fotos/foto-03.webp", alt: "Bosque Marino Ecolodge — garden and pool" },
        { src: "fotos/foto-04.webp", alt: "Bosque Marino Ecolodge — relaxation area" },
        { src: "fotos/foto-05.webp", alt: "Bosque Marino Ecolodge — whale-shaped pool" },
        { src: "fotos/foto-06.webp", alt: "Bosque Marino Ecolodge — suite kitchen" },
        { src: "fotos/foto-07.webp", alt: "Bosque Marino Ecolodge — room" },
        { src: "fotos/foto-08.webp", alt: "Bosque Marino Ecolodge — terrace" },
        { src: "fotos/foto-09.webp", alt: "Bosque Marino Ecolodge — main entrance" },
        { src: "fotos/foto-10.webp", alt: "Bosque Marino Ecolodge — green areas" },
        { src: "fotos/foto-11.webp", alt: "Bosque Marino Ecolodge — dining room" },
        { src: "fotos/foto-12.webp", alt: "Bosque Marino Ecolodge — common lounge" }
      ]
    },
    pricing: {
      eyebrow: "Prices",
      amount: "Ask us",
      period: "VARIES BY SEASON",
      title: "Message us for updated prices based on your dates.",
      note: "Rates per room. Ask us about long stays and groups.",
      cta_text: "Check availability"
    },
    testimonials: [
      {
        author: "Federico T.",
        rating: 4,
        text: "A beautiful experience. Comfortable, well located and with attention that feels made with care."
      },
      {
        author: "Tomás V.",
        rating: 5,
        text: "Unique atmosphere, they open the door of their home to you. One of the best stays we had travelling."
      },
      {
        author: "Joaquín H.",
        rating: 5,
        text: "Excellent place to rest after exploring. Highly recommended, we'll be back for sure."
      },
      {
        author: "Nicolás S.",
        rating: 5,
        text: "Perfect to disconnect. Quiet, clean and with spaces to share with other travellers."
      }
    ],
    faq: [
      {
        question: "Where is Bosque Marino Ecolodge located?",
        answer: "In Puerto López, Manabí, 300 metres from the sea and a few minutes from the town centre."
      },
      {
        question: "Do you have a pool?",
        answer: "Yes, a whale-shaped pool inside the 4,000 m² garden."
      },
      {
        question: "Is there a kitchen available?",
        answer: "Yes, both holiday suites include a fully equipped kitchen."
      },
      {
        question: "What activities are available on site?",
        answer: "Billiards, ping pong and a bread oven, plus spaces to share with family."
      },
      {
        question: "Do you welcome families and groups?",
        answer: "Yes, we have family rooms and a space exclusively for families. Ask us about groups."
      },
      {
        question: "How do I book?",
        answer: "Message us on WhatsApp and we'll confirm availability and prices for your dates."
      }
    ],
    location: {
      description: "300 metres from the sea and a few minutes from downtown Puerto López, with 4,000 m² of garden and a pool.",
      highlights: [
        { icon: "pin", text: "300 m from the sea" },
        { icon: "sun", text: "Whale-shaped pool" },
        { icon: "bed", text: "4 rooms and 2 suites" },
        { icon: "clock", text: "Minutes from downtown" }
      ]
    }
  };

  const enWhale = {
    hero: {
      eyebrow: "Puerto López · Manabí · Ecuador",
      title_line1: "Stay at",
      title_em: "Whale House Hotel",
      title_line2: "",
      subtitle: "Seafront, local breakfast included and Pacific views."
    },
    about: {
      eyebrow: "About us",
      title: "The first whale-themed hotel in Ecuador.",
      paragraphs: [
        "Whale House Hotel is right on the seafront, a 3-minute walk from the boardwalk and the pier, and a 10-minute walk from downtown Puerto López.",
        "Its rooms feature hand-painted whale stories and are designed to rest after a day of tours. Rates include local breakfast, fibre-optic WiFi, hot water, restaurant and bar, private parking and 10% off whale-watching tours."
      ],
      photos: [
        { src: "fotos/whale/general/g06.jpg", alt: "Whale House Hotel — general view" },
        { src: "fotos/whale/general/g18.jpg", alt: "Whale House Hotel — rooms" }
      ]
    },
    trust_bar: [
      "Seafront",
      "Local breakfast included",
      "10% off tours"
    ],
    amenities: [
      {
        key: "sea",
        icon: "sun",
        title: "Seafront",
        description: "A 3-minute walk from the boardwalk and the tour pier."
      },
      {
        key: "wifi",
        icon: "wifi",
        title: "Fibre-optic WiFi",
        description: "Stable connection throughout the hotel."
      },
      {
        key: "breakfast",
        icon: "kitchen",
        title: "Local breakfast included",
        description: "Local products and Ecuadorian hands, included with your stay."
      },
      {
        key: "hotwater",
        icon: "tv",
        title: "Hot water and TV",
        description: "Hot-water shower and TV in the rooms."
      },
      {
        key: "restaurant",
        icon: "grill",
        title: "Restaurant and bar",
        description: "Eat or have a drink without leaving the hotel."
      },
      {
        key: "parking",
        icon: "car",
        title: "Private parking",
        description: "Leave your vehicle in the hotel's private parking area."
      }
    ],
    rooms: [
      {
        id: "ocean-view-deluxe",
        name: "Ocean View Deluxe",
        tagline: "Private balcony facing the sea",
        description: "Cosy room with one or two double beds, sea views and a private balcony. Glass-enclosed rain shower with hot water, biodegradable amenities and rustic design with wood, bamboo and wicker.",
        capacity: "1–2 guests",
        beds: "1 or 2 double beds",
        amenities: ["Private balcony", "Sea view", "Hot water", "Biodegradable amenities"],
        images: [
          "fotos/whale/ocean-view/01.jpg",
          "fotos/whale/ocean-view/02.jpg",
          "fotos/whale/ocean-view/03.jpg",
          "fotos/whale/ocean-view/04.jpg",
          "fotos/whale/ocean-view/05.jpg"
        ],
        price: "Ask us",
        whatsapp_message: "Hi, I'd like to book the Ocean View Deluxe room at Whale House Hotel."
      },
      {
        id: "matrimonial-doble-triple",
        name: "Matrimonial / Double / Triple",
        tagline: "Mountain or interior views",
        description: "Room with one or two double beds and king size. Mountain or interior views of Puerto López, desk, closet, hot-water shower and biodegradable amenities.",
        capacity: "1–3 guests",
        beds: "King bed or two beds",
        amenities: ["Mountain view", "Desk", "Closet", "Hot water", "Biodegradable amenities"],
        images: [
          "fotos/whale/matrimonial/01.jpg",
          "fotos/whale/matrimonial/02.jpg",
          "fotos/whale/matrimonial/03.jpg",
          "fotos/whale/matrimonial/04.jpg"
        ],
        price: "Ask us",
        whatsapp_message: "Hi, I'd like to book the Matrimonial / Double / Triple room at Whale House Hotel."
      },
      {
        id: "familiar",
        name: "Family Room",
        tagline: "For families, with or without kitchen",
        description: "Spacious room with three or four double beds in a single space, ideal for families with children. Includes desk, closet, hot-water shower and the option of a kitchen with utensils.",
        capacity: "3–4 guests",
        beds: "3 or 4 double beds",
        amenities: ["With or without kitchen", "Desk", "Closet", "Hot water", "Biodegradable amenities"],
        images: [
          "fotos/whale/familiar/01.jpg",
          "fotos/whale/familiar/02.jpg",
          "fotos/whale/familiar/03.jpg",
          "fotos/whale/familiar/04.jpg"
        ],
        price: "Ask us",
        whatsapp_message: "Hi, I'd like to book the Family Room at Whale House Hotel."
      }
    ],
    gallery: {
      images: [
        { src: "fotos/whale/general/g01.jpg", alt: "Whale House Hotel — general view 01" },
        { src: "fotos/whale/general/g02.jpg", alt: "Whale House Hotel — general view 02" },
        { src: "fotos/whale/general/g03.jpg", alt: "Whale House Hotel — general view 03" },
        { src: "fotos/whale/general/g04.jpg", alt: "Whale House Hotel — general view 04" },
        { src: "fotos/whale/general/g05.jpg", alt: "Whale House Hotel — general view 05" },
        { src: "fotos/whale/general/g06.jpg", alt: "Whale House Hotel — general view 06" },
        { src: "fotos/whale/general/g07.jpg", alt: "Whale House Hotel — general view 07" },
        { src: "fotos/whale/general/g08.jpg", alt: "Whale House Hotel — general view 08" },
        { src: "fotos/whale/general/g09.jpg", alt: "Whale House Hotel — general view 09" },
        { src: "fotos/whale/general/g10.jpg", alt: "Whale House Hotel — general view 10" },
        { src: "fotos/whale/general/g11.jpg", alt: "Whale House Hotel — general view 11" },
        { src: "fotos/whale/general/g12.jpg", alt: "Whale House Hotel — general view 12" },
        { src: "fotos/whale/general/g13.jpg", alt: "Whale House Hotel — general view 13" },
        { src: "fotos/whale/general/g14.jpg", alt: "Whale House Hotel — general view 14" },
        { src: "fotos/whale/general/g15.jpg", alt: "Whale House Hotel — general view 15" },
        { src: "fotos/whale/general/g16.jpg", alt: "Whale House Hotel — general view 16" },
        { src: "fotos/whale/general/g17.jpg", alt: "Whale House Hotel — general view 17" },
        { src: "fotos/whale/general/g18.jpg", alt: "Whale House Hotel — general view 18" },
        { src: "fotos/whale/general/g19.jpg", alt: "Whale House Hotel — general view 19" },
        { src: "fotos/whale/general/g20.jpg", alt: "Whale House Hotel — general view 20" },
        { src: "fotos/whale/general/g21.jpg", alt: "Whale House Hotel — general view 21" }
      ]
    },
    pricing: {
      eyebrow: "Prices",
      amount: "Ask us",
      period: "VARIES BY SEASON",
      title: "Message us for updated prices based on your dates.",
      note: "Rates per room. 30% deposit and special group rates.",
      cta_text: "Check availability"
    },
    testimonials: [
      {
        author: "Emmanuelle Vigneron",
        text: "The design is interesting and the breakfast is tasty.",
        source: "Google",
        extract: true
      },
      {
        author: "Marco Bravo",
        text: "The place is cosy and family-friendly, right in front of the beach.",
        source: "Google",
        extract: true
      }
    ],
    faq: [
      {
        question: "Where is Whale House Hotel located?",
        answer: "On the seafront, at Mal. Julio Izurieta, a 3-minute walk from the boardwalk and pier, and a 10-minute walk from downtown."
      },
      {
        question: "Is breakfast included?",
        answer: "Yes, local breakfast is included with your stay."
      },
      {
        question: "Do you have parking?",
        answer: "Yes, the hotel has private parking."
      },
      {
        question: "Is there a restaurant and bar?",
        answer: "Yes, the hotel has a restaurant and bar."
      },
      {
        question: "Do you offer tour discounts?",
        answer: "Yes, 10% off whale-watching tours."
      },
      {
        question: "How much is the deposit?",
        answer: "The deposit is 30% of the total booking."
      },
      {
        question: "Do you have special group rates?",
        answer: "Yes, ask us about special rates for groups."
      },
      {
        question: "How do I book?",
        answer: "Message us on WhatsApp and we'll confirm availability, price and deposit."
      }
    ],
    location: {
      description: "On the seafront, a 3-minute walk from the boardwalk and pier, and a 10-minute walk from downtown Puerto López.",
      highlights: [
        { icon: "pin", text: "Mal. Julio Izurieta" },
        { icon: "sun", text: "Seafront" },
        { icon: "clock", text: "3 min from the pier" },
        { icon: "car", text: "Private parking" }
      ]
    }
  };

  const business = {
    name: "Bosque Marino Ecolodge",
    short_name: "Bosque Marino Ecolodge",
    tagline: "Bosque Marino & Whale House · Puerto López",
    description: "Dos alojamientos frente al mar en Puerto López: Bosque Marino Ecolodge y Whale House Hotel. Habitaciones para familias, parejas y grupos, con WiFi, piscina y desayuno. Reservá directo por WhatsApp.",
    category: "Hospedaje",
    followers: 0
  };

  const seo = {
    title: "Bosque Marino Ecolodge & Whale House Hotel | Puerto López, Ecuador",
    description: "Dos alojamientos frente al mar en Puerto López: Bosque Marino Ecolodge y Whale House Hotel. Habitaciones para familias, parejas y grupos, con WiFi, piscina y desayuno. Reservá directo por WhatsApp."
  };

  const footer = {
    description: "Bosque Marino Ecolodge & Whale House Hotel · Puerto López, Ecuador",
    copyright: "© 2026 Bosque Marino Ecolodge & Whale House Hotel. Todos los derechos reservados.",
    made_by: "Sitio hecho por Aizly"
  };

  const enBusiness = {
    name: "Bosque Marino Ecolodge",
    short_name: "Bosque Marino Ecolodge",
    tagline: "Bosque Marino & Whale House · Puerto López",
    description: "Two seafront stays in Puerto López: Bosque Marino Ecolodge and Whale House Hotel. Rooms for families, couples and groups, with WiFi, pool and breakfast. Book direct on WhatsApp.",
    category: "Accommodation"
  };

  const enSeo = {
    title: "Bosque Marino Ecolodge & Whale House Hotel | Puerto López, Ecuador",
    description: "Two seafront stays in Puerto López: Bosque Marino Ecolodge and Whale House Hotel. Rooms for families, couples and groups, with WiFi, pool and breakfast. Book direct on WhatsApp."
  };

  const enFooter = {
    description: "Bosque Marino Ecolodge & Whale House Hotel · Puerto López, Ecuador",
    copyright: "© 2026 Bosque Marino Ecolodge & Whale House Hotel. All rights reserved.",
    made_by: "Site by Aizly"
  };

  const schema_ld = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LodgingBusiness",
        "name": "Bosque Marino Ecolodge",
        "description": "Alojamiento familiar en Puerto López con 4.000 m² de jardín, piscina con forma de ballena y el mar a 300 metros.",
        "url": "https://bosque-marino-ecolodge.vercel.app/",
        "telephone": "+593995464860",
        "image": "https://bosque-marino-ecolodge.vercel.app/fotos/foto-01.webp",
        "sameAs": [
          "https://www.google.com/maps/place/Bosque+Marino+Ecolodge/data=!4m10!3m9!1s0x902c209eeb27818d:0xc771e304521e46a4!5m2!4m1!1i2!8m2!3d-1.5551455!4d-80.8061529!16s%2Fg%2F11cs5m7vh3!19sChIJjYEn654gLJARpEYeUgTjccc?authuser=0&hl=es&g_ep=EgoyMDI2MTEwMS4wIJJjKgBIAVAD&rclk=1"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Puerto López",
          "addressLocality": "Puerto López",
          "addressRegion": "Manabí",
          "addressCountry": "EC"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -1.5551455,
          "longitude": -80.8061529
        },
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Piscina con forma de ballena", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "WiFi y TV cable", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Jardín de 4.000 m²", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Suites con cocina", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Billar y ping pong", "value": true }
        ]
      },
      {
        "@type": "Hotel",
        "name": "Whale House Hotel",
        "description": "Hotel temático de ballenas frente al mar en Puerto López, con desayuno local incluido, WiFi de fibra óptica, agua caliente y restaurante.",
        "url": "https://whalewatchingecuador.com/es/hotel-puerto-lopez",
        "telephone": "+593995464860",
        "email": "palosanto22@gmail.com",
        "image": "https://bosque-marino-ecolodge.vercel.app/fotos/whale/general/g01.jpg",
        "sameAs": [
          "https://www.google.com/maps/place/Whale+House+Hotel/@-1.5513784,-80.813343,17z/data=!3m1!4b1!4m9!3m8!1s0x902e9f9fdc41f685:0x425659d61d247a7f!5m2!4m1!1i2!8m2!3d-1.5513784!4d-80.8107681!16s%2Fg%2F11lh5k7x16",
          "https://whalewatchingecuador.com/es/hotel-puerto-lopez"
        ],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Mal. Julio Izurieta",
          "addressLocality": "Puerto López",
          "addressRegion": "Manabí",
          "addressCountry": "EC"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -1.5513784,
          "longitude": -80.8107681
        },
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Frente al mar", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Desayuno local incluido", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "WiFi fibra óptica", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Agua caliente", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Restaurante y bar", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Estacionamiento privado", "value": true }
        ]
      }
    ]
  };

  window.__CONFIG = {
    business: business,
    seo: seo,
    properties: {
      bosque: bosque,
      whale: whale
    },
    footer: footer,
    i18n: {
      en: {
        business: enBusiness,
        seo: enSeo,
        footer: enFooter,
        properties: {
          bosque: enBosque,
          whale: enWhale
        },

        /* Alias planos para preview-A/B/C (main-A/B/C) */
        hero: enBosque.hero,
        about: enBosque.about,
        location: enBosque.location,
        gallery: enBosque.gallery,
        pricing: enBosque.pricing,
        faq: enBosque.faq,
        trust_bar: enBosque.trust_bar,
        amenities: enBosque.amenities,
        testimonials: enBosque.testimonials,
        footer: enFooter
      }
    },
    schema_ld: schema_ld,

    /* Alias planos de Bosque Marino para preview-A/B/C */
    hero: bosque.hero,
    about: bosque.about,
    location: bosque.location,
    contact: bosque.contact,
    social: bosque.social,
    trust_bar: bosque.trust_bar,
    amenities: bosque.amenities,
    rooms: bosque.rooms,
    gallery: bosque.gallery,
    pricing: bosque.pricing,
    testimonials: bosque.testimonials,
    testimonials_meta: bosque.testimonials_meta,
    faq: bosque.faq
  };
})();
