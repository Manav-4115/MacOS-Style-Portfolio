import React from "react";
import { Rnd } from "react-rnd";
import { motion } from "framer-motion";

const MacWindow = ({
  children,
  height = "50vh",
  width = "40vw",
  windowName,
  setwindows,
  windows,
  title = "manavuttekar - zsh",
}) => {
  return (
    // <motion.div
    //   initial={{ scale: 0.9, opacity: 0 }}
    //   animate={{ scale: 1, opacity: 1 }}
    //   exit={{ scale: 0.9, opacity: 0 }}
    //   transition={{ duration: 0.25, ease: "easeOut" }}
    // >
      <Rnd
        bounds="parent"
        default={{
          width,
          height,
          x: 300,
          y: 200,
        }}
        dragHandleClassName="window-nav"
      >
        <div className="window">
          {/* NAV BAR */}
          <div className="nav window-nav">
            <div className="dots">
              <div
                className="dot red"
                onClick={() =>
                  setwindows((s) => ({ ...s, [windowName]: false }))
                }
              ></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>

            <p className="title">{title}</p>
          </div>

          {/* CONTENT */}
          <div className="main-content">{children}</div>
        </div>
      </Rnd>
   
  );
};

export default MacWindow;
