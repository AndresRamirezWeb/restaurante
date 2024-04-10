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
### **JWT**
API authentication con Spring Security y JWT

#### Objetivo

- Habiliar la aunteticacion en la aplicacion
- Generar un Token JWT
- Validar el Token recibido
---
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
- **/openapi/v1/login**: Iniciar sesión y obtener token JWT.
```
{
    "email": "andresramirez5459@gmail.com",
    "password": "secret"
}


```
---
Se usa el token de la respuesta y el type:

```
{
    "token": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZXNyYW1pcmV6NTQ1OUBnbWFpbC5jb20iLCJpYXQiOjE3MTAxMDgxMTEsImV4cCI6MTcxMDEwOTkxMX0.UI2UTDsEYCaZ1u32nzLvPAChI-KdKj4U2f1EC-ZjMJfzysoG8zOT12aB6a1FQMnTDjDA7HxlN42cOI0lxTZgdg",
    "type": "Bearer",
    "id": 1,
    "firstName": "Andres",
    "lastName": "Ramirez",
    "roles": [
        "ROLE_ADMIN"
    ]
}
```
En la cabecera de la peticion se le pasa el token y el type de la siguiente manera:

```
Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbmRyZXNyYW1pcmV6NTQ1OUBnbWFpbC5jb20iLCJpYXQiOjE3MTAxMDgxMTEsImV4cCI6MTcxMDEwOTkxMX0.UI2UTDsEYCaZ1u32nzLvPAChI-KdKj4U2f1EC-ZjMJfzysoG8zOT12aB6a1FQMnTDjDA7HxlN42cOI0lxTZgdg

```
---
Esto se hace a la hora se consumir los endpoint a continuacion...

### **CRUD para mesas**
- **Todas las mesas:** /api/v1/mesas
- **Obtener una mesa:** /api/v1/mesas/{id}
---
- **Crear mesas:** /api/v1/mesas

Sele pasa el siguiente body:
```
{
    "maxComensales": 10,
    "ubicacion": "Sala"
}
```
---
- **Actualizar mesas:** /api/v1/mesas/{id}

Sele pasa el siguiente body:
```
{
    "maxComensales": 10,
    "ubicacion": "Sala"
}
```
---
- **Borrar mesa:** /api/v1/mesas/{id}

---
### **CRUD para clientes**
- **Todas los clientes:** /api/v1/clientes
- **Obtener un cliente:** /api/v1/clientes/{id}
---
- **Crear clientes:** /api/v1/clientes

Sele pasa el siguiente body:
```
{
    "nombre": "Pedro",
    "apellido": "Zapata"
}
```
---
- **Actualizar clientes:** /api/v1/clientes/{id}

Sele pasa el siguiente body:
```
{
    "nombre": "Pedro",
    "apellido": "Zapata"
}
```
---
- **Borrar cliente:** /api/v1/clientes/{id}

---

### **CRUD para camareros**
- **Todas los camareros:** /api/v1/camareros
- **Obtener un camarero:** /api/v1/camareros/{id}
---
- **Crear camareros:** /api/v1/camareros

Sele pasa el siguiente body:
```
{
    "nombre": "Esteban",
    "apellido": "Perez"
}
```
---
- **Actualizar camareros:** /api/v1/camareros/{id}

Sele pasa el siguiente body:
```
{
    "nombre": "Esteban",
    "apellido": "Perez"
}
```
---
- **Borrar camarero:** /api/v1/camareros/{id}

---

### **CRUD para platos**
- **Todas los platos:** /api/v1/platos
- **Obtener un plato:** /api/v1/platos/{id}
---
- **Crear platos:** /api/v1/platos

Sele pasa el siguiente body:
```
{
    "nombre": "Salchipapas",
    "precio": 17000
}
```
---
- **Actualizar platos:** /api/v1/platos/{id}

Sele pasa el siguiente body:
```
{
    "nombre": "Salchipapas",
    "precio": 17000
}
```
---
- **Borrar plato:** /api/v1/platos/{id}

---

### **CRUD para facturas**
- **Todas las facturas:** /api/v1/facturas
- **Obtener una factura:** /api/v1/facturas/{id}
---
- **Crear facturas:** /api/v1/facturas

Sele pasa el siguiente body:
```
{
    "fecha": "2024-03-19T00:00:00",
    "totalFacturado": 39000.00,
    "mesa": {
        "id": 1,
        "maxComensales": 4,
        "ubicacion": "Ventana"
    },
    "cliente": {
        "id": 1,
        "nombre": "Juan",
        "apellido": "Pérez"
    },
    "camarero": {
        "id": 1,
        "nombre": "Pedro",
        "apellido": "López"
    }
}
```
---
- **Actualizar facturas:** /api/v1/facturas/{id}

Sele pasa el siguiente body:
```
{
    "fecha": "2024-03-19T00:00:00",
    "totalFacturado": 80000.00,
    "mesa": {
        "id": 1,
        "maxComensales": 4,
        "ubicacion": "Ventana"
    },
    "cliente": {
        "id": 1,
        "nombre": "Juan",
        "apellido": "Pérez"
    },
    "camarero": {
        "id": 1,
        "nombre": "Pedro",
        "apellido": "López"
    }
}
```
---
- **Borrar factura:** /api/v1/facturas/{id}

---

###  **Obtener suma total facturado por cada camarero por mes**
- **/facturas/camareros**

### **Obtener clientes con más de cien mil pesos gastados en el restaurante**
- **/facturas/clientes**

### **CRUD para Detalles**
- **Todas los detalles:** /api/v1/detalles
- **Obtener un detalle:** /api/v1/detalles/{id}
---
- **Crear detalles:** /api/v1/detalles

Sele pasa el siguiente body:
```
{
    "cantidad": 7,
    "totalDetalle": 70000.00,
    "factura": {
        "id": 2
    },
    "plato": {
        "id": 1
    }
}
```
---
- **Actualizar detalles:** /api/v1/detalles/{id}

Sele pasa el siguiente body:
```
{
    "cantidad": 8,
    "totalDetalle": 80000.00,
    "factura": {
        "id": 2,
        "fecha": null,
        "totalFacturado": null,
        "mesa": null,
        "cliente": null,
        "camarero": null
    },
    "plato": {
        "id": 1,
        "nombre": null,
        "precio": null
    }
}
```
---
- **Borrar detalle:** /api/v1/detalles/{id}
---





