import { useEffect, useState } from 'react'
import './App.css'
//import getAllCategories  from './api/apiCategories.js';
//import getQuestionAndAnswerByCategory from './api/apiGame.js';
//import {  login, logout, register, checkAuthToken } from './api/apiPlayer.js';
import HelloPlayer from './components/menu_home_user/HelloPlayer.jsx';
import PlayerCard from './components/cards/PlayerCard.jsx';
function App() {
  const [count, setCount] = useState(0)
  useEffect (() => {
  //test();
  }, [])


  
/*async function test () {
  const result = await getAllCategories();
  const result = await getQuestionAndAnswerByCategory(5, 4);
  const result = await checkAuthToken();
  console.log(result);
  const logeado = await login({
    email: "juan.perez@example.com",
    password: "12345"
  })
 const registrado = await register({
  player_name: "Carla",
  email: "carla@example.com",
  password: "12345",
  password_confirmation: "12345"
 })

const deslogearese = await logout();
console.log(deslogearese);
 
}*/


  return (
    <>
    <HelloPlayer player_name="Carla" />
    <PlayerCard 
    card_id="1" type="respuesta" text="kehwlrjyeñsuklri" category_name="chorradas" />
    </>
  )
}

export default App;
