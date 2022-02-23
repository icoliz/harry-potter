import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import getImgPlaceholder from '../services/getImgPlaceholder';
import '../styles/CharacterCard.scss';

function CharacterCard({ char, index, translateSpecies }) {
  return (
    <Link to={`/character/${char.id}`}>
      <article className="article" key={char.id}>
        <div className="article__frame">
          <img
            className={`article__frame--img ${char.image === '' ? 'gif' : ''}`}
            src={char.image !== '' ? char.image : getImgPlaceholder(index)}
            alt={`Photo of ${char.name}`}
          />
        </div>
        <h2 className="article__name">{char.name}</h2>
        <p className="article__species">{translateSpecies(char)}</p>
      </article>
    </Link>
  );
}

CharacterCard.propTypes = {
  char: propTypes.object.isRequired,
  translateSpecies: propTypes.func,
};

export default CharacterCard;
