
import React, { useRef, useState } from "react";
import { FaPlay, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

import video1 from "../../assets/videos/video1.mov";
import video2 from "../../assets/videos/video2.mov";
import video3 from "../../assets/videos/video3.mov";
import video4 from "../../assets/videos/video4.mov";
import video5 from "../../assets/videos/video5.mp4";
import video6 from "../../assets/videos/video6.mov";
import video7 from "../../assets/videos/video7.mov";
import video8 from "../../assets/videos/video8.mov";
import video9 from "../../assets/videos/video9.mp4";

// const videos = [
//   {
//     id: 1,
//     name: "Tonia",
//     rating: 5,
//     src: video1,
//     thumbnail: "/assets/tonia-thumb.jpg",
//   },
//   {
//     id: 2,
//     name: "Samuel",
//     rating: 5,
//     src:video2,
//     thumbnail: "/assets/tonia-thumb.jpg",
//   },
//   {
//     id: 3,
//     name: "Juan",
//     rating: 5,
//     src: video3,
//     thumbnail: "/assets/juan-thumb.jpg",
//   },
//   {
//     id: 4,
//     name: "Regan",
//     rating: 5,
//     src: video4,
//     thumbnail: "/assets/regan-thumb.jpg",
//   },
//   {
//     id: 5,
//     name: "Regan",
//     rating: 4,
//     src: video5,
//     thumbnail: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fcover%2520girl%2F&psig=AOvVaw0yO_NfaMJeuIVB4IVkKCav&ust=1753901496299000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLi34cTe4o4DFQAAAAAdAAAAABAE.jpg",
//   },
  
// ];


const videos = [
  {
    id: 1,
    name: "Tonia",
    rating: 5,
    src: video1,
    thumbnail: "/assets/tonia-thumb.jpg",
  },
  {
    id: 2,
    name: "Samuel",
    rating: 5,
    src: video2,
    thumbnail: "/assets/tonia-thumb.jpg",
  },
  {
    id: 3,
    name: "Juan",
    rating: 5,
    src: video3,
    thumbnail: "/assets/juan-thumb.jpg",
  },
  {
    id: 4,
    name: "Regan",
    rating: 5,
    src: video4,
    thumbnail: "/assets/regan-thumb.jpg",
  },
  {
    id: 5,
    name: "Regan",
    rating: 4,
    src: video5,
    thumbnail: "/assets/regan-thumb.jpg",
  },
  {
    id: 6,
    name: "Priya",
    rating: 4,
    src: video6,
    thumbnail: "/assets/priya-thumb.jpg",
  },
  {
    id: 7,
    name: "Ava",
    rating: 5,
    src: video7,
    thumbnail: "/assets/ava-thumb.jpg",
  },
  {
    id: 8,
    name: "Lily",
    rating: 4,
    src: video8,
    thumbnail: "/assets/lily-thumb.jpg",
  },
  {
    id: 9,
    name: "Maya",
    rating: 5,
    src: video9,
    thumbnail: "/assets/maya-thumb.jpg",
  },
];




const UGCSection = () => {
  const [modalVideo, setModalVideo] = useState(null);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -374, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 374, behavior: "smooth" });
    }
  };

  return (
    <div className="ugc-section">
      <motion.h2
        className="ugc-heading"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        UGC Videos For All <span className="highlight">Industries</span>
      </motion.h2>

      <div className="ugc-filters">

        {["Cosmetics & Beauty", "Apparel & Fashion", "Apps & Digital Services", "Health & Wellness", "Children & Family", "Technology & Gadgets", "Food & Beverage", "Home & Lifestyle", "Pets", "Automotive"].map((label, i) => (
          <button className={`ugc-btn ${i === 0 ? "active" : ""}`} key={i}>
            {label}
          </button>
        ))}
      </div>

      <div className="ugc-carousel-wrapper">
        <button className="nav-btn left" onClick={scrollLeft}>
          <FaArrowLeft />
        </button>

        <div className="ugc-carousel-container" ref={scrollRef}>
          {videos.map((vid) => (
            <div className="ugc-card" key={vid.id}>
              {/* <img src={vid.src} alt={vid.name} /> */}
              <div className="video-wrapper" onClick={() => setModalVideo(vid.src)}>
                <video
                  src={vid.src}
                  muted
                  playsInline
                  // autoPlay
                  loop
                  className="ugc-video-thumb"
                />
                <button className="play-btn">
                  <FaPlay />
                </button>
                </div>
              {/* <button className="play-btn" onClick={() => setModalVideo(vid.src)}>
                <FaPlay />
              </button> */}
              <div className="ugc-footer">
                <div className="avatar">{vid.name[0]}</div>
                <span>{vid.name}</span>
                <span className="rating">{vid.rating} ⭐</span>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-btn right" onClick={scrollRight}>
          <FaArrowRight />
        </button>
      </div>

      {modalVideo && (
        <div className="ugc-modal" onClick={() => setModalVideo(null)}>
          <video src={modalVideo} controls autoPlay />
        </div>
      )}
    </div>
  );
};

export default UGCSection;