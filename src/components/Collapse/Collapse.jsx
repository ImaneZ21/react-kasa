import "./Collapse.scss";

function Example({ aboutList }) {
  return (
    <div className="about">
      {aboutList.map((item, index) => (
        <details key={index}>
            <summary>{item.title}</summary>
          <p>{item.content}</p>
        </details>
      ))}
    </div>
  );
}

export default Example;
