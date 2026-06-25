function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-inner">
        <p className="footer-copy">&copy; {year} Vinay Kumar N. All rights reserved.</p>
        <p className="footer-tagline">Built by Vinay with React + Vite</p>
      </div>
    </footer>
  );
}

export default Footer;
