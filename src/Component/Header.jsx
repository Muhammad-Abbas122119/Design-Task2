import React from 'react'
import logo from '../img/logo.png'
const Header = () => {
    return (

        <div className="header">
            <div className="container">

                <nav className="navbar navbar-expand-lg">
                    <h1 className="navbar-brand text-light pr-md-5"><img src={logo} />Design Company</h1>

                    <button className='navbar-toggler' data-toggle='collapse' data-target='#collapse-this'>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className='collapse navbar-collapse' id='collapse-this'>

                    <ul className="navbar-nav menu mr-auto">
                        <li className="nav-item"><a href="">Home</a></li>
                        <li className="nav-item"><a href="">About</a></li>

                        <li className="nav-item dropdown">
                            <a href="" className='dropdown-toggle' data-toggle='dropdown'>Topics</a>
                            <div className="dropdown-menu">
                                <a href="" className="dropdown-item">Technology</a>
                                <a href="" className="dropdown-item">Web Development</a>
                                <div className="dropdown-divider"></div>
                                <a href="" className="dropdown-item">Java Script</a>
                                <a href="" className="dropdown-item">Python</a>
                            </div>
                            </li>
                            
                        <li className="nav-item"><a href="">Contact Us</a></li>
                    </ul>

                    <form action="" className='form-inline' >
                        <input type="text" className='form-control' placeholder='Search' />

                        <button className='btn btn-sm btn-outline-info btn-light ml-sm-2 my-2 my-sm-0'>search</button>
                    </form>

                    </div>

                </nav>
            </div>
        </div>

    )
}

export default Header;