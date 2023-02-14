import React from 'react'
import facebook from '../img/facebook.svg'
import whatsApp from '../img/whatsapp.svg'
import linkedIn from '../img/linkedin.svg'

const FooterNavbar = ()=>{
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3 className="socail-title text-muted">
                        Platforms Where you can find us
                    </h3>

                    <div className="col">
                        <ul className="social-icons text-muted">
                            <a href="">
                            <img src={facebook} className='text-muted'/></a>
                            <a href="">
                            <img src={whatsApp} alt="img not found"/></a>
                            <a href=""style={{borderRadius:0}}>
                            <img src={linkedIn} alt="img not found"/></a>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FooterNavbar;