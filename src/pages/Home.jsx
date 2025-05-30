import Banner from "../components/Banner/Banner.jsx";
import Cards from "../components/Cards/Cards.jsx";
import image from "../assets/image.png";
import data from "../data/accomodations.json";

function Home() {
  //Banner
  const title = "Chez vous, \npartout et ailleurs";
  const alt = "Banner Kasa";

  return (
    <>
      <Banner imageSrc={image} title={title} alt={alt} />
      <Cards accomodations={data} />
    </>
  );
}

export default Home;
