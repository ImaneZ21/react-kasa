import "./location.scss";

function location({ location, title }) {
  return (
    <>
      <div className="title-location">
        <div class="title">
          <p>{title}</p>
        </div>
        <div className="location">
          <p>{location}</p>
        </div>
      </div>
    </>
  );
}

export default location;
