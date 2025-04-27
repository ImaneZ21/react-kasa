import image from "../../assets/logo_footer.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <img src={image} alt="logo footer"/>
        <p>© 2020 Kasa. All<span>rights reserved</span></p>
      </div>
    </footer>
  );
}

export default Footer;
