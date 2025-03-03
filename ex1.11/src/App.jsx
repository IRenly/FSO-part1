import { useState } from "react";

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td align="left">{text}:</td>
      <td align="left"> {value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, total, promedio, positivo }) => {
  if (total == 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <h2>Statistics</h2>
      <StatisticLine text="good" value ={good} />
      <StatisticLine text="neutral" value ={neutral} />
      <StatisticLine text="bad" value ={bad} />
      <StatisticLine text="total" value ={total} />
      <StatisticLine text="promedio" value ={promedio} />
      <StatisticLine text="positivo" value ={`${positivo}%`} />
    </div>
  );
};

const Button = ({name, handleClick}) => {
  return (
    <button onClick={handleClick}>{name}</button>
  )
} 


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
        <Button name='good' handleClick={() => setGood(good + 1)}></Button>
        <Button name='neutral' handleClick={() => setNeutral(neutral + 1)}></Button>
        <Button name='bad' handleClick={() => setBad(bad + 1)}></Button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} promedio={promedio} positivo={positivo} />
    </>
  );
};

export default App;