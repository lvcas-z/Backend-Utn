import { useState } from 'react'
import Title from './Components/Title/Title'
import Products from './Components/Products/Products'
import HomeScreen from './Components/Screens/HomeScreen/Home'
import { Route, Routes } from 'react-router'
import CreateProductScreen from './Components/Screens/CreateProductScreen/CreateProductScreen'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomeScreen/>}/>
      <Route path='/create' element={<CreateProductScreen/>}/>
    </Routes>
  )
}

export default App
