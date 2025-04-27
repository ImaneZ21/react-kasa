import "./Error.scss";
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="error">
      <p class="error-number">404</p>
      <p class="error-title">Oups! La page que vous demandez n'existe pas</p>
      <Link to={"/"}>Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error;
