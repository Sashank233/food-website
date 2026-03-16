import React, { useState } from 'react'
import './NonVeg.css';
import { useDispatch } from "react-redux";
import { addToCart } from "./addToCart";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
function Diary() {
const dairyItems = [
  {
    name: "Cappuccino",
    price: 169,
    image: "./diary-1.jpg",
    desc: "Classic Italian coffee made with espresso, steamed milk and thick foam."
  },
  {
    name: "Caffè Latte",
    price: 179,
    image: "./diary-2.jpg",
    desc: "Smooth espresso blended with creamy steamed milk for a mild coffee taste."
  },
  {
    name: "Caffè Macchiato",
    price: 159,
    image: "./diary-3.jpg",
    desc: "Rich espresso topped with a small layer of steamed milk foam."
  },
  {
    name: "Flat White",
    price: 189,
    image: "./diary-4.jpg",
    desc: "Velvety espresso drink with finely textured steamed milk."
  },
  {
    name: "Cioccolata Calda",
    price: 199,
    image: "./diary-5.jpg",
    desc: "Traditional Italian hot chocolate, thick, creamy and intensely rich."
  },
  {
    name: "Latte Macchiato",
    price: 179,
    image: "./diary-6.jpg",
    desc: "Steamed milk 'stained' with espresso for a layered coffee experience."
  },
  {
    name: "Mocha Latte",
    price: 199,
    image: "./diary-7.jpg",
    desc: "Espresso combined with chocolate and steamed milk for a sweet Italian-style drink."
  },
  {
    name: "Vanilla Latte",
    price: 199,
    image: "./diary-8.jpg",
    desc: "Smooth latte infused with subtle vanilla flavor and creamy milk."
  }
];
let dispatch = useDispatch();
 const itemsPerPage=4;
  const totalPages = Math.ceil(dairyItems.length/itemsPerPage);
  const [currentPage,setCurrentPage] = useState(1);
 const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = dairyItems.slice(indexOfFirstItem, indexOfLastItem);
 
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


export default Diary;
