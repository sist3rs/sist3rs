import videoSisters from '../VideoDisplay/video/sisters.mp4';
import './styles.css';

export const VideoDisplay = () => {
  return (
    <video
      src={videoSisters}
      controls="false" autoplay="autoplay"
      muted
      loop
      playsinline
      className="video-player container-fluid d-flex"
    />
  );
};
