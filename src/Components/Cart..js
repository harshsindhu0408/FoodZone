import { useSelector, useDispatch } from "react-redux";
import FoodItem from "./FoodItem"
import {clearCart} from "../Utils/cartSlice"
import { useState } from "react";
import CartBill from "./CartBill";

const Cart = () => {

    // const [total, setTotal] = useState(0);
    // setTotal(total + FoodItem.price);
    // console.log(total);

    const cartItems = useSelector((store) => store.cart.items);
    let total = 0;
    for(let i = 0; i < cartItems.length; i++) {
        total = total + cartItems[i].price;
    }
    
    return (

        <div>
            
            <div className="main-cart-div">
            
            <div className="left-items-div">
                <div className="cart-heading-main">
                    <h1 className="cart-heading">Food cart items - {cartItems.length}</h1>
                </div>
                
                <div className="cart-items-div">
                    {cartItems.map( (item) => (
                        <FoodItem key={item.id} {...item} />
                    ))}
                </div>

            </div>
            
            <CartBill total={total}/>
            
            </div>
        
        </div>

    );
};

export default Cart;
