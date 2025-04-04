import "../Cards/card.scss";
import Card from "../Cards/Card.jsx";

function Cards({ accomodations }) {
  return (
    <>
      <div className="cards">
        {accomodations.map((data) => (
          <Card key={data.id} pictures={data.pictures} title={data.title} />
        ))}
      </div>
    </>
  );
}

export default Cards;
