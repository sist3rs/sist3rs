import videoSisters from '../VideoDisplay/video/sisters.mp4';
import './styles.css';

export const VideoDisplay = () => {
  return (
    <video
      src={videoSisters}
      controls
      autoplay
      muted
      playsinline
      className="video-player container-fluid d-flex"
    />
  );
};
