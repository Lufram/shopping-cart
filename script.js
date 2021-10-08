



	const cart = []
	var itemList = document.getElementById('item-list')
	var itemListText = document.getElementById('item-list-text-container')
	var itemListTotal = document.getElementById('cart-total-import')
	

	//-------------FUNCIONES--------------	
	// Añade un articulo al carito
	function addItem(name, price, amount){
		//Recorre el array
		for (let i = 0; i < cart.length; i++) {
			/*Compara el nombre intruducido con cada nombre en el array
			si coincide aumenta la cantidad introducida al articulo existente */
			if (cart[i].name === name) {
				cart[i].amount += amount
				/*sale de la funcion para no ejecutar el codigo a continuacion 
				y no duplicar el producto*/
				return true
			}
		}
		let item = new Item (name, price, amount)
		// Añade objeto item al array
		cart.push(item)
	}

	//-----------------------------------
	//Elimina articulos del carrito
	function removeItem(name, amount = 0){
		//Recorre el array
		for (let i = 0 ; i < cart.length ; i++){
			//Si el nombre coincide con un articulo resta 1 a la cantidad
			if (cart[i].name === name) {
				cart[i].amount -= amount
				//Si la cantidad es menor que 1 elimina el articulo del array
				if (cart[i].amount < 1){
					cart.splice( i , 1)
				}
				showItems()
				return
			}
		}

		showItems()
	}

	//-----------------------------------
	// Muestra la informacion del carrito
	function showItems(){
		
		let totalAmount = getAmount()
		let itemStr = ``
		let cartStr = ``
		let cartTotalImport = ``
		
		if (cart.length < 1){
			itemStr =
			`<div class="cart-empty">
					<p class="cart-amount empty"> *  No tienes ningun artículo en el carrito, añada algún producto ...</p>
					<div class="cart-empty-img-container">
						<img class="cart-empty-img" src="_img/cart_empty.svg">
					</div>
			</div>`
		}else{

			// Muestra la cantidad de productos en el carrito
			console.log(`Tiene ${totalAmount} productos en el carrito`)
			cartStr = `<p class="cart-amount"> Tiene ${totalAmount} productos en el carrito</p>`
			
		
			// Muestra cada producto y sus datos
		    for (let i = 0 ; i < cart.length; i += 1) {
		        let totalPrice = cart[i].getTotal(i)
		        console.log(`- ${cart[i].name} ${cart[i].price} € x ${cart[i].amount} = ${totalPrice}`)
		        itemStr += `<tr class="item">
						    	<th scope="row"> ${i} </th>
						    	<td> ${cart[i].name} </td>
						    	<td> ${cart[i].price} € </td>
						    	<td> ${cart[i].amount} </td>
						    	<td> ${totalPrice} </td>
						    	<td>
						    		<button>+</button>
						    		<button>-</button>
						    		<button>eliminar</button>
						    	</td>
						     </tr>`

				itemList.innerHTML = itemStr
		    }
		}

		// Muestra el importe total del carrito
		console.log(`Importe TOTAL ${getTotal()} €`)
	    
	    cartTotalImport = `Importe TOTAL ${getTotal()} €`

    	
    	itemListText.innerHTML = cartStr
    	itemListTotal.innerHTML = cartTotalImport

		
	}

	//-----------------------------------
	// Devuelve cantiad total de articulos en el carrito 
	function getAmount(){
		let amount = 0
		for (let i = 0 ; i < cart.length ; i += 1) {
			amount += cart[i].amount
		}
		return amount
	}

	//-----------------------------------
	// Devuelve iporte total del carrito 
	function getTotal() {
        let total = 0
        for (let i = 0; i < cart.length ; i += 1) {
          total += cart[i].price * cart[i].amount
        }
        return total.toFixed(2)
      }


class Item {
	//------------CONSTRUCTOR-------------
	constructor(name, price, amount){
		this.name = name
		this.price = price
		this.amount = amount
	}

	//-------------FUNCIONES--------------	
	// Devuelve el importe total de la linea de articulo
	getTotal(i){
		// Variable interna
		let total = 0
		// Multiplica el precio por la cantidad
		total += cart[i].amount * cart[i].price

		return total
	}

}


//-------------PRUEBAS--------------


addItem(`Zapatillas`, 20.19,1)
addItem(`Calcetines`, 1.99,1)

addItem(`Calcetines`, 1.99,1)
addItem(`Calcetines`, 1.99,1)
addItem(`Calcetines`, 1.99,1)
addItem(`Pantalon`, 12.10,1)

showItems()

