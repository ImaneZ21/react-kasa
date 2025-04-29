import "./profil.scss";

function Profil({ name, picture }) {
  return (
    <div className="profil">
      <img src={picture} alt={name}></img>
      <p className="profil-name">{name}</p>
    </div>
  );
}

export default Profil;
