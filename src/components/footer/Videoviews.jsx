
import { ArrowUpRight } from "lucide-react";

import video1 from "../../assets/videos/video1.mov";
import video2 from "../../assets/videos/video2.mov";
import video3 from "../../assets/videos/video3.mov";
import video4 from "../../assets/videos/video4.mov";
import video5 from "../../assets/videos/video5.mp4";
import video6 from "../../assets/videos/video6.mov";
import video7 from "../../assets/videos/video7.mov";
import video8 from "../../assets/videos/video8.mov";
import video9 from "../../assets/videos/video9.mp4";

// , video3, video4, video5

const videos = [video1, video2];

const Videoviews = () => {
  return (
    <section className="videoviews-wrapper">
      <div className="videoviews-container">
        <div className="videoviews-content">
          <h1 className="videoviews-title">
            Ready To 10x Your <span className="highlight">Video Views?</span>
          </h1>
          <p className="videoviews-description">
            Let’s turn your content into scroll-stopping videos that grow your audience and boost your engagement.
            Book a call and let’s bring your vision to life.
          </p>
          <button className="videoviews-button">
            Get Started <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="videoviews-video-grid">
           {videos.map((src, index) => (
    <div className="video-wrapper" key={index}>
      <video
        src={src}
        muted
        loop
        playsInline
        autoPlay
        className="video-thumb"
      />
      <div className="video-overlay">
        <span className="play-icon">▶</span>
      </div>
    </div>
  ))} 
        </div>
      </div>
    </section>
  );
};

export default Videoviews;
