import React from "react";
import MacWindow from "./MacWindow";
import "./spotify.scss";

const Spotify = ({ windowName, setwindows, windows }) => {
  return (
    <MacWindow
      windowName={windowName}
      windows={windows}
      setwindows={setwindows}
      title="Spotify"
      width="420px"
      height="480px"
    >
      <div className="spotify-window">
        <iframe
          src="https://open.spotify.com/embed/album/2e7HNQJ0BcMoqwsVDwDhK8?utm_source=generator&theme=0"
          title="Spotify player"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </MacWindow>
  );
};

export default Spotify;
