import React from 'react'

const Offers = () => {
    return (
        <div className="offers mt-5 mb-5">
            <div className="container">
                <div className="row">

                    <div className="col text-center text-white
                     d-flex flex-column
                     align-items-md-start
                     align-items-center 
                     justify-content-center"
                     style={{ height: "500px" ,paddingLeft:'40px' }}
                    >

                        <div className='h4'>
                            Discount Up to 25%
                        </div>
                        <h1 style={{fontSize:'60px'}}>
                            Grand Sale Offer!
                        </h1>
                        <button className='offers-btn-buy btn btn-md py-1 bg-light'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers;