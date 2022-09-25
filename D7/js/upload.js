

function loadBtn(){
    let a = document.getElementById("inputProduct").value
    let b = document.getElementById("inputDesc").value
    let c = document.getElementById("inputBrand").value
    let d = document.getElementById("inputImage").value
    let e = document.getElementById("inputPrice").value
    let prodotto = {
        name: a,
        description: b,
        brand: c,
        imageUrl: d,
        price: e
    }
    upload(prodotto)
}

async function upload(prodotto){
    let url = "https://striveschool-api.herokuapp.com/api/product/"
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJjYTJjOWY1ZDVmYTAwMTU4ZTYwYzQiLCJpYXQiOjE2NjQwMjE3MDQsImV4cCI6MTY2NTIzMTMwNH0.MslDxc4Meem-B2K59suq18ANYdep8c3WJuHpBCvP1q0"
        },
        body: JSON.stringify(prodotto)
    }
    let response = await fetch(url, options)
    loadTable()
}
var prodotti = []
async function listProduct() {
    let url = "https://striveschool-api.herokuapp.com/api/product/"
    let options = {
        method: "GET",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJjYTJjOWY1ZDVmYTAwMTU4ZTYwYzQiLCJpYXQiOjE2NjQwMjE3MDQsImV4cCI6MTY2NTIzMTMwNH0.MslDxc4Meem-B2K59suq18ANYdep8c3WJuHpBCvP1q0"
        }
    }
    await fetch(url, options).then(res => {
        return res.json()
    }).then(res => {
        prodotti = res
        loadTable()
    })

}

listProduct()

async function loadTable(){
    let table = document.getElementById("table-t")
    let tableBody = document.createElement("tbody")
    for (let i = 0; i < prodotti.length; i++) {

        let tr = document.createElement("tr")

        let tdId = document.createElement("td")
        tdId.innerText = prodotti[i]._id

        let tdName = document.createElement("td")
        tdName.innerText = prodotti[i].name

        let tdDesc = document.createElement("td")
        tdDesc.innerText = prodotti[i].description

        let tdBrand = document.createElement("td")
        tdBrand.innerText = prodotti[i].brand

        let tdPrice = document.createElement("td")
        tdPrice.innerText = prodotti[i].price

        let deleteBtn = document.createElement("button")
        deleteBtn.setAttribute("type", "button")
        deleteBtn.classList.add("btn")
        deleteBtn.classList.add("btn-dark")
        deleteBtn.innerText = "Delete Element"
        deleteBtn.addEventListener("click", async () => {
            let url = "https://striveschool-api.herokuapp.com/api/product/" + prodotti[i]._id
            let options = {
                method: "DELETE",
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJjYTJjOWY1ZDVmYTAwMTU4ZTYwYzQiLCJpYXQiOjE2NjQwMjE3MDQsImV4cCI6MTY2NTIzMTMwNH0.MslDxc4Meem-B2K59suq18ANYdep8c3WJuHpBCvP1q0"
                }
            }
            await fetch(url, options)
        })

        table.appendChild(tableBody)
        tableBody.appendChild(tr)
        tr.appendChild(tdId)
        tr.appendChild(tdName)
        tr.appendChild(tdDesc)
        tr.appendChild(tdBrand)
        tr.appendChild(tdPrice)
        tr.appendChild(deleteBtn)
    }
}