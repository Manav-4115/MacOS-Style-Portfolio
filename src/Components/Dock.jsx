import React from "react";

const Dock = ({ windows, setwindows }) => {
  const icons = [
    {
      name: "github",
      img: "/doc-icons/github.svg",
      action: () => setwindows((s) => ({ ...s, github: true })),
    },
    {
      name: "note",
      img: "/doc-icons/note.svg",
      action: () => setwindows((s) => ({ ...s, note: true })),
    },
    {
      name: "link",
      img: "/doc-icons/icons8-linkedin.svg",
      action: () =>
        window.open(
          "https://www.linkedin.com/in/manav-uttekarr/",
          "_blank"
        ),
    },
    {
      name: "calender",
      img: "/doc-icons/calender.svg",
      action: () =>
        window.open("https://calendar.google.com/", "_blank"),
    },
    {
      name: "mail",
      img: "/doc-icons/mail.svg",
      action: () =>
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=manavuttekar2@gmail.com",
          "_blank"
        ),
    },
    {
      name: "spotify",
      img: "/doc-icons/spotify.svg",
      action: () => setwindows((s) => ({ ...s, spotify: true })),
    },
    {
      name: "pdf",
      img: "/doc-icons/pdf.svg",
      action: () => setwindows((s) => ({ ...s, resume: true })),
    },
    {
      name: "cli",
      img: "/doc-icons/cli.svg",
      action: () => setwindows((s) => ({ ...s, cli: true })),
    },
  ];

  return (
    <footer className="dock">
      {icons.map((icon) => (
        <div
          key={icon.name}
          onClick={icon.action}
          className={`icon ${icon.name}`}
        >
          <img src={icon.img} alt={icon.name} />
        </div>
      ))}
    </footer>
  );
};

export default Dock;
