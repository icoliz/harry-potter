import CharacterCard from './CharacterCard';
import propTypes from 'prop-types';
import '../styles/CharacterList.scss';

function CharacterList({ filterData, noResults, translateSpecies }) {
  const characterInfo = filterData.map((char, index) => {
    return (
      <li key={index} className="character">
        <CharacterCard char={char} translateSpecies={translateSpecies} />
      </li>
    );
  });

  return (
    <>
      <ul className="main__characters--list">{characterInfo}</ul>
      {noResults}
    </>
  );
}

CharacterList.propTypes = {
  filterData: propTypes.array.isRequired,
  noResults: propTypes.func,
  translateSpecies: propTypes.func,
};

export default CharacterList;
