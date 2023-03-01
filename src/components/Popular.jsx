import React, { useState } from 'react'
import { popBestSelling, popOnSale, popTopRated } from './Array'

const Popular = () => {
    const [best, setBest] = useState(popBestSelling);
    const [sale, setSale] = useState(popOnSale);
    const [rated, setRated] = useState(popTopRated);
    return (
        <div className="popular" id='populars'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className='heading'>Popular of the Year</h2>
                    </div>
                </div>

                <div className="row text-center">

                    <div className="col-md-6 col-lg-4 row">
                        <div className="col text-center  position-relative ">
                            <h5>On Sale</h5>

                        </div>
                        {
                            sale.map((item) => {
                                const { id, img, name, price } = item;
                                return (
                                    <div key ={id+'sale'} className="row gx-2 mb-2 gy-2">
                                        <div className="col-6 text-end">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="col-6 pt-3 text-start">
                                            <div>{name}</div>
                                            <div>{price} $</div>
                                        </div>
                                    </div>)
                            })
                        }

                    </div>

                    <div className="col-md-6 col-lg-4 row">
                        <div className="col text-center position-relative">
                            <h5>Top Rated</h5>

                        </div>
                        {
                            rated.map((item) => {
                                const { id, img, name, price } = item;
                                return (
                                    <div key={id+'rated'} className="row gx-2 mb-2 gy-2">
                                        <div className="col-6 text-end">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="col-6 pt-3 text-start">
                                            <div>{name}</div>
                                            <div>{price} $</div>
                                        </div>
                                    </div>)
                            })
                        }

                    </div>

                    <div className="col-md-6 col-lg-4 row">
                        <div className="col text-center mt-lg-0 mt-5 position-relative">
                            <h5>Best Selling</h5>

                        </div>
                        {
                            best.map((item) => {
                                const { id, img, name, price } = item;
                                return (
                                    <div key={id+'best'} className="row gx-2 mb-2 gy-2">
                                        <div className="col-6 text-end">
                                            <img src={img} alt="" />
                                        </div>
                                        <div className="col-6 pt-3 text-start">
                                            <div>{name}</div>
                                            <div>{price} $</div>
                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Popular;