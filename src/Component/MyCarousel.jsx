import React from 'react'
import C1 from '../img/1.JPG'
import C2 from '../img/2.JPG'
import C3 from '../img/3.JPG'

const MyCarousel = () => {
    return(
    <div className="container">
        <div className="row pt-2">
            <div className="col">
                {/* FOR MAIN CAROUSEL */}
                <div className="carousel slide" id='my-carousel' data-ride='carousel'>
                    <div className="carousel-inner">

                        <div className="carousel-item active">
                            <img src={C1} alt="" />

                            <div className="carousel-caption">
                                <h4>Computer Knowledge</h4>
                                <p className='lead'>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
                            </div>

                        </div>

                        <div className="carousel-item">
                            <img src={C2} alt="" />

                            <div className="carousel-caption">
                                <h4>Tablet Knowledge</h4>
                                <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <img src={C3} alt="" />

                            <div className="carousel-caption">
                                <h4>Phone knowledge</h4>
                                <p className='lead'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>

                        {/* FOR CAROUSEL CONTROLER (ARROWS) */}
                    <a href="#my-carousel" className='carousel-control-prev' data-slide='prev'>
                        <span className='carousel-control-prev-icon'></span>
                    </a>

                    <a href="#my-carousel" className='carousel-control-next' data-slide='next'>
                        <span className='carousel-control-next-icon'></span>
                    </a>

                    {/* FOR CAROUSEL INDICATORS  */}

                    <ol className='carousel-indicators'>
                        <li data-target='#my-carousel' data-slide-to='0' className='active'></li>

                        <li data-target='#my-carousel' data-slide-to='1'></li>

                        <li data-target='#my-carousel' data-slide-to='2'></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MyCarousel;