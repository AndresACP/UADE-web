document.addEventListener('DOMContentLoaded', () => {
    const destinoNombre = document.getElementById('destino-nombre');
    const destinoImagen = document.getElementById('destino-imagen');
    const destinoDescripcion = document.getElementById('destino-descripcion');
    const destinoPrecio = document.getElementById('destino-precio');

    // Obtener el nombre del destino de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const destinoSlug = urlParams.get('destino');

    // Encontrar los datos del destino
    const destino = destinos.find(d => d.nombre.toLowerCase().replace(/ /g, '-') === destinoSlug);

    if (destino) {
        destinoNombre.textContent = destino.nombre;
        destinoImagen.src = destino.imagen;
        destinoImagen.alt = destino.nombre;
        destinoDescripcion.textContent = destino.descripcionLarga;
        destinoPrecio.textContent = `Desde ${destino.precio}`;
        document.title = `${destino.nombre} - LSD`;
    } else {
        // Manejar el caso cuando no se encuentra el destino
        destinoNombre.textContent = 'Destino no encontrado';
        destinoDescripcion.textContent = 'Lo sentimos, no pudimos encontrar información sobre este destino.';
    }
});

