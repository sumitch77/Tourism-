let name = document.querySelector("#name");
let pass = document.querySelector("#pass");
let but = document.querySelector("#button");

but.addEventListener("click",()=>{
    
  let nameent = name.value;
let passent= pass.value;
    
localStorage.setItem("namee",nameent) ;
localStorage.setItem("passe",passent) ;
    window.open("index.html");
});