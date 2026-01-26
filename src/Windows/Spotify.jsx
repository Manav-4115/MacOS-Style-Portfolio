import React from 'react'
import MacWindow from './MacWindow'
import './spotify.scss'
const Spotify = ({windowName,setwindows,windows}) => {
  return (
    <div>
      <MacWindow  windowName={windowName} windows={windows} setwindows={setwindows} >
        <div className="spotify-window">
        <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/album/2e7HNQJ0BcMoqwsVDwDhK8?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </MacWindow>
    </div>
  )
}

export default Spotify
