# websiteEcommerce

Documentación del Proyecto


Estructura de Archivos


El proyecto está organizado en varios archivos y carpetas principales:


index.html: Página principal del sitio web.

index.js: Contiene funciones JavaScript para manejar la navegación y cargar productos desde products.json.

products.json: Almacena la información de los productos en formato JSON.

styles.css: Hoja de estilos para el diseño del sitio web.

cart.js: Gestiona la funcionalidad del carrito de compras y la aplicación de cupones.

details.js: Controla la visualización de detalles de productos en la página sproduct.html.

email.js: Maneja el envío de correos electrónicos a través de EmailJS.

img/: Carpeta que contiene todas las imágenes utilizadas en el sitio web.

pages/: Carpeta que contiene las páginas secundarias del sitio web como shop.html, sproduct.html, etc.


Funcionalidades Principales


Navegación del Menú en mobile:

Al hacer clic en el icono de menú (#bar), se muestra el menú de navegación (#navbar).

Al hacer clic en el botón de cerrar (#close), se oculta el menú de navegación.

Carga Dinámica de Productos:

Se utiliza fetch() para obtener datos del archivo products.json según la ruta actual.

Se convierte el precio de los productos multiplicando el valor del dolar en pesos ARS a la moneda USD utilizada en los productos utilizando el valor del dólar obtenido de https://dolarapi.com/v1/dolares/blue.

Detalles del Producto:

En la página sproduct.html, se muestran detalles específicos del producto seleccionado almacenado en localStorage.

Se muestra una imagen principal del producto con opciones de imágenes secundarias para visualización.
Se calcula el precio total del producto considerando el valor del dólar actual.



Carrito de Compras:


Permite agregar productos al carrito desde la página de detalles del producto.

Gestiona el stock disponible y muestra mensajes de error si la cantidad solicitada supera el stock.

Aplica descuentos mediante códigos de cupón (DESCUENTO50, ENVIOGRATIS) que modifican el costo total.


Envío de Correos Electrónicos:


Utiliza EmailJS para enviar mensajes de consulta desde un formulario.

Muestra una confirmación visual al usuario después de enviar el mensaje.


Consideraciones Finales


Rutas Dinámicas: Las funciones getJsonPath() y getImagePath() ajustan dinámicamente las rutas de los archivos según la página actual.
