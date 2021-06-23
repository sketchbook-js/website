import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import List from "../components/List";
import Stack from "../components/Stack";

const HomePage = () => (
  <>
    <style global jsx>{`
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
      h1 {
        font-size: 300%;
      }
      h2 {
        font-size: 240%;
      }
      a {
        color: inherit;
        text-decoration-color: #f0f;
      }
      a:hover {
        color: #f0f;
      }
      pre {
        background: #000;
        background: linear-gradient(0deg, #222, #333);
        border-radius: 3px;
        color: #f0f;
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
    `}</style>
    <Stack gap={80}>
      <Header />
      <main>
        <Container>
          <Stack gap={40}>
            <Stack gap={20}>
              <h2>How it works</h2>
              <p>
                Sketchbook.js is a web design tool that lets you create
                compositions using live components. It's installed directly into
                your codebase and runs in your browser.
              </p>
              <List tag="ul" style="inline">
                <>
                  <strong>Designers</strong> always have the latest components
                  developers have implemented.
                </>
                <>
                  <strong>Developers</strong> always have the latest
                  compositions that designers have produced.
                </>
              </List>
            </Stack>
            <img
              src="/screenshot.png"
              style={{
                borderRadius: 3,
                boxShadow: "0 0 20px rgb(0 0 0 / 0.2)",
                maxWidth: "100%",
              }}
            />
            <Stack gap={20}>
              <h2>Getting started</h2>
              <List tag="ol">
                <Stack gap={10}>
                  <p>Install the package:</p>
                  <pre>yarn add -D @sketchbook-js/sketchbook</pre>
                </Stack>
                <Stack gap={10}>
                  <p>
                    Create the default <code>sketchbook/config.js</code> and{" "}
                    <code>sketchbook/example.json</code> files:
                  </p>
                  <pre>yarn sketchbook init</pre>
                </Stack>
                <Stack gap={10}>
                  <p>
                    Run on <code>http://localhost:3000/</code>:
                  </p>
                  <pre>
                    yarn sketchbook start {"<path/to/design/file.json>"}
                  </pre>
                  <p>
                    Replace <code>{"<path/to/design/file.json>"}</code> with{" "}
                    <code>sketchbook/example.json</code> to run it with an
                    example design file.
                  </p>
                </Stack>
              </List>
            </Stack>
            <Stack gap={20}>
              <h2>Creating components</h2>
              <Stack gap={10}>
                <p>
                  In your config file (<code>sketchbook/config.js</code> by
                  default), add a component to the components property array in{" "}
                  <code>Sketchbook.config</code>. A component is an object with
                  the properties described below.
                </p>
              </Stack>

              <h3>Required options</h3>
              <List>
                <Stack gap={10}>
                  <p>
                    <code>type</code> (required): The type of component being
                    created. You can create instances of these in your
                    composition. Ideally, these are based on your design
                    guidelines. E.g. <code>Small Button</code>,{" "}
                    <code>Medium Button</code>, <code>Large Button</code>,{" "}
                    <code>Heading 1</code> etc. For example,
                  </p>
                  <pre>
                    {`{
  ...,
  type: "Heading 1"
}`}
                  </pre>
                </Stack>
                <Stack gap={10}>
                  <p>
                    <code>render</code> (required): A function that receives the
                    object created in the <code>init</code> property function
                    and an <code>element</code> object. Using the render
                    function below, inserting this component into your
                    composition will initialise it with text "Lorem Ipsum" (as
                    specified in the <code>text</code> option in the optional
                    <code>init</code> property). Modify the element{" "}
                    <code>style</code> and <code>innerHTML</code> to create your
                    desired component.
                  </p>
                  <pre>
                    {`{
  ...,
  render: ({ element, options: { text } }) => {
    element.style = "height: 100%; display: flex; align-items: center;";
    element.innerHTML = \`
      <h1 style="margin: 0;">\${text}</h1>
    \`
  }
}`}
                  </pre>
                </Stack>
              </List>

              <h3>Optional options</h3>
              <List>
                <Stack gap={10}>
                  <p>
                    <code>options</code> (optional): Describes the data type and
                    label of the data that is passed into the component. For
                    example,
                  </p>
                  <pre>
                    {`{
  ...,
  options: [{
    key: "text", // A globally unique identifier for this option.
    label: "Text", // A label to describe the input.
    input: {
      type: "String" // Input type. 'String', 'PlainText' are currently supported.
    }
  }]
}`}
                  </pre>
                </Stack>
                <Stack gap={10}>
                  <p>
                    <code>init</code> (optional): A function that sets initial
                    option values for the component by returning an object that
                    is passed to the required <code>render</code> property. For
                    example,
                  </p>
                  <pre>
                    {`{
  ...,
  init: () => ({
    options: {
      text: "Lorem ipsum"
    }
  })
}`}
                  </pre>
                </Stack>
                <Stack gap={10}>
                  <p>
                    <code>validate</code> (optional): A function that takes in
                    the options object and validates its values. The below
                    example is used to validate the option with key{" "}
                    <code>text</code>, making sure it is not empty.
                  </p>
                  <pre>
                    {`{
  ...,
  validate: ({ text }) =>
    text.trim().length === 0
      ? [{ key: "text", message: "Text must be provided" }]
      : null
}`}
                  </pre>
                </Stack>
              </List>
            </Stack>
          </Stack>
        </Container>
      </main>
      <Footer />
    </Stack>
  </>
);

export default HomePage;
