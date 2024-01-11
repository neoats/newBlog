import React from "react";
import assets from "../../assets";
import styles from "../../styles/Global";

import FeatureCard from "./FeatureCard";
const Features = () => {
  return (
    <div
      className={`${styles.section}
    ${styles.bgPrimary} banner03
    `}
    >
      <span className="border-black h-2"></span>
      <div
        className={`${styles.subSection}
   flex-col text-center
    `}
      >
        <h1
          className={`${styles.h1Text}
    ${styles.whiteText}
    `}
        >
          Technologies
        </h1>
        <p
          className={`${styles.pText}
    ${styles.whiteText}
    `}
        >
          Pronef has been developed using a cross-platform technology,React
          Native
        </p>
        <div
             className={`${styles.flexWrap}
 
    `}>
    <FeatureCard
      iconUrl={assets.react}
      iconText="React Native"
    />
     <FeatureCard
      iconUrl={assets.javascript}
      iconText="JavaScript"
    />
        </div>
      </div>
    </div>
   
  );
};

export default Features;
