var text = document.querySelector(".heading");
var string = text.textContent;
var split = string.split("");
text.textContent = "";
const fonts = ["Chela One","Itim","Dancing Script","Girassol","Indie Flower","Orbitron","Poppins","Teko","Amatic SC", "Open Sans Condensed"]
const color = ["#141519", "#01BBD4", "#9C28B0", "#FEEA3C"]
for(i=0; i < split.length; i++) {
    text.innerHTML+= "<span>"+split[i]+"</span>";
}
let char = 0;
function fade() {
    if(char === split.length) {
        char = 0;       
    }
    else {
        var rndFont = Math.floor(Math.random() * 11);
        var rndFont2 = Math.floor(Math.random() * 11);
        var rndFont3 = Math.floor(Math.random() * 11);
        var rndFont4 = Math.floor(Math.random() * 11);
        var rndFont5 = Math.floor(Math.random() * 11);
        var rndFont6 = Math.floor(Math.random() * 11);
        var rndFont7 = Math.floor(Math.random() * 11);
        var rndFont8 = Math.floor(Math.random() * 11);
    var element = document.querySelectorAll(".heading span")[char];
    var element2 = document.querySelectorAll(".heading span")[char+1];
    var element3 = document.querySelectorAll(".heading span")[char+2];
    var element4 = document.querySelectorAll(".heading span")[char+3];
    var element5 = document.querySelectorAll(".heading span")[char+4];
    var element6 = document.querySelectorAll(".heading span")[char+5];
    var element7 = document.querySelectorAll(".heading span")[char+6];
    var element8 = document.querySelectorAll(".heading span")[char+7];
    // element.classList.toggle("fade");
    element.style.fontFamily = ""+fonts[rndFont]+",sans-serif";
    element2.style.fontFamily = ""+fonts[rndFont2]+",sans-serif";
    element3.style.fontFamily = ""+fonts[rndFont3]+",sans-serif";
    element4.style.fontFamily = ""+fonts[rndFont4]+",sans-serif";
    element5.style.fontFamily = ""+fonts[rndFont5]+",sans-serif";
    element6.style.fontFamily = ""+fonts[rndFont6]+",sans-serif";
    element7.style.fontFamily = ""+fonts[rndFont7]+",sans-serif";
    element8.style.fontFamily = ""+fonts[rndFont8]+",sans-serif";
    
        
    }
}
let fadeEffect = setInterval(fade, 300);