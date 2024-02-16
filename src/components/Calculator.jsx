import PropTypes from "prop-types";
import { useState } from "react";
const Calculator = ({ workouts }) => {
  const [number, setNumber] = useState(workouts[0].numExercises);
  const [sets, setSets] = useState(3);
  const [speed, setSpeed] = useState(90);
  const [durationBreak, setDurationBreak] = useState(5);
  const duration = (number * sets * speed) / 60 + (sets - 1) * durationBreak;
  const mins = Math.floor(duration);
  const seconds = (duration - mins) * 60;

  return (
    <div>
      <form>
        <div>
          <label htmlFor="type">Type of workout</label>
          <select
            name="type"
            id="type"
            value={number}
            onChange={(e) => setNumber(Number(e.target.value))}
          >
            {workouts.map((item) => (
              <option key={item.name} value={item.numExercises}>
                {item.name} ({item.numExercises} excersizes)
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="sets">How many sets?</label>
          <input
            type="range"
            value={sets}
            min={1}
            max={5}
            onChange={(e) => setSets(e.target.value)}
          />
          <span>{sets}</span>
        </div>
        <div>
          <label htmlFor="speed">How fast are you?</label>
          <input
            type="range"
            min={30}
            max={180}
            step={30}
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
          <span>{speed} sec/exercise</span>
        </div>
        <div>
          <label htmlFor="durationBreak">Break Length</label>
          <input
            type="range"
            min={1}
            max={10}
            value={durationBreak}
            onChange={(e) => setDurationBreak(Number(e.target.value))}
          />
          <span>{durationBreak} min</span>
        </div>
      </form>
      <section>
        <button>-</button>
        <p>
          {mins > 10 ? mins : `0${mins}`}:
          {seconds > 10 ? seconds : `0${seconds}`}
        </p>
        <button>+</button>
      </section>
    </div>
  );
};

Calculator.propTypes = {
  workouts: PropTypes.array,
};
export default Calculator;
