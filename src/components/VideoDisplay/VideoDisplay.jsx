import videoSisters from '../VideoDisplay/video/Sist3rs.mp4';
import './styles.css';

export const VideoDisplay = () => {
  return (
    <video
      src={videoSisters}
      controls
      className="video-player container-fluid d-flex"
    />
  );
};
