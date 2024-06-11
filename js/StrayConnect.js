
//1 Shfaqja e slideve te ndryshem ne carousel(pets.html)

// Vendosim nje variabel globale slideIndex me vleren fillestare 1
let slideIndex = 1;
// Tregon slajdet duke e shfaqur slajdin me numrin slideIndex
showSlides(slideIndex);

// Funksioni per te shtuar ose zvogeluar numrin e slideIndex
function plusSlides(n) {
    // Thirr showSlides() duke shtuar ose zvogeluar slideIndex me n
    showSlides(slideIndex += n);
}

// Funksioni per te shfaqur slide-in aktual
function currentSlide(n) {
    // Thirr showSlides() duke vendosur slideIndex ne n
    showSlides(slideIndex = n);
}

// Funksioni qe tregon slajdet
function showSlides(n) {
    let i;
     // Marrim te gjitha elementet me klasen "carousel-pets-item" dhe i ruajme ne nje varg
    let slides = document.getElementsByClassName("carousel-pets-item");
       // Nese n eshte me i madh se numri i slajdeve, vendos slideIndex ne 1
    if (n > slides.length) { slideIndex = 1 }
     // Nese n eshte me i vogel se 1, vendos slideIndex ne numrin e fundit te slajdeve
    if (n < 1) { slideIndex = slides.length }
       // Fshehim te gjitha slajdet
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
      // Shfaqim vetem slajdin aktual
    slides[slideIndex - 1].style.display = "flex";
}




//2 Bejme tekstin te shfaqet kur klikojme elementin(adopt.html)

// Merr te gjitha elementet me klasen "collapsible" dhe i ruajme ne vargun coll
var coll = document.getElementsByClassName("collapsible");
// Deklarojme variablen i per perdorim ne ciklin for
var i;

// Per secilin element ne vargun coll, shto nje event listener qe ndodh kur klikohet
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        // Shto ose hiq klasen "active1" kur klikohet
        this.classList.toggle("active1");
         // Merr elementin pasues i elementit te klikuar
        var content = this.nextElementSibling;
         // Kontrollon nese content ka nje stil te percaktuar per lartesine maksimale
        if (content.style.maxHeight) {
            // Fshi stilin e percaktuar per lartesine maksimale, duke e bere te shfaqshe
            content.style.maxHeight = null;
        } else
            // Nese content nuk ka nje stil te percaktuar per lartesine maksimale 
            //Vendos lartesine maksimale te permbajtjes se elementit ne lartesi aktuale
        {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// 3 Funksioni per te hapur nje faqe te re ne nje dritare te re(adopt.html)
function openNewTab() {
     // Vendosim URL-ne per faqen e re qe do te hapet
var url = "../html/application.html";


    // Gjeresia dhe lartesia per dritaren e re
var width = 600;
var height = 550;

// Pozicioni per dritaren e re duhet te jete ne qender te ekranit
var leftPosition = (screen.width - width) / 2;
    var topPosition = (screen.height - height) / 2;

  // Hapim dritaren e re me dimensionet e percaktuara
window.open(url, "_blank", "width=" + width + ", height=" + height + ", left=" + leftPosition + ", top=" + topPosition);
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}




