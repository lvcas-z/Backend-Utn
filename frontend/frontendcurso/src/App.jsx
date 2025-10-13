import React from 'react'
import { Route, Routes } from "react-router"
import HomeScreen from "./Screens/HomeScreen/HomeScreen"
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen"
import LoginScreen from "./Screens/LoginScreen/LoginScreen"

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginScreen/>} />
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/register" element={<RegisterScreen/>} />
        <Route path="/gome" element={<HomeScreen/>} />
      </Routes>
    </div>
  )
}

export default App
