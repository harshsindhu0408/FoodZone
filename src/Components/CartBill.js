import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from "react-router-dom";
import {clearCart} from "../Utils/cartSlice"

const CartBill = (props) => {

    const total = props.total;
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    const dispatch = useDispatch();
    console.log(total/100);

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

  return (
    <div>
        
        <div className="right-checkout-div">
                <div className="main-box">
                    <h2> Bill Details </h2>
                    <div className="line1"></div>

                    <div className="t-items">
                        <span>Total Items</span>
                        <div>{cartItems.length}</div>
                    </div>

                    <div className="total-rup">
                        <span>Item Total</span>
                        <div> Rs. {total/100}</div>
                    </div>

                    <div className="del-fee">
                        <span>Delivery Fee</span>
                        {total ? ("Rs. 39") : ("Rs. 0")}
                    </div>

                    <div className="platform-fee">
                        <span>Platform Fee</span>
                        {total ? ("Rs. 2") : ("Rs. 0")}
                    </div>

                    <div className="contact-right-cart">
                        <form className="form-suggestions" onSubmit={handleSubmit}>
                            <input type="text" placeholder="Any suggestions? We will pass it on"/>
                        </form>
                    </div>

                    
                    <div className="line2"></div>
                    
                    <div className="to-pay">
                        <h3>TO PAY</h3>
                        <h4>Rs. {total ? (total/100 + 2 + 39) : ("0")}</h4>
                    </div>

                </div>

                <div className="btn-divv">
                    <Link to={"/checkout"}>
                        <button
                        className="checkout-btn"
                        >
                            Checkout
                        </button>
                    </Link>
                    <Outlet />

                    <button className="clear-cart-btn" onClick = {() => handleClearCart()}>Clear Cart</button>
                </div>
          
                    

            </div>

    </div>
  )
}

export default CartBill
