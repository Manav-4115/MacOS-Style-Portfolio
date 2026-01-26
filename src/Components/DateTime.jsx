import React, { useEffect, useState } from "react";

const DateTime = () => {
  const [time, setTime] = useState("");

  const formatDate = () => {
    const now = new Date();

    let formatted = now.toLocaleString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    // remove comma & space after it
    formatted = formatted.replace(", ", " ");

    // remove space before AM/PM
    formatted = formatted.replace(" PM", "PM").replace(" AM", "AM");

    return formatted;
  };

  useEffect(() => {
    setTime(formatDate());

    const interval = setInterval(() => {
      setTime(formatDate());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return <p>{time}</p>;
};

export default DateTime;
