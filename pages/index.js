import Container from "../components/Container";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Header from "../components/Header";
import List from "../components/List";
import Stack from "../components/Stack";
import { default as GlobalStyles } from "../styles/Global";

const HomePage = () => (
  <>
    <GlobalStyles />
    <Head
      title={"Sketchbook.js"}
      description={
        "A web design tool that lets you create compositions using live components from your code."
      }
      canonical={"https://sketchbookjs.com"}
      // A relative image path does not work for twitter images.
      // The full domain of the image must be used: https://stackoverflow.com/questions/60870641/twitterimage-meta-tag-not-showing-image-for-its-twitter-card
      image={"https://sketchbookjs.com/screenshot.png"}
      imageAltText={"Sketchbook.js design tool screenshot"}
      icon={"https://sketchbookjs.com/favicon.ico"}
    />
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
                  <pre>yarn sketchbook start sketchbook/example.json</pre>
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
