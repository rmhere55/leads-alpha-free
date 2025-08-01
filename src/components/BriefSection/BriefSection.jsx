// import React, { useState } from 'react';
// import './BriefSection.css';
// import { ArrowUpRight } from 'lucide-react';
// import { motion } from 'framer-motion';
// import CountUp from 'react-countup';

// import BriefSection1 from "../../assets/BriefSection1.png";
// import BriefSection2 from "../../assets/BriefSection2.png";

// const BriefSection = () => {
//   const [loading, setLoading] = useState(false);

//   const handleGenerateClick = () => {
//     setLoading(true);
//     setTimeout(() => {
//       alert("Brief generated!");
//       setLoading(false);
//     }, 2000);
//   };

//   return (
//     <div className="brief-section">
//       <h2 className="brief-heading">
//         Generate your brief with Leads Alpha’s AI brief generator.
//       </h2>

//       <div className="card-container">
//         {/* Left Card */}
//         <div>
//         <motion.div
//           className="card left-card"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.1 }}
//         >
          
//         </motion.div>

//           <div className="results">
//             <div>
//               <h3>+24.5m</h3>
//               <p>Views</p>
//             </div>
//             <div>
//               <h3>+89%</h3>
//               <p>Engagement rate</p>
//             </div>
//             <div>
//               <h3>+105k</h3>
//               <p>Likes</p>
//             </div>
//           </div>

//           <button className="explore-btn">
//             Explore Creators <ArrowUpRight size={16} />
//           </button>
//           </div>

//         {/* Right Card */}
//         <div>
//         <div className="card-video-area">
//             <button
//               className={`generate-btn ${loading ? 'loading' : ''}`}
//               onClick={handleGenerateClick}
//               disabled={loading}
//             >
//               {loading ? (
//                 <div className="spinner"></div>
//               ) : (
//                 <>
//                   Generate brief <ArrowUpRight size={16} />
//                 </>
//               )}
//             </button>
//           </div>
//         <motion.div
//           className="card right-card"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
            
//           <div className="calendar-video">
//             {/* <img src={BriefSection2}/> */}
//             <div className="play-button">▶</div>
//           </div>
//         </motion.div>

//           <div className="results">
//             <div>
//               <h3>+15m</h3>
//                 +<CountUp start={0} end={15} duration={2} separator="," />m

//               <p>Views</p>
//             </div>
//             <div>
//               <h3>+59%</h3>
//               <p>Engagement rate</p>
//             </div>
//             <div>
//               <h3>+2.4m</h3>
//               <p>Likes</p>
//             </div>
//             </div>
//           </div>
//       </div>
//     </div>



//   );
// };

// export default BriefSection;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import BriefSection1 from '../../assets/BriefSection1.png'; // Update path if needed
import BriefSection2 from '../../assets/BriefSection2.png'; // Update path if needed
import './BriefSection.css'; // Ensure all class styles exist

const BriefSection = () => {
  const [loading, setLoading] = useState(false);

  const handleGenerateClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate loading
  };

  return (
    <>
    <div>
    <span className="why-line"></span>

    </div>
    <div className="brief-section-container">
      {/* Left Card */}

      <div>
          

      <motion.div
        className="card left-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
          <h2 className="brief-heading">
       Generate your brief with Leads Alpha’s AI brief generator.
          </h2>
        <img
          src={BriefSection1}
          alt="Brief Visual 1"
          style={{ width: '100%', borderRadius: '10px' }}
        />
      </motion.div>
        <div className="results">
          <div><h3>+24.5m</h3><p>Views</p></div>
          <div><h3>+89%</h3><p>Engagement rate</p></div>
          <div><h3>+105k</h3><p>Likes</p></div>
        </div>
        <button className="explore-btn">
          Explore Creators <ArrowUpRight size={16} />
        </button>
</div>
      {/* Right Card */}
      <div>
        <div className="card-video-area">
          <button
            className={`generate-btn ${loading ? 'loading' : ''}`}
            onClick={handleGenerateClick}
            disabled={loading}
          >
            {loading ? (
              <div className="spinner" />
            ) : (
              <>
                Generate brief <ArrowUpRight size={16} />
              </>
            )}
          </button>
        </div>
      <motion.div
        className="card right-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="calendar-video">
            <img
            src={BriefSection2}
            alt="Brief Visual 2"
            style={{ width: '100%', borderRadius: '10px' }}
          />
          {/* <div className="play-button">▶</div> */}
        </div>
      </motion.div>
        <div className="results">
          <div><h3>+15m</h3><p>Views</p></div>
          <div><h3>+59%</h3><p>Engagement rate</p></div>
          <div><h3>+2.4m</h3><p>Likes</p></div>
        </div>
    </div>

    
    </div>
    </>
  );
};

export default BriefSection;
