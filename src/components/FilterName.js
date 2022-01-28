import propTypes from 'prop-types';
import '../styles/FilterName.scss';

function FilterName({ search, handleChange }) {
  const handleSearch = (ev) => {
    handleChange({
      key: 'search',
      value: ev.target.value,
    });
  };

  return (
    <>
      <label className="form__searchlabel" htmlFor="name">
        Busca por personaje:
      </label>
      <input
        className="form__searchinput"
        type="text"
        id="name"
        placeholder="Ej.: Harry Potter"
        value={search}
        onChange={handleSearch}
      />
    </>
  );
}

FilterName.propTypes = {
  search: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default FilterName;
