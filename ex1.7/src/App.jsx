
import { useState } from 'react'

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [promedio, setPromedio] = useState(0)
  const [positivo, setPositivo] = useState(0)
  
  const updateStatistics = (updateGood, updateNeutral, updateBad) => {
    const updateTotal = updateGood + updateNeutral + updateBad;
      setTotal(updateTotal);
    const updatePostivo = (updateGood/updateTotal)*100;
      setPositivo(updatePostivo); 

      if (updateTotal == 0){
        setPromedio(0);
      
      } else {
        setPromedio((updateGood *1 + updateNeutral *0 + updateBad *-1)/ updateTotal);
      } 
  };
  



  const handleGood = () => {
    const updateGood = good + 1;
    setGood(updateGood);
    updateStatistics(updateGood, neutral, bad);
    console.log(promedio)

  }
  const handleNeutral = () => {
    const updateNeutral = neutral + 1;
    setNeutral(updateNeutral);
    updateStatistics(good, updateNeutral, bad);
    console.log(promedio)
    
  }

  const handleBad = () => {
    const updateBad = bad + 1;
    setBad(updateBad);
    updateStatistics(good, neutral, updateBad);
    console.log(promedio)
  }


  return (
    <><div>
      <h1>Give feedback</h1>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
    </div>
    <div>
      <h2>Statistics</h2>
      <p>Good:{good}</p>
      <p>Neutral:{neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Promedio: {promedio}</p>
      <p>Positivos: {positivo}%</p>
    </div>

    </>
  )
}


export default App