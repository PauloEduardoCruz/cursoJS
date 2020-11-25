var xhr = new XMLHttpRequest()
var documento;

//xhr.responseType = "json"
xhr.onreadystatechange = function (){
    if(xhr.readyState == 4 && xhr.status == 200){
        documento = xhr.response
        documento = JSON.parse(documento)


        console.log("Deu certo")
        console.log(documento)
    }
}

xhr.open("GET", "http://localhost:3001")
xhr.send()

