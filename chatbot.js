let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");
let seven = document.querySelector("#seven");
let eight = document.querySelector("#eight");
let ans1 = document.querySelector("#ans1");
let ans2 = document.querySelector("#ans2");
let ans3 = document.querySelector("#ans3");
let ans4 = document.querySelector("#ans4");
let ans5 = document.querySelector("#ans5");
let ans6 = document.querySelector("#ans6");
let ans7 = document.querySelector("#ans7");
let ans8 = document.querySelector("#ans8");



one.addEventListener("click" ,()=>{
    if(ans1.style.display==="none" || ans1.style.display===""){
        ans1.style.display="block";
    }
    else {
        ans1.style.display="none";
    }
});

two.addEventListener("click" ,()=>{
    if(ans2.style.display==="none" || ans2.style.display===""){
        ans2.style.display="block";
    }
    else {
        ans2.style.display="none";
    }
});

three.addEventListener("click" ,()=>{
    if(ans3.style.display==="none" || ans3.style.display===""){
        ans3.style.display="block";
    }
    else {
        ans3.style.display="none";
    }
});

four.addEventListener("click" ,()=>{
    if(ans4.style.display==="none" || ans4.style.display===""){
        ans4.style.display="block";
    }
    else {
        ans4.style.display="none";
    }
});
five.addEventListener("click" ,()=>{
    if(ans5.style.display==="none"|| ans5.style.display===""){
        ans5.style.display="block";
    }
    else {
        ans5.style.display="none";
    }
});


six.addEventListener("click" ,()=>{
    if(ans6.style.display==="none"  || ans6.style.display===""){
        ans6.style.display="block";
    }
    else {
        ans6.style.display="none";
    }
});

seven.addEventListener("click" ,()=>{
    if(ans7.style.display==="none"  || ans7.style.display===""){
        ans7.style.display="block";
    }
    else {
        ans7.style.display="none";
    }
});

eight.addEventListener("click" ,()=>{
    if(ans8.style.display==="none"  || ans8.style.display===""){
        ans8.style.display="block";
    }
    else {
        ans8.style.display="none";
    }
});

let input = document.querySelector("#input");
let input1 = document.querySelector("#input1");

input.addEventListener("click",()=>{
    if(input1.style.display==="none"  || input1.style.display===""){
        input1.style.display="block";
    }
    else {
        input1.style.display="none";
    }
});
let extra = document.querySelector("#extra");
let mes = document.querySelector("#mes");

let submit= document.querySelector("#submit");

submit.addEventListener("click",()=>{
    let data = {question : extra.value};
fetch("https://script.google.com/macros/s/AKfycbx5wRNdTlOjbdVYDgz1wTLG8wY7k3yRAHcioAwKSBAos2hp78qgf9xCL6LI4xwZkMOG/exec", {
    method: "POST",
    mode: "no-cors",   
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(data)
  })
.then(res => res.text())
  .then(response => {
      extra.value="";
      mes.style.display="block";
      setTimeout(() =>{
          mes.style.display="none";
      } , 3000);
    
  })
  .catch(err => console.error(err));
    
});

