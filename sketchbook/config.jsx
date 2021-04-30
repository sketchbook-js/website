import { render } from "react-dom";
import Header from "../components/Header";
import Brandmark from "../components/Brandmark";
import Stack from "../components/Stack";

Sketchbook.config = {
  initCanvas: (doc) => {
    const style = doc.createElement("style");
    style.innerHTML = `
      @import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap");
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      body {
        font-family: sans-serif;
        font-size: 16px;
        line-height: 1.5;
      }
    `;
    doc.head.appendChild(style);
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
