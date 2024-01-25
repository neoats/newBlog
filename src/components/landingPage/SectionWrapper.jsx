import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Global";
import Button from "./Button";
import assets from "../../assets";

const SectionWrapper = ({
  description,
  title,
  banner,
  showBtn,
  mockupImg,
  reverse,
}) => {
  return (
    // eslint-disable-next-line

    <div
      className={`min-h-screen ${styles.section} ${banner} ${
        reverse ? styles.bgWhite : styles.bgPrimary
      }`}
    >
      <div
        className={`flex items-center ${
          reverse ? styles.boxReverseClass : styles.boxClass
        } w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv} ${
            reverse ? "fadeRightMini" : "fadeLeftMini"
          }
        ${reverse ? styles.textRight : styles.textLeft}`}
        >
          <h1
            className={`
        ${styles.h1Text}
        ${reverse ? styles.blackText : styles.whiteText}
        `}
          >
            {title}
          </h1>
          <p
            className={`${styles.descriptionText}
           ${reverse ? styles.blackText : styles.whiteText}
           `}
          >
            {description}
          </p>
          <div className="flex justify-between">
            {showBtn && (
              <Button
                assetUrl={assets.expo}
                Link="deployed nft marketplace rn"
                text1={"View it on"}
                text2={"Expo Store"}
              />
            )}
            {showBtn && (
              <button className="lg:flex border-black border-b-2 border-r-4 bg-orange-500 px-3  py-4 font-medium text-justify text-white hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in">
                <Link to="/">Ana Sayfa</Link>
              </button>
            )}
          </div>
        </div>

        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img
            src={mockupImg}
            alt="mockup"
            className={`${styles.sectionImg}
          ${reverse ? "fadeLeftMini" : "fadeRightMini"}
          `}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
