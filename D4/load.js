var libri = []

 function load() {
    let books = fetch("https://striveschool-api.herokuapp.com/books")
    books.then(res => {
        return res.json()
    }).then(res => {
        let container = document.getElementById("container-card")
        for (let i = 0; i < res.length; i++) {
            //Create cards
            let card = document.createElement("div")
            card.classList.add("card")
            card.classList.add("col-md-3")
    
            let img = document.createElement("img")
            img.setAttribute("src", res[i].img)
    
            let cardBody = document.createElement("div")
            cardBody.classList.add("card-body")
    
            let h6 = document.createElement("h6")
            h6.classList.add("card-title")
            h6.innerText = res[i].title

            let display = document.createElement("div")
            display.setAttribute("style", "display:flex;")

            let aBtn = document.createElement("a")
            aBtn.classList.add("btn")
            aBtn.classList.add("btn-primary")
            aBtn.setAttribute("href", "#")
            aBtn.innerText = "Add to cart"
            aBtn.addEventListener("click", () => {
              alert("hai cliccato; " + res[i].title)
            });
            
            let price = document.createElement("div")
            price.innerText = res[i].price
            price.setAttribute("style", "display:flex; align-items:center;")
            //Append


            card.appendChild(img)
            cardBody.appendChild(h6)
            display.appendChild(aBtn)
            display.appendChild(price)
            cardBody.appendChild(display)
            card.appendChild(cardBody)
            container.appendChild(card)
    
            function pass() {
                libri[i] = res[i]
            }
            pass()
        }
    
    })

}
load()