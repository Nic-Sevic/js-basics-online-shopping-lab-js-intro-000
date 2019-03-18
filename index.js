var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({itemName: item, itemPrice: (Math.floor(Math.random()*10))})
 console.log(cart)
 return `${item} has been added to your cart.`
}

function viewCart() {
  if (cart.length > 0) {
    var inventory = []
    for (var i in cart) {
      var cartHolder = cart[i]
      var nameHolder = cartHolder.itemName
      var priceHolder = cartHolder.itemPrice
      inventory.push(` ${nameHolder} at $${priceHolder}`)
    }
    if (inventory.length === 1) {
      return `In your cart, you have${inventory}.`
    }
    else {
      return `In your cart, you have${inventory.splice(0, inventory.length-2)}, and${inventory.pop()}.`
    }
  }
  else {
    return `Your shopping cart is empty.`
  }
}

function total() {
  let cartTotal = []
  for (let i = 0; i < cart.length; i++){
    var toPush = cart[i]
    cartTotal.push(toPush.itemPrice)
  }
  return cartTotal.reduce((accumulator, currentValue) => accumulator + currentValue)
}

function removeFromCart(item) {
  for (var i in cart) {
    var toCheck = cart[i]
    if (toCheck.itemName === item) {
      return cart.splice(i)
    }
    else {
    return `That item is not in your cart.`
    }
  }
}


function placeOrder(cardNumber) {
  if (cardNumber === undefined){
    console.log(`Sorry, we don't have a credit card on file for you.`)
    return `Sorry, we don't have a credit card on file for you.`
  }
  else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    return (`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`), (cart=[])
  }
}
