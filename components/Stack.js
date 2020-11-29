const DIRECTION_MAP = {
  vertical: "row",
  horizontal: "column",
};

const Stack = ({
  children,
  gap = 0,
  justify = "stretch",
  direction = "vertical",
  tag: Component = "div",
}) => (
  <>
    <style jsx>{`
      .stack {
        display: grid;
        gap: ${gap}px;
        justify-items: ${justify};
        grid-auto-flow: ${DIRECTION_MAP[direction]};
      }
    `}</style>
    <Component className="stack">
      {children}
    </Component>
  </>
);

export default Stack;
