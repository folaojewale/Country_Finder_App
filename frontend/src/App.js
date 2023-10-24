import React, { useState } from 'react'
import CountryDetails from './views/countryDetails'
import ErrorDetails from './views/errorDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Particlesbackground from './components/particleBackground';
import './App.css';

function App() {
  //state variables
  const [countryData, setCountryData] = useState(null)
  const [error, setError] = useState(null)

  //handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    const inputElement = e.target.querySelector('input[name="name"]')
    const searchTerm = inputElement.value

    //fetches data
    const data = await fetchData(searchTerm)

    //check if it was successful
    if(data){
      setCountryData(data)
      setError(null)
    } else{
      setError("No result found")
    }
  }

  const fetchData = async (name) => {
    try {
      //GET request
      const response = await fetch(`/findCountry/?name=${name}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json'
        }
      })

      //check HTTP response
      if (response.ok){
        const json = await response.json()
        return json
      } else{
        console.log('Failed to fetch data: ' + response.statusText)
      }
      //catch exceptions 
    } catch(error){
      setError('An error occurred: ' + error.message)
    }
    return null
  }
  return (
    <>
    <Particlesbackground/>
    <div className="App">
      <div className='title'>
      <b>Fola Ojewale - Bounce Insight Coding Challenge!</b><br></br><br></br>
      <b>Search for any country!</b>
      </div>
      <div className='message'>
      </div>
      <form className="searchBox" onSubmit={handleSubmit}>
        <input type="text" placeholder="Search.." name="name" />
        <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
      </form>
      {countryData && !error ? <CountryDetails country={countryData} /> : null}
      {error ? <ErrorDetails error={error}/> : null}
    </div>
    </>
  )
}

export default App;
