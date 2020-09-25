# README
## Descripción del proyecto:  
El proyecto consiste en una aplicación web que busca conectar a proveedores de servicios para el sector inmobiliario (como seguridad, remodelación, carpintería, diseño de interiores, entre otros) con clientes que deseen acceder a alguno de estos servicios. La aplicación permite que los proveedores de servicios listar su oferta de servicios y también llevar registro de sus contratos realizados.   

Los clientes pueden navegar por las diferentes categorías que ofrecen los proveedores registrados en el sitio y escoger a su conveniencia cuál servicio se quiere contratar. La filosofía de mostrar un precio mínimo en los servicios es para que el cliente y los proveedores puedan negociar el costo final del servicio y así no restringir las negociaciones con costos fijos.  

Se cuenta con unas funcionalidades pequeñas como desplegar los servicios On-Demand, desplegando los 3 servicios más requeridos hasta el momento.  


## URL de live demo:  


## Instrucciones de uso:  
Abrir la página con Live Server, Reload o verla desde GitHub Pages.  
Navegar en la página principal del sitio y ver la información desplegada.  
Cambiar el modo de uso o vista de la página con el switch que se encuentra en la parte superior de la página web para alternar entre la vista de Cliente o vista de Proveedor.  
Dependiendo de la vista escogida cambian algunos elementos de la barra de navegación.  
Para la vista de Cliente, en la barra de navegación se tiene:  
* Servicios: Aquí se ve un despliegue tipo acordeón de las categorías de servicios ofrecidos y dentro de cada categoría, la lista de proveedores que lo dan.
* Proveedores: En esta parte se ve una tabla con los datos de los proveedores registrados para que el cliente pueda contactarlos.

Para la vista de Proveedor se tiene:
* Servicios: Los proveedores pueden ver los servicios que se están ofreciendo, de la misma forma que lo ven los clientes.
* Proveedores: Es la misma vista que tienen los clientes.
* Crear contrato: Esta parte se usa para crear un contrato que se haga con un cliente. Por ahora la funcionalidad de este formulario se haya en validar si el nombre del cliente y del servicio prestado existen en los datos de prueba. El precio pactado no tiene límites. En caso de poder crear un contrato, se envía una alerta con un mensaje de felicitaciones por el contrato hecho y se reinicia el formulario. En consola del navegador se ve el objeto generado con el formulario. En caso de que falle la creación del contrato se envía una alerta con mensaje de error. Para probar este formulario con clientes y servicios correctos se sugiere usar nombres de clientes como 'Ker', 'Kinny', 'Ralph', 'Hewe' y para nombres de servicios 'Major Banks', 'Specialty Foods', 'Telecommunications Equipment', 'Electronic Components'. Si se quieren usar diferentes ejemplos, pueden recurrir a la carpeta "Datos" y tomar otros ejemplos de los archivos "clientes.js" y "servicios.js".
* Contratos clientes: En esta sección se muestra una tabla con datos de todos los contratos realizados entre todos los clientes y todos los proveedores.
* Mis Contratos: En esta sección se muestra una tabla con datos de los clientes con quienes se ha hecho contrato. En cada fila de la tabla hay un botón para ver el detalle del contrato, lo cual muestra los datos del cliente y una lista de Cards con los servicios que fueron contratados por el cliente, una descripción de cada uno, su precio pactado y la fecha de realización del contrato. Las fotos de las cards son para ilustrar el servicio prestado al final del contrato (por ahora se tienen imagenes de prueba en estas cards).
 
## URL de video con funcionalidad de aplicación:  
