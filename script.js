// Datos de ejemplo para destinos con descripciones cortas y extensas
const destinos = [
    { 
        nombre: 'París', 
        descripcionCorta: 'La ciudad del amor y la luz', 
        descripcionLarga: 'París, la Ciudad de la Luz, es un destino que cautiva a millones de visitantes cada año. Con su icónica Torre Eiffel, los majestuosos Campos Elíseos y el imponente Arco del Triunfo, la capital francesa ofrece una mezcla perfecta de historia, cultura y romanticismo. Explora el Louvre, hogar de la Mona Lisa, pasea por los encantadores barrios de Montmartre y Le Marais, y disfruta de la exquisita gastronomía francesa en sus numerosos cafés y restaurantes. París es una ciudad que enamora a primera vista y te invita a regresar una y otra vez.',
        precio: '$599.258', 
        imagen: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80' 
    },
    { 
        nombre: 'Tokio', 
        descripcionCorta: 'Tradición y modernidad en perfecta armonía', 
        descripcionLarga: 'Tokio, la vibrante capital de Japón, es una metrópolis que fusiona de manera única la tradición milenaria con la tecnología más avanzada. Desde los tranquilos jardines del Palacio Imperial hasta los bulliciosos cruces de Shibuya, Tokio ofrece una experiencia inigualable. Sumérgete en la cultura pop en Akihabara, disfruta de la paz en el Santuario Meiji, y maravíllate con las vistas panorámicas desde la Tokyo Skytree. La gastronomía japonesa, desde el sushi de clase mundial hasta el ramen callejero, es una aventura en sí misma. Tokio es una ciudad que nunca duerme y siempre tiene algo nuevo que ofrecer.',
        precio: '$899.689', 
        imagen: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' 
    },
    { 
        nombre: 'Nueva York', 
        descripcionCorta: 'La ciudad que nunca duerme', 
        descripcionLarga: 'Nueva York, la Gran Manzana, es una ciudad que rebosa energía las 24 horas del día. Desde los rascacielos de Manhattan hasta los bohemios barrios de Brooklyn, cada rincón de la ciudad tiene su propia personalidad. Explora Central Park, maravíllate con las luces de Times Square, y sube al Empire State Building para una vista inolvidable. La diversidad cultural de Nueva York se refleja en su gastronomía, sus museos de clase mundial como el MoMA y el Met, y en los espectáculos de Broadway. Con sus icónicos taxis amarillos y la Estatua de la Libertad, Nueva York es una ciudad que hay que experimentar al menos una vez en la vida.',
        precio: '$799.689', 
        imagen: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' 
    },
    { 
        nombre: 'Bali', 
        descripcionCorta: 'Paraíso tropical con rica cultura', 
        descripcionLarga: 'Bali, conocida como la Isla de los Dioses, es un paraíso tropical que combina playas de ensueño, junglas exuberantes y una cultura fascinante. Desde los campos de arroz en terrazas de Ubud hasta los templos ancestrales como Tanah Lot, Bali ofrece una experiencia única para cada visitante. Practica yoga al amanecer, surfea en las famosas olas de Uluwatu, o simplemente relájate en las playas de arena blanca de Nusa Dua. La hospitalidad balinesa, los deliciosos sabores de la cocina indonesia y los coloridos mercados locales hacen de Bali un destino que cautiva todos los sentidos.',
        precio: '$699.555', 
        imagen: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80' 
    },
    { 
        nombre: 'Roma', 
        descripcionCorta: 'La Ciudad Eterna llena de historia', 
        descripcionLarga: 'Roma, la Ciudad Eterna, es un museo viviente que abarca más de dos milenios de historia, arte y cultura. Camina por las calles adoquinadas y descubre maravillas como el Coliseo, el Foro Romano y el Panteón. Lanza una moneda en la Fontana di Trevi, explora los museos del Vaticano y la Capilla Sixtina, y disfruta de la dolce vita en las pintorescas plazas como Piazza Navona. La gastronomía romana, desde la pasta perfecta hasta el gelato artesanal, es una delicia para el paladar. Con su mezcla única de antigüedad y modernidad, Roma es una ciudad que te transporta en el tiempo mientras te enamora en el presente.',
        precio: '$549.835', 
        imagen: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1396&q=80' 
    },
    { 
        nombre: 'Machu Picchu', 
        descripcionCorta: 'Maravilla del mundo antiguo', 
        descripcionLarga: 'Machu Picchu, la joya de la corona del Imperio Inca, es una maravilla arqueológica que desafía la imaginación. Ubicada en lo alto de los Andes peruanos, esta ciudad perdida te transporta a un mundo de misterio y belleza. Explora las ruinas meticulosamente conservadas, desde el Templo del Sol hasta la Roca Sagrada, y maravíllate con la ingeniería avanzada de los incas. El impresionante paisaje que rodea Machu Picchu, con sus picos escarpados y nubes bajas, crea una atmósfera casi mística. Ya sea que llegues por el Camino Inca o en tren, la primera vista de Machu Picchu es una experiencia que nunca olvidarás.',
        precio: '$999.999', 
        imagen: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' 
    }
];

// Datos de ejemplo para paquetes
const paquetes = [
    { nombre: 'Europa Clásica', descripcion: '10 días por las capitales europeas', precio: '$149.945', imagen: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { nombre: 'Aventura en Costa Rica', descripcion: '7 días de naturaleza y adrenalina', precio: '$999.452', imagen: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' },
    { nombre: 'Misterios de Egipto', descripcion: '12 días explorando el antiguo Egipto', precio: '$1.797.859', imagen: 'https://images.unsplash.com/photo-1568322445389-f64ac2515020?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' }
];

// Datos de ejemplo para testimonios
const testimonios = [
    { contenido: "¡Una experiencia inolvidable! El viaje superó todas mis expectativas.", autor: "Damian Lema" },
    { contenido: "Excelente servicio y atención al detalle. Definitivamente volveré a viajar con ellos.", autor: "Andres Castillo" },
    { contenido: "Los guías fueron increíbles y los destinos simplemente espectaculares.", autor: "Ivan Diaz" }
];

// Función para cargar destinos
function cargarDestinos() {
    const destinosGrid = document.getElementById('destinos-grid');
    destinos.forEach(destino => {
        const destinoCard = document.createElement('div');
        destinoCard.className = 'destino-card';
        destinoCard.innerHTML = `
            <img src="${destino.imagen}" alt="${destino.nombre}" class="destino-img">
            <div class="destino-info">
                <h3>${destino.nombre}</h3>
                <p>${destino.descripcionCorta}</p>
                <div class="precio-div">
                    <span class="destino-precio">Desde ${destino.precio}</span>
                    <button class="ver-mas-btn">Ver más</button>
                </div>
            </div>
        `;
        destinosGrid.appendChild(destinoCard);
    });
}

// Función para cargar paquetes
function cargarPaquetes() {
    const paquetesList = document.getElementById('paquetes-list');
    paquetes.forEach(paquete => {
        const paqueteItem = document.createElement('div');
        paqueteItem.className = 'paquete-item';
        paqueteItem.innerHTML = `
            <img src="${paquete.imagen}" alt="${paquete.nombre}" class="paquete-img">
            <div class="paquete-info">
                <h3>${paquete.nombre}</h3>
                <p>${paquete.descripcion}</p>
                <span class="paquete-precio">Desde ${paquete.precio}</span>
            </div>
        `;
        paquetesList.appendChild(paqueteItem);
    });
}

// Función para cargar testimonios
function cargarTestimonios() {
    const testimoniosCarousel = document.getElementById('testimonios-carousel');
    testimonios.forEach((testimonio, index) => {
        const testimonioElement = document.createElement('div');
        testimonioElement.className = `testimonio ${index === 0 ? 'active' : ''}`;
        testimonioElement.innerHTML = `
            <p class="testimonio-content">"${testimonio.contenido}"</p>
            <p class="testimonio-autor">- ${testimonio.autor}</p>
        `;
        testimoniosCarousel.appendChild(testimonioElement);
    });
}

// Función para rotar testimonios
function rotarTestimonios() {
    const testimonios = document.querySelectorAll('.testimonio');
    let currentIndex = 0;
    setInterval(() => {
        testimonios[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % testimonios.length;
        testimonios[currentIndex].classList.add('active');
    }, 5000);
}

// Función para desplazamiento suave
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Función para manejar el clic en "Ver más"
function handleVerMasClick(event) {
    const button = event.target.closest('.ver-mas-btn');
    if (button) {
        const destinoCard = button.closest('.destino-card');
        const destinoNombre = destinoCard.querySelector('h3').textContent;
        const destinoSlug = destinoNombre.toLowerCase().replace(/ /g, '-');
        window.location.href = `destino.html?destino=${destinoSlug}`;
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    cargarDestinos();
    cargarPaquetes();
    cargarTestimonios();
    rotarTestimonios();

    // Agregar event listener para los botones "Ver más"
    const destinosGrid = document.getElementById('destinos-grid');
    destinosGrid.addEventListener('click', handleVerMasClick);

    // Desplazamiento suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'), 1000);
        });
    });

    // Efecto parallax en el hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
    });

    // Animación de la navbar al hacer scroll
    let prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            document.querySelector(".navbar").style.top = "0";
        } else {
            document.querySelector(".navbar").style.top = "-80px";
        }
        prevScrollpos = currentScrollPos;
    }
});

// LocalStorage para guardar destinos vistos
function guardarDestinoVisto(destino) {
    let destinosVistos = JSON.parse(localStorage.getItem('destinosVistos')) || [];
    if (!destinosVistos.includes(destino)) {
        destinosVistos.push(destino);
        localStorage.setItem('destinosVistos', JSON.stringify(destinosVistos));
    }
}

// Añadir evento click a las tarjetas de destino
document.addEventListener('click', function(e) {
    if (e.target && e.target.closest('.destino-card')) {
        const destinoNombre = e.target.closest('.destino-card').querySelector('h3').textContent;
        guardarDestinoVisto(destinoNombre);
    }
});

// Mostrar destinos vistos al cargar la página
function mostrarDestinosVistos() {
    const destinosVistos = JSON.parse(localStorage.getItem('destinosVistos')) || [];
    if (destinosVistos.length > 0) {
        console.log('Destinos vistos recientemente:', destinosVistos);
        // Aquí puedes añadir lógica para mostrar estos destinos en la interfaz
    }
}

// Llamar a mostrarDestinosVistos al cargar la página
window.addEventListener('load', mostrarDestinosVistos);


// Function to handle "Ver más" button click
function handleVerMasClick(event) {
    if (event.target.classList.contains('ver-mas-btn')) {
        const destinoCard = event.target.closest('.destino-card');
        const destinoNombre = destinoCard.querySelector('h3').textContent;
        const destinoSlug = destinoNombre.toLowerCase().replace(/ /g, '-');
        window.location.href = `destino.html?destino=${destinoSlug}`;
    }
}