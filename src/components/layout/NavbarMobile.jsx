import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

import styles from "./NavbarMobile.module.css";



function NavbarMobile() {

  const [active, setMode] = useState()

  function toggle() {
    setMode(!active)
  }

  return (
    <div className={styles.container}>
      <div className={styles.navmo}>
        <div className={styles.burguer}>
        <Link to="/">Logo</Link>
        <AiOutlineMenu onClick={toggle}/>
        </div>
        <div>
          <nav>
            <ul className={active ? styles.navmon : styles.navmoff}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavbarMobile;
