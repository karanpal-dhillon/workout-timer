import { useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";

const Time = ({ formatTime }) => {
  const [time, setTime] = useState(formatTime(new Date()));

  useEffect(
    function() {
      const id = setInterval(() => setTime(formatTime(new Date())), 1000);
      return () => clearInterval(id);
    },
    [time],
  );

  return <time>{time}</time>;
};

Time.propTypes = {
  formatTime: PropTypes.func,
};
export default Time;
