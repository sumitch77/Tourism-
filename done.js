let a = document.querySelector("#jsdiv");
let b = document.querySelector("#cli");
let tmps = document.querySelector("#tmps");
let msg1 = document.querySelector("#msg1");
let msg2 = document.querySelector("#msg2");
let msg3 = document.querySelector("#msg3");
let msg4 = document.querySelector("#msg4");
let loader = document.querySelector("#loader");

b.addEventListener("click",() =>{
  
    if (a.style.display === "block") {
        a.style.display = "none";
    } else {
        a.style.display = "block";
    }
});

  
  
  const images = document.querySelectorAll('.hero-slider img');
  let current = 0;
  setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }, 3500);

  
  document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('jh-map').setView([23.6102, 85.2799], 7); // Centered on Ranchi, Jharkhand
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    
    L.marker([23.3722, 85.3250]).addTo(map)
      .bindPopup('Ranchi Railway Station').openPopup();
  });

  
  
src="https://unpkg.com/leaflet/dist/leaflet.js"


    // main iternary form

let planning = document.querySelector("#planning");
let close = document.querySelector("#close");
let hide = document.querySelectorAll(".iti");
close.addEventListener("click",()=>{
    if(planning.style.display==="block" || planning.style.display===""){
      planning.style.display="none"; 
      close.innerText="show";
    }
    else if(planning.style.display==="none"){
        planning.style.display="block";
        close.innerText="Hide";
    }
});


let c = document.querySelector("#cc");
let d = document.querySelector("#dd");

let e = document.querySelector("#ee");
let f = document.querySelector("#ff");
let g = document.querySelector("#gg");

let c3 = document.querySelector("#c3");
let d3 = document.querySelector("#d3");
let e3 = document.querySelector("#e3");

let c4 = document.querySelector("#c4");
let d4 = document.querySelector("#d4");
let e4 = document.querySelector("#e4");

let c5 = document.querySelector("#c5");
let d5 = document.querySelector("#d5");
let e5 = document.querySelector("#e5");


  const form = document.getElementById("newform");
let output = document.getElementById("output"); // make sure you add <div id="output"></div> in HTML

let disp = document.querySelector("#disp");
let feed = document.querySelector("#form");
let feedbacked = document.querySelector("#feedbacked");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  
  let budget = parseInt(document.querySelector("#budget").value);
    let days = document.querySelector("#days");
    let day = parseInt(days.value);
if (day<=1 && budget < 20000) {
    c.style.display="block";
} else if ( day <=1 && budget >=20001){
    d.style.display="block";
} 
    
    else if ( day ==2 && budget <= 20000) {
  e.style.display="block";
}else if ( day ==2 && 40000 >=budget && budget>20000) {
  f.style.display="block";
} else if ( day ==2 && budget > 50000) {
  g.style.display="block";
}
    
  else if ( day ==3 && budget <20000) {
  c3.style.display="block";
} else if ( day ==3 && 50000 >= budget && budget >= 20000) {
  d3.style.display="block";
} else if ( day ==3 && budget > 50000) {
  e3.style.display="block";
}
    
else if ( day ==4 && budget <20000) {
  planning.innerText = "Sorry Sir , This budget is Too less for 4 days";
} else if ( day ==4 && 50000 >= budget && budget>= 20000) {
  c4.style.display="block";
}else if ( day ==4 && 100000>= budget && budget >50000) {
  d4.style.display="block";
} else if ( day ==4 && budget > 100000) {
  e4.style.display="block";
}   
    
 else if ( day >4 && budget <20000) {
  planning.innerText = "Sorry Sir this Budget is too less for these amount of Days";
} else if ( day >4 && 50000 >= budget && budget>= 20000) {
  c5.style.display="block";
}else if ( day >4 && 100000>= budget && budget >50000) {
  d5.style.display="block";
} else if ( day >4 && budget > 100000) {
  e5.style.display="block";
}      
    
    
    //form code

  let data = {};
  let elements = form.elements;

  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    if (!el.name) continue;

    
    if (el.type === "checkbox") {
      if (!data[el.name]) data[el.name] = [];
      if (el.checked) data[el.name].push(el.value);
    } 
    
    else if (el.type === "radio") {
      if (el.checked) data[el.name] = el.value;
    } 
    
    else {
      data[el.name] = el.value;
    }
  }

  
  for (let key in data) {
    if (Array.isArray(data[key])) {
      data[key] = data[key].join(", ");
    }
  }

  
  let line = "";
  for (let key in data) {
    line += `<strong>${key}:</strong> ${data[key]}<br>`;
  }
  

  // loader
    
    tmps.style.display ="block";
    msg1.style.display="block";
      setTimeout(() =>{
          msg1.style.display="none";
          msg2.style.display="block";
          loader.style.background = "linear-gradient(to right, blue 40%, transparent 40%)";
      } , 800);
    
      setTimeout(() =>{
          msg2.style.display="none";
          msg3.style.display="block";
          loader.style.background = "linear-gradient(to right, blue 60%, transparent 60%)";
          
      } , 1400);
    
    
      setTimeout(() =>{
          msg3.style.display="none";
          msg4.style.display="block";
          loader.style.background = "linear-gradient(to right, blue 80%, transparent 80%)";
      } , 2200);
    
    
    
    setTimeout(() =>{
        tmps.style.display="none";
      } , 3000);
    
    output.innerHTML += line + "<hr>"; // add horizontal line for separation
  fetch("https://script.google.com/macros/s/AKfycbx5wRNdTlOjbdVYDgz1wTLG8wY7k3yRAHcioAwKSBAos2hp78qgf9xCL6LI4xwZkMOG/exec", {
    method: "POST",
    mode: "no-cors",   
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(response => {
      form.reset();
      disp.style.display="block";
      setTimeout(() =>{
          disp.style.display="none";
      } , 3000);
    
  })
  .catch(err => console.error(err));
});
  
// for clear itenary form

let clear = document.querySelector("#clear");
clear.addEventListener("click" , () =>{
  planning.innerText="";
  output.innerText="";
    hide.innerText="";
  
});

// for feedback submit
feed.addEventListener("submit", function(e) {
  e.preventDefault();

let data = {};
  let elements = feed.elements;

  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    if (!el.name) continue;

    
    if (el.type === "checkbox") {
      if (!data[el.name]) data[el.name] = [];
      if (el.checked) data[el.name].push(el.value);
    } 
    
    else if (el.type === "radio") {
      if (el.checked) data[el.name] = el.value;
    } 
    
    else {
      data[el.name] = el.value;
    }
  }

  
  for (let key in data) {
    if (Array.isArray(data[key])) {
      data[key] = data[key].join(", ");
    }
  }

  
  fetch("https://script.google.com/macros/s/AKfycbx5wRNdTlOjbdVYDgz1wTLG8wY7k3yRAHcioAwKSBAos2hp78qgf9xCL6LI4xwZkMOG/exec", {
    method: "POST",
    mode: "no-cors",   
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(response => {
      feed.reset();
      feedbacked.style.display="block";
      setTimeout(() =>{
          feedbacked.style.display="none";
      } , 2000);
      
    
  })
  .catch(err => console.error(err));
});


  
// for login page
let heading = document.querySelector("#h1");
let admin = document.querySelector("#admin");
let user= localStorage.getItem("username");
let pass = localStorage.getItem("password");
let css= document.querySelector("#cssoff");
let css1= document.querySelector("#csson");

css.addEventListener("click",() =>{
[...document.styleSheets].forEach(s => s.disabled = true);
    
});
css1.addEventListener("click",() =>{
[...document.styleSheets].forEach(s => s.disabled = false);
    
});
if(user==="Sumit" && pass==="6969" ){
    heading.innerText="welcome Owner";
    admin.style.display="block";
}
else if(user==="Vinay"){
    heading.innerText="wecome Bhadwa";
}
else{
    heading.innerText=user;
}
let newinput = document.querySelector("#hack");
let evaluate = document.querySelector("#eval");
let evalres = document.querySelector("#evalre");
evaluate.addEventListener("click",() =>{
    let gh = newinput.value;
    evalres.innerText = eval(gh);

});

  let chatbot= document.querySelector("#chatbot");
chatbot.addEventListener("click",()=>{
    window.location.href="chatbot.html";
});
  
  
