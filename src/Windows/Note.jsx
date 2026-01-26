import React ,{useEffect, useState} from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Markdown from 'react-markdown'
import MacWindow from './MacWindow'
import './note.scss'

const Note = ({windowName,setwindows,windows}) => {
    const [markdown, setmarkdown] = useState(null)
    useEffect(()=>{
        fetch('./note.txt')
        .then(res=> res.text())
        .then(text=>setmarkdown(text))
    },[])
  return (
   <MacWindow windowName={windowName} windows={windows} setwindows={setwindows} >
        <div className="note-window">
            {
                markdown ? <SyntaxHighlighter language='typescript' style={atelierDuneDark}>{markdown}</SyntaxHighlighter>: <p>loading...</p>
            }
        </div>
   </MacWindow>
  )
}

export default Note