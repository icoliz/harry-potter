import propTypes from 'prop-types';
import FilterName from './FilterName';
import FilterHouse from './FilterHouse';
import SortName from './SortName';
import '../styles/Filter.scss';

function Filter({ search, select, checked, handleChange, handleReset }) {
  const handleClickReset = () => {
    handleReset();
  };

  return (
    <form className="form" onSubmit={(ev) => ev.preventDefault()}>
      <FilterName search={search} handleChange={handleChange} />
      <FilterHouse select={select} handleChange={handleChange} />
      <SortName checked={checked} handleChange={handleChange} />
      <button className="form__btn" onClick={handleClickReset}>
        Borrar búsqueda
      </button>
    </form>
  );
}

Filter.propTypes = {
  search: propTypes.string.isRequired,
  select: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
  handleReset: propTypes.func,
};

export default Filter;
