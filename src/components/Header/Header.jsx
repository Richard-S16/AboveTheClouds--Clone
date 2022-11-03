import styles from "./Header.module.scss";
import logo from "../../assets/ATC_logopng_220x.png";
import Nav from "../Nav/Nav";

function Header() {
  const mainNavElements = ["Latest", "Shop", "Brands", "Sale", "Launches"];
  const secondaryNavElements = ["Account", "Search", "Cart (0)"];

  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" className={styles.header__logo} />

      <Nav navElements={mainNavElements} navType={"main_nav"} />

      <Nav navElements={secondaryNavElements} navType={"secondary_nav"} />
    </header>
  );
}

export default Header;
