import '../styles/FilterSpecies.scss';

function FilterSpecies({ selectedSpecies, handleChange }) {
  const handleRadio = (ev) => {
    handleChange({
      key: 'species',
      value: ev.target.value,
    });
  };

  return (
    <article className="form__species">
      <div className="form__speciescontainer">
        <input
          className="form_speciesinput"
          type="radio"
          id="all"
          value="all"
          checked={selectedSpecies === 'all'}
          onChange={handleRadio}
        />
        <label htmlFor="human" className="form__specieslabel">
          Todos
        </label>
      </div>

      <div className="form__speciescontainer">
        <input
          className="form_speciesinput"
          type="radio"
          id="human"
          value="human"
          checked={selectedSpecies === 'human'}
          onChange={handleRadio}
        />
        <label htmlFor="human" className="form__specieslabel">
          Humano
        </label>
      </div>

      <div className="form__speciescontainer">
        <input
          className="form_speciesinput"
          type="radio"
          id="ghost"
          value="ghost"
          checked={selectedSpecies === 'ghost'}
          onChange={handleRadio}
        />
        <label htmlFor="ghost" className="form__specieslabel">
          Fantasma
        </label>
      </div>

      <div className="form__speciescontainer">
        <input
          className="form_speciesinput"
          type="radio"
          id="half-giant"
          value="half-giant"
          checked={selectedSpecies === 'half-giant'}
          onChange={handleRadio}
        />
        <label htmlFor="half-giant" className="form__specieslabel">
          Medio gigante
        </label>
      </div>
    </article>
  );
}

export default FilterSpecies;
