# Joyas Sirio
### Proyecto realizado por Angel Daniel Carreño Zamacona

El proyecto esta pensado para ser una tienda en linea de articulos de joyeria.
El objetivo es complementar el curso React JS Flex (Comisión 75935).

![Pagina inicial](/public/Documentation/Inicio.png "Pagina principal")

### Instalacion (mediante consola)
1. Cloner el repositorio de la siguiente URL: [JoyeriaSirioReactFlex](https://github.com/Daniel-CZ94/JoyeriaSirioReactFlex)
2. Ingresar al directorio del proyecto
3. Instalar las dependencias del proyecto por medio del comando:
```
npm install
```
4. Ejecutar la aplicacion con el siguiente comando:
```
npm run dev
```

### Version en linea
La version en linea se encuentra en el proveedor gratuito [vercel.com](https://vercel.com/)

Puedes visitar este sitio en la siguiente URL: [Joyas sirio](https://joyeria-sirio-react-flex.vercel.app/)

### Librerias utilizadas
 - [Bootstrap](https://getbootstrap.com/)
 - Firebase (Como gestor de base de datos)
 - [React-router-dom](https://reactrouter.com/)
 - [Number-Format](https://s-yadav.github.io/react-number-format/docs/intro/)
 - [Toastify](https://www.npmjs.com/package/react-toastify)
 - [React-hook-form](https://react-hook-form.com/)

 #### Notas para la profe Laura Therisod
 - *El stock de los productos no disminuye al realizar una venta debido a que durante las pruebas podrian terminarse el stock y no poder realizar un flujo de compras. Sin embargo, si fue implemetada la funcionalidad, aunque esa seccion quedo comentada. Pero para poder realizar una prueba de que algun producto sin stock no pueda agregarse al carrito, puede elegir el producto con el ID: YdLIplCyuR3dp6xwfjqh, tambien llamado: Pulsera de Oro Amarillo de 14k Cartier 1x1 1mm.*
![Producto sin stock](/public/Documentation/producto_sin_stock.png "Producto sin stock")
- *Originalmente, la aplicacion actualizaria la cantidad de items insertados en el carrito, en caso de que el usuario agregara un producto ya existente en el carrito. Pero debido a que el requerimiento indicaba que NO permitiera eso al usuario, esa funcion quedo implementada pero inutilizable. Debido a esto, se implemento la funcionalidad para que el usuario pudiera aumentar o disminuir la cantidad de items desde la misma pantalla del carrito de compras.*
![Producto en carrito](/public/Documentation/producto_en_carrito.png "Producto en carrito")
![Producto en carrito](/public/Documentation/items_carrito.png "Producto en carrito")
- ***En caso de haber alguna duda con respecto a la aplicacion o a la BD. Favor de hacermelo saber profe.***