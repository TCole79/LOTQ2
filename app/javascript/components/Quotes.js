import React, { useState, useEffect } from 'react'
import axios from 'axios'

// const randomQuoteURL = 'https://tolkien-api.herokuapp.com/Quotes/random'
const randomQuoteURL = 'https://lotr-random-quote-api.herokuapp.com/api/quote'

const Quotes = () => {
  const [randomQuote, setRandomQuote] = useState([])
  // const [error, setError] = useState(null)

  const getRandom = async (randomQuoteURL) => {
    // setLoading(true)
    try {
      const { data } = await axios(randomQuoteURL)
      if (data) {
        setRandomQuote(data)
      }
      else {
        setRandomQuote([])
      }
    } catch (error) {
      console.log(error.response)
    }
    // setLoading(false)
  }


  // this to get a random quote
  const getRandomQuote = () => {
    getRandom(randomQuoteURL)
  }
  // this to get a specific character quote
  // const getSpecificQuote =

  // this only runs once on load
  useEffect(() => {
    getRandom(randomQuoteURL)
  }, [])

  return <section className="random-container">
    <div>
      <h1>{randomQuote.quote}</h1>
      <p>{randomQuote.author}</p>
      <img src={randomQuote.image} className="random-image"></img>
      <button type="submit" className="random-button" onClick={getRandomQuote}>Fetch Random Quote</button>
    </div>
  </section>

}
export default Quotes
