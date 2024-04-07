import React, { useRef } from 'react';
import './MainComponent.css';
import dirtyshoe from '../Images/shoedirty.jpeg'
import shoeclean from '../Images/shoeclean.jpeg'
import HeelsVideo from '../Vidoes/HeelsVideo.mp4'
import leather from '../Images/leatherclean.jpeg'


function MainComponent() {
  const videoRef = useRef(null);

  const handleVideoEnded = () => {
    videoRef.current.currentTime = 1;
    videoRef.current.play();
  }

  const handleVideoHover = () => {
    videoRef.current.classList.add('video-hover');
  }

  const handleVideoLeave = () => {
    videoRef.current.classList.remove('video-hover');
  }

  return (
    <div className="main-component">
      <h1>Welcome to FleetFloss Shoe Cleaning!</h1>
      <main>
        <h2>Our Services</h2>
        <div className="services-list">
          <div className="service">
            <img src={dirtyshoe} alt="Before cleaning" />
            <img src={shoeclean} alt="After cleaning" />
            <h3>Shoe Cleaning</h3>
            <p>We use the latest techniques and equipment to clean your shoes and make them look like new again.</p>
          </div>
          <div className="service">
            <video controls loop ref={videoRef} onEnded={handleVideoEnded} onMouseEnter={handleVideoHover} onMouseLeave={handleVideoLeave}>
              <source src={HeelsVideo} type='video/mp4'/>
              Your browser does not support the video tag.
            </video>
            <h3>Heels Cleaning</h3>
            <p>We use advanced techniques and state-of-the-art equipment to clean your heels and restore their original shine and appearance.</p>
          </div>
          <div className="service">
            <img src={leather} alt="Before cleaning" />
            <img src="/" alt="After cleaning" />
            <h3>Leather Care</h3>
            <p>We offer a variety of services to keep your leather shoes and accessories looking their best, including cleaning, conditioning, and polishing.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainComponent;
