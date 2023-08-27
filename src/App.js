import React from 'react';
import './App.css';
import boxes from './boxes';
import Box from "./Box"

function App(props) {
  const [squares,setSquares]=React.useState(boxes)
  // const styles={
  //  backgroundColor:"green",
  //   backgroundColor:props.darkMode?"green":"red"
     
  // }
  
  const squareElement=squares.map(square=>(
   <Box on={square.on} key={square.key}/>
  ))
  return(
    <main>
      {squareElement}
    </main>
  )
}

export default App;
