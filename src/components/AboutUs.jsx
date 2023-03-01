import React from 'react'

const AboutUs = () =>{
    return(
        <div className="about" id='aboutUs'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 order-lg-1">
                        <h2 className="heading my-2 m-3 pb-3 text-lg-start ">About Us</h2>
                        <p className='lead text-mute'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

                        <p className='' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim consequuntur corporis repellat aliquid dicta facere error debitis vitae, quos dolorem?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, distinctio iure dolorum molestias amet deserunt quod mollitia itaque vero? Amet.</p>

                    </div>
                    <div className="col-lg-7 order-lg-0">
                        <img src="card-imgs/about.jpg" alt="" className=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs 