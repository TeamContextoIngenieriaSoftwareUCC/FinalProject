# FinalProject

<!-- GETTING STARTED -->
## 🥳Comenzando

Solo sigue estos sencillos pasos para el correcto funcionamiento de nuestra API Rest

### 🤔Prerequisitos

Para poder utilizar este proyecto sin nungun problema necesitamos contar con las siguientes herramientas:
* [NodeJS](https://nodejs.org/es/) (Descargar la version mas reciente)
* Con nodeJS ya listo, instalamaos la version mas reciente de npm
  ```sh
  npm install npm@latest -g
  ```
 * Un editor de texto o IDE, ya sea [Visual Studio Code](https://code.visualstudio.com/download) o el de su preferencia

### 🤯Instalacion

1. Clona el repositorio en tu maquina, para esto abrimos git bash y pegamos el siguiente comando(Tambien es valido descargar el archivo .zip y extraerlo)
   ```sh
   git clone https://github.com/TeamContextoIngenieriaSoftwareUCC/FinalProject.git
   ```
2. Nos paramos sobre la carpeta del proyecto. Puedes hacerlo desde la consola con el siguiente comando:
    ```sh
    cd FinalProject/
    ```
4. Instalamos los paquetes con npm, abrimos la consola y pegamos el siquiente comando:
    ```sh
    npm install
    ```

<!-- USAGE EXAMPLES -->
## 🤓 Uso
Ya con todo listo e instalado, abrimos la consola de nuestra maquina para empezar a ejecutar nuestro servidor.

Para ejecutar la aplicación en un entorno de producción puede ingresar el siguiente comando:

  ``` sh
  npm run production
  ```

En caso de quererlo ejecutar en un entorno de desarrollo puede usar el siguiente:

``` sh
npm run dev
```

Una vez iniciada a API, podemos realizar peticiones HTTP a nuestro servidor que acabamos de montar. Estas peticiones nos retornan un [Codigo de estado de respuesta HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Status) en donde nos informa el estado de nuestra solicitud. En la anterior URL encuentra mas informacion sobre estos codigos.

En caso de querer hacer pruebas se puede hacer uso de clientes como [Postman](https://www.postman.com/) o la extensión de VSCode [Thunder Client](https://www.thunderclient.com/).

## 💻Realizado Con

* [NodeJS](https://nodejs.org/es/)
* [MongoDB](https://www.mongodb.com/)