# Proyecto Final - REACT - MECATRON REPUESTOS

Soy Ezequiel Gastón Leiblich y éste es mi proyecto final que realice con el fin de implementar los conocimientos aprendidos durante las clases de REACT de la comisión 39610 en CODERHOUSE.

Mi intención fue crear una página web con la cual pueda brindar ayuda a un negocio familiar dedicado a la venta de repuestos de automóviles online (eCommerce). Ya estaba creado el proyecto en Clases de Javascript de CODERHOUSE y ahora lo implemento en esta app mediante REACT que utiliza a Firebase como plataforma de desarrollo en la nube.

Esta app web almacena sus datos en la nube, desde la cual podemos acceder para conocer las órdenes de compra generadas y a quien corresponde con sus datos personales.


![image](https://user-images.githubusercontent.com/113488651/233807740-bae55eac-7d11-4f2b-862b-cae62bb7018e.png)

Por ejemplo:

![image](https://user-images.githubusercontent.com/113488651/233807770-595a6f7b-f9d8-42eb-a92b-225bc0e48153.png)

En nuestro portal se tiene acceso a un listado de repuestos para automóviles con un breve detalle y precio al cual se puede acceder para obtener una descripción más detallada, desde donde se puede seleccionar la cantidad necesaria para agregar al carro de compras, donde también se aclara la cantidad máxima de stock disponible. En el caso de querer buscar algún producto más específico en el margen izquierdo tenemos un listado de categorías de los productos mostrados para agilizar la búsqueda.

![image](https://user-images.githubusercontent.com/113488651/233807592-1c43719c-ab25-45e4-b728-86a0f471b709.png)

Al agregar productos al carrito podemos corroborar que en la esquina superior derecha aparece nuestro carro de compras en conjunto con el numero (en rojo) correspondiente a la cantidad de productos agregados a nuestro carro de compras.

![image](https://user-images.githubusercontent.com/113488651/233807606-1f467048-5e6c-42b2-8583-38c8101469f4.png)

Queriendo finalizar la compra de productos tenemos el acceso al carrito tanto en la imagen de la esquina superior derecha como un botón de finalizar compra debajo de los detalles del producto.

![image](https://user-images.githubusercontent.com/113488651/233807639-1821f905-5217-4e13-824d-5588e8fe3879.png)

Ya dentro de nuestro carro de compras existe un detalle de cantidades de cada producto con la posibilidad de aumentar o reducir esa cantidad con el detalle del total de la compra. En caso de arrepentimiento de compra también tenemos la posibilidad de vaciar nuestro carro para volver los contadores a 0, así como también existe el botón del paso siguiente que corresponde al acceso al Checkout. Dentro de nuestro Checkout el usuario deberá completar sus datos personales con sus respectivas validaciones para que dentro de nuestra base de datos se pueda corroborar cada orden de compra realizada.

![image](https://user-images.githubusercontent.com/113488651/233807579-8bd66472-7943-476a-a84d-886ff369015b.png)

Completado los datos personales para finalizar la compra y accediendo al botón de Generar Orden, podemos observar un aviso de la compra realizada con fecha y hora, seguido por el código de identificación de la orden de compras.

![image](https://user-images.githubusercontent.com/113488651/233807893-6c83749a-9d25-455d-a059-ef40c56cac29.png)


# Como instalar este proyecto

1- Clonamos el repositorio del proyecto en Github en su computadora

2- Dentro de la carpeta principal del proyecto, desde la terminal de nuestro editor de código ingresamos el comando "npm install" para instalar las dependencias necesarias

3- En el sitio web de Firebase se debe crear un proyecto nuevo y configurar 3 colecciones nuevas (products, categories y orders)

4- Copiamos las credenciales del proyecto de Firebase y lo pegamos en el archivo firebaseConfig.js dentro de las carpetas src/services/firebase

5- Creamos un archivo .env en la carpeta raíz del proyecto y definimos las siguientes variables de entorno:


```sh
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
```

6- Por último, en la terminal de nuestro editor de código ingresamos el comando "npm start" para inicial la app desde el servidor local en nuestro navegador.
