const Header = ({ children }) => (
  <>
    <style jsx>{`
      .container {
      }
      .item {
        max-width: 60rem;
        margin: 0 auto;
        padding: 0 1rem;
      }
    `}</style>
    <div className="container">
      <div className="item">{children}</div>
    </div>
  </>
);

export default Header;
