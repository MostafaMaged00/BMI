import { useState } from 'react'
import './App.css'

function App() {

  //create vars 
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi,setBmi] = useState('')
  const [message,setMessage] = useState('')


  let calcBmi = (e) => {
    e.preventDefault()
    if(weight === 0 || height === 0){
      alert('Please Enter your Height and Weight')

    }
    {
      let bmi = (weight/(height * height)*703)
      setBmi(bmi.toFixed(1))
    }

    if(bmi < 25){
      setMessage('You are underweight.')
    }
    else if (bmi >=25 && bmi <30){
      setMessage('You have a normal weight')
    }
    else if (bmi >= 25 && bmi < 29.9){
      setMessage('You have a overweight')
    }
    else{
      setMessage('You are obese!')
    }
    

  }


  //reload the app 
  let reload =()=>{
    window.location.reload()
  }

  // add Icon to your App 
  const heartIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        fill="red"
      />
    </svg>
  );

  return (
    <>
      <div className="App">
        <div className='container'>
          <div>{heartIcon}</div>
        <h2>BMI Calculater</h2>

          <form onSubmit = {calcBmi}>
            <div>
              <label htmlFor="">Weight </label>
              <input type="text" 
              placeholder='Enter your weight' 
              value={weight}
              onChange={(e)=> setWeight(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="">Height </label>
              <input type="text" 
              placeholder='Enter your height' 
              value={height}
              onChange={(e)=> setHeight(e.target.value)}
              />
            </div>
            <div>
              <button className='btn' type="submit">submit</button>
              <button className='btn btn-outline' onClick={reload} type="submit">Reload</button>

            </div>

            <div className='result-text'>
              <h3>Your BMI is :{bmi} </h3>
              <p>{message}</p>

            </div>
            
          </form>
        </div>



      </div>
    </>
  )
}

export default App
