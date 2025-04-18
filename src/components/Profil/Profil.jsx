import "./profil.scss";

function Profil({ name, picture }) {
  return (
    <div className="profil">
      <img src={picture} alt={name}></img>
      <p>{name}</p>
    </div>
  );
}

export default Profil;

