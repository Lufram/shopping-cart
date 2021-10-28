# UF3-JavaScript


## 1 - REQUERIMIENTO  -  SHOPING CART

Simulación de un programa del carrito de la compra de una tienda online.

Para testear el funcionamiento del carrito introduciremos la información de los productos mediante un formulario

### 1.1 - FUNCIONAMIENTO 

El carrito consiste en un <b>“Array”</b> que mediante el método <b>“addItem”</b> crea un objeto de tipo <b>“Item”</b> que contiene la información del nombre el precio y la cantidad de la linea del carrito  
y lo añade al <b>“Array”</b>. Mostramos El carrito médiate el método <b>“showItems”</b> que inserta en el html una tabla con una fila para cada <b>“Item”</b>. Cada línea dispondrá de botones para aumentar o disminuir la cantidad o eliminar la línea.

Para la simulación de envío de la información del pedido una vez terminado mostraremos al pulsar el botón de <b>"Imprimir"</b> en un <b>alert</b> la información del pedido.

### 1.2 - METODO DE PAGO

Una vez añadidos los productos podemos seleccionar la forma de pago mediante un formulario, al seleccionar una de las opciones desplegara otro formulario con la información necesaria, en el caso de <b>"Efectivo"</b> el importe a abonar en un formulario bloqueado y para pago con <b>"Tarjeta"</b> un formulario para introducir los datos de la tarjeta.  

### 1.3 - VALIDACIONES 

Validaremos el formulario de la entrada de producto para que el nombre requiera al menos 1 carácter y no acepte símbolos, el precio será un numero real positivo de máximo 5 cifras no aceptara letras ni simbolos y por último la cantidad iniciará por defecto en 1 podremos aumentar o reducir la cantidad en 1 o introducir la cantidad por teclado.

En caso de introducir algún parámetro erróneo el botón de <b>"Añadir"</b> no tendrá ninguna funcionalidad los formularios aparecerán en rojo y un mensaje nos indicara que el formato no es el adecuado. Utilizaremos inserciones de clases y código <b>html</b> mediante <b>js</b>.

La funcionalidad del botón <b>"Imprimir"</b> comprobara si hay productos en el carrito y si se ha seleccionado un método de pago y avisara mediante un <b>"Alert"</b>
