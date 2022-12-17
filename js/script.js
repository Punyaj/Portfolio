$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });

  const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
      cursorBorder.style.setProperty("--size", "30px");
    }
    if (item.dataset.cursor === "pointer2") {
      cursorBorder.style.backgroundColor = "white";
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.setProperty("--size", "80px");
    }
  });
  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "unset";
    cursorBorder.style.setProperty("--size", "50px");
  });
});
const portfolio = document.querySelector('.portfolio-gallery'),
      portfolioItems = portfolio.querySelectorAll('.portfolio-item'),
      portfolioCats = document.querySelectorAll('.portfolio-cats > li');
let parentWidth = portfolio.offsetWidth,
    windowWidth = window.innerWidth;

portfolioCats.forEach(cat => {
    cat.addEventListener('pointerdown', function() {
        const dataFilter = this.dataset.filter;
        const el = [];

        if (dataFilter === '*') {
            positionItems(portfolioItems);
        } else {
            portfolioItems.forEach(item => {
                if (item.dataset.filter == dataFilter) {
                    el.push(item);
                } else {
                    item.style.cssText = 'transform: scale(0.1); opacity: 0;';
                }
            });
            positionItems(el);
        }
    });
});
// Count Number of Items Per Row
function countRowsItems() {
    let rowItems = 0;
    if (windowWidth <= 768) {
        rowItems = 1;
    } else if (windowWidth <= 992) {
        rowItems = 2;
    } else {
        rowItems = 3;
    }
    return rowItems;
}
// Position each item in its place
function positionItems(items) {
    let rowItems = countRowsItems();
    let y = 0;
    let x = 0;
    let itemCount = 0;
    items.forEach((item, i) => {
        item.style.cssText = `transform: translate3d(${x*(parentWidth/rowItems)}px, ${y*220}px, 0); opacity: 1;`;
        x++;
        if (x%rowItems == 0) {
            y++;
            x = 0;
        }
        itemCount = i;
    });
    portfolio.style.height = `${Math.ceil(itemCount/rowItems)*220}px`;
}

positionItems(portfolioItems);

window.addEventListener('resize', () => {
    parentWidth = portfolio.offsetWidth;
    windowWidth = window.innerWidth;
    positionItems(portfolioItems);
});

const galleryItem = document.getElementsByClassName("gallery-item");
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement("div");
const lightBoxImg = document.createElement("img");
const lightBoxPrev = document.createElement("div");
const lightBoxNext = document.createElement("div");

lightBoxContainer.classList.add("lightbox");
lightBoxContent.classList.add("lightbox-content");
lightBoxPrev.classList.add("fa", "fa-angle-left", "lightbox-prev");
lightBoxNext.classList.add("fa", "fa-angle-right", "lightbox-next");

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);

document.body.appendChild(lightBoxContainer);

let index = 1;

function showLightBox(n) {
    if (n > galleryItem.length) {
        index = 1;
    } else if (n < 1) {
        index = galleryItem.length;
    }
    let imageLocation = galleryItem[index-1].children[0].getAttribute("src");
    lightBoxImg.setAttribute("src", imageLocation);
}

function currentImage() {
    lightBoxContainer.style.display = "block";

    let imageIndex = parseInt(this.getAttribute("data-index"));
    showLightBox(index = imageIndex);
}
for (let i = 0; i < galleryItem.length; i++) {
    galleryItem[i].addEventListener("click", currentImage);
}

function slideImage(n) {
    showLightBox(index += n);
}
function prevImage() {
    slideImage(-1);
}
function nextImage() {
    slideImage(1);
}
lightBoxPrev.addEventListener("click", prevImage);
lightBoxNext.addEventListener("click", nextImage);

function closeLightBox() {
    if (this === event.target) {
        lightBoxContainer.style.display = "none";
    }
}
lightBoxContainer.addEventListener("click", closeLightBox);