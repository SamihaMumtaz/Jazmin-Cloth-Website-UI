import React from 'react';
import { Link } from 'react-router-dom';
import video1 from '../../../assets/videos/home/video-1.mp4';
import video2 from '../../../assets/videos/home/video-2.mp4';
import video3 from '../../../assets/videos/home/video-3.mp4';

const VideoCard = ({ videoSrc, link, text, videoKey }) => {
  return (
    <div className="col-lg-4 col-md-6 col-6 mb-4">
        <div className="video">
            <video key={videoKey} autoPlay loop muted width="100%">
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="video-text">
                <p>{text}</p>
                <Link to={link}>Shop Now</Link>
            </div>
        </div>
    </div>
  );
};

const Video = () => {
  return (
    <div className="container">
        <div className="row align-items-center">
            <VideoCard videoSrc={video1} link="/Formals" text="Formals" videoKey="video1" />
            <VideoCard videoSrc={video2} link="/Velvet" text="Velvet" videoKey="video2" />
            <VideoCard videoSrc={video3} link="/Unstitched-Winter" text="Unstitched Winter" videoKey="video3" />
        </div>
    </div>
  );
};

export default Video;
