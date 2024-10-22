
import React, { useState } from "react";
import './../styles/App.css';
import Weather from "./WeatherDisplay";

const def = {temperature : 0, conditions : "cool"}
const App = () => {
  const [data, setData] = useState(def);

  useEffect(()=>{
    setTimeout(()=>{
      setData({temperature : 25, conditions : "Sunny"})
    }, 1000)
  })
  return (
    <div>
        {/* Do not remove the main div */}
        <Weather prop={data}/>
    </div>
  )
}

export default App
