import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta'; 
import { Link } from 'react-router-dom';
import {HiOutlineArrowLeft} from "react-icons/hi";
import blog1 from "../images/blog-1.jpg";

const SingleBlog = () => {
  return (
    <>
    <Meta title={"Dynamic Blog Name"} />
 <BreadCrumb title="Dynamic Blog Name"/>
 <div className="blog-wrapper home-wrapper-2 py-5">
    <div className="container-xxl">
        <div className="row">          
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className='d-flex align-items-center gap-10'>
                  <HiOutlineArrowLeft className='fs-4'/> Go back to Blogs</Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img src={blog1} className='img-fluid w-100' alt="blog" />
                <p>
                Aliquam erat volutpat. Suspendisse sagittis venenatis enim, 
                eget porta nibh malesuada ut. Nullam feugiat euismod leo nec congue. 
                Vivamus aliquet tellus pharetra massa rutrum convallis. 
                Integer posuere massa nec iaculis ullamcorper. 
                Curabitur ligula nunc,
                 tincidunt ac lorem facilisis, euismod feugiat tellus.</p>
              </div>
            </div>
        </div>
    </div>
 </div>
    </>
  );
};

export default SingleBlog;