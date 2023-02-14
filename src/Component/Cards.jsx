import React from 'react'

import card1 from '../img/card1.jpg'
import card2 from '../img/card2.jpg'
import card3 from '../img/card3.jpg'
import card4 from '../img/card4.jpg'

const Cards = () => {

    return (
        <>
            <div className="container">
                <div className="row my-5">

                    <div className="col-md-6 col-lg-5 m-auto">
                        <div className="card ">

                            <div className="row no-gutters">

                                <div className="col-8">
                                    <div className="card-body">
                                        <div className='text-success card-text'>Coding</div>
                                        <h5 className='card-title'>Coding Design</h5>
                                        <div className='post-date card-text'>Jan 12</div>
                                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, molestias.</p>
                                        <a href="">continue reading...</a>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <img src={card1} className='card-img h-100'  />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-5 m-auto">
                        <div className="card ">

                            <div className="row no-gutters">

                                <div className="col-8">
                                    <div className="card-body">
                                        <div className='text-success card-text'>Design</div>
                                        <h5 className='card-title'>Web Design</h5>
                                        <div className='post-date card-text'>Jan 12</div>
                                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, molestias.</p>
                                        <a href="">continue reading...</a>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <img src={card2} className='card-img h-100' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-5 m-auto">
                        <div className="card ">

                            <div className="row no-gutters">

                                <div className="col-8">
                                    <div className="card-body">
                                        <div className='text-success card-text'>Coding</div>
                                        <h5 className='card-title'>Coding Design</h5>
                                        <div className='post-date card-text'>Jan 12</div>
                                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, molestias.</p>
                                        <a href="" className='card-link'>continue reading...</a>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <img src={card3} className='card-img h-100'  />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-5 m-auto">
                        <div className="card ">

                            <div className="row no-gutters">

                                <div className="col-8">
                                    <div className="card-body">
                                        <div className='text-success card-text'>Coding</div>
                                        <h5 className='card-title'>Programming Design</h5>
                                        <div className='post-date card-text'>Jan 12</div>
                                        <p className='card-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, molestias.</p>
                                        <a href="" className='card-link'>continue reading...</a>
                                    </div>
                                </div>

                                <div className="col-4">
                                    <img src={card4} className='card-img h-100'  />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;