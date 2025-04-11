function Slideshow( {accomodations}) {

    const data = accomodations

  return (
    <div className="slidesshow">
      <h1>Accomodation</h1>
      <div> { data.title} </div>
    </div>
    
  );
}

export default Slideshow;
