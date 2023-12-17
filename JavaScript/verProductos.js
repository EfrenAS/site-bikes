function mostrarProductos() {
    var productosAdicionales = document.getElementById('productosAdicionales');
    var btnVerMas = document.getElementById('btn1');
  
    // Cambia la visibilidad de los productos adicionales al hacer clic en "Ver Más"
    if (productosAdicionales.style.display === 'none') {
      productosAdicionales.style.display = 'flex';
      btnVerMas.value = 'Ver Menos';
    } else {
      productosAdicionales.style.display = 'none';
      btnVerMas.value = 'Ver Mas';
    }
  }

function mostrarProductos2() {
    var productosAdicionales = document.getElementById('productosAdicionales2');
    var btnVerMas = document.getElementById('btn2');
  
    // Cambia la visibilidad de los productos adicionales al hacer clic en "Ver Más"
    if (productosAdicionales.style.display === 'none') {
      productosAdicionales.style.display = 'flex';
      btnVerMas.value = 'Ver Menos';
    } else {
      productosAdicionales.style.display = 'none';
      btnVerMas.value = 'Ver Mas';
    }
  }

  function mostrarProductos3() {
    var productosAdicionales = document.getElementById('productosAdicionales3');
    var btnVerMas = document.getElementById('btn3');
  
    // Cambia la visibilidad de los productos adicionales al hacer clic en "Ver Más"
    if (productosAdicionales.style.display === 'none') {
      productosAdicionales.style.display = 'flex';
      btnVerMas.value = 'Ver Menos';
    } else {
      productosAdicionales.style.display = 'none';
      btnVerMas.value = 'Ver Mas';
    }
  }

  function mostrarProductos4() {
    var productosAdicionales = document.getElementById('productosAdicionales4');
    var btnVerMas = document.getElementById('btn4');
  
    // Cambia la visibilidad de los productos adicionales al hacer clic en "Ver Más"
    if (productosAdicionales.style.display === 'none') {
      productosAdicionales.style.display = 'flex';
      btnVerMas.value = 'Ver Menos';
    } else {
      productosAdicionales.style.display = 'none';
      btnVerMas.value = 'Ver Mas';
    }
  }

  function mostrarProductos5() {
    var productosAdicionales = document.getElementById('productosAdicionales5');
    var btnVerMas = document.getElementById('btn5');
  
    // Cambia la visibilidad de los productos adicionales al hacer clic en "Ver Más"
    if (productosAdicionales.style.display === 'none') {
      productosAdicionales.style.display = 'flex';
      btnVerMas.value = 'Ver Menos';
    } else {
      productosAdicionales.style.display = 'none';
      btnVerMas.value = 'Ver Mas';
    }
  }

  function mostrarProductos6() {
    var productosAdicionales = document.getElementById('productosAdicionales6');
    var btnVerMas = document.getElementById('btn6');
  
    // Cambia la visibilidad de los productos adicionales al hacer clic en "Ver Más"
    if (productosAdicionales.style.display === 'none') {
      productosAdicionales.style.display = 'flex';
      btnVerMas.value = 'Ver Menos';
    } else {
      productosAdicionales.style.display = 'none';
      btnVerMas.value = 'Ver Mas';
    }
  }
  

//Vista Previa de cada Producto//

  document.addEventListener("DOMContentLoaded", function() {

    // Obtén todas las imágenes con la clase "imgSP"
    var imagenes = document.querySelectorAll(".imgSP");

    // Itera sobre cada imagen y agrega un evento clic
    imagenes.forEach(function(imagen) {
        imagen.addEventListener("click", function() {
            // Obtiene el contenedor padre .SP
            var contenedorSP = imagen.closest(".SP");

            // Obtiene la información del producto
            var nombreProducto = contenedorSP.querySelector(".textSP h2").innerText;
            var tipoProducto = contenedorSP.querySelector(".textSP h3").innerText;
            var precioProducto = contenedorSP.querySelector(".textSP p").innerText;
            var rutaImagen = imagen.getAttribute("src");

            // Muestra el detalle del producto
            mostrarDetalleProducto(nombreProducto, tipoProducto, precioProducto, rutaImagen);
        });
    });

    // Función para mostrar el detalle del producto
    function mostrarDetalleProducto(nombre, tipo, precio, rutaImagen) {
        // Obtiene el elemento de previsualización
        var previsualizacion = document.getElementById("imagenPrevisualizacion");

        // Establece el contenido del detalle del producto
        var detalleTexto = document.getElementById("detalleTexto");
        detalleTexto.querySelector("h2").innerText = nombre;
        detalleTexto.querySelector("h3").innerText = tipo;
        detalleTexto.querySelector("p").innerText = precio;

        // Establece la imagen del detalle del producto
        var imagenDetalle = document.getElementById("imagenDetalle");
        imagenDetalle.src = rutaImagen;

        // Muestra el detalle del producto
        previsualizacion.style.display = "block";
    }

    // Función para cerrar el detalle del producto
    window.cerrarDetalleProducto = function() {
        var previsualizacion = document.getElementById("imagenPrevisualizacion");
        previsualizacion.style.display = "none";
    };
});