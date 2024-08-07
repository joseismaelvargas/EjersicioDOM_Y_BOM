let lista=document.getElementById("lista")



let listatarea=[]


function form(e){
e.preventDefault()
let tarea=document.getElementById("tarea")


 

const newTarea={
    tarea:tarea.value,
    id:Math.floor(Math.random()*1000)

}
listatarea.unshift(newTarea)
console.log(listatarea)
render()
tarea=document.getElementById("tarea").value=""

}
function render(){
 let render=listatarea.map(lista=>{
return`<li>${lista.tarea} <i data-id=${lista.id} class="delete bi bi-trash-fill"></i></li>`})

lista.innerHTML=render.join("")

document.querySelectorAll(".delete").forEach(Button =>{
    Button.addEventListener("click",e=>{
      const id=Button.getAttribute("data-id")
      evento=evento.filter(even=>even.id!==id)
      render()
    })
})

   
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('FormTarea').addEventListener('submit', form);
});
