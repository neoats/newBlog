import React from "react";
import styles from "../../styles/Global";
import assets from "../../assets";

const Download = () => {
  return (
    <div
      className={`${styles.section} ${styles.bgWhite} 
  `}
    >
      <div
        className={`${styles.subSection} flex-col text-center
  `}
      >
        <div>
          <h1
            className={`${styles.h1Text}
    ${styles.blackText}
    `}
          >
            Download The Source Code
          </h1>
          <p>Get The full source code on GitHub</p>
        </div>

        <button
          className={`flex ${styles.btnBlack} mt-16 h-12 w-32  text-white text-sm items-center`}
        >
          <img
            src={assets.gitlogo}
            alt="Expo Icon"
            style={{ width: "30px", height: "30px" }}
          />
          <span className="ml-2">Source Code</span>
        </button>
        <div
          className={`${styles.flexCenter} 
  `}
        >
          <img
            src={assets.scene}
            alt="download"
            className={`${styles.fullImg}
   
    `}
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
