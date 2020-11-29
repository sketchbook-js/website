import Brandmark from "./Brandmark";
import Container from "./Container";
import GitHubIcon from "./GitHubIcon";
import SocialLink from "./SocialLink";
import SpectrumIcon from "./SpectrumIcon";
import Stack from "./Stack";

const Header = () => (
  <>
    <style jsx>{`
      .header {
        background: radial-gradient(circle at center, #f0f, #c0f);
        /* background: #f0f; */
        padding: 100px 0;
      }
      .heading {
        font-family: Roboto Condensed, sans-serif;
        font-weight: bold;
      }
      .tagline {
        font-size: 18px;
      }
    `}</style>
    <header className="header">
      <Container>
        <Stack gap={30} justify="center">
          <Stack justify="center">
            <Brandmark />
            <h1 className="heading">Sketchbook.js</h1>
            <p className="tagline">
              Helping designers and developers work together
            </p>
          </Stack>
          <Stack gap={20} direction="horizontal">
            <SocialLink
              href="https://github.com/sketchbook-js/sketchbook"
              icon={GitHubIcon}
              label="GitHub"
              color="#000"
            />
            <SocialLink
              href="https://spectrum.chat/sketchbook-js"
              icon={SpectrumIcon}
              label="Spectrum"
              color="#000"
            />
          </Stack>
        </Stack>
      </Container>
    </header>
  </>
);

export default Header;
