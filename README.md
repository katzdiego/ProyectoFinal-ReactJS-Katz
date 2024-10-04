Tech-Now
Tech-Now es un ecommerce de tecnología construido con React en el frontend y Firebase como base de datos. Los usuarios pueden explorar diferentes categorías de productos, agregar productos al carrito, y finalizar compras mediante un sistema de checkout que genera órdenes en Firestore.

Funcionalidades
Catálogo de productos: Los productos se dividen en categorías, y el usuario puede navegar y filtrar productos por estas categorías.
Detalle del producto: Cada producto tiene una página con su descripción detallada, imagen, precio y stock disponible.
Carrito de compras: Los usuarios pueden agregar productos al carrito, actualizar cantidades y eliminar productos antes de proceder al checkout.
Sistema de Checkout: Los usuarios pueden ingresar sus datos (nombre, teléfono y correo) para generar una orden de compra, la cual es registrada en Firestore con un ID único.
Persistencia de datos: Toda la información sobre productos y órdenes se almacena y recupera desde Firebase/Firestore.

Tecnologías
**[React](https://reactjs.org/)**: Biblioteca principal para la construcción de la interfaz de usuario.
**[Firebase](https://firebase.google.com/)**: Plataforma utilizada para la base de datos y autenticación.

Funcionalidades
1. Navegación por categorías
Los usuarios pueden navegar por diferentes categorías de productos. Cada categoría lista los productos que pertenecen a ella.

2. Detalles del producto
En la página de detalle del producto, los usuarios pueden ver más información, como la descripción, precio y stock disponible, y agregar el producto al carrito.

3. Carrito de compras
El carrito muestra los productos agregados, el precio total y permite eliminar productos o ajustar las cantidades.

4. Checkout
En la página de checkout, los usuarios ingresan sus datos de contacto y completan la compra. Al confirmar la orden, esta se registra en Firestore y se genera un ID único.



