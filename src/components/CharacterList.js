import CharacterCard from './CharacterCard';
import NoResults from './NoResults';
import translateSpecies from '../services/translateSpecies';
import propTypes from 'prop-types';
import '../styles/CharacterList.scss';

function CharacterList({ filterData, search, select, isLoading }) {
  const characterInfo = filterData.map((char, index) => {
    return (
      <li key={index} className="character">
        <CharacterCard
          char={char}
          index={index}
          translateSpecies={translateSpecies}
        />
      </li>
    );
  });

  return (
    <>
      <ul className="main__characters--list">{characterInfo}</ul>
      <NoResults
        filterData={filterData}
        search={search}
        select={select}
        isLoading={isLoading}
      />
    </>
  );
}

CharacterList.propTypes = {
  filterData: propTypes.array.isRequired,
  noResults: propTypes.func,
};

export default CharacterList;
