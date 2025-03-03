import { useState } from "react";

const Statistics = ({ good, neutral, bad, total, promedio, positivo }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Promedio: {promedio}</p>
      <p>Positivos: {positivo}%</p>
    </div>
  );
};

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const total = good + neutral + bad;
  const promedio = total === 0 ? 0 : (good * 1 + neutral * 0 + bad * -1) / total;
  const positivo = total === 0 ? 0 : (good / total) * 100;

  return (
    <>
      <div>
        <h1>Give feedback</h1>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} promedio={promedio} positivo={positivo} />
    </>
  );
};

export default App;