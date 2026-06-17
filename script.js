// ============================
// MENÚ HAMBURGUESA
// ============================

const botonMenu = document.querySelector(".hamburguesa");
const menu = document.querySelector(".menu");


botonMenu.addEventListener("click", () => {

    if(menu.style.display === "flex"){

        menu.style.display = "none";

    }else{

        menu.style.display = "flex";

        menu.style.flexDirection = "column";

        menu.style.position = "absolute";

        menu.style.top = "80px";

        menu.style.right = "20px";

        menu.style.background = "#3b1f0f";

        menu.style.padding = "20px";

        menu.style.borderRadius = "15px";

    }

});




// ============================
// VALIDACIÓN DEL FORMULARIO
// ============================


const formulario = document.getElementById("formulario");


formulario.addEventListener("submit", function(e){

    e.preventDefault();


    const nombre = document.getElementById("nombre").value;

    const correo = document.getElementById("correo").value;

    const comida = document.getElementById("comida").value;

    const mensaje = document.getElementById("mensaje").value;


    const respuesta = document.getElementById("respuesta");



    if(
        nombre === "" ||
        correo === "" ||
        comida === "" ||
        mensaje === ""
    ){

        respuesta.textContent =
        "⚠️ Por favor completa todos los campos.";

        respuesta.style.color = "#ffcc00";


    }else{


        respuesta.textContent =
        "✅ ¡Gracias por contactarnos! Tu mensaje fue enviado correctamente.";

        respuesta.style.color = "#90ee90";


        formulario.reset();

    }


});