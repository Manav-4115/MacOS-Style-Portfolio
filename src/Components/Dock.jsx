import React from 'react'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Note from '../Windows/Note'
import Spotify from '../Windows/Spotify'

const Dock = ({windows,setwindows}) => {
  return (
    <footer className='dock github'>
        <div onClick={()=>{setwindows(state=>({...state,github:true}))}} className="icon github">
            <img src="/doc-icons/github.svg" alt="" /></div>

        <div onClick={()=>{setwindows(state=>({...state,note:true}))}}
        className="icon note">
            <img src="/doc-icons/note.svg" alt="" /></div>

        <div onClick={()=>{window.open(`https://www.linkedin.com/in/manav-uttekar-ab97333a8/`,"_blank")}}
              className="icon link">
            <img src="/doc-icons/link.svg" alt="" /></div>

        <div onClick={()=>{window.open("https://calendar.google.com/","_blank")}}
         className="icon calender">
            <img src="/doc-icons/calender.svg" alt="" /></div>
<div
  onClick={() => {
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=manavuttekar2@gmail.com",
      "_blank"
    );
  }}
  className="icon mail"
>
  <img src="/doc-icons/mail.svg" alt="" />
</div>


        <div onClick={()=>{setwindows(state=>({...state,spotify:true}))}} 
        className="icon spotify">
            <img src="/doc-icons/spotify.svg" alt="" /></div>

        <div onClick={()=>{setwindows(state=>({...state,resume:true}))}} 
        className="icon pdf">
            <img src="/doc-icons/pdf.svg" alt="" /></div>  

        <div onClick={()=>{setwindows(state=>({...state,cli:true}))}}
        className="icon cli">
            <img src="/doc-icons/cli.svg" alt="" /></div>  

    </footer>
  )
}

export default Dock