"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import FeaturedBookCard from "./FeaturedBookCard";

const FeaturedBooks = ({ featuredBooks }) => {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        className="w-full"
      >
        {featuredBooks.map((book) => (
          <SwiperSlide key={book.id}>
            <FeaturedBookCard book={book}></FeaturedBookCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedBooks;
