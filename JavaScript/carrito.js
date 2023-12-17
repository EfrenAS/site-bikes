// carrito.js

const carrito = [];

function agregarAlCarrito(nombre, precio, imagen) {
    const producto = {
        nombre: nombre,
        precio: precio,
        imagen: imagen
    };

    carrito.push(producto);

    // Guardar carrito en localStorage para persistencia
    localStorage.setItem('carrito', JSON.stringify(carrito));

    // Actualizar la lista en la página del carrito
    actualizarListaCarrito();
}

function actualizarListaCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    const totalElement = document.getElementById('total');
    const pagarBtn = document.getElementById('pagarBtn');
    const contador = document.getElementById('contador');

    // Limpiar la lista antes de actualizar
    listaCarrito.innerHTML = '';

    // Agregar cada producto al carrito a la tabla
    carrito.forEach((producto, index) => {
        const listItem = document.createElement('tr');
        listItem.innerHTML = `
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
            <td><img src="${producto.imagen}" alt="${producto.nombre}"></td>
            <td><span class="eliminar" onclick="eliminarDelCarrito(${index})">&#128465;</span></td>
        `;
        listaCarrito.appendChild(listItem);
    });

    // Actualizar el total y contador
    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
    contador.textContent = carrito.length;

    // Mostrar o ocultar el botón de pagar según si hay productos en el carrito
    pagarBtn.style.display = carrito.length > 0 ? 'block' : 'none';
}

function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarListaCarrito();
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function pagar() {
    // Aquí puedes agregar la lógica para el pago
    //alert('¡Gracias por tu compra!');
    // Limpiar el carrito después de realizar el pago
    carrito.length = 0;
    actualizarListaCarrito();
    localStorage.removeItem('carrito');
}

// Cargar carrito desde localStorage al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito.push(...JSON.parse(carritoGuardado));
        actualizarListaCarrito();
    }
});