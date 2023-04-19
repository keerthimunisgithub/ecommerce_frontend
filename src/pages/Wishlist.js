import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta'; 
import Container from '../components/Container';

const Wishlist = () => {
  return (
    <>
    <Meta title={"Wishlist"} />
 <BreadCrumb title="Wishlist"/>
 <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
            <div className="col-3">
                <div className="wishlist-card position-relative">
                <img src="images/cross.svg" 
                alt="cross" 
                className="position-absolute cross img-fluid"
                 />
                    <div className="wishlist-card-image">
                        <img src="images/tab_up.jpg" className='img-fluid w-100' alt="tab" />
                    </div>
                    <div className='py-3 px-3'>
                    <h5 className='title'>
                    Hornor T1 7.0 1GB RAM 8GB ROM 7 inch with Wi-Fi+3G Tablet
                    </h5>
                    <h6 className="price">$ 100</h6>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="wishlist-card position-relative">
                <img src="images/cross.svg" 
                alt="cross" 
                className="position-absolute cross img-fluid"
                 />
                    <div className="wishlist-card-image">
                        <img src="images/tab_up.jpg" className='img-fluid w-100' alt="tab" />
                    </div>
                    <div className='py-3 px-3'>
                    <h5 className='title'>
                    Hornor T1 7.0 1GB RAM 8GB ROM 7 inch with Wi-Fi+3G Tablet
                    </h5>
                    <h6 className="price">$ 100</h6>
                    </div>
                </div>
            </div>
            <div className="col-3">
                <div className="wishlist-card position-relative">
                <img src="images/cross.svg" 
                alt="cross" 
                className="position-absolute cross img-fluid"
                 />
                    <div className="wishlist-card-image">
                        <img src="images/tab_up.jpg" className='img-fluid w-100' alt="tab" />
                    </div>
                    <div className='py-3 px-3'>
                    <h5 className='title'>
                    Hornor T1 7.0 1GB RAM 8GB ROM 7 inch with Wi-Fi+3G Tablet
                    </h5>
                    <h6 className="price">$ 100</h6>
                    </div>
                </div>
            </div>
        </div>
    
 </Container>
    </>
  );
};

export default Wishlist;