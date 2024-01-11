import React from "react";
import styles from "../../styles/Global";

const FeatureCard = ({ iconUrl, iconText }) => {
  return (
    <div
      className={`${styles.featureCard} 
    `}
    >
    <img src={iconUrl} alt="icon" className={styles.featureText}/>
      {iconText}
    </div>
    
  );
};

export default FeatureCard;
