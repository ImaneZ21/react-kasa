import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function rating({ rating }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} color="pink" />);
    } else {
      stars.push(<FontAwesomeIcon icon={faStar} key={i} color="gray" />);
    }
  }

  return <div className="rating">{stars}</div>;
}

export default rating;
