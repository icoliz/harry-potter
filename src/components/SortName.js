import '../styles/SortName.scss';
import propTypes from 'prop-types';

function SortName({ checked, handleChange }) {
  const handleChecked = (ev) => {
    handleChange({
      key: 'checked',
      value: ev.target.checked,
    });
  };

  return (
    <div className="form__checksort">
      <label className="form__checksort--label" htmlFor="sortname">
        Ordena alfabéticamente
      </label>
      <input
        className="form__checksort--input"
        type="checkbox"
        name="sortname"
        id="sortname"
        checked={checked}
        onChange={handleChecked}
      />
    </div>
  );
}

SortName.propTypes = {
  checked: propTypes.bool.isRequired,
  handleChange: propTypes.func.isRequired,
};

export default SortName;
