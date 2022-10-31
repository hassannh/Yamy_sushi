var get = document.getElementById("whilehovering")

function toggleMenu() {
get.classList.toggle("hide-menu")
}

// function toggle (){

//     var mytoggle = document.querySelector(".mylist");


//     mytoggle.style.display="flex";
//     mytoggle.classList.toggle("mytoggle");
// }







var total = 0;
var iddd=1;

 var dishes = document.querySelectorAll(".wrapper")
 var SALADE = document.getElementsByClassName("caaa")
 var SUSHI = document.querySelectorAll(".caa")
 var OBENTO = document.querySelectorAll(".c")
 function OnGradeChanged(value){
    switch (value) {
        case "SALADE":
            for (let index = 0; index < SUSHI.length; index++) {
                SUSHI[index].classList.add("disabled_list");
            }
            for (let index = 0; index < OBENTO.length; index++) {
                OBENTO[index].classList.add("disabled_list");
            }
            for (let index = 0; index < SALADE.length; index++) {
                SALADE[index].classList.remove("disabled_list");
            }
            break;
        case "SUSHI":
            for (let index = 0; index < SALADE.length; index++) {
                SALADE[index].classList.add("disabled_list");
            }
            for (let index = 0; index < OBENTO.length; index++) {
                OBENTO[index].classList.add("disabled_list");
            }
            for (let index = 0; index < SUSHI.length; index++) {
                SUSHI[index].classList.remove("disabled_list");
            }
            break;
        case "OBENTO":
            for (let index = 0; index < SUSHI.length; index++) {
                SUSHI[index].classList.add("disabled_list");
            }
            for (let index = 0; index < SALADE.length; index++) {
                SALADE[index].classList.add("disabled_list");
            }
            for (let index = 0; index < OBENTO.length; index++) {
                OBENTO[index].classList.remove("disabled_list");
            }
            break;
        default:
            for (let index = 0; index < SUSHI.length; index++) {
                SUSHI[index].classList.remove("disabled_list");
            }
            for (let index = 0; index < SALADE.length; index++) {
                SALADE[index].classList.remove("disabled_list");
            }
            for (let index = 0; index < OBENTO.length; index++) {
                OBENTO[index].classList.remove("disabled_list");
            }
            break;
    }

}

// function ready() {
//     var remove = document.getElementsByClassName('function ready() {
//     var remove = document.getElementsByClassName('cart-remove')
//     for (var i = 0; i < remove.length; i++) {
//         var button = remove[i]
//         button.addEventListener('click', removeCartItem)
//         // console.log(remove)

//     }')
//     for (var i = 0; i < remove.length; i++) {
//     var button = remove[i]
//     button.addEventListener('click', )
//     console.log(remove)
    
//     }
// }

function moveToCarte(el){
    // var chi = getElementsByClassName("wrapper");
    var clone = el.cloneNode(true);
    total += parseFloat(el.children[3].textContent);
    clone.id = clone.id+""+iddd;
    clone.children[5].id=clone.children[5].id+""+iddd;
    iddd++;
    document.getElementById("order").appendChild(clone);
    document.getElementById("total-price").textContent = total;
    // console.log(parseFloat(el.children[3].textContent));
    // console.log(total);
}



function remoove(event){
    // console.log(event)
     var delet = document.getElementById(event);
    delet.parentElement.remove();
}

