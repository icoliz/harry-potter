import { Link } from 'react-router-dom';
import '../styles/NotFound.scss';

function NotFound() {
  return (
    <>
      <Link className="notfound__return" to="/">
        Volver al inicio
      </Link>
      <div className="notfound__container">
        <p className="notfound__msg">Página no encontrada</p>
      </div>
    </>
  );
}

export default NotFound;
