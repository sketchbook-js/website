const DIRECTION_MAP = {
  vertical: "row",
  horizontal: "column",
};

const Stack = ({
  children,
  gap = 0,
  justify = "stretch",
  alignItems = "stretch",
  align = "stretch",
  direction = "vertical",
  tag: Component = "div",
}) => (
  <>
    <style jsx>{`
      .stack {
        display: grid;
        gap: ${gap}px;
        justify-content: ${justify};
        align-content: ${align};
        grid-auto-flow: ${DIRECTION_MAP[direction]};
        align-items: ${alignItems};
      }
    `}</style>
    <Component className="stack">{children}</Component>
  </>
);

export default Stack;
