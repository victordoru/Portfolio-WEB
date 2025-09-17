export const translations = {
  en: {
    site: {
      title: 'Victor Portfolio',
      description: 'Full-stack web developer portfolio of Victor Dominguez.',
      languageLabel: 'EN',
      switchLabel: 'ES',
      switchAria: 'Switch to Spanish',
      switchHref: '/es/'
    },
    section1: {
      subtitle: 'FULLSTACK WEB DEVELOPER',
      name: 'VICTOR DOMINGUEZ',
      contactButton: 'Get in touch',
      contactAria: 'Go to the contact section',
      contactOptionsAria: 'Contact shortcuts',
      downloadCv: 'Download CV',
      downloadCvAria: 'Download CV',
      linkedinAria: 'LinkedIn profile',
      whatsappAria: 'Open WhatsApp chat',
      phoneAria: 'Call by phone',
      scrollAria: 'Scroll to the next section',
      whatsappTitle: 'WhatsApp',
      phoneTitle: 'Call',
      scrollLabel: 'Scroll down'
    },
    section2: {
      title: 'WORK EXPERIENCE',
      latestProjects: 'Latest Projects',
      resume: 'Resume',
      projects: [
        {
          key: 'winto',
          title: 'Winto',
          description: 'Online ticketing startup with microservices architecture, React + Tailwind frontend, and Stripe integration.',
          tag: 'Co-Founder & Lead Developer',
          image: '/images/winto-iphone.png',
          alt: 'Winto Project',
          href: 'https://winto.app'
        },
        {
          key: 'nadales',
          title: 'Hacienda Nadales',
          description: 'Elegant website for luxury venue with custom design and content management system.',
          tag: 'Freelance Development',
          image: '/images/nadales.png',
          alt: 'Hacienda Nadales',
          href: 'https://haciendanadales.com'
        },
        {
          key: 'serene',
          title: 'Serene Proyectos',
          description: 'Corporate website with custom CMS, full cycle development from wireframes to deployment.',
          tag: 'Freelance Development',
          image: '/images/serene-3.png',
          alt: 'Serene Proyectos',
          href: 'https://sereneproyectos.com'
        },
        {
          key: 'tarifa',
          title: 'Parking Centro Tarifa',
          description: 'Corporate page with contact capabilities and a lightweight CMD.',
          tag: 'Freelance Development',
          image: '/images/tarifa-3.png',
          alt: 'Parking Centro Tarifa',
          href: 'https://parkingcentrotarifa.com'
        }
      ],
      timeline: [
        {
          side: 'left',
          dateClass: 'timeline-empty timeline-empty-with-bg',
          dateLabel: 'Time period January 2025 to Present',
          dateText: 'Jan 2025 - Present',
          role: 'CO-FOUNDER & CO-LEAD DEVELOPER',
          company: 'WINTO',
          link: 'https://winto.app',
          linkLabel: 'Visit Winto website',
          items: [
            'Co-founded an online ticketing startup as part of a two-person technical team responsible for designing and building the end-to-end platform.',
            'Participated in the CIBEREMPRENDE incubation program.',
            'Built a ticketing and event management SaaS: UX/UI, Node + MongoDB microservices, React + Tailwind frontend, and Stripe payments.',
            'Developed winto.app (customer platform) and panel.winto.app (organiser control panel).'
          ]
        },
        {
          side: 'right',
          dateClass: 'timeline-empty timeline-empty-serene',
          dateLabel: 'Time period January 2025 to Present',
          dateText: 'Jan 2025 - Present',
          role: 'FREELANCE • FULL-STACK WEB DEVELOPER',
          company: 'REMOTE',
          items: [
            'Designed and developed three corporate websites (sereneproyectos.com, parkingcentrotarifa.com, haciendanadales.com), covering briefing, UX, UI, development, SEO, and deployment.',
            'Implemented lightweight CMS solutions so clients can self-manage their content.'
          ]
        },
        {
          side: 'left',
          dateClass: 'timeline-empty timeline-empty-drenting',
          dateLabel: 'Time period January 2024 to December 2024',
          dateText: 'Jan 2024 - Dec 2024',
          role: 'FULL STACK WEB DEVELOPER',
          company: 'DRIVE ME BARCELONA',
          link: 'https://drenting.com/',
          linkLabel: 'Visit Drive Me Barcelona website',
          items: [
            'Developed a used car marketplace portal, aggregating data via scraping from multiple external sites.',
            'Implemented full CRUD functionality for vehicle and user management.',
            'Created advanced search filters (brand, model, price, etc.) to enhance user experience.',
            'Owned the front-end architecture: API integration, data handling, and custom responsive CSS.',
            'Automated synchronisation with third-party tools such as Netsuite and Zoho.'
          ]
        },
        {
          side: 'right',
          dateClass: 'timeline-empty timeline-empty-ufit',
          dateLabel: 'Time period January 2022 to August 2022',
          dateText: 'Jan 2022 - Aug 2022',
          role: 'FLUTTER DEVELOPER',
          company: 'UFIT-365',
          link: 'https://ufit365.com/',
          linkLabel: 'Visit UFIT-365 website',
          items: [
            'Led the migration of the entire front-end application to Flutter.',
            'Designed a scalable architecture for state management and maintainable code.',
            'Delivered interfaces following UX/UI best practices.',
            'Collaborated closely with a senior mobile developer (15+ years experience).'
          ]
        },
        {
          side: 'left',
          dateClass: 'timeline-empty',
          dateLabel: 'Time period April 2021 to November 2021',
          dateText: 'Apr 2021\nNov 2021',
          role: 'FULL STACK WEB DEVELOPER',
          company: 'HOOPLING',
          items: [
            'Built an influencer platform from scratch.',
            'Designed wireframes and UX workflows.',
            'Developed with the MERN stack and Redux for state management.',
            'Managed version control with Git and GitHub.'
          ],
          extraNote: '(Internship)'
        },
        {
          side: 'right',
          dateClass: 'timeline-empty timeline-empty-soho',
          dateLabel: 'Time period February 2021',
          dateText: 'Feb 2021\nFeb 2021',
          role: 'PROMOTIONAL VIDEO',
          company: 'TEATRO SOHO CAIXABANK',
          link: 'https://teatrodelsoho.com/',
          linkLabel: 'Visit Teatro Soho website',
          items: [
            'Filmed with professional cameras including stabilisers and drones.',
            'Edited video assets in Adobe After Effects and Premiere.',
            'Created vector graphics in Illustrator.'
          ]
        }
      ]
    },
    section3: {
      title: 'OTHER PROJECTS',
      cards: [
        {
          key: 'malaga-cathedral',
          title: 'MÁLAGA CATHEDRAL REIMAGINED IN AR',
          description: 'Final Degree Project: an AR web app that reconstructs the missing tower of Málaga Cathedral using Three.js and WebXR.',
          icons: ['HTM5', 'Javasci', 'Cs3'],
          ariaLabel: 'Project: Málaga Cathedral AR reconstruction',
          ariaTech: 'Technologies used: Three.js, WebXR, WebGL'
        },
        {
          key: 'unealia',
          title: 'UNEALIA',
          description: 'Multiplayer Unity party game created with C#, promoting cooperative fun. Unity · C# · 3D modelling.',
          icons: ['Unity', 'Cc'],
          ariaLabel: 'Project: Unealia multiplayer Unity game',
          ariaTech: 'Technologies used: Unity, C#'
        },
        {
          key: 'movie-searcher',
          title: 'MOVIE SEARCHER',
          description: 'A movie discovery web app powered by an external API with rating management and detailed information.',
          icons: ['React'],
          ariaLabel: 'Project: Movie Searcher web application',
          ariaTech: 'Technologies used: React'
        },
        {
          key: 'video-soho',
          title: 'VIDEO SOHO',
          description: 'Promotional video for Teatro del Soho covering filming, editing, and motion graphics.',
          icons: ['Aftere', 'Premier'],
          ariaLabel: 'Project: Video Soho promotional video',
          ariaTech: 'Technologies used: After Effects, Premiere'
        },
        {
          key: 'nike-video',
          title: 'NIKE VIDEO',
          description: 'Nike advertisement featuring dynamic animations crafted in After Effects.',
          icons: ['Aftere', 'Premier'],
          ariaLabel: 'Project: Nike advertising video',
          ariaTech: 'Technologies used: After Effects, Premiere'
        },
        {
          key: 'ivoox',
          title: 'IVOOX',
          description: 'Production and post-production of an iVoox advertisement with filming and motion graphics.',
          icons: ['Aftere', 'Premier'],
          ariaLabel: 'Project: iVoox advertising spot',
          ariaTech: 'Technologies used: After Effects, Premiere'
        }
      ],
      modal: {
        visitProject: 'Visit Project',
        downloadGame: 'Download Game',
        browserNotSupported: 'Your browser does not support the video tag.'
      },
      modalProjects: {
        'malaga-cathedral': {
          type: 'video',
          title: 'MÁLAGA CATHEDRAL REIMAGINED IN AR',
          description: 'As my Final Degree Project, I developed an Augmented Reality (AR) web application that digitally reconstructed the missing tower of Málaga Cathedral, known as La Manquita. The project combined 3D modeling, web programming, and AR integration to allow users to visualise the cathedral as it was originally designed, both at real scale and on a 3D-printed model. Using technologies such as Three.js, WebGL, and WebXR, the solution runs directly in the browser, eliminating the need for native installations. The application explored different AR approaches, including hit testing, image recognition, and strategic positioning, to achieve accurate placement of the 3D model in real-world scenarios. It also implemented dynamic lighting environments based on the time of day and underwent user testing to refine usability. The result is an interactive tool that blends cultural heritage with immersive technology, offering visitors a new way to experience the cathedral.',
          content: '/projects/composicion-TFG.mp4'
        },
        'unealia': {
          type: 'special',
          title: 'UNEALIA',
          description: 'Unealia is a 2-4 player local-multiplayer party game created by five students from the Multimedia Degree at UPC. The team: Víctor Domínguez and Jorge Mateo Ortiz (programmers), Ignacio Solera and Pere Balasch (3D artists), and Enric Palà (creative director).',
          vimeoId: '429552275',
          downloadLink: 'https://victordoru.itch.io/unealia'
        },
        'movie-searcher': {
          type: 'link',
          title: 'MOVIE SEARCHER',
          description: 'A web platform that leverages an external API to showcase movies, ratings, and detailed information, with actor-based filtering.',
          link: 'https://teal-pavlova-3dd3ef.netlify.app/'
        },
        'shify': {
          type: 'image',
          title: 'SHIFY',
          description: 'A React Native app powered by the Spotify API that enables collaborative playlist creation for group events in real time.',
          content: '/images/spotify.jpg'
        },
        'scaperoom': {
          type: 'image',
          title: 'SCAPEROOM',
          description: 'A web-based escape room game built with JavaScript featuring interactive puzzles and immersive challenges.',
          content: '/images/scaperoom.jpg'
        },
        'video-soho': {
          type: 'video-youtube',
          title: 'VIDEO SOHO',
          description: 'Promotional video for Teatro del Soho CaixaBank, from production to post-production.',
          youtubeId: '70YZe1VjCc8'
        },
        'ivoox': {
          type: 'video',
          title: 'IVOOX',
          description: 'Production and post-production of a compelling advertisement for iVoox, the podcast platform.',
          content: '/projects/Ivoox - spot publicitario.mp4'
        },
        'nike-video': {
          type: 'video',
          title: 'NIKE VIDEO',
          description: 'Nike advertisement featuring dynamic animations created in After Effects.',
          content: '/projects/nike-spot.mp4'
        },
        'casino-royale': {
          type: 'video',
          title: 'CASINO ROYALE',
          description: 'Production and post-production of an animation practice video in After Effects.',
          content: '/projects/CASINO ROYALE.mp4'
        },
        'inside-the-mind': {
          type: 'video',
          title: 'INSIDE THE MIND',
          description: 'A brief 3D animation showcasing modelling and animation skills.',
          content: '/projects/INSIDE-THE-MIND.mp4'
        },
        'energy': {
          type: 'image',
          title: 'ENERGY',
          description: 'Graphic design project for an energy drink brand, covering branding and packaging.',
          content: '/projects/LATA.JPG'
        },
        'nike-landing': {
          type: 'image',
          title: 'NIKE LANDING',
          description: 'Poster concept for a landing page promoting sneakers, focused on visual impact.',
          content: '/images/nike2.jpg'
        }
      }
    },
    section4: {
      title: 'CONTACT',
      whatsapp: 'WhatsApp',
      phone: 'Call Me',
      separator: 'or send a message',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        submit: 'Send Message'
      },
      messages: {
        sendingButton: 'SENDING...',
        sendingStatus: 'Sending your message...',
        success: 'Message sent! I will get back to you soon!',
        error: 'Oops! Something went wrong. Please try again or contact me directly at victordoru96@gmail.com',
        submitIdle: 'Send Message'
      }
    }
  },
  es: {
    site: {
      title: 'Portfolio de Víctor',
      description: 'Portfolio del desarrollador web full-stack Víctor Domínguez.',
      languageLabel: 'ES',
      switchLabel: 'EN',
      switchAria: 'Cambiar a inglés',
      switchHref: '/'
    },
    section1: {
      subtitle: 'DESARROLLADOR WEB FULLSTACK',
      name: 'VICTOR DOMINGUEZ',
      contactButton: 'Contactar',
      contactAria: 'Ir a la sección de contacto',
      contactOptionsAria: 'Accesos directos de contacto',
      downloadCv: 'Descargar CV',
      downloadCvAria: 'Descargar CV',
      linkedinAria: 'Perfil de LinkedIn',
      whatsappAria: 'Abrir chat de WhatsApp',
      phoneAria: 'Llamar por teléfono',
      scrollAria: 'Desplazar a la siguiente sección',
      whatsappTitle: 'WhatsApp',
      phoneTitle: 'Llamar',
      scrollLabel: 'Desliza hacia abajo'
    },
    section2: {
      title: 'EXPERIENCIA PROFESIONAL',
      latestProjects: 'Proyectos Recientes',
      resume: 'Trayectoria',
      projects: [
        {
          key: 'winto',
          title: 'Winto',
          description: 'Startup de ticketing online con arquitectura de microservicios, frontend en React + Tailwind e integración con Stripe.',
          tag: 'Co-fundador y Lead Developer',
          image: '/images/winto-iphone.png',
          alt: 'Proyecto Winto',
          href: 'https://winto.app'
        },
        {
          key: 'nadales',
          title: 'Hacienda Nadales',
          description: 'Web elegante para un espacio de eventos premium con diseño a medida y gestor de contenidos personalizado.',
          tag: 'Desarrollo Freelance',
          image: '/images/nadales.png',
          alt: 'Proyecto Hacienda Nadales',
          href: 'https://haciendanadales.com'
        },
        {
          key: 'serene',
          title: 'Serene Proyectos',
          description: 'Sitio corporativo con CMS a medida, liderando todo el ciclo desde la investigación hasta el despliegue.',
          tag: 'Desarrollo Freelance',
          image: '/images/serene-3.png',
          alt: 'Proyecto Serene Proyectos',
          href: 'https://sereneproyectos.com'
        },
        {
          key: 'tarifa',
          title: 'Parking Centro Tarifa',
          description: 'Página corporativa con capacidades de contacto y un CMS ligero.',
          tag: 'Desarrollo Freelance',
          image: '/images/tarifa-3.png',
          alt: 'Proyecto Parking Centro Tarifa',
          href: 'https://parkingcentrotarifa.com'
        }
      ],
      timeline: [
        {
          side: 'left',
          dateClass: 'timeline-empty timeline-empty-with-bg',
          dateLabel: 'Periodo de enero de 2025 a la actualidad',
          dateText: 'Ene 2025 - Actualidad',
          role: 'CO-FUNDADOR Y CO-LEAD DEVELOPER',
          company: 'WINTO',
          link: 'https://winto.app',
          linkLabel: 'Visitar web de Winto',
          items: [
            'Co-fundé una startup de ticketing online dentro de un equipo técnico de dos personas responsable del diseño y desarrollo de toda la plataforma.',
            'Participación en el programa de incubación CIBEREMPRENDE.',
            'Construcción de un SaaS de ticketing y gestión de eventos: UX/UI, microservicios con Node + MongoDB, frontend en React + Tailwind e integración con Stripe.',
            'Desarrollo de winto.app (plataforma de usuarios) y panel.winto.app (panel para organizadores).'
          ]
        },
        {
          side: 'right',
          dateClass: 'timeline-empty timeline-empty-serene',
          dateLabel: 'Periodo de enero de 2025 a la actualidad',
          dateText: 'Ene 2025 - Actualidad',
          role: 'FREELANCE • DESARROLLADOR WEB FULL-STACK',
          company: 'REMOTO',
          items: [
            'Diseño y desarrollo completo de tres webs corporativas (sereneproyectos.com, parkingcentrotarifa.com, haciendanadales.com), cubriendo briefing, UX, UI, desarrollo, SEO y despliegue.',
            'Implantación de CMS ligeros para que los clientes gestionen sus contenidos.'
          ]
        },
        {
          side: 'left',
          dateClass: 'timeline-empty timeline-empty-drenting',
          dateLabel: 'Periodo de enero de 2024 a diciembre de 2024',
          dateText: 'Ene 2024 - Dic 2024',
          role: 'DESARROLLADOR WEB FULL STACK',
          company: 'DRIVE ME BARCELONA',
          link: 'https://drenting.com/',
          linkLabel: 'Visitar web de Drive Me Barcelona',
          items: [
            'Desarrollo de un portal de compraventa de coches de segunda mano agregando datos mediante scraping de múltiples sitios externos.',
            'Implementación completa de CRUD para la gestión de vehículos y usuarios.',
            'Creación de filtros avanzados de búsqueda (marca, modelo, precio, etc.) para mejorar la experiencia de usuario.',
            'Responsable de la arquitectura front-end: integración con APIs, manejo de datos y CSS responsive a medida.',
            'Automatización y sincronización con herramientas externas como Netsuite y Zoho.'
          ]
        },
        {
          side: 'right',
          dateClass: 'timeline-empty timeline-empty-ufit',
          dateLabel: 'Periodo de enero de 2022 a agosto de 2022',
          dateText: 'Ene 2022 - Ago 2022',
          role: 'DESARROLLADOR FLUTTER',
          company: 'UFIT-365',
          link: 'https://ufit365.com/',
          linkLabel: 'Visitar web de UFIT-365',
          items: [
            'Lideré la migración de toda la aplicación front-end a Flutter.',
            'Diseñé una arquitectura escalable para la gestión de estado y un código mantenible.',
            'Entregué interfaces siguiendo buenas prácticas de UX/UI.',
            'Colaboré estrechamente con un desarrollador mobile senior (15+ años de experiencia).'
          ]
        },
        {
          side: 'left',
          dateClass: 'timeline-empty',
          dateLabel: 'Periodo de abril de 2021 a noviembre de 2021',
          dateText: 'Abr 2021\nNov 2021',
          role: 'DESARROLLADOR WEB FULL STACK',
          company: 'HOOPLING',
          items: [
            'Construcción de una plataforma para influencers desde cero.',
            'Diseño de wireframes y flujos de UX.',
            'Desarrollo con la pila MERN y Redux para la gestión de estado.',
            'Gestión del control de versiones con Git y GitHub.'
          ],
          extraNote: '(Prácticas)'
        },
        {
          side: 'right',
          dateClass: 'timeline-empty timeline-empty-soho',
          dateLabel: 'Periodo de febrero de 2021',
          dateText: 'Feb 2021\nFeb 2021',
          role: 'VIDEO PROMOCIONAL',
          company: 'TEATRO SOHO CAIXABANK',
          link: 'https://teatrodelsoho.com/',
          linkLabel: 'Visitar web del Teatro Soho',
          items: [
            'Grabación con cámaras profesionales, estabilizadores y dron.',
            'Edición de vídeo en Adobe After Effects y Premiere.',
            'Creación de gráficos vectoriales en Illustrator.'
          ]
        }
      ]
    },
    section3: {
      title: 'OTROS PROYECTOS',
      cards: [
        {
          key: 'malaga-cathedral',
          title: 'CATEDRAL DE MÁLAGA REIMAGINADA EN AR',
          description: 'TFG: aplicación web de Realidad Aumentada que reconstruye la torre faltante de la Catedral de Málaga con Three.js y WebXR.',
          icons: ['HTM5', 'Javasci', 'Cs3'],
          ariaLabel: 'Proyecto: Catedral de Málaga reimaginada en AR',
          ariaTech: 'Tecnologías usadas: Three.js, WebXR, WebGL'
        },
        {
          key: 'unealia',
          title: 'UNEALIA',
          description: 'Videojuego party multiplayer desarrollado en Unity y C#. Unity · C# · Modelado 3D.',
          icons: ['Unity', 'Cc'],
          ariaLabel: 'Proyecto: videojuego Unealia en Unity',
          ariaTech: 'Tecnologías usadas: Unity, C#'
        },
        {
          key: 'movie-searcher',
          title: 'MOVIE SEARCHER',
          description: 'Aplicación web que usa una API externa para mostrar películas, valoraciones e información detallada.',
          icons: ['React'],
          ariaLabel: 'Proyecto: aplicación web Movie Searcher',
          ariaTech: 'Tecnologías usadas: React'
        },
        {
          key: 'video-soho',
          title: 'VIDEO SOHO',
          description: 'Vídeo promocional para el Teatro del Soho, con rodaje, edición y motion graphics.',
          icons: ['Aftere', 'Premier'],
          ariaLabel: 'Proyecto: vídeo promocional del Teatro Soho',
          ariaTech: 'Tecnologías usadas: After Effects, Premiere'
        },
        {
          key: 'nike-video',
          title: 'NIKE VIDEO',
          description: 'Anuncio de Nike con animaciones dinámicas creadas en After Effects.',
          icons: ['Aftere', 'Premier'],
          ariaLabel: 'Proyecto: anuncio de Nike',
          ariaTech: 'Tecnologías usadas: After Effects, Premiere'
        },
        {
          key: 'ivoox',
          title: 'IVOOX',
          description: 'Producción y postproducción de un anuncio para iVoox con rodaje y motion graphics.',
          icons: ['Aftere', 'Premier'],
          ariaLabel: 'Proyecto: spot publicitario de iVoox',
          ariaTech: 'Tecnologías usadas: After Effects, Premiere'
        }
      ],
      modal: {
        visitProject: 'Visitar proyecto',
        downloadGame: 'Descargar juego',
        browserNotSupported: 'Tu navegador no soporta la etiqueta de vídeo.'
      },
      modalProjects: {
        'malaga-cathedral': {
          type: 'video',
          title: 'CATEDRAL DE MÁLAGA REIMAGINADA EN AR',
          description: 'Como Trabajo de Fin de Grado desarrollé una aplicación web de Realidad Aumentada que reconstruye digitalmente la torre faltante de la Catedral de Málaga, conocida como La Manquita. El proyecto combinó modelado 3D, programación web e integración AR para permitir a los usuarios visualizar la catedral tal y como fue concebida, tanto a escala real como sobre una maqueta impresa. Usando tecnologías como Three.js, WebGL y WebXR, la solución funciona directamente en el navegador sin instalaciones nativas. Exploré distintos enfoques AR (hit testing, reconocimiento de imágenes y posicionamiento estratégico) para obtener un encaje preciso del modelo 3D en escenarios reales. También implementé iluminación dinámica según la hora del día y realicé pruebas de usuario para mejorar la usabilidad. El resultado es una herramienta interactiva que une patrimonio cultural y tecnología inmersiva.',
          content: '/projects/composicion-TFG.mp4'
        },
        'unealia': {
          type: 'special',
          title: 'UNEALIA',
          description: 'Unealia es un party game local para 2-4 jugadores desarrollado por cinco estudiantes del Grado en Multimedia (UPC). El equipo lo forman Víctor Domínguez y Jorge Mateo Ortiz (programadores), Ignacio Solera y Pere Balasch (artistas 3D) y Enric Palà (director creativo).',
          vimeoId: '429552275',
          downloadLink: 'https://victordoru.itch.io/unealia'
        },
        'movie-searcher': {
          type: 'link',
          title: 'MOVIE SEARCHER',
          description: 'Plataforma web que usa una API externa para mostrar películas, valoraciones e información detallada, con filtrado por actores.',
          link: 'https://teal-pavlova-3dd3ef.netlify.app/'
        },
        'shify': {
          type: 'image',
          title: 'SHIFY',
          description: 'App React Native conectada a la API de Spotify que permite crear listas colaborativas en tiempo real para eventos y fiestas.',
          content: '/images/spotify.jpg'
        },
        'scaperoom': {
          type: 'image',
          title: 'SCAPEROOM',
          description: 'Juego de escape room web desarrollado con JavaScript, lleno de puzles interactivos y desafíos inmersivos.',
          content: '/images/scaperoom.jpg'
        },
        'video-soho': {
          type: 'video-youtube',
          title: 'VIDEO SOHO',
          description: 'Vídeo promocional para el Teatro del Soho CaixaBank, desde la producción hasta la postproducción.',
          youtubeId: '70YZe1VjCc8'
        },
        'ivoox': {
          type: 'video',
          title: 'IVOOX',
          description: 'Producción y postproducción de un anuncio para iVoox, la plataforma de pódcast.',
          content: '/projects/Ivoox - spot publicitario.mp4'
        },
        'nike-video': {
          type: 'video',
          title: 'NIKE VIDEO',
          description: 'Anuncio de Nike con animaciones dinámicas creadas en After Effects.',
          content: '/projects/nike-spot.mp4'
        },
        'casino-royale': {
          type: 'video',
          title: 'CASINO ROYALE',
          description: 'Producción y postproducción de un vídeo de práctica de animación en After Effects.',
          content: '/projects/CASINO ROYALE.mp4'
        },
        'inside-the-mind': {
          type: 'video',
          title: 'INSIDE THE MIND',
          description: 'Breve animación 3D que demuestra habilidades de modelado y animación.',
          content: '/projects/INSIDE-THE-MIND.mp4'
        },
        'energy': {
          type: 'image',
          title: 'ENERGY',
          description: 'Proyecto de diseño gráfico para una bebida energética, abarcando branding y packaging.',
          content: '/projects/LATA.JPG'
        },
        'nike-landing': {
          type: 'image',
          title: 'NIKE LANDING',
          description: 'Concepto de póster para una landing page de sneakers, con foco en el impacto visual.',
          content: '/images/nike2.jpg'
        }
      }
    },
    section4: {
      title: 'CONTACTO',
      whatsapp: 'WhatsApp',
      phone: 'Llámame',
      separator: 'o envíame un mensaje',
      form: {
        name: 'Nombre',
        email: 'Correo electrónico',
        subject: 'Asunto',
        message: 'Mensaje',
        submit: 'Enviar mensaje'
      },
      messages: {
        sendingButton: 'ENVIANDO...',
        sendingStatus: 'Enviando tu mensaje...',
        success: '¡Mensaje enviado! ¡Te responderé pronto!',
        error: '¡Ups! Algo salió mal. Inténtalo de nuevo o escríbeme a victordoru96@gmail.com',
        submitIdle: 'Enviar mensaje'
      }
    }
  }
} as const;

export type Lang = keyof typeof translations;
