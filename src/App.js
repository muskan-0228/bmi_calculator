import "./App.css";
import "./index.css";
import React, {useState}  from "react";

function App() {
//we are making usestate here

const[weight , setWeight] = useState(0)
const[height , setHeight] = useState(0)
const[bmi , setBmi] = useState('')
const[message , setMessage] = useState('')

//logic part

let calcBmi = (event) => {
  event.preventDefault()

  if (weight === 0 || height === 0) {
    alert('Please enter a valid weight and height')
  } else {
    let calculatedBmi = (weight / (height * height) * 703)
    setBmi(calculatedBmi.toFixed(1))

    if (calculatedBmi < 25) {
      setMessage("You are underweight")
    } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
      setMessage("You are a healthy Person")
    } else {
      setMessage("You are OverWeight")
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
            <label> Height (in)</label>
            <input
              type="text"
              placeholder="Enter Height value"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
            />
          </div>
          <div>
            <button className='btn' type= 'submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='button'>Reload</button>
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