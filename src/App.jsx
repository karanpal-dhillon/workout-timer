import "./App.css";
import { useEffect, useState } from "react";
import Calculator from './components/Calculator'

function App() {
  const [time, setTime] = useState(formatTime(new Date()));
  const partOfDay = time.slice(-2); //AM-PM part

  const workouts = [
    {
      name: "Full-Body workout",
      numExercises: partOfDay === "AM" ? 9 : 8,
    },
    {
      name: "Arms + Legs",
      numExercises: 6,
    },
    {
      name: "Arms Only",
      numExercises: 3,
    },
    {
      name: "Legs Only",
      numExercises: 4,
    },
    {
      name: "Core only",
      numExercises: partOfDay === "AM" ? 5 : 4,
    },
  ];

  function formatTime(date) {
    return new Intl.DateTimeFormat("en", {
      month: "short",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(date);
  }

  useEffect(function () {
    const id = setInterval(() => setTime(formatTime(new Date())), 1000)
    return () => clearInterval(id)
  }, []);

  return (
    <main>
      <h1>WORKOUT TIMER</h1>
      <time>For your workout on {time}</time>
      <Calculator workouts={workouts}/>
    </main>
  );
}

export default App;