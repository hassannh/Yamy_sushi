var get = document.getElementById("whilehovering")

function toggleMenu() {
get.classList.toggle("hide-menu")
}

var total = 0;

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

function moveToCarte(el){
    // var chi = getElementsByClassName("wrapper");
    var clone = el.cloneNode(true);
    total += parseFloat(el.children[3].textContent);
    document.getElementById("order").appendChild(clone);
    document.getElementById("total-price").textContent = total;
    console.log(parseFloat(el.children[3].textContent));
    // console.log(total);
}

