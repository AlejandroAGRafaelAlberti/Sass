var slideIndex=1;function plusSlides(e){showSlides(slideIndex+=e)}function showSlides(e){var s,l=document.getElementsByClassName("fotos");for(e>l.length&&(slideIndex=1),e<1&&(slideIndex=l.length),s=0;s<l.length;s++)l[s].style.display="none";l[slideIndex-1].style.display="block"}function openTab(e,s){var l,n,t;for(n=document.getElementsByClassName("tabcontent"),l=0;l<n.length;l++)n[l].style.display="none";for(t=document.getElementsByClassName("tablinks"),l=0;l<t.length;l++)t[l].className=t[l].className.replace(" active","");document.getElementById(s).style.display="flex",e.currentTarget.className+=" active"}showSlides(slideIndex);
//# sourceMappingURL=index.0d4a9235.js.map
