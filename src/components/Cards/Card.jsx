import "../Cards/card.scss";
import { useNavigate } from "react-router-dom";

function Card({ cover, title, id }) {

  const navigate = useNavigate()

  return (
    <>
      <div className="card">
        <img src={cover} alt={title}  onClick={()=> navigate(`/accomodation/${id}`)}/>
        <p>{title}</p>
      </div>
    </>
  );
}

export default Card;
