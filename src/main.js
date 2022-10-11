console.log('sdkjflksajhfd')
const contador = document.getElementById("count");
const sum = document.getElementById("incr");
const rest = document.getElementById("decr");
const reset = document.getElementById("reset");
let numero = 0;

sum.addEventListener("click",()=>{
  numero++;
  contador.innerHTML=numero;
});
rest.addEventListener("click",()=>{
  if(numero>0){
    numero--;
    contador.innerHTML=numero;
  } 
});
reset.addEventListener("click",()=>{
    numero=0;
    contador.innerHTML=numero;
  });