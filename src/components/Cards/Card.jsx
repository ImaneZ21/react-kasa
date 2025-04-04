import "../Cards/card.scss"

function Card( {pictures, title}) {

    return (
      <>
        <div className="card">
        <img src={pictures[0]} alt={title} />
        <p>{title}</p>
        </div>
      </>
    );
  }
  
  export default Card;