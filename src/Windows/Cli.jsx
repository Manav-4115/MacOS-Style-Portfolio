import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import './Cli.scss'

const Cli = ({windowName,setwindows,windows}) => {

  const commands = {
    
   about: {
  description: 'About me',
  usage: 'about',
  fn: () => `
Welcome to Manav's Portfolio Terminal 🚀
Type "help" to see all available commands
`
},
    skills: {
      description: 'My skills',
      usage: 'skills',
      fn: () => `
Frontend : React, HTML, CSS, Javascript
Backend  : Node.js, Express
Database : MongoDB, MySQL
Tools    : Git, GitHub, Figma   
`
    },

    projects: {
      description: 'My projects',
      usage: 'projects',
      fn: () => `
1. Attendance Monitoring System
2. Mini Figma Editor
3. TPO Portal System
4. Portfolio Website
`
    },

    education: {
      description: 'My education',
      usage: 'education',
      fn: () => `
SSC  : Dajikaka Gadgil English Medium School
HSC  : Sarhad Junior College
Degree: AIDS (Artificial Intelligence & Data Science)
`
    },

    contact: {
      description: 'Contact details',
      usage: 'contact',
      fn: () => `
Email  : manavuttekar3@gmail.com
GitHub : github.com/Manav-4115
LinkedIn: linkedin.com/in/manav 
`
    },

    echo: {
      description: 'Echo a passed string',
      usage: 'echo <text>',
      fn: (...args) => args.join(' ')
    }
  }

  return (
    <MacWindow windowName={windowName} windows={windows} setwindows={setwindows}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={`
================================
Hi 👋 I am Manav
Welcome to Manav's Portfolio Terminal 🚀
Type "help" to see all available commands
================================`
}
          promptLabel={'ManavUttekar:~$'}
          promptLabelStyle={{ color: 'green' }}
        />
      </div>
    </MacWindow>
  )
}

export default Cli
