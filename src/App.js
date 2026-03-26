import "./App.css";
import "./index.css";
import React, {useState} from "react";

function App() {
  //we are making usestate here

  const[weight, setWeight] = useState(0)
  const[height, setHeight] = useState(0)
  const[bmi, setBmi] = useState('')
  const[message, setMessage] = useState('')

  let calcBmi = (event) => {
    //preventing submitting to the server
    event.preventDefault()

  //making bmi calculator formula
  if (weight === 0 || height === 0) {
    alert('Please enter a valid weight and height')
  } 
  else {
    let calculatedBmi = (weight / (height * height) * 703)
    setBmi (bmi.toFixed(1))
  

  //logic for message

  if(calculatedBmi < 18.5){
    setMessage("You are underweight")
  } else if (calculatedBmi >= 18.5 && calculatedBmi < 25) {
    setMessage("You are a healthy person")
  } else {
    setMessage("You are overweight")
  }

}
}

let reload = () => {
  window.location.reload()
}
  return (
    <div className="app">
      <div className="container">
        <h2 className="center">BMI Calculator</h2>
        <form on onSubmit={calcBmi}>
          
          <div>
            <label> Weight (lbs)</label>
            <input
              type="text"
              placeholder="Enter Weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label> Height (inch)</label>
            <input
              type="text"
              placeholder="Enter Height value"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className= 'btn' type= 'submit'>Submit</button>
            <button className= 'btn btn-outline' onClick={reload} type='button'>Reload</button>
          </div>
        </form>
        <div className="center">
          <h3> Your BMI is : {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );

}
export default App;
