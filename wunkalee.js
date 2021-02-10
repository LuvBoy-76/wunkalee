//header sticky navbar
(function(){
    const banner = document.querySelector('.banner')
    const bannerHeight = banner.offsetHeight;
    const heightTrigger = (bannerHeight / 3) * 2;
    const header = document.querySelector('.header');
    function scrollHandler(){
        if(window.scrollY >= heightTrigger){
            header.classList.remove('header-active');
            header.classList.add('header-trigger');
        }else{
            header.classList.add('header-active');
            header.classList.remove('header-trigger');
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
    let items;
    let html;
    let target = [];
    fetch(src)
        .then((res) =>{
            return res.json();
        }).then(result => {
            items = result.data.XML_Head.Infos.Info;

            //map 出只有名字的名單 取出資料index
            let newList = items.map((item) => item.Name);
            let data1 = newList.indexOf('西子灣風景區');
            let data2 = newList.indexOf('駁二藝術特區');
            let data3 = newList.indexOf('高雄港');

            target.push(items[data1], items[data2], items[data3]);
            // console.log(target);


            html = target.map((item)=>{
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
            document.querySelector('#itemLocation').innerHTML = html;
        })


    //menu
    let mainPhoto = document.querySelector('.mainPhoto');
    let photos = document.querySelectorAll('.photos .menuItem');

    function changeHandler(){
        mainPhoto.innerHTML = `<img src="${this.dataset.src}" alt="mainMenuPhoto" class="mainImg">`
    };
    // console.log(photos);
    photos.forEach((photo)=>{
        photo.addEventListener('click', changeHandler);
    });
})();

