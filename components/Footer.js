import Brandmark from "./Brandmark";
import Container from "./Container";
import Stack from "./Stack";

const Footer = () => (
  <>
    <style jsx>{`
      .footer {
        background: #000;
        background: linear-gradient(0deg, #222, #333);
        color: #fff;
        padding: 50px 0;
      }
    `}</style>
    <footer className="footer">
      <Container></Container>
    </footer>
  </>
);

export default Footer;
