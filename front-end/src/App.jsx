import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MapRender from './pages/MapRender';
import Map from './components/MapSpace'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
    <Route 
    path="/"
    element={<MapRender />} />
    {/* <Route 
    path="/map"
    element={<Map />} /> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App
