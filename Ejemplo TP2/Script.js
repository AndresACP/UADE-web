// Datos de destinos
const destinos = [
    { id: 1, nombre: "París", imagen: "https://source.unsplash.com/500x300/?paris", descripcion:"La ciudad del amor y la luz." },
    { id: 2, nombre: "Tokio", imagen: "https://source.unsplash.com/500x300/?tokyo", descripcion:"Una mezcla fascinante de lo moderno y lo tradicional." },
    { id: 3, nombre: "Nueva York", imagen: "https://source.unsplash.com/500x300/?newyork", descripcion:"La ciudad que nunca duerme." },
    { id: 4, nombre: "Río de Janeiro", imagen: "https://source.unsplash.com/500x300/?rio", descripcion:"Playas hermosas y cultura vibrante." },
    { id: 5, nombre: "Roma", imagen: "https://source.unsplash.com/500x300/?rome", descripcion:"Una ciudad llena de historia y arte." },
    { id: 6, nombre: "Bali", imagen: "https://source.unsplash.com/500x300/?bali", descripcion:"Paraíso tropical con hermosas playas y templos." }
];

// Datos de testimonios
const testimonios = [
    { texto: "¡El mejor viaje de mi vida! Aventuras Sin Límites hizo que todo fuera perfecto.", autor: "Castillo A." },
    { texto: "Increíble atención al detalle. Cada aspecto del viaje fue cuidadosamente planeado.", autor: "Lema D." },
    { texto: "No puedo esperar para mi próximo viaje con ellos. Altamente recomendado.", autor: "Ivo." }
];

// Función para cargar destinos
function cargarDestinos() {
    const destinosContainer = document.getElementById('destinos-container');
    destinos.forEach(destino => {
        const destinoElement = document.createElement('div');
        destinoElement.className = 'destino-card';
        destinoElement.innerHTML = `
            <img src="${destino.imagen}" alt="${destino.nombre}" onerror="this.onerror=null;this.src='https://source.unsplash.com/500x300/?${encodeURIComponent(destino.nombre)}';">
            <div class="destino-info">
                <h3>${destino.nombre}</h3>
                <p>${destino.descripcion}</p>
                <a href="#" class="btn-detalles" data-id="${destino.id}">Ver Detalles</a>
            </div>
        `;
        destinosContainer.appendChild(destinoElement);
    });
}

// Función para cargar testimonios
function cargarTestimonios() {
    const testimoniosContainer = document.getElementById('testimonios-container');
    testimonios.forEach(testimonio => {
        const testimonioElement = document.createElement('div');
        testimonioElement.className = 'testimonio';
        testimonioElement.innerHTML = `
            <p>"${testimonio.texto}"</p>
            <span class="testimonio-autor">- ${testimonio.autor}</span>
        `;
        testimoniosContainer.appendChild(testimonioElement);
    });
}

// Función para manejar el clic en "Ver Detalles" de un destino
function manejarClickDestino(event) {
    if (event.target.classList.contains('btn-detalles')) {
        event.preventDefault();
        const destinoId = parseInt(event.target.getAttribute('data-id'));
        const destino = destinos.find(d => d.id === destinoId);
        if (destino) {
            mostrarDetallesDestino(destino);
        }
    }
}

// Función para mostrar detalles del destino en un modal
function mostrarDetallesDestino(destino) {
    const modal = document.getElementById('destino-modal');
    const detallesContainer = document.getElementById('destino-detalles');
    detallesContainer.innerHTML = `
        <h2>${destino.nombre}</h2>
        <img src="${destino.imagen}" alt="${destino.nombre}" style="width: 100%; max-height: 300px; object-fit: cover;">
        <p>${destino.descripcion}</p>
        <h3>Detalles del Viaje</h3>
        <ul>
            <li>Precio: $799.999 por persona</li>
            <li>Duración: 7 días / 6 noches</li>
            <li>Salida: 15 de cada mes</li>
            <li>Incluye: Vuelos, hotel, tours guiados</li>
        </ul>
        <h3>Lugares a Visitar</h3>
        <p>Principales atracciones, monumentos históricos, y experiencias culturales únicas.</p>
        <a href="#" class="cta-button">Reservar Ahora</a>
    `;
    modal.style.display = 'block';
}

// Cerrar el modal
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('destino-modal').style.display = 'none';
});

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    cargarDestinos();
    cargarTestimonios();
    document.getElementById('destinos-container').addEventListener('click', manejarClickDestino);
});

// Smooth scrolling para los enlaces del navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animación de fade-in para elementos cuando se hacen visibles
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.destino-card, .paquete, .testimonio').forEach(el => {
    observer.observe(el);
});

// Parallax effect en la sección hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
});

// Almacenar preferencias del usuario en localStorage
function guardarPreferencia(destino) {
    let preferencias = JSON.parse(localStorage.getItem('preferenciasViaje')) || [];
    if (!preferencias.includes(destino)) {
        preferencias.push(destino);
        localStorage.setItem('preferenciasViaje', JSON.stringify(preferencias));
    }
}

// Ejemplo de uso: guardar preferencia cuando se ve detalle de un destino
document.getElementById('destinos-container').addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-detalles')) {
        const destinoNombre = e.target.closest('.destino-card').querySelector('h3').textContent;
        guardarPreferencia(destinoNombre);
    }
});

