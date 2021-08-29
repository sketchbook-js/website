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
      :root {
        --primary-color: #f0f;
      }
      body {
        font-family: sans-serif;
        font-size: 16px;
        line-height: 1.5;
      }
      h1 {
        font-size: 300%;
      }
      h2 {
        font-size: 240%;
      }
      a {
        color: inherit;
        text-decoration-color: var(--primary-color);
      }
      a:hover {
        color: var(--primary-color);
      }
      pre {
        background: #000;
        background: linear-gradient(0deg, #222, #333);
        border-radius: 3px;
        color: var(--primary-color);
        padding: 10px 20px;
      }
      code {
        background: #fcf;
        border-radius: 3px;
        color: #000;
        padding: 0 3px;
      }
      img {
        display: block;
      }

      @media (prefers-color-scheme: dark) {
        :root {
          color-scheme: dark light;
          color: rgb(228, 228, 228);
        }

        img {
          filter: brightness(0.8) contrast(1.2);
        }
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
