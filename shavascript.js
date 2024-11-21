  // Datos de ejemplo para destinos
  const destinos = [
    { nombre: 'París', descripcion: 'La ciudad del amor y la luz', precio: '$599.258', imagen: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80' },
    { nombre: 'Tokio', descripcion: 'Tradición y modernidad en perfecta armonía', precio: '$899.689', imagen: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80' },
    { nombre: 'Nueva York', descripcion: 'La ciudad que nunca duerme', precio: '$799.689', imagen: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { nombre: 'Bali', descripcion: 'Paraíso tropical con rica cultura', precio: '$699.555', imagen: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80' },
    { nombre: 'Roma', descripcion: 'La Ciudad Eterna llena de historia', precio: '$549.835', imagen: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1396&q=80' },
    { nombre: 'Machu Picchu', descripcion: 'Maravilla del mundo antiguo', precio: '$999.999', imagen: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' }
];

// Datos de ejemplo para paquetes
const paquetes = [
    { nombre: 'Europa Clásica', descripcion: '10 días por las capitales europeas', precio: '$149.9455', imagen: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
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
                <p>${destino.descripcion}</p>
                <span class="destino-precio">Desde ${destino.precio}</span>
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

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    cargarDestinos();
    cargarPaquetes();
    cargarTestimonios();
    rotarTestimonios();

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