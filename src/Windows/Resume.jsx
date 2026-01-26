import React from 'react'
import MacWindow from './MacWindow'
import './resume.scss'

const Resume = ({windowName,setwindows,windows}) => {
  return (
    <MacWindow windowName={windowName} windows={windows} setwindows={setwindows}>
        <div className="resume-window">
            <embed src="/Manav_Uttekar_Resume_Updated.pdf" frameborder="0"></embed>
        </div>
    </MacWindow>
  )
}

export default Resume