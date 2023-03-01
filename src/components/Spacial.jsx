import React, { useState } from 'react'
import img from '../img/banner.JPG'
import { spacial } from './Array'

const Spacial = () => {

    const [spacialItems, setSpacialItems] = useState(spacial);

    return (
        <div className="spacial" id='spacials'>
            <div className="contianer">
                <div className="row w-100">

                    <div className="col">
                        <div className='heading h1 text-dark mb-3'>Spacial</div>
                    </div>
                </div>

                <div className="row w-100">
                    {
                        spacialItems.map((item) => {
                            const { id, img, name, price } = item;
                            return (
                                <div key={id+img} className="col-md-6 col-lg-4 col-xl-3 gx-0 gy-5">
                                    <div className="card-body">
                                        <img src={img} alt="" className="card-img" />
                                        <span className='fa fa-heart card-text'></span>
                                        <div className="card-text text-dark">{name}</div>
                                        <div className="card-title fw-bold">{price} $</div>
                                        <button className='add-to-cort-btn btn btn-md py-1 '>Add to Cort</button>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Spacial;