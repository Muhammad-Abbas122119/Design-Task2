import React from 'react'
import logo from '../img/shopping-bag.png'
const Navbar = () => {
    return (
        <div style={{backgroundColor:"#dddddd" , position:'sticky' , top:'0' ,zIndex:'100',boxShadow:'0px 3px 9px 3px rgba(0,0,0,0.2)'}}>
            <div className="container">
                <div className="row">
                    <div className="col">

                        <nav className='p-0 navbar navbar-expand-lg'>

                            <a href="" className='navbar-brand'>
                                <img src={logo} alt="" />
                                <span className='h3'>Attire</span>
                            </a>

                            <span className='nav-icon-btn'>
                                <button>
                                    <i className="fa fa-shopping-cart">
                                        <sup>9</sup>
                                    </i>
                                </button>

                                <button className='text-danger'>
                                    <i className="fa fa-heart">
                                        <sup>2</sup>
                                    </i>
                                </button>

                                <button className='btn-search'>
                                    <i className="fa fa-search"></i>
                                </button>
                            </span>

                            <button className="navbar-toggler" data-bs-toggle='collapse' data-bs-target='#MyNavbarMenu'>

                                <span className='navbar-toggler-icon'></span>

                            </button>

                            <div className="collapse navbar-collapse" id='MyNavbarMenu'>
                                <ul className="navbar-nav">

                                    <li className="nav-item">
                                        <a href="#banner" className="nav-link active">Home</a>
                                    </li>
                                    
                                    <li className="nav-item">
                                        <a href="#collection" className="nav-link">Collection</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#populars" className="nav-link">Popular</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#blogs" className="nav-link">Blogs</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#spacials" className="nav-link">Spacial</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#aboutUs" className="nav-link">About us</a>
                                    </li>

                                </ul>
                            </div>

                        </nav>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar;