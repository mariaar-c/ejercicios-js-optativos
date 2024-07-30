 const nuevoDiv = document.createElement("div");
 nuevoDiv.id = "nuevoDiv"; 

 for (let i = 1; i <= 6; i++) {

   const nuevoParrafo = document.createElement("p");
   nuevoParrafo.textContent = `Párrafo ${i} dinamico`;

   nuevoDiv.appendChild(nuevoParrafo);
 }


 document.body.appendChild(nuevoDiv);