
let btn = document.getElementById("myBtn")
btn.addEventListener("click", () => {
    let search = document.getElementById("search")
    let variable = search.value
    fetch("https://api.pexels.com/v1/search?query="+variable,{
  headers: {
    Authorization: "563492ad6f917000010000015e27fab48af04b54a2b6700182d54a8d"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
    let images = document.getElementsByTagName('img')
    for (let i = 0; i < images.length; i++) {
        images[i].src = data.photos[i].src.original
    }
    let smalls = document.getElementsByTagName("small")
    for (let i = 0; i < smalls.length; i++) {
        smalls[i].innerText = data.photos[i].id
    }
    let buttons = document.getElementsByClassName("btn btn-sm btn-outline-secondary")
    let btnGroups = document.getElementsByClassName("btn-group")
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("data-toggle", "modal")
      if (i %2 == 0) {
        buttons[i].setAttribute("data-target", "#"+data.photos[i].id)
      }
      let modal = document.createElement("div")
      modal.classList.add("modal")
      modal.classList.add("fade")
      modal.setAttribute("id", data.photos[i].id)
      modal.setAttribute("tabindex", "-1")
      modal.setAttribute("aria-labelledby", "#"+data.photos[i].id)
      modal.setAttribute("aria-hidden", "true")
      let modalDialog = document.createElement("div")
      modalDialog.classList.add("modal-dialog")
      let modalContent = document.createElement("div")
      modalContent.classList.add("modal-content")
      let modalHeader = document.createElement("div")
      modalHeader.classList.add("modal-header")
      modalTitle = document.createElement("h5")
      modalTitle.classList.add("modal-title")
      modalTitle.setAttribute("id", data.photos[i].id)
      modalTitle.innerText = data.photos[i].id
      let modalButton = document.createElement("button")
      modalButton.setAttribute("type", "button")
      modalButton.classList.add("btn-close")
      modalButton.setAttribute("data-dismiss", "modal")
      modalButton.setAttribute("aria-label", "close")
      let modalBody = document.createElement("div")
      modalBody.classList.add("modal-body")
      let immagine = document.createElement("img")
      immagine.setAttribute("src", data.photos[i].src.original)
      //appendChild
      modalBody.appendChild(immagine)
      modalHeader.appendChild(modalButton)
      modalHeader.appendChild(modalTitle)
      modalContent.appendChild(modalHeader)
      modalContent.appendChild(modalBody)
      modalDialog.appendChild(modalContent)
      modal.appendChild(modalDialog)
      btnGroups[i].appendChild(modal)
    }
})
})

let btn2 = document.getElementById("mySecondBtn")
let pg = 1
btn2.addEventListener("click", () => {
    let search = document.getElementById("search")
    let variable = search.value
    pg++
    fetch("https://api.pexels.com/v1/search/?page=" + pg + "&per_page=15&query=" + variable,{
        headers: {
          Authorization: "563492ad6f917000010000015e27fab48af04b54a2b6700182d54a8d"
        }
      })
      .then(resp => {
        return resp.json()
    })
    .then (data => {
        let images = document.getElementsByTagName('img')
        for (let i = 0; i < images.length; i++) {
            images[i].src = data.photos[i].src.original
        }
        let smalls = document.getElementsByTagName("small")
        for (let i = 0; i < smalls.length; i++) {
            smalls[i].innerText = data.photos[i].id
        }
    })
})