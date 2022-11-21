import { useState } from "react";
import Header from "./components/Header/Header";
import MegaMenu from "./components/MegaMenu/MegaMenu";

function App() {
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [navElement, setNavElement] = useState("");
  const mainNavElements = ["Latest", "Shop", "Brands", "Sale", "Launches"];
  const secondaryNavElements = ["Account", "Search", "Cart (0)"];
  const validNavElements = mainNavElements.slice(1, 4);
  const invalidNavElements = [
    `${mainNavElements.slice(0, 1)}`,
    `${mainNavElements.slice(4, 5)}`,
    ...secondaryNavElements,
  ];

  return (
    <>
      <Header
        setShowMegaMenu={setShowMegaMenu}
        setNavElement={setNavElement}
        mainNavElements={mainNavElements}
        secondaryNavElements={secondaryNavElements}
        validNavElements={validNavElements}
        invalidNavElements={invalidNavElements}
      />
      <MegaMenu
        showMegaMenu={showMegaMenu}
        setShowMegaMenu={setShowMegaMenu}
        navElement={navElement}
        validNavElements={validNavElements}
      />
    </>
  );
}

export default App;
