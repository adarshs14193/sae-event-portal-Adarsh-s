import React from 'react'
import './App.css'
import Navbar from './navbar/navbar.jsx'
import Events from './events/events.jsx'
import Footer from './footer/footer.jsx'


function App() {


  return (
    <>
    <div className="h-screen bg-white">
    <Navbar />
    <Events />
    <Footer />
    
    </div>
    </>
  )
}

export default App;
