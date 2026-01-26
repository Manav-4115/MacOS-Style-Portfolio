import React, { useState } from 'react'
import './App.scss'
import Dock from './Components/Dock'
import './dock.scss'
import './Nav.scss'
import './Window.scss'
import Nav from './Components/Nav'
import MacWindow from './Windows/MacWindow'
import Github from './Windows/Github'
import Note from './Windows/Note'
import Resume from './Windows/Resume'
import Spotify from './Windows/Spotify'
import Cli from './Windows/Cli'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { resume } from 'react-dom/server'

const App = () => {
    const [windows, setwindows] = useState({
    github:false,
    note:false,
    resume:false,
    spotify:false,
    cli:false
})
  return (
    <main>
       <Dock windows={windows} setwindows={setwindows}/>
   <Nav/>
     {windows.github&&<Github windowName="github" windows={windows} setwindows={setwindows} />}
     {windows.note&&<Note windowName="note" windows={windows} setwindows={setwindows}/>}
    {windows.resume&& <Resume windowName="resume" windows={windows} setwindows={setwindows}/>}
      {windows.spotify&&<Spotify windowName="spotify" windows={windows} setwindows={setwindows}/>}
     {windows.cli&&<Cli windowName="cli" windows={windows} setwindows={setwindows}/>}
    </main>
  )
}

export default App