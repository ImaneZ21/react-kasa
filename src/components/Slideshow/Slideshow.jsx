import { useState } from "react";
import "./Slideshow.scss";

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
    <div className="slidesshow">
      <img src={pictures[index]} alt={title}></img>
      {pictures.length > 1 && (
        <>
          <button onClick={previousPictures}>-</button>
          <button onClick={nextPictures}>+</button>
          <p>
            {index +1}/ {pictures.length}
          </p>
        </>
      )}
    </div>
    <div class="title">
        <p>{title}</p>
    </div>
    </>
  );
}

export default Slideshow;
