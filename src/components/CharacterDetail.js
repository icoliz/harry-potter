import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import imgPlaceholder from '../images/user-placeholder.jpg';
import gryffindor from '../images/gryffindor.png';
import slytherin from '../images/slytherin.png';
import ravenclaw from '../images/ravenclaw.png';
import hufflepuff from '../images/hufflepuff.png';
import '../styles/CharacterDetail.scss';

function CharacterDetail({ character, translateSpecies }) {
  const findHouseBadge = () => {
    if (character.house === 'Gryffindor') {
      return gryffindor;
    } else if (character.house === 'Slytherin') {
      return slytherin;
    } else if (character.house === 'Ravenclaw') {
      return ravenclaw;
    } else if (character.house === 'Hufflepuff') {
      return hufflepuff;
    }
  };

  const renderNames = character.alternateNames.map((name, index) => {
    if (character.alternateNames.length !== 0) {
      return (
        <li className="li" key={index}>
          {name}
        </li>
      );
    }
  });

  return (
    <article className="detail" key={character.id}>
      <Link className="detail__return" to="/">
        ← Volver
      </Link>
      <div className="detail__container">
        <div className="detail__frame">
          <img
            className="detail__frame--img"
            src={character.image !== '' ? character.image : imgPlaceholder}
            alt={`Photo of ${character.name}`}
          />
        </div>
        <div className="detail__info">
          <h2 className="detail__info--name">{character.name}</h2>
          <p className="detail__info--item">
            Estatus: {character.alive ? '❤️' : '🪦'}
          </p>
          <p className="detail__info--item">
            Especie: {translateSpecies(character)}
          </p>
          <p className="detail__info--item">
            Género: {character.gender === 'male' ? 'Hombre' : 'Mujer'}
          </p>
          <p className="detail__info--item">Casa: {character.house}</p>
          <ul className="detail__info--list">
            Nombres alternativos:{' '}
            {character.alternateNames.length !== 0 ? renderNames : 'no tiene'}
          </ul>
          <img className="detail__info--badge" src={findHouseBadge()} />
        </div>
      </div>
    </article>
  );
}

CharacterDetail.propTypes = {
  character: propTypes.object.isRequired,
  translateSpecies: propTypes.func,
};

export default CharacterDetail;
