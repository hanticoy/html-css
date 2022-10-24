let myPolicy = document.querySelector(".linea-5")

//funcion que ejecuta las acciones
function fnAcceptPolicy(){
    myPolicy.remove();
}
myPolicy.addEventListener("click", fnAcceptPolicy ,false )

let addCart = document.querySelector("#addCart")
//funcion que ejecuta las acciones
function fnAddCart(){
    alert("Your Cart is empty!");
}
addCart.addEventListener("click", fnAddCart ,false )

// let mySuccImg = document.querySelector("#mySucculents")
// //funcion que ejecuta las acciones
// function fnChangeImage(){
//     mySuccImg.setAttribute("src",'images/assets/succulents-2.jpg')
// }
// mySuccImg.addEventListener("mouseover", fnChangeImage ,false )