import Brandmark from "./Brandmark";
import Container from "./Container";
import Stack from "./Stack";

const Footer = () => (
  <>
    <style jsx>{`
      .footer {
        background: #eee;
        padding: 40px 0;
      }
      @media (max-width: 800px) {
        /* */
      }
      @media (prefers-color-scheme: dark) {
        .footer {
          background: rgb(170, 170, 170);
        }
      }
    `}</style>
    <footer className="footer">
      <Container>
        <Stack gap={20} align="center" justify="center" direction="horizontal">
          <a href="https://colonydb.com/?utm_source=sketchbook-js&utm_campaign=oss">
            <img src="/colonydb-sponsor.svg" />
          </a>
          <a href="https://vercel.com?utm_source=sketchbook-js&utm_campaign=oss">
            <img src="/powered-by-vercel.svg" />
          </a>
        </Stack>
      </Container>
    </footer>
  </>
);

export default Footer;
