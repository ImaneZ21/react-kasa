import Slideshow from "../components/Slideshow/Slideshow";
import data from "../data/accomodations.json";


function Accomodation() {
  
    return (
      <div>
        <Slideshow accomodations={data}/>
      </div>
    );
  }
  
  export default Accomodation;