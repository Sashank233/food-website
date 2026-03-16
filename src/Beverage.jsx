import React, { useState } from 'react'
import './NonVeg.css';
import { useDispatch } from "react-redux";
import { addToCart } from "./addToCart";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
function Bevrage() {
const beverageItems = [
  {
    name: "Shakerato",
    price: 189,
    image: "./bev-1.jpg",
    desc: "Italian iced espresso shaken with ice and sugar until frothy."
  },
  {
    name: "Limonata",
    price: 159,
    image: "./bev-2.jpg",
    desc: "Refreshing Italian sparkling lemonade made with fresh lemons."
  },
  {
    name: "Aranciata",
    price: 159,
    image: "./bev-3.jpg",
    desc: "Italian sparkling orange soda with a sweet citrus flavor."
  },
  {
    name: "Affogato",
    price: 199,
    image: "./bev-4.jpg",
    desc: "Vanilla gelato topped with a shot of hot espresso."
  },
  {
    name: "Italian Iced Latte",
    price: 189,
    image: "./bev-5.jpg",
    desc: "Chilled espresso mixed with milk and ice for a refreshing coffee."
  },
  {
    name: "Sparkling Mineral Water",
    price: 129,
    image: "./bev-6.jpg",
    desc: "Classic Italian sparkling mineral water served chilled."
  },
  {
    name: "Peach Iced Tea",
    price: 179,
    image: "./bev-7.jpg",
    desc: "Refreshing iced tea with sweet peach flavor."
  },
  {
    name: "Italian Soda",
    price: 169,
    image: "./bev-8.jpg",
    desc: "Sparkling soda mixed with flavored syrup and ice."
  }
];
let dispatch = useDispatch();
 const itemsPerPage=4;
  const totalPages = Math.ceil(beverageItems.length/itemsPerPage);
  const [currentPage,setCurrentPage] = useState(1);
 const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = beverageItems.slice(indexOfFirstItem, indexOfLastItem);
 
return(
 <>
<ToastContainer position="top-right" autoClose={2000}/>
<div className="nonveg-container">
  
  {currentItems.map((item, index) => (
    <div className="nonveg-card" key={index}>
      <img src={item.image}/>
      <h3>{item.name}</h3>
      <p className="nonveg-desc">{item.desc}</p>

      <div className="nonveg-bottom">
          <span className="diary-price">₹{item.price}</span> 
               
             <button className="nonveg-btn" onClick={() => {
    dispatch(addToCart(item));
    toast.success("Item added to cart!");
  }}>
                            Add to Cart
              </button>
      </div>
    </div>
  ))}
</div>
  <div className="pagination">
  {Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index}
      className={currentPage === index + 1 ? "active" : ""}
      onClick={() => setCurrentPage(index + 1)}
    >
      {index + 1}
    </button>
  ))}
</div>
</>
)
}


export default Bevrage;
