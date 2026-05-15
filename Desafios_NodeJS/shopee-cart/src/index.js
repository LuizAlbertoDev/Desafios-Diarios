import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"


const cart = []
const myWhishList = []

console.log("👜 welcome to the your shopee Cart!")

const item1 = await createItem("LapTop", 5000, 1)

const item2 = await createItem("Mouse", 150, 2)

await cartService.additem(cart,item1)
await cartService.additem(cart,item2)
await cartService.displayCart(cart)

// await cartService.deleteitem(cart,item1.name)

await cartService.calculateTotal(cart)
