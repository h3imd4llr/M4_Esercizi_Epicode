function fn() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('card col-md-3');
    for (i = 0; i < x.length; i++) {
        if (input == "") {
            x[i].style.display="flex";
        }
        else if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="card col-md-3";               
        }
    }
}
