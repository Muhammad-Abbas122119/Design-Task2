import React,{useState} from 'react'
import { blogs } from './Array';
const Blogs = () =>{
const [card,setCard] = useState(blogs);

    return(
        <div className="blog" id='blogs'>
            <div className="container">
                
                <div className="row">
                    <div className="col">
                        <h2 className='heading'>Latest Blogs</h2>
                    </div>
                </div>

                <div className="row gy-5">
                    {
                        card.map((blog)=>{
                            const{id,img,title,desc} = blog;

                            return(
                                <div key={id+img} className="col-md-6 col-lg-4">
                        <div className="card-body">
                            <img src={img} alt="" className="card-img w-100" />
                            <h3 className="card-title text-center text-md-start">{title}</h3>
                            <p className="lead card-text my-2 text-md-start">{desc}</p>
                            <a href="" className="card-link read-more ">read more </a>
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

export default Blogs;