import { render } from "react-dom";
import Header from "../components/Header";
import Brandmark from "../components/Brandmark";
import Stack from "../components/Stack";
import { default as GlobalStyles } from "../styles/Global";

Sketchbook.config = {
  initCanvas: (doc) => {
    const globalStylesDiv = doc.createElement("div");
    doc.body.appendChild(globalStylesDiv);
    render(<GlobalStyles />, globalStylesDiv);
  },
  components: [
    {
      type: "Header",
      render: ({ element, width, height }) => {
        render(<Header />, element);
      },
    },
    {
      type: "Brandmark",
      render: ({ element, width, height }) => {
        render(<Brandmark />, element);
      },
    },
    {
      type: "Text list",
      options: [
        {
          key: "text",
          label: "Text",
          input: {
            type: "PlainText",
          },
        },
      ],
      init: () => ({
        options: {
          text: "Item 1\nItem 2\nItem 3",
        },
      }),
      render: ({ element, width, height, options: { text } }) => {
        render(
          <Stack>
            {text.split("\n").map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </Stack>,
          element,
        );
      },
    },
  ],
};
