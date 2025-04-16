//Elemento principal del scipt
const main = document.getElementsByTagName("main").item(0);
//Fuente de la cual procede la informacion
const URLMain = "https://fakestoreapi.com/products/";
//Elemento para poder activar el Menu UL
const ulMenu = document.getElementById("ulMenu");
//Elemento para poder filtrar los elementos de la tienda
const mainProds = document.getElementById("mainProds");

//Elemento copiado de Bootstrap
//`<li><a class="dropdown-item" href="#">Something else here</li>`

//Funcion para usar la informacion de la fakestoreapi
function getData(cat = "") {
  const options = {"method":"Get"};
  
  fetch(URLMain+cat, options)
    .then((response) => {
      console.log(response); // Para verificar la respuesta
      response.json().then((res) => {
        //console.log("Cantidad de productos:", res.length);
        //console.log("Primer título:", res[0].title);

        //Función que crea las tarjetas
        createCards(res);
      });
    })
    .catch((err) => {
      main.insertAdjacentHTML("beforeend",
        `<div class="alert alert-danger" role="alert">
          ${err.message}
        </div>`);
    });
} //getData

function getCategories(){
  const options= {"method":"GET"}; 
  fetch(URLMain+"categories/", options)
      .then((response) => {
          // console.log(response);
          response.json().then((res) => {
              console.log("categories: ",res);
              res.forEach(cat => {
                  ulMenu.insertAdjacentHTML("afterbegin",
                  `<li><a class="dropdown-item" style="cursor:pointer;" onclick="getData('category/${escape(cat)}')">${cat}</a></li> `
              )});
          });
      })
      .catch((err) => {
          main.insertAdjacentHTML("beforeend",
              `<div class="alert alert-danger" role="alert">
          ${err.message}
      </div>`);
      });
}//getCategories
getCategories();

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
getData();