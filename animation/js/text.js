const color = ["#141519", "#01BBD4", "#9C28B0", "#FEEA3C"]
var text = document.querySelector(".heading")
var stringText = text.textContent;
var splitText = stringText.split("");
text.textContent = "";
for(i=0; i < splitText.length; i++) {
    text.innerHTML+= "<span>"+splitText[i]+"</span>";
}
var alpha = document.querySelectorAll(".heading span");
var colorno = 0;

function colorText() {
        var rndLetter = Math.floor(Math.random() * splitText.length);
        alpha[rndLetter].style.color = color[colorno];
        colorno++;
        if(colorno === color.length) {
            colorno = 0;
        }

}
let textAmimation = setInterval(colorText, 100);