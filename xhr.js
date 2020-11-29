var xhr = new XMLHttpRequest()
var documento;

document.body.style.background = "#333";
//xhr.responseType = "json"



xhr.onreadystatechange = () => {
    
    if(xhr.readyState == 4 && xhr.status == 200){
        documento = xhr.response
        documento = JSON.parse(documento)

        console.log(xhr.status)
        console.log(documento[2].email) 
    }
    /*
   console.log(xhr.status)
    if(xhr.readyState == 4 && xhr.status == 201){
        console.log(xhr.status)
    }
    */
}
function chama() {
    xhr.open("GET", "http://localhost:3001")
    xhr.send()
}
//function postar() {
//    xhr.open("POST", "http://localhost:3001")
//    xhr.send()
//}




//const data = { phone: '654654' };









/*

const data ={
    "phone": "30303030"
}
async function postar() {
    console.log(data)
        fetch("http://localhost:3001", {
        method: "POST",
        mode: "no-cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
        "Content-Type": "application/json"
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify(data)
    })
}

*/

















//                                                          MODO BRABO FUNFA
/*
fetch("https://ranekapi.origamid.dev/json/api/produto")
.then(r => r.json())
.then(jsonB => {
    for(i in jsonB){
        document.querySelector("#app").innerHTML += jsonB[i].nome
    }

    console.log(jsonB)
})
*/

/*
const data ={
    id: "andrerafa",
    nome: "Andre",
    email: "pauloeduardo.crp@gmail.com",
    senha: "123456",
    cep: "123456",
    rua: "Aqui po",
    numero: "230",
    bairro: "Botafogo",
    cidade: "Rio de janiro",
    estado: "Rio de Janeito"
}
fetch("https://ranekapi.origamid.dev/json/api/usuario", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
*/