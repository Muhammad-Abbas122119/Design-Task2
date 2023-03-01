import React, { useState } from 'react'
import Menu from './Array'


const Collection = () => {
    const [cardItems, setCardItems] = useState(Menu);

    // ------frontEnd Logic-----

    const cardFilter = (category)=>{
        let filter = Menu.filter((item)=>{
            return item.category === category;
        })
    
        setCardItems(filter)
        
        if(filter.length===0)
            setCardItems(Menu);
    }
    
    const bgChange = (msg) => {
    
        let btns = document.querySelectorAll('.btn-collec');
    
        for (let l = 0; l < btns.length; l++) {
    
            btns[l].classList.remove('bg-change');
            if (msg === 'all') {
                btns[0].classList.add('bg-change');
            }
            else if (msg === 'best') {
    
                btns[1].classList.add('bg-change');
            }
            else if (msg === 'feat') {
    
                btns[2].classList.add('bg-change');
            }
            else if (msg === 'new') {
    
                btns[3].classList.add('bg-change');
            }
        }
        cardFilter(msg);
    }
    // -----frontEnd Design-----
    return (
        <div id='collection'>
            <div className="col">
                <h2 className='heading fw-bold'>New Collection</h2>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col text-center pb-5 filter-button-group">
                        <button className='btn-collec' data-filter='*' onClick={() => bgChange('all')}>All</button>

                        <button className='btn-collec' data-filter='.best' onClick={() => bgChange('best')}>Best Sellers</button>

                        <button className="btn-collec" data-filter='.feat' onClick={() => bgChange('feat')}>Featured</button>

                        <button className="btn-collec" data-filter='.new' onClick={() => { bgChange('new') }}>New Arrival</button>

                    </div>
                </div>

                <div className="row gx-0 gy-4 collection-list">

                    {
                        cardItems.map((item) =>{
                            const {img ,name, price,id} = item;
                            
                            return(
                                <div key = {id} className="col-md-6 col-lg-4 col-xl-3 best">
                        <div className="card-body">
                            <img src={img} className='card-img' alt="" />

                            <span className="card-text sale">sale</span>

                            <span className='card-text d-block'>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>

                            <div className="card-text">{name}</div>
                            <div className="card-title fw-bold">$ {price}</div>

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

export default Collection;