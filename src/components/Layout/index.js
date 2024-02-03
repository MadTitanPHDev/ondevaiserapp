import React from 'react'
import Header from '../Header'
// import Navbar from '../Navbar'
import Footer from '../Footer'
import Card from '../Card'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {/* <Navbar /> */}
      <Card />
      <Card />
      <Card />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout