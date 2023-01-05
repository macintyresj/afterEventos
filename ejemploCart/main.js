const productsDB = [
  {
    id: 1,
    title: "tie fighter",
    price: 20000,
    // img: "img/nombrearchivo.jpg"
    img: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405217/starwars/item-1.webp",
  },
  {
    id: 2,
    title: "Lightsaber",
    price: 12000,
    img: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405217/starwars/item-2.webp",
  },
  {
    id: 3,
    title: "Imperial army's Death Star",
    price: 18000,
    img: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405217/starwars/item-3.webp",
  },
  {
    id: 4,
    title: "Storm Trooper Helmet",
    price: 26000,
    img: "https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1536405217/starwars/item-4.webp",
  },
];

let carrito = [];

const items = document.querySelector("#items");
const carritoHTML = document.querySelector("#carrito");

//*Pintar productos en la tienda

function renderizarProductos() {
  productsDB.forEach((producto) => {
    let productoHTML = `
  
          <div class="col-12 col-md-6 mb-5 d-flex justify-content-center">
          <div class="card text-light bg-dark" style="width: 18rem;">
              <img class="card-img-top" src="${producto.img}" alt="Card image cap">
              <div class="card-body">
                  <h5 class="card-title">${producto.title}</h5>
                  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <p>$${producto.price}</p>
                  <button class="btn btn-primary" onclick="agregarProductoAlCarrito(${producto.id})">Añadir al carrito</button>
              </div>
          </div>
          </div>
          `;
    items.innerHTML += productoHTML;
  });
}
renderizarProductos();

//*** Añadir productos al carrito****/
//*Identificar qué producto eligió
//*Si el producto ya esta modifico la cantidad - renderizo
//* Mostrar la informacion del producto
//*Calcular el total

function agregarProductoAlCarrito(id) {
  let producto = productsDB.find((producto) => producto.id === id);
  console.log(producto.id);
  // console.log(producto.title);

  let productoEnCarrito = carrito.find((producto) => producto.id === id);

  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    producto.cantidad = 1;
    carrito.push(producto);
  }

  renderizarCarrito();
  calcularTotal();
}

function renderizarCarrito() {
  console.log(carritoHTML);

  let htmlCarrito = "";

  carrito.forEach((prod, id) => {
    htmlCarrito += `
        
        <div class="col-12 mb-5 d-flex flex-row justify-content-center">
        <div class="card text-dark flex-row" style="width: 30rem;">
        <div>
        <img  style="width: 100px;" src="${prod.img}" alt="Card image cap">
        </div>
            <div class="card-body" >
                <h5 class="card-title">${prod.title}</h5>
                <p>${prod.price}$</p>
                <p>Cantidad: ${prod.cantidad}</p>
                <button class="btn btn-danger" onclick="eliminarProductoDelCarrito(${id})">Eliminar</button>
            </div>

        </div>
        </div>
        `;
  });

  carritoHTML.innerHTML = htmlCarrito;
}

function calcularTotal() {
  let total = 0;

  carrito.forEach((prod) => {
    total += prod.price * prod.cantidad;
  });

  console.log(total);

  const t = document.getElementById("total");
  t.innerHTML = `<h5>$${total}</h5>`;
}

//****Editar Carrito***/
//*Cuántos hay? Elimino un producto o vaciar carrito.

function eliminarProductoDelCarrito(id) {
  carrito[id].cantidad--;

  if (carrito[id].cantidad === 0) {
    carrito.splice(id, 1);
  }
  renderizarCarrito();
  calcularTotal();
}

function vaciarCarrito() {
  carrito = [];
  renderizarCarrito();
  calcularTotal();
}

const vaciar = document.querySelector("#boton-vaciar");
vaciar.addEventListener("click", vaciarCarrito);
