import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState('');

  return (
    <>
      <header>
        <h1>Emoji Finder</h1>

        <p className='desc'>
          Finder emoji by keywords
        </p>

        <input placeholder='Enter here...'
        type="text" 
        value={input}
        onInput={(e) => { setInput(e.target.value)}}
        />
      </header>

      <main>

        <div className='container'>
          
          <div className='card'>
            <p className='emoji'>💯</p>
            <p className='title'>100</p>
            <p className='keywords'>Hundred, points, symbol, wow, win, perfect, parties</p>
          </div>


        </div>

      </main>
    </>
  )
}

export default App
