import { Children } from "react";

const List = ({ children, tag: Component = "ul" }) => (
  <>
    <style jsx>{`
      .list {
        display: grid;
        gap: 20px;
      }
      .item {
        margin-left: 1rem;
      }
    `}</style>
    <ol className="list">
      {Children.map(children, (child) => (
        <li className="item">{child}</li>
      ))}
    </ol>
  </>
);

export default List;
