import {todasLasimg} from './data.js';

function agregartitulos(){
    //DOM
    let root = document.querySelector("#root");

    todasLasTarjetas.forEach( function(img){
        //CREAR UN ELEMENTO DENTRO DEL DOM
        let titulo = document.createElement("div");

        //SE AGREGA CONTENIDO AL ELEMENTO
        titulo.innerHTML = 
        '<div class="galeria">' +
            img +
        '</div>';

        //SE AGREGA AL DOM
        root.appendChild(icon);
} );
  
// MOSTRAR DATOS 
function mostrar(){
    caja_usuario.innerHTML = '<h1>' + user_ob[nameUser].nikname + '</h1>' +
    '<h1>' + user_ob[namePro].product1 + '</h1>'+
     '<h1>' + user_ob[namePro].product2 + '</h1>'+
       '<h1>' + user_ob[nameUser].product3 + '</h1>'+
       '<h1>' + user_ob[namePro].product4 + '</h1>'+
       '<h1>' + user_ob[namePro].product5 + '</h1>'+
       '<h1>' + user_ob[namePro].product6 + '</h1>'+
}


}
