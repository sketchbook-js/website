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
        font-size: 200%;
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
    `}</style>
    <Stack gap={40}>
      <Header />
      <main>
        <Container>
          <Stack gap={40}>
            <Stack gap={10}>
              <h2>How it works</h2>
              <p>
                Sketchbook.js is a web design tool that lets you design with
                realy components. It's installed as a Node.js package directly
                into your codebase and runs in a browser. That means you can
                always be using the latest versions of components — no more
                tedious legwork keeping your design system in sync with
                production.
              </p>
            </Stack>
            <img
              src="/screenshot.png"
              style={{
                borderRadius: 3,
                boxShadow: "0 0 10px rgb(0 0 0 / 0.2)",
                maxWidth: "100%",
              }}
            />
            <Stack gap={10}>
              <h2>Getting started</h2>
              <List tag="ol">
                <Stack gap={10}>
                  <p>Install the package:</p>
                  <pre>yarn add -D @sketchbook-js/sketchbook</pre>
                </Stack>
                <Stack gap={10}>
                  <p>
                    Create the default <code>sketchbook/config.js</code> and{" "}
                    <code>sketchbook/designs/example.json</code> files:
                  </p>
                  <pre>yarn sketchbook init</pre>
                </Stack>
                <Stack gap={10}>
                  <p>
                    Run on <code>http://localhost:3000/</code>:
                  </p>
                  <pre>yarn sketchbook start</pre>
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
