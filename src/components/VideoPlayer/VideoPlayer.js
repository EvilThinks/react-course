import React, { PureComponent } from 'react';
import videoFile from './Video.mp4';
import './VideoPlayer.css';

class VideoPlayer extends PureComponent {
  videoRef = React.createRef();

  render() {
    return (
      <div className="video-player">
        <video className="video-player__source" ref={this.videoRef}>
          <source src={videoFile} type="video/mp4" />
        </video>
        <div>
          <button onClick={this.handleClickPlay}>Play</button>
          <button onClick={this.handleClickoStop}>Stop</button>
        </div>
      </div>
    );
  }

  handleClickPlay = () => {
    this.videoRef.current.play();
  };

  handleClickoStop = () => {
    this.videoRef.current.pause();
  };
}
export default VideoPlayer;
