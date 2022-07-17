const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

let frutas = []
let bebidas = []
let higiene = []

let mainFrutas  = document.querySelector(".products-content-fruits")
let mainBebidas = document.querySelector(".products-content-drinks")
let mainHigiene = document.querySelector(".products-content-hygiene")

function dividirProdCategoria(arrawProdutos){
  for(let i = 0; i < arrawProdutos.length; i++){
   if(arrawProdutos[i].image == undefined){
    arrawProdutos[i].image = "./img/products/no-img.svg"
   }
   if(arrawProdutos[i].category == "Frutas"){
    frutas.push(arrawProdutos[i])
   }
   if(arrawProdutos[i].category == "Bebidas"){
    bebidas.push(arrawProdutos[i])
   }
   if(arrawProdutos[i].category == "Higiene"){
    higiene.push(arrawProdutos[i])
   }
  }
}
dividirProdCategoria(products)

function criarUl(){
  let ulFrutas  = document.createElement("ul")
  let ulBebidas = document.createElement("ul")
  let ulHigiene = document.createElement("ul")

  ulFrutas.className  = "ulFrutas"
  ulBebidas.className = "ulBebidas"
  ulHigiene.className = "ulHigiene"

  mainFrutas.appendChild(ulFrutas)
  mainBebidas.appendChild(ulBebidas)
  mainHigiene.appendChild(ulHigiene)
}
criarUl()

let ulFrutas  = document.querySelector(".ulFrutas")
let ulBebidas = document.querySelector(".ulBebidas")
let ulHigiene = document.querySelector(".ulHigiene")

function inserirObjetos(){
  for(let i = 0; i < frutas.length; i++){
    let secaoFrutas = criarLi(frutas[i])
    ulFrutas.appendChild(secaoFrutas)
  }
  for(let i = 0; i < bebidas.length; i++){
    let secaoBebidas = criarLi(bebidas[i])
    ulBebidas.appendChild(secaoBebidas)
  }
  for(let i = 0; i < higiene.length; i++){
    let secaoHigiene = criarLi(higiene[i])
    ulHigiene.appendChild(secaoHigiene)
  }
}
inserirObjetos()

function criarLi(objeto){
  let li = document.createElement("li")
  let img = document.createElement("img")
  let main = document.createElement("main")
  let h1 = document.createElement("h1")
  let h5 = document.createElement("h5")
  let strong = document.createElement("strong")

  li.className = "product"
  img.src = objeto.image
  img.alt = objeto.imageDescription
  img.title = objeto.imageDescription
  img.className = "product-img"
  main.className = "product-main"
  h1.className = "product-title"
  h1.innerText = objeto.title
  h5.className = "product-category"
  h5.innerText = objeto.category
  strong.className = "product-price"
  strong.innerText = objeto.price

  li.append(img, main)
  main.append(h1, h5, strong)
 
  return li
}

// Frutas
          // <ul> 
          //   <li class="product">
          //     <img
          //       src="./img/products/no-img.svg"
          //       alt=""
          //       title=""
          //       class="product-img"
          //     />
          //     <main class="product-main">
          //       <h1 class="product-title">Uva Crimson</h1>
          //       <h5 class="product-category">Frutas</h5>
          //       <strong class="product-price">R$ 8.99</strong>
          //     </main>
          //   </li>
          // </ul>
// Bebidas
          // <ul>
          //   <li class="product">
          //     <img
          //       src="./img/products/no-img.svg"
          //       alt=""
          //       title=""
          //       class="product-img"
          //     />
          //     <main class="product-main">
          //       <h1 class="product-title">Refrigerante</h1>
          //       <h5 class="product-category">Bebidas</h5>
          //       <strong class="product-price">R$ 8.99</strong>
          //     </main>
          //   </li>
          // </ul>
// Higiene
        //   <ul>
        //   <li class="product">
        //     <img
        //       src="./img/products/product_9.svg"
        //       alt=""
        //       title=""
        //       class="product-img"
        //     />
        //     <main class="product-main">
        //       <h1 class="product-title">Sabonete</h1>
        //       <h5 class="product-category">Higiene</h5>
        //       <strong class="product-price">R$ 8.99</strong>
        //     </main>
        //   </li>
        // </ul>


        