import "./banner.scss";

function Banner({ imageSrc, title, alt }) {

  return (
    <>
      <div className="banner">
        <img src={imageSrc} alt={alt}></img>
        <div>{title} </div>
      </div>
    </>
  );
}

export default Banner;
