import { useState } from 'react'
import Title from './Components/Title/Title'
import Products from './Components/Products/Products'
import HomeScreen from './Components/Screens/HomeScreen/Home'
import { Route, Routes } from 'react-router'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomeScreen/>}/>
    </Routes>
  )
}

export default App
