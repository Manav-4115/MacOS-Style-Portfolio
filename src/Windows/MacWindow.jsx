import React, { Children } from 'react'
import { Rnd } from 'react-rnd'

const MacWindow = ({children,height="50vh",width="40vw",windowName,setwindows,windows}) => {
  return (
   <Rnd
   default={{
    width:width,
    height:height,
    x:300,
    y:200
   }}>
    <div className="window">
        <div className="nav">
            <div className="dots">
                <div onClick={()=> setwindows(state => ({
                  ...state,
                  [windowName]: false
                }))
              } className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
                
        </div>
         <div className="title"></div>
            <p>manavuttekar -zsh</p>
            
        </div>
       
        <div className="main-content">
            {children}</div>
            </div>
   </Rnd>
  )
}

export default MacWindow