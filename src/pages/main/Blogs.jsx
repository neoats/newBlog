import React from "react";
import BlogPageContent from "../../components/homePage/BlogPageContent";

const Blogs = () => {
  return (
    <div>
      <div className=" py-24 bg-black ">
        <div className="text-white text-center">
          <h1 className="text-5xl lg:text-5xl leading-snug font-bold mb-5">
            Bu bir yazılım bloğudur
          </h1>
        </div>
        {/*blog container  */}
      </div>
      <div >
        <BlogPageContent />
      </div>
    </div>
  );
};

export default Blogs;
