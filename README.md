nest new apiEvoPayment
cd api-evo-payment
code .
solo nos quedamos con el app.module.ts y main.ts en SRC. Limpiamos el app.module.ts
definimos un prefijo para la api en main.ts
	async function bootstrap() { … app.setGlobalPrefix('api/v01'); await app.listen(3000); }
npm i --save @nestjs/websockets @nestjs/platform-socket.io --legacy-peer-deps
Crear folder src/evoservicessocket
	Crea un archivo srv/evoservices/evoservicesocket.module.ts
		Ver el archivo el paso 1
	Crear un archivo src/evoservices/evoservicesocket.gateway.ts
		Ver el archivo el paso 1
Importamos en app.module.ts el modulo
	Imports: [EvoServicesSocketModule]
npm run start:dev
Probamos en POSTMAN especificando el Request Type a Socket.IO y ponemos la dirección http://localhost:3000
Dentro de evoservicesocket.gateway.ts los métodos de escucha” ver archivo Paso 2”
Creamos el modulo, controlador y servicio para Evo_Services
	nest generate resource evoServicesPost
		REST API 
		Generate CRUD entry point -Y
Creamos las variables de entorno en el archivo .env que lo colocaremos en raiz del proyecto. Para evitar que se incluya en el commit de GIT, incluimos el .env en el .gitignore y creamos un archivo .env.template en el que incluimos las varibles pero solo con el descriptivo de lo que contendrá cada variable. Una vez creado los archivo ejecutamos el siguiente comando
	npm i @nestjs/config –save
Una vez instalado copiamos en los imports del app.module la línea “ConfigModule.forRoot()”
Instalamos axios para peticiones HTTP
	npm i --save @nestjs/axios axios
En EvoSericesPostModules importamos “HttpModule”
En EvoServicesPostService, en el constructor creamos “private http: HttpService”
En el .env agregamos la ruta para crear la sesión, el merchantId y la contraseña del MerchantPass 
En el Controller y el Service creamos los métodos para crear la sesión “generateSession”

Creamos en src/evo-services-post/ la carpeta interfaces y dentro una interfaz que contenga los datos para hacer la validación 3D “data-authenticate3d.interface.ts” 

 
  
npm run start:dev


* api-rest-portal-pagos
* api-evo-payment