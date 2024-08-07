document.addEventListener("DOMContentLoaded", () => {
    const start=document.getElementById("Start")
const pausa=document.getElementById("pausa")
    const reset=document.getElementById("Reset")
    const cronometro=document.getElementById("Cronometro")
    let intervalId=null
    let time=60
    let minute=0
     function actualizar(){
        time--
        if(time===0){
            
            time=0
        }
        cronometro.innerText=`0${minute}:${time}`
    }

    
   
    
    start.addEventListener("click",()=>{
    
        if (!intervalId) {
          intervalId = setInterval(actualizar, 1000);
           actualizar()
        } }) 
    
    reset.addEventListener("click",()=>{
        clearInterval(intervalId)
          
        //   time=0
        //     minute=0   
            cronometro.innerText=`00:60`
      
     
        
    })

pausa.addEventListener("click",()=>{
clearInterval(intervalId)
})
pausa.addEventListener("dblclick",()=>{
    intervalId=null
    if (!intervalId) {
        intervalId = setInterval(actualizar, 1000);
         actualizar()
      } 
})
    
    
})