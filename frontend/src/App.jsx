import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import Home from './Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Header/>
    <Home/>
    <Footer/>
     
   </>
  )
}

export default App
