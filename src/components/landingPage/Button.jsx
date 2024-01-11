import React from "react";
import styles from "../../styles/Global";

const Button = ({ assetUrl, link,text1,text2 }) => {
  return (
    <div
      className={styles.btnBlack}
      onClick={() => window.open(link, "_blank")}
    >
      <img src={assetUrl} className={styles.btnIcon} alt="expo_icon" />
      <div className="flex flex-col justify-start ml-4">
        <p className={`${styles.btnText} font-normal text-xs`}>{text1}</p>

        <p className={`${styles.btnText} font-bold text-sm`}>{text2} </p>
    
      </div>
  
    </div>
  );
};

export default Button;
