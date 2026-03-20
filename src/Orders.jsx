import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Orders.css";
import { clearOrder } from "./OderSlice";

function Orders() {

  const dispatch = useDispatch();

  const orderHistory = useSelector((state) => state.order);

  // If no orders
  if (!orderHistory || orderHistory.length === 0) {
    return (
      <div className="orders-page">
        <h2 className="orders-title">Order History</h2>
        <p className="no-orders">No orders placed yet.</p>
      </div>
    );
  }

  return (
    <div className="orders-page">

      <h2 className="orders-title">Order History</h2>

      <div className="orders-container">

        {orderHistory.map((order) => (

          <div className="order-card" key={order.id}>

            <div className="order-header">

              <span className="order-date">
                {order.date}
              </span>

              <span className="order-total">
                ₹{order.totalPrice}
              </span>

            </div>

            <ul className="order-items">

              {order.items.map((item) => (

                <li className="order-item" key={item.id}>

                  <span className="item-name">
                    {item.name}
                  </span>

                  <span className="item-details">
                    ₹{item.price} × {item.quantity}
                  </span>

                </li>

              ))}

            </ul>

          </div>

        ))}

      </div>

      {/* <button
        className="clear-order-btn"
        onClick={() => dispatch(clearOrder())}
      >
        Clear Orders
      </button> */}

    </div>
  );
}

export default Orders;