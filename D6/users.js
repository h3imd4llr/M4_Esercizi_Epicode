var utenti = []
async function load() {
    await fetch("https://jsonplaceholder.typicode.com/users").then(res => {
        return res.json()
    }).then(res =>{
        utenti = res
    })
    
    let body = document.getElementById("container-t")
    //create table
    let table = document.createElement("table")
    table.classList.add("table")
    //create thead, tr, th
    let tHead = document.createElement("thead")
    let tr = document.createElement("tr")
    let th1 = document.createElement("th")
    th1.setAttribute("scope", "col")
    th1.innerText = "Name"
    let th2 = document.createElement("th")
    th2.setAttribute("scope", "col")
    th2.innerText = "Username"
    let th3 = document.createElement("th")
    th3.setAttribute("scope", "col")
    th3.innerText = "Email"
    let th4 = document.createElement("th")
    th4.setAttribute("scope", "col")
    th4.innerText = "Phone Number"
    //append
    body.appendChild(table)
    
    table.appendChild(tHead)
    
    tHead.appendChild(tr)
    tr.appendChild(th1)
    tr.appendChild(th2)
    tr.appendChild(th3)
    tr.appendChild(th4)


    //create tBody
    let tBody = document.createElement("tbody")
    table.appendChild(tBody)
    for (let i = 0; i < utenti.length; i++) {
        let trBody = document.createElement("tr")
        let thBody = document.createElement("th")
        thBody.setAttribute("scope", "col")
        let td = document.createElement("td")
        td.innerText = utenti[i].name
        let td1 = document.createElement("td")
        td1.innerText = utenti[i].username
        let td2 = document.createElement("td")
        td2.innerText = utenti[i].email
        let td3 = document.createElement("td")
        td3.innerText = utenti[i].phone

        //append
        tBody.appendChild(trBody)
        trBody.appendChild(td)
        trBody.appendChild(td1)
        trBody.appendChild(td2)
        trBody.appendChild(td3)
    }
    indirizzi()
}
load()


function fn() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByTagName("tr");
    for (i = 0; i < x.length; i++) {
        if (input == "") {
            x[i].style.display=null;
        }
        else if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="tr";               
        }
    }
}

function indirizzi() {
    let via = []
    for (let i = 0; i < utenti.length; i++) {
        via[i] = utenti[i].address
    }
    let viaStringfied = JSON.stringify(via)
    console.log(viaStringfied);
}
