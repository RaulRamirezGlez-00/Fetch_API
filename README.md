# Fetch_API
## Practica donde se combinaron los elementos de DOM, Promesas, JSON y Fech_API

Proceso que se llevo a cabo:

1. Creación de index.html y main.js
2. Creación de la estructura base de html en index y creacion de la clase "container"
3. Ae agregaron las const necesarias, al igual que una fakestoreapi
4. En main.js, se creo la funcion getData usando promesas y json
5. Se creo la funcion createCards, con la cual se busca colocar los 20 elementos de la tienda
6. Se agrego un div con un id y una clase para poder insertar las tarjetas y usarlo como referencia
7. se utilizaron los comandos col.className y col.InnerHTML y dentro de estos se copio y se pego una funcion de bootstrap
8. Se utilizo "contenedor.appendChild(col)"
9. se puso el comando "getData()" para imprimir la informacion en el HTML

---
Codigo utilizado para crear las tarjetas de manera funcional con "function createCards(prods)" 
```
function createCards(prods) {
  const contenedor = document.getElementById("card-container");
  contenedor.innerHTML = ""; // Limpia el contenedor

  for (const producto of prods) {
    const col = document.createElement("div");
    col.className = "col";

    col.innerHTML = `
      <div class="card h-100">
        <img src="${producto.image}" class="card-img-top p-3" alt="${producto.title}" style="height: 200px; object-fit: contain;">
        <div class="card-body">
          <h5 class="card-title">${producto.title}</h5>
          <p class="card-text">${producto.description.substring(0, 100)}...</p>
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center">
          <span class="fw-bold">$${producto.price}</span>
          <button class="btn btn-primary btn-sm">Ver más</button>
        </div>
      </div>
    `;

    contenedor.appendChild(col);
  }
}
```
>Vista previa del index.html

![Index](https://github.com/RaulRamirezGlez-00/Fetch_API/blob/main/images/vista%20previa.png?raw=true)