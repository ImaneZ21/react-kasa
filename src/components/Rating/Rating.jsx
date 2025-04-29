import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./rating.scss";

function rating({ rating }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <FontAwesomeIcon icon={faStar} key={i} className="colored-star" />
      );
    } else {
      stars.push(
        <FontAwesomeIcon icon={faStar} key={i} className="empty-star" />
      );
    }
  }

  return <div className="rating">{stars}</div>;
}

export default rating;
