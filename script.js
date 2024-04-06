let filterableButons = document.querySelectorAll(".filter-buttons button");
let filterableCards = document.querySelectorAll(".filterable-cards .card");

let filterCards = e =>{
    document.querySelector(".active").classList.remove("active")
    e.target.classList.add("active")


    filterableCards.forEach(card=>{
        card.classList.add('hide')
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove('hide')
        }
    })
}
filterableButons.forEach(button=>button.addEventListener("click",filterCards));