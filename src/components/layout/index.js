import React from 'react'
import Header from '../header'
import Footer from '../footer'

const Layout = ({children}) => {
  return (
    <div className={'min-h-screen min-w-screen'}>
      <Header />
        <div className='min-h-screen'>
          {children}
        </div>
      <Footer/>
    </div>
  )
}

export default Layout
