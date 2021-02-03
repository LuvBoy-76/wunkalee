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
    
    let spot;
    let src = "https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c";
    
    let item = [];
    let html;

    
    fetch(src)
        .then(Response => Response.json())
        .then( result => {
            // console.log(result);
             item.push(result.data.XML_Head.Infos.Info[0]);
             item.push(result.data.XML_Head.Infos.Info[10]);
             item.push(result.data.XML_Head.Infos.Info[81]);
            //  console.log(item);
            html = item.map(data =>{
                const itemPicture = data.Picture1;
                const itemTitle = data.Name;
                const itemContent = data.Opentime;
                return `
                    <div class="apiPicture">
                             <img src="${itemPicture}">
                    <div>
                    <div class="apiTitle">${itemTitle}<div>
                    <div class="apiText">${itemContent}<div>
                `
            }).join('');
            let kaoWrapper = document.querySelector('.KAO-api').innerHTML = html;
        });       
             
           
            

})();

