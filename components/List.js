import { Children } from "react";

const List = ({ children, tag: Component = "ul", style = "block" }) => (
  <>
    <style jsx>{`
      .list {
        display: grid;
        gap: ${style === "block" ? "20px" : "10px"};
      }
      .item {
        margin-left: 2rem;
      }
    `}</style>
    <Component className="list">
      {Children.map(children, (child) => (
        <li className="item">{child}</li>
      ))}
    </Component>
  </>
);

export default List;
