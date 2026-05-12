import {connectToDatabase,desconnectFromDatabase,dataBaseType} from "./utils/dataBase.js"
import {getDataFromApi} from "./utils/api.js"

connectToDatabase("MinhaBaseDeDados")
desconnectFromDatabase("MinhaBaseDeDados")
dataBaseType.userType = "admin"
console.log(dataBaseType)
getDataFromApi()