function changeColor(color) { 
    document.body.style.background = color; 
} 

document.getElementById("grey").onclick = function(){
    changeColor("grey") 
}
document.getElementById("white").onclick = function(){
    changeColor("white") 
}
document.getElementById("blue").onclick = function(){
    changeColor("blue") 
}
document.getElementById("yellow").onclick = function(){
    changeColor("yellow") 
}
