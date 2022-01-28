import propTypes from 'prop-types';
import '../styles/FilterHouse.scss';

function FilterHouse({ select, handleChange }) {
  const handleSelect = (ev) => {
    handleChange({
      key: 'select',
      value: ev.target.value,
    });
  };
  return (
    <>
      <label className="form__selectlabel" htmlFor="house">
        Selecciona la casa:
      </label>
      <select
        className="form__selecthouse"
        name="house"
        onChange={handleSelect}
        value={select}
      >
        <option className="form__selecthouse--option" value="gryffindor">
          Gryffindor
        </option>
        <option className="form__selecthouse--option" value="slytherin">
          Slytherin
        </option>
        <option className="form__selecthouse--option" value="ravenclaw">
          Ravenclaw
        </option>
        <option className="form__selecthouse--option" value="hufflepuff">
          Hufflepuff
        </option>
      </select>
    </>
  );
}

FilterHouse.propTypes = {
  select: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default FilterHouse;
