import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navvbar from './navvbar'
import Contact from './Contact'
import About from './About'
import Footer from './Footer'
import Services from './Services'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navvbar/>
   <Services/>
   <About/>
   <Contact/>
   <Footer/>
   
   </>
  )
}

export default App
