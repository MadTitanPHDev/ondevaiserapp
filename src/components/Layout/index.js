import React from 'react'
import "./style.css"
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Header />
        
        <main>
            {children}
        </main> 

        <Footer />
    </div>
  )
}

export default Layout