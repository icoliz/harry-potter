import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import imgPlaceholder from '../images/user-placeholder.jpg';
import '../styles/CharacterCard.scss';

function CharacterCard({ char, translateSpecies }) {
  return (
    <Link to={`/character/${char.id}`}>
      <article className="article" key={char.id}>
        <div className="article__frame">
          <img
            className="article__frame--img"
            src={char.image !== '' ? char.image : imgPlaceholder}
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
