import React, { useState } from 'react'
import TextForm from './components/TextForm'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<TextForm heading='THis is TExtutils'/>} ></Route>
    </Routes>
    </BrowserRouter>
   
   {/* <TextForm heading='THis is TExtutils'/> */}
    </>
  )
}

export default App