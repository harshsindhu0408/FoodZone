import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
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

    {/* Razorpay Payment Itegration script load */}
    const loadscript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = src;

            script.onload = () => {
                resolve(true);
            }

            script.onerror = () => {
                resolve(false);
            }

            document.body.appendChild(script);
        })
    }

    {/* Razorpay Payment Itegration Main Function */}
    const displayRazorpay = async (amount) => {
        const res = await loadscript('https://checkout.razorpay.com/v1/checkout.js');
        if(!res){
            alert('You are offline failed to load the Razorpay SDK');
            return;
        }

        const options = {
            key: "rzp_test_B8XBOF5jojC8Rn",
            key_secret:"C8QUbk9Mtqk742x4rZKdSAVE",
            currency: "INR",
            amount: amount,
            description:"for testing purpose",

            handler: function(response){
                alert(response.razorpay_payment_id);
                alert("Payment Successfull")
            },
            prefill: {
                name:"Harsh",
                email:"harshsindhu0404@gmail.com",
                contact:"9817554363"
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
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
                    <button onClick={() => displayRazorpay(total)} className="checkout-btn">
                            Checkout
                    </button>

                    <button className="clear-cart-btn" onClick = {() => handleClearCart()}>Clear Cart</button>
                </div>
          
                    

            </div>

    </div>
  )
}

export default CartBill
