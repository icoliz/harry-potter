import '../styles/NoResults.scss';

const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toLocaleUpperCase() + text.slice(1);
};

function NoResults({ filterData, search, select, isLoading }) {
  if (!isLoading && filterData.length === 0 && search !== '') {
    return (
      <p className="error-msg">
        No hay ningún personaje con el nombre "{search}", perteneciente a la
        casa {capitalizeFirstLetter(select)} y de la especie seleccionada,
        prueba a modificar los filtros de la búsqueda.
      </p>
    );
  }
  return null;
}

export default NoResults;
