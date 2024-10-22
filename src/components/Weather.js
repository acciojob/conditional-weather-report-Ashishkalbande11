import React from 'react'

const Weather = (props) => {
    const[data] = props;

    const tempStyle = {
        color : data.temp > 20 ? "red" : "blue"
    }
  return (
    <div>
        <p>Temperature: <span style={tempStyle}>{data.temp}</span></p>
        <p>Conditions: {data.conditions}</p>
    </div>
  )
}

export default Weather