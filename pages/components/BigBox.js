import React from 'react'
import styles from "../styles/Home.module.css";
const BigBox = () => {
  return (
    <>
      <div className={`${styles.box} ${styles.bigBox}`}>
        <img
          src="https://www.picmaker.com/assets/images/homepage/picmaker_og_image.jpg"
          alt=""
        />
      </div>
    </>
  );
};

export default BigBox;
