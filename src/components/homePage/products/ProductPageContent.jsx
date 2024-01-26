import React from "react";
import "./Style.css";
import Product from "./Product";
import Logo from "./Logo";
import Button from "./Button";
import Kabuk1 from "../../../assets/kabuk1.png";
import Product1 from "../../../assets/product1.png";

const ProductPageContent = () => {
  return (
    <div>
      <div
        id="myDiv"
        className={` pt-10 flex flex-col gap-12 justify-center items-center gradient-bg`}
      >
        <Logo imgUrl={Kabuk1} />
        <Product imgUrl={Product1} />
        <Button url={"https://kabukstore.art/home"} />
      </div>

      <div
        id="myDiv"
        className={`flex flex-col gap-12 justify-center items-center gradient-bg2`}
      >
        <Logo />
        <Product />
        <Button />
      </div>
    </div>
  );
};

export default ProductPageContent;
