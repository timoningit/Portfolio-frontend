
// //Dos de los eventos del DOM que pueden ser utilizados en cualquier documento, (.querySlector() y .textcontent)
// const miTitulo = document.querySelector('h1');
// miTitulo.textContent = '¡Hola mundo!';



// //alerta sobre password, broma editable, 
// document.querySelector('html').onclick = function() {
//     alert('Perdiste, tengo tu Ip y passwords, después me pagás');
// }

let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/tecnoredbackground.webp') {
      miImage.setAttribute('src','images/firefox2.png');
    } else {
      miImage.setAttribute('src', 'images/tecnoredbackground.webp');
    }
}

// let miBoton = document.querySelector('button');
// let miTitulo = document.querySelector( 'h1');

// function estableceNombreUsuario() {
//     let miNombre = prompt('Por favor, ingresa tu nombre.');
//     localStorage.setItem('nombre', miNombre);
//     miTitulo.textContent = 'Mozilla es genial,' + miNombre;
// }
