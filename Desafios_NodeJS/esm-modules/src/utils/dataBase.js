
const dataBaseType = {
    userType: "admin",
    dtypeData: "dataLocal"
}

async function connectToDatabase(dataName){
    console.log("Conectando ao banco de dados: " + dataName)
}

async function desconnectFromDatabase(dataName){
    console.log("Desconectando do banco de dados: " + dataName)
}

export { connectToDatabase, desconnectFromDatabase,dataBaseType }