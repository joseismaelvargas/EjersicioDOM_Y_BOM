// ?4- Crear una web con un reloj que muestre la siguiente información:


let diahoy=document.getElementById("dia")
let hora=document.getElementById("Reloj")

const Fecha=(diahoy)=>{
  let fecha=new Date()
   let dia=fecha.getDate()
   let año=fecha.getFullYear()
   let mes=fecha.getMonth()
   console.log(dia)
   diahoy.innerHTML=`${dia} de Agosto del ${año} `
}
Fecha(diahoy)


const Reloj=(hours)=>{
     const actualizar=()=>{
        let hora=new Date()
    let hor=hora.getHours()
    let minutos=hora.getMinutes()
    let segundos=hora.getSeconds()
    console.log(hor)

  
   
    hours.innerHTML=`${hor}: ${minutos}:${segundos}` 
     }
    setInterval(actualizar, 1000)
}
Reloj(hora)