import React from 'react'
import Header from '../../components/header'
import Footer from '../../components/footer'

const Layout = ({children}) => {
  return (
    <div className={'min-h-screen w-screen'}>
      <Header />
        <div className='min-h-screen'>
          {children}
        </div>
      <Footer/>
    </div>
  )
}

export default Layout
