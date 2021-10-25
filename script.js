

	// Al cargar la pagina inicializa las variables y muestra el carrito
	window.addEventListener("load", () =>{
		initValues();
		showItems()
		itemName.addEvent("input", () => ){
			if(){
				
			}
		}

	});
	

	// Inicializa las variables que necesarias para el script
	function initValues(){
		const itemList = document.getElementById("itemList");
		const addForm = document.getElementById("addForm");
		const itemName = document.getElementById("itemName");
		const itemPrice = document.getElementById("itemPrice");
		const itemAmount = document.getElementById("itemAmount");
		const cart = [];
	}


	//-------------BOTONES--------------
	// Funcionalidad de botones de la tabla para añadir o quitar productos
	itemList.onclick = function (e) {

		// Elimina la linea de la tabla
		if (e.target && e.target.classList.contains('remove')) {
			const name = e.target.dataset.name
			removeItem(name, -1)
		}
		// Aumenta en 1 la cantidad de esa linea de producto
		else if (e.target && e.target.classList.contains('add-one')) {
			const name = e.target.dataset.name
			addItem(name, 1)
		}
		// Reduce en 1 la cantidad de esa linea de producto
		else if (e.target && e.target.classList.contains('remove-one')) {
			const name = e.target.dataset.name
			removeItem(name,1)
		}
	}


	// Funcionalidad de boton añadir producto
	addForm.onsubmit = function (e) {

		e.preventDefault();
		const name = itemName.value;
		const price = itemPrice.value;
		const amount = itemAmount.value;
		addItem(name, price, amount)
	}


	//-------------FUNCIONES--------------	
	// Añade un articulo al carito
	function addItem(name, amount, price){
		// Recorre el array
		for (let i = 0; i < cart.length; i++) {
			/* Compara el nombre intruducido con cada nombre en el array
			si coincide aumenta la cantidad introducida al articulo existente */
			if (cart[i].name === name) {
				cart[i].amount =  parseFloat(cart[i].amount) +  parseFloat(amount)
				/* Sale de la funcion para no ejecutar el codigo a continuacion 
				y no duplicar el producto */
				showItems()
				return true
			}
		}
		let item = new Item (name, price, amount);
		// Añade objeto item al array
		cart.push(item);
		showItems()

	}

	//-----------------------------------
	//Elimina articulos del carrito
	function removeItem(name, amount = 0){
		//Recorre el array
		for (let i = 0 ; i < cart.length ; i++){
			//Si el nombre coincide con un articulo resta 1 a la cantidad
			if (cart[i].name === name) {
				cart[i].amount =  parseFloat(cart[i].amount) -  parseFloat(amount)
				//Si la cantidad es menor que 1 elimina el articulo del array
				if (cart[i].amount < 1 || amount === -1){
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
		
		// Genera el total de articulos actual
		let totalAmount = getAmount()
		// Variable donde concatenar todo el codigo html que insertaremos
		let itemStr = ``
		// En caso de que el carrito este vacio mostramos una imagen y un texto
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
			itemStr += `<p class="cart-amount"> Tiene ${totalAmount} productos en el carrito</p>`
			
			itemStr += 
						`<table class="table">
							<thead>
								<tr class="thead-dark">
									<th scope="col">#</th>
									<th scope="col">Articulo</th>
									<th scope="col">Cantidad</th>
									<th scope="col">Precio</th>
									<th scope="col">Subtotal</th>
									<th scope="col"></th>
								</tr>
							</thead>
						<tbody>`
		
			// Muestra cada producto y sus datos
		    for (let i = 0 ; i < cart.length; i += 1) {
		        let totalPrice = cart[i].getTotal(i)
		        console.log(`- ${cart[i].name} ${cart[i].price} € x ${cart[i].amount} = ${totalPrice}`)
		        itemStr += `<tr class="item">
						    	<th scope="row"> ${i+1} </th>
						    	<td> ${cart[i].name} </td>
						    	<td> ${cart[i].amount} </td>
						    	<td> ${cart[i].price} € </td>
						    	<td> ${totalPrice} € </td>
						    	<td>
						    		<button class="add-one" data-name="${cart[i].name}">+</button>
						    		<button class="remove-one" data-name="${cart[i].name}">-</button>
						    		<button class="remove" data-name="${cart[i].name}">eliminar</button>
						    	</td>
						     </tr>`

		    }
			// Muestra el importe total del carrito
			console.log(`Importe TOTAL ${getTotal()} €`)
			itemStr += 
						`<tr class="cart-total-import" id="cart-total-import">
								<td colspan="6"> Importe total ${getTotal()} € </td>
						</tr>`
			
			itemStr += `</tbody>
						</table>`
		}
		// Inserta el String en el html
		itemList.innerHTML = itemStr;
		// Focus en el nombre del articulo del formulario
		itemName.focus()
		// Resetea el formulario
		addForm.reset()
	}


	//-----------------------------------
	// Validacion de formulario 
	function validateForm() {
	  if (itemName.value.length > 0) {
	  	if(itemPrice.value.length > 0){
	  		if(itemAmount.value.length == 0){

	  		alert("La cantidad no puede ser 0");
	  	}

	    alert("El nombre no puede estar vacio");
	    return false;
	  }
	}


	//-----------------------------------
	// Devuelve cantiad total de articulos en el carrito 
	function getAmount(){
		let amount = 0
		for (let i = 0 ; i < cart.length ; i += 1) {
			amount += parseFloat(cart[i].amount)
		}
		return amount
	}

	//-----------------------------------
	// Devuelve importe total del carrito 
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

		return total.toFixed(2)
	}

}


//-------------PRUEBAS--------------



/* 

showItems()

addItem(`Zapatillas`, 20.19,1)
addItem(`Calcetines`, 1.99,1)
addItem(`Calcetines`, 1.99,1)
addItem(`Calcetines`, 1.99,1)
addItem(`Calcetines`, 1.99,1)
addItem(`Pantalon`, 12.10,1) 

*/


