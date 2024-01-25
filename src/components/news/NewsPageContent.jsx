import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import { getData } from "../../services/api/newsApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper/modules";
import "./styles.css";

const NewsPageContent = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function fetchNews() {
      try {
        const news = await getData();
        setNews(news.articles.slice(0, 15));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchNews();
  }, []);

  return (
    <div className=" pt-28 ">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          shadowOffset: 525,
          shadowScale: 1.5,
        }}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        {news.map((article, index) => (
          <SwiperSlide key={index}>
            <NewsCard key={index} news={article} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewsPageContent;
