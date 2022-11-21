/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./MegaMenuItems.module.scss";

function MegaMenuItems({ navElement, validNavElements }) {
  const shopClassName = navElement !== validNavElements[0] ? styles.invisible : "";
  const brandsClassName = navElement !== validNavElements[1] ? styles.invisible : "";
  const salesClassName = navElement !== validNavElements[2] ? styles.invisible : "";

  return (
    <>
      <div className={`${styles.wrapper} ${shopClassName}`}>
        <div>
          <h3>
            <a href="">Menswear</a>
          </h3>
          <ul>
            <li>
              <a href="">View Latest</a>
            </li>
            <li>
              <a href="">Footwear</a>
            </li>
            <li>
              <a href="">T-Shirts</a>
            </li>
            <li>
              <a href="">Shirts</a>
            </li>
            <li>
              <a href="">Jumpers</a>
            </li>
            <li>
              <a href="">Jackets</a>
            </li>
            <li>
              <a href="">Shorts</a>
            </li>
            <li>
              <a href="">Pants</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            <a href="">Footwear</a>
          </h3>
          <ul>
            <li>
              <a href="">View All</a>
            </li>
            <li>
              <a href="">Adidas Originals</a>
            </li>
            <li>
              <a href="">Asics Sportstyle</a>
            </li>
            <li>
              <a href="">Converse</a>
            </li>
            <li>
              <a href="">New Balance</a>
            </li>
            <li>
              <a href="">Nike</a>
            </li>
            <li>
              <a href="">Reebok</a>
            </li>
            <li>
              <a href="">Vans</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            <a href="">Accesories</a>
          </h3>
          <ul>
            <li>
              <a href="">View Latest</a>
            </li>
            <li>
              <a href="">Lifestyle</a>
            </li>
            <li>
              <a href="">Jewellery</a>
            </li>
            <li>
              <a href="">Eyewear</a>
            </li>
            <li>
              <a href="">Fragances</a>
            </li>
            <li>
              <a href="">Bags</a>
            </li>
            <li>
              <a href="">Headwear</a>
            </li>
            <li>
              <a href="">Publications</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            <a href="">Womenswear</a>
          </h3>
          <ul>
            <li>
              <a href="">View Latest</a>
            </li>
            <li>
              <a href="">Footwear</a>
            </li>
            <li>
              <a href="">T-Shirts</a>
            </li>
            <li>
              <a href="">Jumpers</a>
            </li>
            <li>
              <a href="">Jackets</a>
            </li>
            <li>
              <a href="">Pants</a>
            </li>
            <li>
              <a href="">Skirts</a>
            </li>
            <li>
              <a href="">Sale</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            <a href="">Gift Cards</a>
          </h3>
          <ul>
            <li>
              <a href="">$50 Gift Card</a>
            </li>
            <li>
              <a href="">$100 Gift Card</a>
            </li>
            <li>
              <a href="">$150 Gift Card</a>
            </li>
            <li>
              <a href="">$200 Gift Card</a>
            </li>
            <li>
              <a href="">$250 Gift Card</a>
            </li>
            <li>
              <a href="">$500 Gift Card</a>
            </li>
            <li>
              <a href="">$1000 Gift Card</a>
            </li>
            <li>
              <a href="">$2000 Gift Card</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.wrapper} ${brandsClassName}`}>
        <div>
          <h3>
            <a href="">View All &gt;</a>
          </h3>
          <ul>
            <li>
              <a href="">19-69</a>
            </li>
            <li>
              <a href="">Adidas Originals</a>
            </li>
            <li>
              <a href="">A Kind Of Guise</a>
            </li>
            <li>
              <a href="">AFFXWRKS</a>
            </li>
            <li>
              <a href="">Andersson Bell</a>
            </li>
            <li>
              <a href="">And Wander</a>
            </li>
            <li>
              <a href="">Arc'teryx</a>
            </li>
            <li>
              <a href="">Aries</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            <a href=""></a>
          </h3>
          <ul>
            <li>
              <a href="">Asics</a>
            </li>
            <li>
              <a href="">Awake NY</a>
            </li>
            <li>
              <a href="">Beams Plus</a>
            </li>
            <li>
              <a href="">Birkenstock</a>
            </li>
            <li>
              <a href="">Cameron Studio</a>
            </li>
            <li>
              <a href="">Carhartt WIP</a>
            </li>
            <li>
              <a href="">Casablanca</a>
            </li>
            <li>
              <a href="">C.P. Company</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            <a href=""></a>
          </h3>
          <ul>
            <li>
              <a href="">ERL</a>
            </li>
            <li>
              <a href="">Garbstore</a>
            </li>
            <li>
              <a href="">Gramicci</a>
            </li>
            <li>
              <a href="">Hatton Labs</a>
            </li>
            <li>
              <a href="">Han Kjøbenhavn</a>
            </li>
            <li>
              <a href="">KENZO PARIS</a>
            </li>
            <li>
              <a href="">Kinto</a>
            </li>
            <li>
              <a href="">Maison Kitsuné</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            <a href=""></a>
          </h3>
          <ul>
            <li>
              <a href="">Medicom</a>
            </li>
            <li>
              <a href="">Monokel Eyewear</a>
            </li>
            <li>
              <a href="">New Balance</a>
            </li>
            <li>
              <a href="">Nike</a>
            </li>
            <li>
              <a href="">Nike SB</a>
            </li>
            <li>
              <a href="">Polar Skate Co.</a>
            </li>
            <li>
              <a href="">Porter-Yoshida & Co.</a>
            </li>
            <li>
              <a href="">Soulland</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            <a href=""></a>
          </h3>
          <ul>
            <li>
              <a href="">Stan Ray</a>
            </li>
            <li>
              <a href="">STORY Mfg.</a>
            </li>
            <li>
              <a href="">Sunflower</a>
            </li>
            <li>
              <a href="">The North Face</a>
            </li>
            <li>
              <a href="">Thisisneverthat</a>
            </li>
            <li>
              <a href="">Uniform Bridge</a>
            </li>
            <li>
              <a href="">Wood Wood</a>
            </li>
            <li>
              <a href="">View All &gt;</a>
            </li>
          </ul>
        </div>
      </div>

      <div className={`${styles.wrapper} ${salesClassName}`}>
        <div>
          <h3>
            <a href="">Shop All</a>
          </h3>
          <ul>
            <li>
              <a href="">Adidas Originals</a>
            </li>
            <li>
              <a href="">Asics</a>
            </li>
            <li>
              <a href="">Carthartt WIP</a>
            </li>
            <li>
              <a href="">Casablanca</a>
            </li>
            <li>
              <a href="">C.P. Company</a>
            </li>
            <li>
              <a href="">New Balance</a>
            </li>
            <li>
              <a href="">Nike</a>
            </li>
            <li>
              <a href="">Sporty & Rich</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            <a href="">Categories</a>
          </h3>
          <ul>
            <li>
              <a href="">Accesories</a>
            </li>
            <li>
              <a href="">Footwear</a>
            </li>
            <li>
              <a href="">Jumpers</a>
            </li>
            <li>
              <a href="">Outerwear</a>
            </li>
            <li>
              <a href="">Pants</a>
            </li>
            <li>
              <a href="">Shirts</a>
            </li>
            <li>
              <a href="">Shorts</a>
            </li>
            <li>
              <a href="">T-Shirts</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            <a href="">Men's Footwear</a>
          </h3>
          <ul>
            <li>
              <a href="">Men's US 7</a>
            </li>
            <li>
              <a href="">Men's US 8</a>
            </li>
            <li>
              <a href="">Men's US 9</a>
            </li>
            <li>
              <a href="">Men's US 9.5</a>
            </li>
            <li>
              <a href="">Men's US 10</a>
            </li>
            <li>
              <a href="">Men's US 10.5</a>
            </li>
            <li>
              <a href="">Men's US 11</a>
            </li>
            <li>
              <a href="">Men's US 12</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            <a href="">Women's Footwear</a>
          </h3>
          <ul>
            <li>
              <a href="">Women's US 5</a>
            </li>
            <li>
              <a href="">Women's US 6</a>
            </li>
            <li>
              <a href="">Women's US 6.5</a>
            </li>
            <li>
              <a href="">Women's US 7</a>
            </li>
            <li>
              <a href="">Women's US 7.5</a>
            </li>
            <li>
              <a href="">Women's US 8</a>
            </li>
            <li>
              <a href="">Women's US 8.5</a>
            </li>
            <li>
              <a href="">Women's US 9</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MegaMenuItems;
