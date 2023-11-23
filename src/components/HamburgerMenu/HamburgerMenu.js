import React from 'react';
import styles from './HamburgerMenu.module.css';
import { HamburgerMenueContext } from '../../context/HamburgerMenu.context';
function HamburgerMenu() {
  const { hamMenue, setHamMenue } = React.useContext(HamburgerMenueContext);
  return (
    <div className={`${styles.MenuHamburger}`}>
      <input
        type="checkbox"
        id="menu_checkbox"
        className={`${styles.MenuCheckBox}`}
        value={hamMenue}
        onClick={()=>{
          setHamMenue(!hamMenue);
        }}
      />
      <label htmlFor="menu_checkbox" className={`${styles.MenuCheckBoxLabel}`}>
        <div></div>
        <div></div>
        <div></div>
      </label>
    </div>
  );
}

export default HamburgerMenu;
