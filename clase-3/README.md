# Clase 3

En esta clase se tocan temas sobre las API REST (arquetectura de software), especificamente en sus principios teoricos y practicos

<image src="/clase-3/APIREST_draw.PNG" alt="REST API">

## Contenido

- Introducción API, REST y REST API
- Estructura del Proyectos
- Diseño de API de movies en JSON
- Buenas prácticas
- Diferencias entre POST, PUT y PATCH
- Pequeña muestra de la API REST Básica
- Recursos Adicionales

## Para tener en cuenta
*Idempotencia*: Propiedad de realizar una accion determinada varias veces y aún asi conseguir siempre el mísmo resultado que se obtendría al hacerlo una vez.

### POST
Crear un nuevo elemento/recurso en el servidor
*Ruta: /movies*

NO es idempotente, ya que crear siempre un nuevo recurso

### PUT
Actualizar totallmente un elemento ya existente o crearlo si no existe
*Ruta: /movies/123-456-789*

SI es idempotente, el resultado (En la gran mayoria de casos) siempre será el mismo

## PATCH
Actualizar parcialmente un elemento/recurso
*Ruta: /movies/123-456-789*

Normalmente SI la podria ser, PERO depende (ej. UpdateAt or UpdateDate)