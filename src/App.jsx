import React, { useState } from 'react'

import './App.scss'
import './dock.scss'
import './Nav.scss'
import './Window.scss'

import Dock from './Components/Dock'
import Nav from './Components/Nav'
import DateTime from './Components/DateTime'

import Github from './Windows/Github'
import Note from './Windows/Note'
import Resume from './Windows/Resume'
import Spotify from './Windows/Spotify'
import Cli from './Windows/Cli'

const App = () => {
  const [windows, setwindows] = useState({
    github: false,
    note: false,
    resume: false,
    spotify: false,
    cli: false
  })

  return (
    <>
       <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/bg.mp4" type="video/mp4" />
      </video>
    <main>
      {/* Background video */}
   

      <Dock windows={windows} setwindows={setwindows} />
      <Nav />

      {windows.github && (
        <Github windowName="github" windows={windows} setwindows={setwindows} />
      )}
      {windows.note && (
        <Note windowName="note" windows={windows} setwindows={setwindows} />
      )}
      {windows.resume && (
        <Resume windowName="resume" windows={windows} setwindows={setwindows} />
      )}
      {windows.spotify && (
        <Spotify windowName="spotify" windows={windows} setwindows={setwindows} />
      )}
      {windows.cli && (
        <Cli windowName="cli" windows={windows} setwindows={setwindows} />
      )}

    
    </main>
    </>
  )
}

export default App
