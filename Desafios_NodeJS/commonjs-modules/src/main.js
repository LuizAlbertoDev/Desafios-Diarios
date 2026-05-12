
const {getFullName, productType} = require("./services/products")
const config = require("./services/config")
const dataBase = require("./services/dataBase")

async function main(){
    console.log("Carrinho de compras")
    getFullName("1234","Notebook")
    console.log(productType)

    console.log("Email:", config.client.email)
    console.log("Version:", config.devArea.version)
    console.log("Production:", productType.version)

    dataBase.connctToDataBase("myDataBase")
}

main()