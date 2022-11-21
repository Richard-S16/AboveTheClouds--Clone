import React from "react";
import styles from "./MegaMenu.module.scss";
import MegaMenuItems from "./MegaMenuItems/MegaMenuItems";

function MegaMenu({ showMegaMenu, setShowMegaMenu, navElement, validNavElements }) {
  return (
    <>
      <div
        className={showMegaMenu ? styles.mega_visible : styles.mega_invisible}
        onMouseLeave={() => setShowMegaMenu(false)}
      >
        <MegaMenuItems navElement={navElement} validNavElements={validNavElements} />
      </div>
    </>
  );
}

export default MegaMenu;
