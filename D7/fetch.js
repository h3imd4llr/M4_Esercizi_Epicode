async function fn() {
    let prodotti = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        headers:{
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzJjYTJjOWY1ZDVmYTAwMTU4ZTYwYzQiLCJpYXQiOjE2NjM4Njk2NDEsImV4cCI6MTY2NTA3OTI0MX0.NnaWsZhYyDc4oDQy1bd5QnWawbsM7LcST_SJyADhKlQ"
        }
    }).then(res => {
        return res.json()
    }).then(res => {
        console.log(res);
    })
    }

fn()