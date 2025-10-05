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
  
  const form = document.getElementById("newform");
let output = document.getElementById("output"); // make sure you add <div id="output"></div> in HTML
let planning = document.querySelector("#planning");
let disp = document.querySelector("#disp");
let feed = document.querySelector("#form");
let feedbacked = document.querySelector("#feedbacked");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  
  let budget = parseInt(document.querySelector("#budget").value);
if (budget <= 40000) {
  planning.innerText = "Ye gareeb ki ....";
} else if (budget <= 100000) {
  planning.innerText = "nice budget";
} else if (budget >= 100000) {
  planning.innerText = "Ameer ka C...";

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
          tmps.innerHTML="";
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
      } , 5000);
    
  })
  .catch(err => console.error(err));
});
  
// for clear itenary form

let clear = document.querySelector("#clear");
clear.addEventListener("click" , () =>{
  planning.innerText="";
  output.innerText="";
  
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
      form.reset();
      feedbacked.style.display="block";
      setTimeout(() =>{
          feedbacked.style.display="none";
      } , 2000);
    
  })
  .catch(err => console.error(err));
});
  


  
  
  
