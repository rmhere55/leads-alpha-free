



import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import video1 from "../../assets/videos/video1.mov";
import video2 from "../../assets/videos/video2.mov";
import video3 from "../../assets/videos/video3.mov";
import video4 from "../../assets/videos/video4.mov";
import video5 from "../../assets/videos/video5.mp4";
import video6 from "../../assets/videos/video6.mov";
import video7 from "../../assets/videos/video7.mov";
import video8 from "../../assets/videos/video8.mov";
import video9 from "../../assets/videos/video9.mp4";

import ukIcon from "../../assets/uk.svg";
import zaIcon from "../../assets/za.svg";
import zmIcon from "../../assets/zm.svg";
import ZwIcon from "../../assets/Zim.svg";

const reels = [
  { name: "Sophie Turner", flag: ukIcon, location: "London, UK", video: video1 },
  { name: "Raj Laxmi", flag: zaIcon, location: "Mumbai, India", video: video2 },
  { name: "Emma Watson", flag: zmIcon, location: "Paris, France", video: video3 },
  { name: "Zara Khan", flag: ZwIcon, location: "Cape Town, South Africa", video: video4 },
  { name: "Priya Singh", flag: ukIcon, location: "Delhi, India", video: video5 },
  { name: "Ava Patel", flag: zaIcon, location: "Johannesburg, South Africa", video: video6 },
  { name: "Lily James", flag: zmIcon, location: "Lusaka, Zambia", video: video7 },
  { name: "Sara Ali", flag: ZwIcon, location: "Harare, Zimbabwe", video: video8 },
  { name: "Maya Kapoor", flag: ukIcon, location: "London, UK", video: video9 },
];

const ReelCarousel = () => {
  const videoRefs = useRef([]);
  const [playingStates, setPlayingStates] = useState(Array(reels.length).fill(true));

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    const newPlayingStates = [...playingStates];

    if (video.paused) {
      video.play();
      newPlayingStates[index] = true;
    } else {
      video.pause();
      newPlayingStates[index] = false;
    }

    setPlayingStates(newPlayingStates);
  };

  return (
    <div className="carousel-container">
      <Swiper
        slidesPerView={1.3}
        spaceBetween={10}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={6000}
        allowTouchMove={false}
        className="mySwiper"
        breakpoints={{
          768: { slidesPerView: 2.5 },
          1024: { slidesPerView: 3.5 },
          1440: { slidesPerView: 4.5 },
        }}
      >
        {reels.map((reel, index) => (
          <SwiperSlide key={index}>
            <div className="reel-card">
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={reel.video}
                className="reel-video"
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="gradient-overlay" />
              <div className="reel-info">
                <p className="name">{reel.name}</p>
                <p className="location">
                  <img src={reel.flag} alt="flag" />
                  {reel.location}
                </p>
              </div>
              <button
                className="play-pause-btn"
                onClick={() => togglePlay(index)}
              >
                {playingStates[index] ? "❚❚" : "▶"}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReelCarousel;
