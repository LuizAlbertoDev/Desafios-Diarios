import createItem from "./services/item.js";


const cart = []

console.log("welcome to the your shopee Cart!")

const item1 = await createItem("LapTop", 5000, 1)

const item2 = await createItem("Mouse", 150, 2)

console.log(`Item: ${item2.name}, Valor Unitário:R$ ${item2.price} x quantidade:${item2.quantity} Subtotal: R$ ${item2.subtotal()}`)

