import "./DataList.css";

function DataList({
  title,
  items,
  renderItem,
}) {
  return (
    <div className="data-list">
      <h1>{title}</h1>

      {items.map(renderItem)}
    </div>
  );
}

export default DataList;