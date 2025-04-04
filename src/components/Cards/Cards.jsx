import "../Cards/card.scss";
import Card from "../Cards/Card.jsx";

function Cards({ accomodations }) {
  return (
    <>
      <div className="cards">
        {accomodations.map((data) => (
          <img src={data.pictures[0]} alt={data.title} />
        ))}
      </div>
    </>
  );
}

export default Cards;
//foreach. Il appelle juste le composant card
