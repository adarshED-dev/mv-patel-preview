import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './assets/main.css'


// Page
import Home from './pages/Home'
import Brands from './pages/Brands'
import Outlets from './pages/Outlets'
import About from './pages/About'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import BathProductsCollection from './pages/BathProductsCollection'
import TilesCollection from './pages/TilesCollection'
import LightsCollection from './pages/LightsCollection'
import OthersCollection from './pages/OthersCollection'

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/brands" element={<Brands />} />
      <Route path="/test" element={<h1>TEST PAGE WORKS</h1>} />
      <Route path="/outlets" element={<Outlets />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/bath-products" element={<BathProductsCollection />} />
      <Route path="/tiles" element={<TilesCollection />} />
      <Route path="/lights" element={<LightsCollection />} />
      <Route path="/others" element={<OthersCollection />} />
    </Routes>
  )
}

export default App
