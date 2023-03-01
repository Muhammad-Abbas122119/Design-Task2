import React from 'react'

const Footer = () =>{
    return(
        <footer className='bg-dark text-white py-3'>
            <div className="container">
                <div className="row">

                    <div className="col-lg-3 col-md-6">
                        <h5 className='text-uppercase text-white pb-2'>Attire</h5>
                        <p className="text-white ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse placeat quidem accusantium magni sed dicta, accusamus similique vero nulla at nisi in repellendus optio dolorum?</p>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li className='py-1'>
                                <i className="fas fa-chevron-right mx-2"></i>
                                <a href="" className='text-decoration-none text-white'>Home</a>
                            </li>
                            <li className='py-1'>
                                <i className="fas fa-chevron-right mx-2"></i>
                                <a href="" className='text-decoration-none text-white'>Collection</a>
                            </li>
                            <li className='py-1'>
                                <i className="fas fa-chevron-right mx-2"></i>
                                <a href="" className='text-decoration-none text-white'>Blog</a>
                            </li>
                            <li className='py-1'>
                                <i className="fas fa-chevron-right mx-2"></i>
                                <a href="" className='text-decoration-none text-white'>About</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <h5>Contact Us</h5>
                        
                        <div className='d-flex py-1'>
                            <i className="fas fa-map-marked-alt "></i>
                            <span className='px-2 text-center'> Streat No.5 Khan's Valley pabbi Pakistan</span>
                        </div>
                        <div className='d-flex py-1  align-items-center'>
                            <i className="fas fa-envelope "></i>
                            <span className='px-2 text-center 'title='muhammad.abbas.edu.now@gmail.com'>muhammad.abbas.edu.now .....</span>
                        </div>
                        <div className='d-flex py-1'>
                            <i className="fas fa-phone "></i>
                            <span className='px-2 text-center'>+923179734653</span>
                        </div>
                       
                    </div>

                    <div className="col-md-6 col-lg-3 px-lg-5">
                        <h5>Follow Us</h5>

                        <ul className='list-unstyled d-flex fs-2'>
                            <li>
                                <a href="#" className='text-white text-decoration-none px-1'><i className="fab fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="" className="text-white text-decoration-none px-1">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-white text-decoration-none px-1">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="" className="text-white text-decoration-none px-1">
                                    <i className="fab fa-pinterest"></i>
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;