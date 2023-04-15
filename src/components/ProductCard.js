import React from 'react';
import ReactStars from "react-rating-stars-component"; 
import { Link,useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import watch3 from "../images/watch3.png";
import view from "../images/view.svg";
import addcart from "../images/add-cart.svg";
import wishlist from "../images/wishlist.svg";

const ProductCard = (props) => {
    const {grid}=props;
    let location = useLocation(); 
 console.log(props);
  return (
 <>
    <div className={` ${location.pathname =="/store" ? `gr-${grid}` : "col-3"} `}>
        <Link to=":id" className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link>
                <img src={wish} alt="wishlist" />
                </Link>
                </div>
            <div className="product-image">
                <img src={watch}  className='img-fluid' alt="product image" />
                <img src={watch3} className='img-fluid'  alt="product image" />

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
                <Link>
                    <img src={prodcompare} alt="compare" /></Link>
                    <Link>
                    <img src={view} alt="view" /></Link>
                    
                    <Link>
                    <img src={addcart} alt="addcart" /></Link>
                </div>
            </div>
        </Link>
        </div>
        <div className={` ${location.pathname =="/store" ? `gr-${grid}` : "col-3"} `}>
        <Link className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link>
                <img src={wish} alt="wishlist" />
                </Link>
                </div>
            <div className="product-image">
                <img src={watch}  className='img-fluid' alt="product image" />
                <img src={watch3} className='img-fluid'  alt="product image" />

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
                <Link>
                    <img src={prodcompare} alt="compare" /></Link>
                    <Link>
                    <img src={view} alt="view" /></Link>
                    
                    <Link>
                    <img src={addcart}alt="addcart" /></Link>
                </div>
            </div>
        </Link>
        </div>
 </>
        
  );
}

export default ProductCard;