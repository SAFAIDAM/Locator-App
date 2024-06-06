import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MapRender from './pages/MapRender';

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
    <Route 
    path="/"
    element={<MapRender />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
