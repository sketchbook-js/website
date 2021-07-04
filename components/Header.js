import Brandmark from "./Brandmark";
import Container from "./Container";
import Stack from "./Stack";
import GitHubIcon from "./GitHubIcon";
import SocialLink from "./SocialLink";

const Header = () => (
  <>
    <style jsx>{`
      .header {
        background: var(--primary-color);
        padding: 60px 0;
      }
      .heading {
        font-family: Roboto Condensed, sans-serif;
        font-weight: bold;
        text-shadow: 2px 2px #fff;
      }
      .tagline {
        font-size: 18px;
      }

      @media (prefers-color-scheme: dark) {
        .heading {
          text-shadow: 3px 3px #121212;
        }

        .tagline,
        .heading {
          color: rgb(248, 248, 248);
        }
      }
    `}</style>
    <header className="header">
      <Container>
        <Stack justify="space-between" align="center" direction="horizontal">
          <Stack justify="start" direction="horizontal" gap={20}>
            <Brandmark />
            <Stack justify="start" align="end" gap={20}>
              <Stack>
                <h1 className="heading">Sketchbook.js</h1>
                <p className="tagline">
                  Bringing design and development together
                </p>
              </Stack>
              <Stack justify="start">
                <SocialLink
                  href="https://github.com/sketchbook-js/sketchbook"
                  icon={GitHubIcon}
                  label="GitHub"
                  color="#000"
                />
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </header>
  </>
);

export default Header;
