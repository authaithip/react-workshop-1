import './App.css'

function App() {
  const myName = 'Authaithgip Chanoonan'
  const myAge = 25
  const num1 = 10
  const num2 = 20
  const randomNumber = Math.random()
  return (
    <>
      <h1>Hello World</h1>
      <h2 style={{color: 'green', fontSize: '24'}}>My Name is : {myName} , I'am {myAge} year old</h2>
      <h2 className='text '>Sum of {num1} + {num2} = {num1 + num2}</h2>
      <p>Random Number : {randomNumber}</p>
      {
        randomNumber < 0.5 ? <div>Your Lose</div> : <div>Your Win</div>
      }
    </>
  )
}

export default App
