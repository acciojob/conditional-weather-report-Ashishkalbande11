
import React, { useState } from "react";
import './../styles/App.css';
import Weather from "./Weather";

const def = {temp : 0, conditions : "cool"}
const App = () => {
  const [data, setData] = useState(def);

  useEffect(()=>{
    setTimeout(()=>{
      setData({temp:25, conditions: "Sunny"})
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
