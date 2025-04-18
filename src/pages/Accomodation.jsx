import Slideshow from "../components/Slideshow/Slideshow";
import Collapse from "../components/Collapse/Collapse";
import Location from "../components/Location/Location";
import Tags from "../components/Tags/Tags";
import Profil from "../components/Profil/Profil";
import Rating from "../components/Rating/Rating";
import Error from "../components/Error/Error";
import { useParams } from "react-router-dom";
import data from "../data/accomodations.json";

function Accomodation() {
  const { id } = useParams();

  //accomodation
  const accomodation = data.find((item) => item.id === id);

  if (!accomodation) {
    return <Error />;
  }

  //Collapse
  const aboutList = [
    {
      title: "Description",
      content: accomodation.description,
    },
    {
      title: "Equipements",
      content: accomodation.equipments,
    },
  ];

  return (
    <div>
      <Slideshow pictures={accomodation.pictures} title={accomodation.title} />
      <Location location={accomodation.location} />
      <Tags tags={accomodation.tags} />
      <Profil
        name={accomodation.host.name}
        picture={accomodation.host.picture}
      />
      <Rating rating={accomodation.rating} />
      <Collapse aboutList={aboutList} />
    </div>
  );
}

export default Accomodation;
