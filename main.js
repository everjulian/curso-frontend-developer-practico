// Creacion de  DesktopMenu
const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

const mobileMenu = document.querySelector(".mobile-menu");

navEmail.addEventListener("click",toggleDesktopMenu)
menuHamIcon.addEventListener("click", toggleMobileMenu)
menuCarritoIcon.addEventListener("click", toggleCarritoAside)


// Creacion de  DesktopMenu
function toggleDesktopMenu(){

    const isasideOpn = aside.classList.contains("inactive")

    if(!isasideOpn){
        aside.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
 desktopMenu.classList.toggle("inactive");
}

// Creacion de  MobileMenu
function toggleMobileMenu()
{
    const isasideOpn = aside.classList.contains("inactive")

    if(!isasideOpn){
        aside.classList.add("inactive");
    }
    mobileMenu.classList.toggle("inactive");
}


// Creacion de  Carrito
function toggleCarritoAside()
{
    const ismobileMenuOpen = mobileMenu.classList.contains("inactive")

    if(!ismobileMenuOpen){
        mobileMenu.classList.add("inactive");
    }
    aside.classList.toggle("inactive");

}



