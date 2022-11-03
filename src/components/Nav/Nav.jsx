/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import styles from "./Nav.module.scss";

function Nav({ navElements, navType }) {
  const [hoverElement, setHoverElement] = useState("");

  return (
    <nav className={styles[`${navType}`]}>
      {navElements.map((element, index) => (
        <a
          href=""
          className={styles.nav__link}
          key={element + index}
          onMouseOver={() => setHoverElement(element)}
        >
          {element}
        </a>
      ))}
    </nav>
  );
}

export default Nav;
