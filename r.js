let head=document.querySelector("#heading");
let button=document.querySelector("#btn");
let inp=document.querySelector("#inp")

button.addEventListener('click',()=>{
   if(inp.value.trim() === ''){
    alert("please enter correct information!!!!")
   }
   else if(inp.value<=18){
    head.innerHTML="You Cant Vote"
   }
   else{
    head.innerHTML='CONGO! you Can VoTE!'
   }
})