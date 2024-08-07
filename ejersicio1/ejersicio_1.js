//? 1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
// ?Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

const mostrar=document.getElementById("confirmar")

function form(e){
    e.preventDefault()
    const numeroaleatorio=Math.floor(Math.random()*10+1)
     let numero=parseInt(document.getElementById("numero").value )
     if(numeroaleatorio===numero){
        alert("Felicidades Adivinaste el numero")
        mostrar.innerHTML="<h1>Felicidades Ganaste ✨✨🎉</h1>"
        numero=document.getElementById("numero").value=""
     }else if(numeroaleatorio<numero){
        alert("El numero que ingresaste es Mayor😟 ")
        mostrar.innerHTML=`<h1>El numero es ${numeroaleatorio} 😟</h1>`
         numero=document.getElementById("numero").value=""
     }else if(numeroaleatorio>numero){
         alert("El numero que ingresaste es Menor😟 ")
        mostrar.innerHTML=`<h1>El numero es ${numeroaleatorio} 😓</h1>`
         numero=document.getElementById("numero").value=""
     }
    
}
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('gameForm').addEventListener('submit', form);
});

