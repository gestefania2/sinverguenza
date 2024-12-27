import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import HelloPlayer from './components/menu_home_user/HelloPlayer.jsx'
import PlayerCard from './components/cards/PlayerCard.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import PlayerSelection from './pages/player_selector/PlayerSelection.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    //test();
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <HelloPlayer player_name="Carla" />
      <PlayerCard 
        card_id="1" 
        type="respuesta" 
        text="kehwlrjyeñsuklri" 
        category_name="chorradas" 
      />
      <PlayerSelection />
    </BrowserRouter>
  )
}

export default App
