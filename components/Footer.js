import Brandmark from "./Brandmark";
import Container from "./Container";
import Stack from "./Stack";

const Footer = () => (
  <>
    <style jsx>{`
      .footer {
        background: linear-gradient(0deg, #90c, #f0f);
        background: #c0f;
        color: #fff;
        padding: 50px 0;
      }
    `}</style>
    <footer className="footer">
      <Container>
        <a href="https://vercel.com?utm_source=sketchbook-js&utm_campaign=oss">
          <img src="/powered-by-vercel.svg" />
        </a>
      </Container>
    </footer>
  </>
);

export default Footer;
