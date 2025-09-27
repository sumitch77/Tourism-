
  // Hero image slider
  const images = document.querySelectorAll('.hero-slider img');
  let current = 0;
  setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }, 3500);

  // Leaflet Map for Jharkhand
  document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('jh-map').setView([23.6102, 85.2799], 7); // Centered on Ranchi, Jharkhand
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Example marker: Ranchi Railway Station
    L.marker([23.3722, 85.3250]).addTo(map)
      .bindPopup('Ranchi Railway Station').openPopup();
  });

  <!-- ...existing code... -->
   src="https://unpkg.com/leaflet/dist/leaflet.js"
<!-- ...existing code... -->



  
const form = document.getElementById("newform");
const output = document.getElementById("output"); // make sure you add <div id="output"></div> in HTML

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Collect all input values dynamically
  const data = {};
  const elements = form.elements;

  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    if (!el.name) continue;

    // Checkboxes: collect all checked values
    if (el.type === "checkbox") {
      if (!data[el.name]) data[el.name] = [];
      if (el.checked) data[el.name].push(el.value);
    } 
    // Radio buttons: take only the selected one
    else if (el.type === "radio") {
      if (el.checked) data[el.name] = el.value;
    } 
    // Other inputs
    else {
      data[el.name] = el.value;
    }
  }

  // Convert checkbox arrays to comma-separated strings
  for (let key in data) {
    if (Array.isArray(data[key])) {
      data[key] = data[key].join(", ");
    }
  }

  // --- PRINT DATA ON PAGE ---
  let line = "";
  for (let key in data) {
    line += `<strong>${key}:</strong> ${data[key]}<br>`;
  }
  output.innerHTML += line + "<hr>"; // add horizontal line for separation

  // --- Send data to your Google Sheets Web App ---
  fetch("https://script.google.com/macros/s/AKfycbx5wRNdTlOjbdVYDgz1wTLG8wY7k3yRAHcioAwKSBAos2hp78qgf9xCL6LI4xwZkMOG/exec", {
    method: "POST",
    mode: "no-cors",   // no-cors mode avoids preflight
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(response => {
    alert("submitted");
    form.reset();
  })
  .catch(err => console.error(err));
});

  
  
  
const form = document.getElementById("form");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Collect all input values dynamically
  const data = {};
  const elements = form.elements;

  for (let i = 0; i < elements.length; i++) {
    const el = elements[i];
    if (!el.name) continue;

    // Checkboxes: collect all checked values
    if (el.type === "checkbox") {
      if (!data[el.name]) data[el.name] = [];
      if (el.checked) data[el.name].push(el.value);
    } 
    // Radio buttons: take only the selected one
    else if (el.type === "radio") {
      if (el.checked) data[el.name] = el.value;
    } 
    // Other inputs
    else {
      data[el.name] = el.value;
    }
  }

  // Convert checkbox arrays to comma-separated strings
  for (let key in data) {
    if (Array.isArray(data[key])) {
      data[key] = data[key].join(", ");
    }
  }

  // Send data to your Google Sheets Web App
  fetch("https://script.google.com/macros/s/AKfycbwLkz2MwacMWLOB2FYxupBNhAVx6gLqQJ71G03pyeyCoswV5vADxleif9waLQSlp8gd/exec", {
    method: "POST",
  mode: "no-cors",   // no-cors mode avoids preflight
  headers: { "Content-Type": "text/plain" },
  body: JSON.stringify(data)
  })
  .then(res => res.text())
  .then(response => {
    alert("submitted");
    form.reset();
  })
  .catch(err => console.error(err));
});

document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".newform");
  const output = document.getElementById("output");

  forms.forEach(form => {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      // ... rest of your code
    });
  });
});


