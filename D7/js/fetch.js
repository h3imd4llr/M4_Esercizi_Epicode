var prodotti = []
async function fn() {
    await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers:{
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJjYTJjOWY1ZDVmYTAwMTU4ZTYwYzQiLCJpYXQiOjE2NjQwMjE3MDQsImV4cCI6MTY2NTIzMTMwNH0.MslDxc4Meem-B2K59suq18ANYdep8c3WJuHpBCvP1q0"
        }
    }).then(res => {
        return res.json()
    }).then(res => {
        prodotti = res
        createCards(res)
    })
    }
fn()

function createCards(prodotti){
    let container = document.getElementById("containerCard")
    for (let i = 0; i < prodotti.length; i++) {
        let card = document.createElement("div")
        card.classList.add("card")
        card.setAttribute("style", "width: 18rem;")
        
        let cardBody = document.createElement("div")
        cardBody.classList.add("card-body")

        let img = document.createElement("img")
        img.classList.add("card-img-top")
        img.setAttribute("src", prodotti[i].imageUrl)

        let cardTitle = document.createElement("h5")
        cardTitle.classList.add("card-title")
        cardTitle.innerText = prodotti[i].name

        let cardBrand = document.createElement("h6")
        cardBrand.classList.add("card-subtitle")
        cardBrand.classList.add("mb-2")
        cardBrand.classList.add("text-muted")
        cardBrand.innerText = prodotti[i].brand

        let cardPar = document.createElement("p")
        cardPar.classList.add("card-text")
        cardPar.innerText = prodotti[i].description

        let cardPrice = document.createElement("div")
        cardPrice.classList.add("text-center")
        cardPrice.innerText = prodotti[i].price + "$"

        cardBody.appendChild(img)
        cardBody.appendChild(cardTitle)
        cardBody.appendChild(cardBrand)
        cardBody.appendChild(cardPar)
        cardBody.appendChild(cardPrice)
        card.appendChild(cardBody)
        container.appendChild(card)
    }
}