console.log('sdkjflksajhfd')
const contador = document.getElementById("count");
const sum = document.getElementById("incr");
const rest = document.getElementById("decr");
const reset = document.getElementById("reset");
let numero = 0;

sum.addEventListener("click",()=>{
  contador.style.color = "Green";
  numero++;
  contador.innerHTML=numero;
});
rest.addEventListener("click",()=>{
  contador.style.color = "Red";
    numero--;
    contador.innerHTML=numero;
});
reset.addEventListener("click",()=>{
    contador.style.color = "black";
    numero=0;
    contador.innerHTML=numero;
  });