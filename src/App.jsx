
import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const countriesPromises = fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())


function App() {


  return (
    <>
      <Suspense fallback={<h2>data loading.....</h2>}>
        <Countries countriesPromises={countriesPromises}></Countries>
      </Suspense>
    </>
  )
}

export default App
