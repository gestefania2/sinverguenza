import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import getAllCategories  from './api/apiCategories.js';
import getQuestionAndAnswerByCategory from './api/apiGame.js';


function App() {
  const [count, setCount] = useState(0)
  useEffect (() => {
  test();
  }, [])


async function test () {
  //const result = await getAllCategories();
  //const result = await getQuestionAndAnswerByCategory(5, 4);
  console.log (result);
}





  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
