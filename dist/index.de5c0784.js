//carrousel code
var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("fotos");
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;
    for(i = 0; i < slides.length; i++)slides[i].style.display = "none";
    slides[slideIndex - 1].style.display = "block";
}
//tabs code
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i = 0; i < tabcontent.length; i++)tabcontent[i].style.display = "none";
    tablinks = document.getElementsByClassName("tablinks");
    for(i = 0; i < tablinks.length; i++)tablinks[i].className = tablinks[i].className.replace(" active", "");
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
}

//# sourceMappingURL=index.de5c0784.js.map
