/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./Nav.module.scss";

function Nav({ navElements, navType, setShowMegaMenu, setNavElement, validNavElements, invalidNavElements }) {
  const mouseOverHandler = (element) => {
    setNavElement(element);

    validNavElements.forEach((validElement) => {
      if (element === validElement) setShowMegaMenu(true);
    });

    invalidNavElements.forEach((invalidElement) => {
      if (element === invalidElement) setShowMegaMenu(false);
    });
  };

  const items = navElements.map((element, index) => (
    <a href="" className={styles.nav__link} key={element + index} onMouseEnter={() => mouseOverHandler(element)}>
      {element}
    </a>
  ));

  return <nav className={styles[`${navType}`]}>{items}</nav>;
}

export default Nav;
