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
    
    // API
    let src = "https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c";
    let items = [];
    let html;
    fetch(src)
        .then((res) =>{
            return res.json();
        }).then(result => {
            // console.log(result);
            items.push(result.data.XML_Head.Infos.Info[0]);
            items.push(result.data.XML_Head.Infos.Info[10]);
            items.push(result.data.XML_Head.Infos.Info[81]);
            // console.log(items);
            html = items.map((item)=>{
                const itemPicture1 = item.Picture1;
                const itemName = item.Name;
                const itemContent = item.Opentime;
                return `
                <div class="itemList">
                    <div class="itemPicture"><img src='${itemPicture1}'></div>
                    <div class="itemName">${itemName}</div>
                    <div class="itemContent">${itemContent}</div>
                </div>
                `
            }).join('');
            // console.log(html);
            document.querySelector('#itemLocation').innerHTML = html;
        })

    //slider

    const nextBtn = document.querySelector('.nextBtn');
    console.log(nextBtn); 
    newFunction(nextBtn);


    
    

})();

function newFunction(nextBtn) {
    nextBtn.addEventListener('click', function () {
        alert('hello');
    });
}

