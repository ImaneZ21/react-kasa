import { useState } from "react";
import "./Slideshow.scss";
import angleLeft from "../../assets/angle_left.svg";
import angleRight from "../../assets/angle_right.svg";

function Slideshow({ pictures, title }) {
  const [index, setIndex] = useState(0);

  const nextPictures = () => {
    setIndex((index + 1) % pictures.length);
  };

  const previousPictures = () => {
    setIndex((index - 1 + pictures.length) % pictures.length);
  };

  return (
    <>
      <div className="slideshow">
        <img src={pictures[index]} alt={title} className="pictures" />
        {pictures.length > 1 && (
          <>
            <img
              onClick={previousPictures}
              src={angleLeft}
              className="previousPictures"
              alt="image précédente"
            />
            <img
              onClick={nextPictures}
              src={angleRight}
              className="nextPictures"
              alt="image suivante"
            />
            <p className="length">
              {index + 1}/ {pictures.length}
            </p>
          </>
        )}
      </div>
    </>
  );
}

export default Slideshow;
