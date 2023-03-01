import { Component } from "react"
import React from 'react'
import Navbar from './Navbar'
import Banner from "./Banner"
import Collection from './Collection'
import Spacial from "./Spacial"
import Offers from './Offers'
import Blogs from './Blogs'
import AboutUs from "./AboutUs"
import Popular from "./Popular"
import Newsletter from "./Newsletter"
import Footer from "./Footer"

class App extends Component{
    constructor(){
        super()
        this.state = {}
    }


    render (){
        return(
            <div>
                <Navbar />
                <Banner />
                <Collection />
                <Spacial />
                <Offers />
                <Blogs />
                <AboutUs />
                <Popular />
                <Newsletter />
                <Footer />
            </div>
        )
    }
}

export default App;