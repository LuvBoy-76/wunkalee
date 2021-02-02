//header sticky navbar
(function(){

    const banner = document.querySelector('.banner')
    const bannerHeight = banner.offsetHeight;
    const heightTrigger = (bannerHeight / 3) * 2;
    const header = document.querySelector('.header');
    
    function scrollHandler(){
        if(window.scrollY >= heightTrigger){
            header.classList.add('active');
        }else{
            header.classList.remove('active');
        }
    }
    window.addEventListener('scroll', scrollHandler);

    //navbar

    function navSlide() {
        const burger = document.querySelector(".nav-hamburger");
        const nav = document.querySelector(".navbar-links");
        const navLinks = document.querySelectorAll(".nav-links li");
        burger.addEventListener("click", () => {
            //Toggle Nav
            nav.classList.toggle("nav-active");
            
            //Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = ""
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                }
            });
            //Burger Animation
            burger.classList.toggle("toggle");
        });
    }
    navSlide();
    
    
    

})();

