import "./Tags.scss";


function Tags({ tags }) {
  return (
    <div className="tags">
      {tags.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default Tags;
