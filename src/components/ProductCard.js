import React from 'react';
import ReactStars from "react-rating-stars-component"; 
import { Link,useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch3 from "../images/watch3.png";
import view from "../images/view.svg";
import addcart from "../images/add-cart.svg";

const ProductCard = (props) => {
    const {grid}=props;
    let location = useLocation(); 
  return (
 <>
    <div className={` ${location.pathname ==="/product" ? `gr-${grid}` : "col-3"} `}>
        <Link to={`${
        location.pathname === '/' 
        ? '/product/:id'
        : location.pathname === "/product/:id"
        ? "/product/:id":":id"
        }`} 
        className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <button className='border-0 bg-transparent'>
                <img src={wish} alt="wishlist" />
                </button>
                </div>
            <div className="product-image">
                <img src={watch}  className='img-fluid' alt="image3" />
                <img src={watch3} className='img-fluid'  alt="productimage1" />

            </div>
            <div className="product-details">
                <h6 className='brand'>Havels</h6>
                <h5 className="product-title"> 
                Kids Headphones bulk 10 pack multi coloured for students.
                </h5>
                <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                <p className={`description ${grid===12 ? "d-block":"d-none"}`}>
                Aliquam erat volutpat. Suspendisse sagittis venenatis enim, eget porta nibh malesuada ut. Nullam feugiat euismod leo nec congue. Vivamus aliquet tellus pharetra massa rutrum convallis. Integer posuere massa nec iaculis ullamcorper. Curabitur ligula nunc, tincidunt ac lorem facilisis, euismod feugiat tellus.</p>

                <p className="price">$100.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                <button className='border-0 bg-transparent'>
                    <img src={prodcompare} alt="compare" /></button>
                    <button className='border-0 bg-transparent'>
                    <img src={view} alt="view" /></button>
                    
                    <button className='border-0 bg-transparent'>
                    <img src={addcart} alt="addcart" /></button>
                </div>
            </div>
        </Link>
        </div>
        <div className={` ${location.pathname ==="/product" ? `gr-${grid}` : "col-3"} `}>
        <Link to={`${
        location.pathname === '/' 
        ? '/product/:id'
        : location.pathname === "/product/:id"
        ? "/product/:id":":id"
        }`} 
        className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <button className='border-0 bg-transparent'>
                <img src={wish} alt="wishlist" />
                </button>
                </div>
            <div className="product-image">
                <img src={watch}  className='img-fluid' alt="productimage" />
                <img src={watch3} className='img-fluid'  alt="pimage2" />

            </div>
            <div className="product-details">
                <h6 className='brand'>Havels</h6>
                <h5 className="product-title"> 
                Kids Headphones bulk 10 pack multi coloured for students.
                </h5>
                <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                <p className={`description ${grid===12 ? "d-block":"d-none"}`}>
                Aliquam erat volutpat. Suspendisse sagittis venenatis enim, 
                eget porta nibh malesuada ut. Nullam feugiat euismod leo nec congue. 
                Vivamus aliquet tellus pharetra massa rutrum convallis.
                 Integer posuere massa nec iaculis ullamcorper.
                  Curabitur ligula nunc, tincidunt ac lorem facilisis, 
                  euismod feugiat tellus.</p>
                <p className="price">$100.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                <button className='border-0 bg-transparent'>
                    <img src={prodcompare} alt="compare" /></button>
                    <button className='border-0 bg-transparent'>
                    <img src={view} alt="view" /></button>
                    
                    <button className='border-0 bg-transparent'>
                    <img src={addcart}alt="addcart" /></button>
                </div>
            </div>
        </Link>
        </div>
 </>
        
  );
}

export default ProductCard;