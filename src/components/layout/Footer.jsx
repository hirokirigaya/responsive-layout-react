import styles from "./Footer.module.css";

import { FaFacebook, FaLinkedin, FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
      <div>
        <a href="#">
          <FaDiscord />
        </a>
        <a href="#">
          <FaFacebook />
        </a>
        <a href="#">
          <FaGithub />
        </a>
        <a href="#">
          <FaLinkedin />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
      </div>
      <p>
       Create with &hearts; by <span>Daniel</span>
      </p>
      </div>
    </footer>
  );
}

export default Footer;
