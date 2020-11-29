//import cors from 'cors'



const express = require("express")
const server = express()
const router = express.Router()
const fs = require('fs')
const { get } = require("http")

server.use(express.json({extended: true}))



const readFile = () => {
    const content = fs.readFileSync('./data/items.json', 'utf-8')
    return JSON.parse(content)
}

const writeFile = (content) => {
    const updateFile = JSON.stringify(content)
    fs.writeFileSync('./data/items.json', updateFile, 'utf-8')
}

router.get('/', (req, res) => {
    const content = readFile()

    //Essa linha permite o cors
    res.header("Access-Control-Allow-Origin", "*");
    //res.header("Access-Control-Allow-Headers", "Origin, X-Request-Width, Content-Type, Accept");

    res.send(content)
})



router.post('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    const { name, email, phone } = req.body
    const currentContent = readFile()

    const id = Math.random().toString(32).substr(2,9)
    console.log(id)

    currentContent.push({ id, name, email, phone })
    writeFile(currentContent)
    res.send({ id, name, email, phone } )
    
})


router.put('/:id', (req, res) => {
    const {id} = req.params

    const { name, email, phone } = req.body

    const currentContent = readFile()
    const selectItem = currentContent.findIndex((item) => item.id === id)


    const { id: cId, name: cName, email: cEmail, phone: cPhone } = currentContent[selectItem]

    const newObject = {
        id: cId,
        name: name ? name: cName,
        email: email ? email: cEmail,
        phone: phone ? phone: cPhone
    }

    currentContent[selectItem] = newObject

    writeFile(currentContent)
    res.send(newObject)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    const currentContent = readFile()
    const selectItem = currentContent.findIndex((item) => item.id === id)

    currentContent.splice(selectItem, 1)
    writeFile(currentContent)

    res.send(currentContent)
})




server.use(router)

server.listen(3001, () => {
    console.log("Ouvindo na porta 3001")
})

