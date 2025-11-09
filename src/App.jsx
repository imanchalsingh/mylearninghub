import React from 'react'
import CodingProfiles from './components/CodingProfiles'
import Nav from './components/Nav'
import Footer from './components/Footer'


function App() {


  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <Nav />
      <CodingProfiles />
      <Footer />
    </div>
  )
}

export default App