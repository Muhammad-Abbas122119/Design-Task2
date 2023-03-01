import React from "react";

const Newsletter = () => {
    return (
        <div className="news py-5">
            <div className="container">

                <div className="row">
                    <div className="col">
                        <h2 className="heading">Newsletter Subscription</h2>
                    </div>
                </div>

                <div className="row">

                    <div className="col-12">
                        <p className="text-muted text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis reiciendis id natus saepe. Quaerat, quasi necessitatibus molestias pariatur porro veritatis quod cum voluptas, totam accusamus iste. Culpa praesentium nobis velit.</p>
                    </div>

                    <div className="col-12">
                        <div className="input-group my-3">
                            <input type="email" className="form-control lead" placeholder="Enter your Email Id" />
                            <button type="submit" className="btn btn-primary fw-bold">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;