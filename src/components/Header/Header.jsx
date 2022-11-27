import styles from "./Header.module.scss";
import logo from "../../assets/img/ATC_logopng_220x.png";
import Nav from "../Nav/Nav";

function Header({
  setShowMegaMenu,
  setNavElement,
  mainNavElements,
  secondaryNavElements,
  validNavElements,
  invalidNavElements,
}) {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.header__logo} />

      <Nav
        navElements={mainNavElements}
        navType={"main_nav"}
        setShowMegaMenu={setShowMegaMenu}
        setNavElement={setNavElement}
        validNavElements={validNavElements}
        invalidNavElements={invalidNavElements}
      />

      <Nav
        navElements={secondaryNavElements}
        navType={"secondary_nav"}
        setShowMegaMenu={setShowMegaMenu}
        setNavElement={setNavElement}
        validNavElements={validNavElements}
        invalidNavElements={invalidNavElements}
      />
    </header>
  );
}

export default Header;
