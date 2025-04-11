import "../Cards/card.scss";
import { useNavigate } from "react-router-dom";

function Card({ pictures, title, id }) {

  const navigate = useNavigate()

  return (
    <>
      <div className="card">
        <img src={pictures[0]} alt={title}  onClick={()=> navigate(`/accommodation/${id}`)}/>
        <p>{title}</p>
      </div>
    </>
  );
}

export default Card;
