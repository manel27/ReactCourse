import React from 'react'
import Joke from './Components/Joke'

/*
Challenge: Think critically - how would you pass in a prop that wasn't
a string datatype.

E.g. Say you want each Joke component to receive an "upvotes" and "downvotes"
prop that is a number, as well as a prop with an array of comments, and a boolean
of whether the joke is a pun (`isPun`).
*/

function App() {

  return (
    <div className='jokesConatiner'>
        <Joke 
          upvotes = {3}
          downvotes = {-1}
          isPun = {true}
          setup = "I got my daughter a fridge for her birthday."
          punchline = "I can't wait to see her face light up when she opens it."
          />
        <Joke punchline = "It's hard to explain puns to kleptomaniacs because they always take things literally." 
        />        
    </div>
  )
}

export default App
