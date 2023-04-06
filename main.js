// Creacion de  DesktopMenu
const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');

const mobileMenu = document.querySelector(".mobile-menu");

navEmail.addEventListener("click",toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritoAside)


// Creacion de  DesktopMenu
function toggleDesktopMenu(){

    const isasideOpn = aside.classList.contains("inactive")
    // Adtar el menu para que se cierre y abra dependiendo.
    if(!isasideOpn){
        shoppingCartContainer.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
 desktopMenu.classList.toggle("inactive");
}

// Creacion de  MobileMenu
function toggleMobileMenu()
{
    const isasideOpn = shoppingCartContainer.classList.contains("inactive")

    if(!isasideOpn){
        shoppingCartContainer.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}


// Creacion de  Carrito
function toggleCarritoAside()
{
        // Adtar el Carrito para que se cierre y abra dependiendo.

    const ismobileMenuOpen = mobileMenu.classList.contains("inactive")

    if(!ismobileMenuOpen){
        mobileMenu.classList.add("inactive");
    }
    shoppingCartContainer.classList.toggle("inactive");

}


// Lista de productos 
const producList = [];
producList.push({
    name:"Bike",
    price: 120,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

producList.push({
    name:"compu",
    price: 650,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

producList.push({
    name:"table",
    price: 350,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

producList.push({
    name:"table",
    price: 350,
    image:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});



// Indice del array 
// for (product in producList)

// Elementos del array 

function renderProducts(arr){

    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
      
        // product= {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
      
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
      
        const productInfoDiv = document.createElement('div');
      
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
      
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
      
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
      
        productInfoFigure.appendChild(productImgCart);
      
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
      
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
        
        const cardsContainer = document.querySelector('.cards-container');
        
        cardsContainer.appendChild(productCard)
  
      
      }
    
}

  renderProducts(producList); 
  
