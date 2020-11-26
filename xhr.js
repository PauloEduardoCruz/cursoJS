var xhr = new XMLHttpRequest()
var documento;

document.body.style.background = "#333";
//xhr.responseType = "json"

var vaiSubir = {
    "name": "AAAAAAAA",
    "email": "cavalo@vindo.com",
    "phone": "656565"
}

 //vaiSubir = JSON.stringify(vaiSubir)

xhr.onreadystatechange = () => {

    /*
    if(xhr.readyState == 4 && xhr.status == 200){
        documento = xhr.response
        documento = JSON.parse(documento)

        console.log(xhr.status)
        console.log(documento[2].email) 
    }
    */

   console.log(xhr.status)
    if(xhr.readyState == 4 && xhr.status == 201){
        console.log(xhr.status)
    }

}


/*
function chama() {
    xhr.open("GET", "http://localhost:3001")
    xhr.send()
}
*/

function postar() {
    xhr.open("POST", "http://localhost:3001")
    xhr.send()
}

