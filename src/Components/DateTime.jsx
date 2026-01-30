import React, { useEffect, useState, useCallback } from "react";

const DateTime = () => {
  const [time, setTime] = useState("");

  const formatDate = useCallback(() => {
    const now = new Date();

    return now
      .toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      .replace(", ", " ")
      .replace(" AM", "AM")
      .replace(" PM", "PM");
  }, []);

  useEffect(() => {
    setTime(formatDate());

    // sync exactly to minute change (macOS-like)
    const now = new Date();
    const delay = (60 - now.getSeconds()) * 1000;

    const timeout = setTimeout(() => {
      setTime(formatDate());

      const interval = setInterval(() => {
        setTime(formatDate());
      }, 60000);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [formatDate]);

  return <p className="datetime">{time}</p>;
};

export default DateTime;
