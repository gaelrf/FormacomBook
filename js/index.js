var btnfotos=document.getElementsByClassName("fa-heart")
for (let index = 0; index < btnfotos.length; index++) {
    let element = btnfotos.item(index);
    element.onclick=function(boton){
        let contador=boton.target.nextElementSibling
             contador.innerHTML++
        }
}
// btnfoto1.onclick=function(){
//     var contador=document.getElementById("spanFoto1")
//     contador.innerText++
// }
// var btnfoto2=document.getElementById("btnFoto2")
// btnfoto1.onclick=function(){
//     var contador2=document.getElementById("spanFoto2")
//     contador2.innerText++
// }
// var btnfoto3=document.getElementById("btnFoto3")
// btnfoto1.onclick=function(){
//     var contador3=document.getElementById("spanFoto3")
//     contador3.innerText++
// }
// var btnfoto4=document.getElementById("btnFoto4")
// btnfoto1.onclick=function(){
//     var contador4=document.getElementById("spanFoto4")
//     contador4.innerText++
// }
// var btnfoto5=document.getElementById("btnFoto5")
// btnfoto1.onclick=function(){
//     var contador5=document.getElementById("spanFoto5")
//     contador5.innerText++
// }
// var btnfoto6=document.getElementById("btnFoto6")
// btnfoto1.onclick=function(){
//     var contador6=document.getElementById("spanFoto6")
//     contador6.innerText++
// }
