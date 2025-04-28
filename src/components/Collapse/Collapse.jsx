import "./Collapse.scss";

function Collapse ({ aboutList }) {
  return (
    <div className="about">
      {aboutList.map((item, index) => (
        <details key={index}>
            <summary>{item.title}</summary>
            {Array.isArray(item.content) ? (
            <ul>
              {item.content.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          ) : (
            <p>{item.content}</p>
          )}
        </details>
      ))}
    </div>
  );
}

export default Collapse;
