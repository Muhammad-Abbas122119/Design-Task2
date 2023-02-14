import React from 'react'
import './index.css'

import Header from './Header'
import MyCarousel from './MyCarousel'
import Cards from './Cards'
import FooterNavbar from './FooterNavbar'
import Footer from './Footer'

const App = () =>{
    return(
        <>
        <div className='app-container'>
        <Header />
        <MyCarousel />
        <Cards />
        <FooterNavbar />
        <Footer/>
        </div>
        </>
    )
}
export default App;