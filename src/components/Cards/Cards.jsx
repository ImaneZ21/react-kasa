import "../Cards/card.scss";
import Card from "../Cards/Card.jsx";

function Cards({ accomodations }) {
  return (
    <>
      <div className="cards">
        {accomodations.map((data) => (
          <Card key={data.id} cover={data.cover} title={data.title} id={data.id} />
        ))}
      </div>
    </>
  );
}

export default Cards;
