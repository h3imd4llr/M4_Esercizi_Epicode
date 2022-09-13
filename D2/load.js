let PTN = fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=mahmood")
PTN.then(
    function (res) {
        return res.json()
    }
).then(
    function (res) {
        let primeCinque = res.data.slice(0 , 4)
        primeCinque.forEach(primeCinque => {
            //create card
            let music = document.getElementById("music")
            let card = document.createElement("div")
            card.classList.add("card")
            card.setAttribute("style", "width: 17.8rem;")
            let img = document.createElement("img")
            img.classList.add("card-img-top")
            img.setAttribute("src", primeCinque.album.cover_xl)
            card.appendChild(img)
            music.appendChild(card)
        });
    }
)
fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=mahmood").then(
    function (res) {
        return res.json()
    }
).then(
    function (res) {
        let arr = res.data
        let arrAlbum = []
        for (let i = 0; i < arr.length; i++) {
            arrAlbum[i] = arr[i].album.title
        }
        let arrUnique = arrAlbum.filter((c, index) => {
            return arrAlbum.indexOf(c) === index;
        });
        arrUnique.forEach(arrUnique =>  {
            let modalBody = document.getElementById("modal-body")
            let p = document.createElement("p")
            modalBody.appendChild(p)
            p.innerHTML = arrUnique
        })
    }
)