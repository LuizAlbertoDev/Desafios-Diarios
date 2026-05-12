const productType = {
    version: "Digital",

}


async function getFullName(codeID,productName){
    console.log("\n")
    console.log("product", codeID + " -- " + productName)
}

async function getProductLabel(productName){
    console.log("Product " + productName)
}

module.exports = {getFullName, getProductLabel,productType}