import { blurredBgImage } from '@public/images/bg-base-64';
import React, { useEffect } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export const VideoPlayer = ({ options, onReady }) => {
  const videoRef = React.useRef(null);
  const playerRef = React.useRef(null);
  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;
      const player = (playerRef.current = videojs(videoElement, options, () => {
        onReady && onReady(player);
      }));
    } else {
      const player = playerRef.current;
      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [onReady, options, videoRef]);

  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player className="rounded-2xl overflow-hidden">
      <video
        ref={videoRef}
        id="my-video"
        className="video-js rounded-2xl my-2 mx-auto overflow-hidden"
        controls
        autoPlay
        preload="auto"
        width="640"
        height="264"
        poster={blurredBgImage}
      >
        <p className="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank" rel="noreferrer">
            supports HTML5 video
          </a>
        </p>
      </video>
    </div>
  );
};
export default VideoPlayer;
