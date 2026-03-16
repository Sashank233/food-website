import React, { use } from 'react'
import { useDispatch ,useSelector} from "react-redux";
import { clearCart, removeCart } from "./addToCart";
import { incrementQty } from "./addToCart";
import { decrementQty } from "./addToCart";
import {useState} from 'react';
import './Cart.css'
import { applyCoupon, resetCoupon } from "./CouponSlice";
import {QRCode} from 'react-qr-code';
import emailjs from '@emailjs/browser';
import { addOrder } from './OderSlice';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {

  const [inputValue, setInputValue] = useState('');
let {code,discount,applied,message} = useSelector(globalState=>globalState.coupon);
    let dispatch = useDispatch();
    let cartItems = useSelector(globalState=>globalState.cart);
    // calculate the total amount
    const totalAmount = cartItems.reduce( (total, item) => total + item.price * item.quantity, 0);
    const [discountper , setDiscountPer] = useState(0);
    // calculate the total discount percentage
    const finalDiscountPercent = discountper + discount;
    // calculate the discount amount
    const discountAmount = (finalDiscountPercent*totalAmount)/100;
    // calculate the gst
    const couponDiscountAmount = (discount * totalAmount) / 100;
    const Amt = totalAmount-discountAmount;
    const gst = (0.18*Amt);
    // calculate the final amount
    const finalAmount =totalAmount - discountAmount + gst- couponDiscountAmount;

     let listItems = cartItems.map(item=>
    (
        <li key={item.id} className="cart-item">
  <img
    src={item.image}
    className="cart-img"
  />

  <div className="cart-details">
    <strong>{item.name}</strong>
    <p>₹{item.price} × {item.quantity}</p>
    <p className="subtotal">
      ₹{item.price * item.quantity}
    </p>

    <div className="cart-controls">
      <button
        className="qty-btn"
        onClick={() => dispatch(incrementQty(item))}
      >
        +
      </button>

      <button
        className="remove-btn"
        onClick={() => {dispatch(removeCart(item));
          if(cartItems.length === 1)
          {
            dispatch(resetCoupon());
          }
           toast.error("Item removed from cart!");

        }}
      >
        Remove
      </button>

      <button
        className="qty-btn"
        onClick={() => dispatch(decrementQty(item))}
      >
        -
      </button>
    </div>

  </div>
</li>
    )

 
  );
 let [checkOut, setCheckOut] =useState(false);
 let [paymentMethod, setPaymentMethod] = useState(" ");
  const [customerEmail,setCustomerEmail] = useState('');
  const generateOrderId = () => {
  const random = Math.floor(1000 + Math.random() * 9000);
  return "FOB-" + Date.now().toString().slice(-6) + random;
};

let purchaseDetailes ={
  date:new Date().toLocaleString(),
  items:[...cartItems],
totalPrice:finalAmount.toFixed(2),
};


const handleCheckout = () => {

  // ✅ Call function here
  const orderId = generateOrderId();

  const templateParams = {
    order_id: orderId,

    orders: cartItems.map(item => ({
      name: item.name,
      price: (item.price * item.quantity).toFixed(2),
      units: item.quantity
    })),

    cost: {
      shipping: 50,
      tax: gst.toFixed(2),
      total: finalAmount.toFixed(2)
    },

    email: customerEmail
  };

  emailjs.send(
    "service_2mj3eut",
    "template_30lz10b",
    templateParams,
    "TMHNi62tLYmOzXGw1"
  )
  .then(() => alert(`mail sent successfully! Your order ID is ${orderId}`))
  .catch((error) => {
    console.error(error);
    alert("Email sending failed");
  });
};
  


 return (
  <>
   <ToastContainer position="top-right" autoClose={2000}/>
    {cartItems.length === 0 ? (
      <h2 style={{ textAlign: "center", marginTop: "80px" }}>
        Your cart is empty 🧺
      </h2>
    ) : (
      <div className="cart-page">

        {/* LEFT SIDE — ITEMS */}
        <div className="cart-left">
          <h1>Order List 📃</h1>

          <ul className="cart-grid">
            {listItems}
          </ul>
        </div>

        {/* RIGHT SIDE — SUMMARY */}
        <div className="cart-right">

          <h3>Order Summary</h3>

          <div className="summary-line">
            <span>Total</span>
            <span>₹{totalAmount}</span>
          </div>

          {discountper > 0 && (
            <div className="summary-line">
              <span>Discount</span>
              <span>- ₹{discountAmount.toFixed(2)}</span>
            </div>
          )}

          <div className="summary-line">
            <span>GST (18%)</span>
            <span>₹{gst.toFixed(2)}</span>
          </div>

          <hr />

          <div className="summary-line">
            <strong>Final Amount</strong>
            <strong>₹{finalAmount.toFixed(2)}</strong>
          </div>

          {/* Discount buttons */}
          <div className="discount-controls">
            <button className="discount-btn" onClick={() => setDiscountPer(10)}>10%</button>
            <button className="discount-btn" onClick={() => setDiscountPer(20)}>20%</button>
            <button className="discount-btn" onClick={() => setDiscountPer(30)}>30%</button>
          </div>

          {/* Coupon */}
          <input
            type="text"
            className="coupon-input"
            placeholder="Enter coupon code"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <button
            className="coupon-btn"
            onClick={() => dispatch(applyCoupon(inputValue))}
          >
            Apply Coupon
          </button>
  {applied && (
            <p className="coupon-message">🎉 {message}</p>
          )}

          <button
            className="cart-action-btn"
            onClick={() => {
              dispatch(clearCart());
              dispatch(resetCoupon());
              toast.error("You have cleared the cart!");
            }}
          >
            Clear Cart
          </button>

        
          {/* Checkout */}
          <button
            className="checkout-btn"
            onClick={() => {setCheckOut(true);
            }}
          >
            Check-Out 💰
          </button>

          {/* Payment options */}
          {checkOut && (
            <div className="payment-methods">
              <button onClick={() => setPaymentMethod("card")}>
                Card-payment 💳
              </button>

              <button onClick={() => setPaymentMethod("upi")}>
                UPI-payment 📱
              </button>

              <label>Enter Gmail for confirmation</label>

              <input
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                placeholder="enter your email"
              />

              <button onClick={handleCheckout}>
                Confirm Order
              </button>
            </div>
          )}

          {paymentMethod === "card" && (
            <strong>This payment method is currently not available</strong>
          )}

          {paymentMethod === "upi" && (
            <div className="qr-wrapper">
              <h4>Scan to Pay</h4>
              <QRCode
                value={`upi://pay?pa=sashankparupudi910@okaxis&pn=SashankStore&am=${finalAmount.toFixed(2)}&cu=INR`}
              />
            </div>
          )}
             <button className="check-Order"
          onClick={()=> dispatch(addOrder(purchaseDetailes))}
          >
          check-order
          </button>
        </div>

      </div>
    )}
  </>
);
}

export default Cart
