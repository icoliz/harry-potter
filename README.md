# Final Evaluation Module 3 Ico Lizhen

## ¡Bienvenidos/as a Hogwarts!

### Descripción de la web

A través de esta página, que saca sus datos de [esta API](http://hp-api.herokuapp.com/api/characters/house/gryffindor). Siguiendo con las pautas del ejercicio, la selección inicial es la casa Gryffindor.

A través del campo de búsquea podemos buscar el nombre del personaje que queramos. Si desplegamos el menú de selección podemos filtrar los personajes que queremos ver en función a la casa que tienen asignada. Se pueden aplicar varios filtros a la vez.

Si hacemos click sobre un personaje el navegador nos mostrará su información específica: estatus: vivo/muerto (icono), especie, género, casa (con su correspondiente escudo) y nombres alternativos (si tuviera).

### Programación con React

Esta web ha sido desarrollada con React. Para trabajar en ella, la he dividido en varios componentes en un esquema como el siguiente. Cada componente tiene su fichero de estilos.

```
src
 ├─ APP
 |  └─ Loader
 |  └─ Filter
 |  |    └─ FilterName
 |  |    └─ FilterHouse
 |  |    └─ SortName
 |  └─ CharacterList
 |  |    └─ CharacterCard
 |  └─ NotFound
 └─ CharacterDetail

```

La información entre componentes ha sido pasada por medio de `props`y `lifting`

### Detalles

- Se ha añadido un texto alternativo para rutas inexistentes o mal escritas
- Para evitar que el formulario se enviase, se ha usado `preventDefault`
- El filtro no diferencia entre mayúsculas y minúsculas
  para realizar su búsqueda

### Otras mejoras

- Se ha utilizado un `Loader` para mejorar la experiencia de usuario (y `defaultProps` para esta tarea concreta)
- Se han utilizado `propTypes` para validar los datos enviados de un componente madre
- Se ha añadido la opción de filtrar por orden alfabético
- La página cuenta con un botón de reset para borrar los filtros
- En el detalle del personaje aparece el escudo de la casa a la que pertenece
- Se ha utilizado el `localStorage` para almacenar la información de la usuaria y que la ruta no desaparezca (navegando en local)
- Se ha añadido un cursor adapatado a la temática y animaciones para mejorar también la experiencia de usuario
- La página está adaptada para su consulta a través de dispositivos móviles

¡Feliz navegación!
