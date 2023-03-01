import React from 'react'
import img from '../img/shopping-bag.png'
const Banner = () => {
    return (
        <div id='banner'>
    <div className="container">
        <div className="row pt-2">
            <div className="col">
                <div id='myCarousel' className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner" >
                        
                        <div className='carousel-item '>
                        <div className="carousel-caption">
                            <h2>Best Collection</h2>
                            <h1>New Arrivals</h1>
                            <button>Ordered Now</button>
                        </div>

                        </div>

                        <div className="carousel-item active">
                        <div className="carousel-caption">
                            <h2 className='text-capitilize'>Best Price & Offers</h2>
                            <h1 className='text-uppercase'>New Session</h1>
                            <button>Buy Now</button>
                        </div>
                        </div>
                    </div>

                    <a href="#myCarousel" className="carousel-control-prev" data-bs-slide='prev'>
                        <span className='carousel-control-prev-icon'></span>
                    </a>
                    <a href="#myCarousel" className="carousel-control-next" data-bs-slide='next'>
                        <span className="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Banner;