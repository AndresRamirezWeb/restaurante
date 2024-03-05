# Aplicación Web para Restaurante "Cocina con Cadena"

Esta aplicación permite gestionar las facturas de ventas realizadas en el restaurante "Cocina con Cadena".


## Tecnologías Usadas

- ***Motor de base de datos:*** PostgreSQL version 12.18-1
```- ***Nombre DB:*** cocina_cadena
Schema: cocina_con_cadena
User DB: cocina_cadena
Password DB: cocina_cadena
````
- ***IDE:*** IntelliJ IDEA 2023.3.4 (Community Edition)
- ***Seguridad:*** JWT (JSON Web Token)
- ***Framework backend:*** Spring Boot : 3.2.3 (Java 21)

- ***URL:*** https://start.spring.io/

### librerias

- Maven
- Packaging: Jar
- Spring Data JPA SQL
- PostgreSQL Driver SQL
- Lombok DEVELOPER TOOLS
- Spring Security
- Spring Web WEB
- Spring Boot DevTools DEVELOPER TOOLS
- JJWT : 0.11.5

## Configuración

1. Clona el repositorio de la aplicación.
2. Configura las credenciales de la base de datos en el archivo `application.properties`.
3. Ejecuta el script de la base de datos proporcionado para crear las tablas necesarias.
4. Ejecuta la aplicación usando IDE IntelliJ IDEA Community.
5. La aplicación estará disponible en `http://localhost:8080`.

## Endpoints API
___
- **/openapi/v1/signup**: Registrar Usuario
- **Ejemplo:**
```
{
    "firstName": "Helena",
    "lastName": "Zapata",
    "email": "helenazapata@gmail.com",
    "role": "ADMIN",
    "phone": "3184931366",
    "password": "secret"
}
```
___
- **/login**: Iniciar sesión y obtener token JWT.
```
{
    "email": "andresramirez5459@gmail.com",
    "password": "secret"
}
```
___
- **/mesas**: CRUD para mesas.
- **/clientes**: CRUD para clientes.
- **/camareros**: CRUD para camareros.
- **/platos**: CRUD para platos.
- **/facturas**: CRUD para facturas.
- **/facturas/{id}/detalle**: Obtener detalles de una factura por su ID.
- **/facturas/camareros**: Obtener la suma del total facturado por cada camarero por mes.
- **/facturas/clientes**: Obtener clientes con más de cien mil pesos gastados en el restaurante.

## JWT
API authentication con Spring Security y JWT

### Objetivo

- Habiliar la aunteticacion en la aplicacion
- Generar un Token JWT
- Validar el Token recibido



