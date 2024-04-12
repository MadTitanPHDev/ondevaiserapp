import React from 'react'
import Header from '../Header'
// import Navbar from '../Navbar'
import Footer from '../Footer'
import './style.css'

const Layout = ({ children }) => {
  return (
    <div className='container' >
      <Header />
      {/* <Navbar /> */}
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout