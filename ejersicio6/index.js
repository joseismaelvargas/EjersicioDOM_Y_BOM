 const form=document.getElementById("form")




class Persona{
    constructor(edad,sexo,altura,nacimiento){
        this.edad=edad,
        this.sexo=sexo,
        this.altura=altura,
        this.Dni=Math.floor(Math.random()*100000000),
        this.nacimiento=nacimiento

    }
    Generacion(nacimiento){
    if(nacimiento>1940&nacimiento<1948){
        alert(`Generacion silent Generation Poblacion 6.300.000.000  Circuntacia Historica Conflictos Belicos Rasgo 😐Austeridad`)
    
    }else if(nacimiento>1949&nacimiento<1968){
        alert(`Generacion Baybi Boom Poblacion 12.2000.000.000  Circuntacia Historica Paz y explosion Demografica Rasgo 🧐Ambicion`)
             
    }else if(nacimiento>1968&nacimiento<1980){
        alert(`Generacion X Poblacion 12.2000.000.000  Circuntacia Historica Crissi del 73 Rasgo🤩 Obsesion por el exito`)
             
    }else if(nacimiento>1980&nacimiento<1993){
        alert(`Generacion Y Poblacion 166.2000.000.000  Circuntacia Historica Inicio de la Digitalizacion Rasgo 🤐 Frustacion`)
             
    }else if(nacimiento>1994&nacimiento<2010){
        alert(`Generacion Z Poblacion 7.2000.000.000.000  Circuntacia Historica Internet Rasgo 😖 Inrreveerencia`)
             
    }
    }
    MostrarDato(){
      alert(`<p> Edad:${this.edad}</p><p>Sexo:${this.sexo}</p><p>nacimiento :${this.nacimiento}</p>`)  
    }
}


form.addEventListener("click",(e)=>{
 e.preventDefault()
 const nacimiento=document.getElementById("nacimiento").value
 const sexo=document.getElementById("sexo").value
 const edad=document.getElementById("edad").value
 const altura=document.getElementById("altura").value
const persona=new Persona(edad,sexo,altura,nacimiento)
console.log(persona)

const generación=document.getElementById("generacion")
generación.addEventListener("click",()=>{
    persona.Generacion(nacimiento)
})
const datos=document.getElementById("datos")
datos.addEventListener("click",()=>{
    persona.MostrarDato()
})
})
