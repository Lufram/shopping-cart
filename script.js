
const itemList = document.getElementById('item-list')

//Array carrito
const cart = []

//--------------------------------------------------------------------------
//Añade un nuevo articulo al carrito
function addItem(name, price) {
    //Recorre el array y si el articulo ya existe le añade 1 a la cantidad
    for (let i = 0 ; i < cart.length; i += 1) {
        // Compara el nombre introducido con los nombres de los productos en el carrito
        if(cart[i].name === name) {
            cart[i].qty += 1;
            return
        }
    }
    // Añade un nuevo articulo al carrito
    const item = {name, price, qty: 1}
    cart.push(item)
}

//--------------------------------------------------------------------------
//Elimina un articulo del carrito
function removeItem(name, qty = 0) {
    // Compara el nombre introducido con los nombres de los productos en el carrito
    for (let i = 0 ; i < cart[i].length ; i += 1) {
        if (cart[i].name === name) {
            // Si la cantidad es mayor que cero resta 1 a la cantidad 
            if (cart[i].qty > 0) {
                cart[i].qty -= qty
            }
            // Si la cantidad es menor que uno elimina el articulo de la lista
            if (cart[i].qty < 1){
                cart.splice(i, 1)
            }
            return
        }
    }
}

//--------------------------------------------------------------------------
//Muestra por consola la informacion del carrito
function showItems(){
    // Variable interna almacena el valor del acumulado
    const qty = getQty()
    // Imprime por consola el total de productos
    console.log(`Tienes ${qty} productos en tu cesta.`);
    // Imprime la información de cada producto en la lista del carrito
    let itemStr = ''
    for (let i = 0 ; i < cart.length; i += 1) {
        console.log(`- ${cart[i].name} ${cart[i].price} € x ${cart[i].qty}`)
        itemStr += `<li class="item">- ${cart[i].name} ${cart[i].price} € x ${cart[i].qty}</li>`
    }
    itemList.innerHTML = itemStr
    // Imprime por consola el importe total del carrito redondeando a 2 decimales.
    console.log(`Importe total en el carrito:  ${getTotal()} €`)
}

//--------------------------------------------------------------------------
// Devuelve el acumulado de productos del carrito
function getQty() {
    // Variable interna para totalizador de productos
    let qty = 0
    // Recorre el array sumandole la cantidad de cada producto a la variable @qty para calcular el total de productos en el carrito.
    for (let i = 0 ; i < cart.length; i += 1){
        qty += cart[i].qty
    }
    return qty
}

//--------------------------------------------------------------------------
// Devuelve el total
function getTotal() {
    // Variable interna acumulador de importe.
    let total = 0
    // Recorre el array multiplicando el precio por la cantidad y lo suma al acumulador.
    for (let i = 0 ; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].qty
    }
    return total.toFixed(2)
}
