import "./location.scss";

function location({ location, title }) {
  return (
    <>
      <div class="title">
        <p>{title}</p>
      </div>
      <div className="location">
        <p>{location}</p>
      </div>
    </>
  );
}

export default location;
