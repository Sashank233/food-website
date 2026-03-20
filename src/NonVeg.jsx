import React, { useState } from 'react'
import './NonVeg.css';
import { useDispatch } from "react-redux";
import { addToCart } from "./addToCart";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
function NonVeg() {
const nonVegItems = [
  {
    name: "Chicken Alfredo Pasta",
    price: 329,
    image: "./Nonveg-1.jpg",
    desc: "An Italian classic from Rome, featuring grilled chicken tossed in a silky Parmesan Alfredo sauce."
  },
  {
    name: "Grilled Chicken Steak",
    price: 399,
    image: "./NonVeg-2.jpg",
    desc: "Tender herb-marinated chicken flame-grilled to perfection, inspired by rustic Mediterranean kitchens."
  },
  {
    name: "Pepperoni Pizza",
    price: 349,
    image: "./NonVeg-3.jpg",
    desc: "Stone-baked Italian pizza layered with spicy pepperoni and bubbling mozzarella on a thin crust."
  },
  {
    name: "Garlic Butter Prawns",
    price: 429,
    image: "./NonVeg-4.jpg",
    desc: "Succulent coastal prawns sautéed in aromatic garlic butter and finished with fresh herbs."
  },
  {
    name: "Roasted Chicken Wings",
    price: 299,
    image: "./NonVeg-5.jpg",
    desc: "Slow-roasted wings seasoned with classic Italian herbs, delivering crispy skin and juicy flavor."
  },
  {
    name: "Chicken Parmesan",
    price: 349,
    image: "./nonveg-7.jpg",
    desc: "Crispy breaded chicken topped with marinara sauce and melted mozzarella, served Italian-style."
  },
  {
    name: "Spaghetti Bolognese",
    price: 359,
    image: "./nonveg-8.jpg",
    desc: "Traditional Italian spaghetti served with slow-cooked meat sauce made with tomatoes, herbs and minced meat."
  },
  {
    name: "Seafood Risotto",
    price: 449,
    image: "./nonveg-9.jpg",
    desc: "Creamy Italian arborio rice cooked with prawns and seafood, finished with parmesan and fresh herbs."
  },
  {
  name: "Chicken Bruschetta",
  price: 279,
  image: "./nonveg-10.jpg",
  desc: "Grilled chicken served on toasted bread with fresh tomatoes, basil and olive oil."
},
{
  name: "BBQ Chicken Wings",
  price: 319,
  image: "./nonveg-11.jpg",
  desc: "Juicy chicken wings glazed with smoky BBQ sauce and grilled to a sticky perfection."
},
{
  name: "Fish Fingers",
  price: 299,
  image: "./nonveg-12.jpg",
  desc: "Crispy golden fish strips coated in breadcrumbs, served with tartar sauce."
},
{
  name: "Chicken Meatballs",
  price: 289,
  image: "./nonveg-13.jpg",
  desc: "Tender chicken meatballs simmered in rich tomato sauce with Italian herbs."
},
{
  name: "Prawn Cocktail",
  price: 349,
  image: "./nonveg-14.jpg",
  desc: "Classic European starter with chilled prawns served in a creamy cocktail sauce."
},
{
  name: "Chicken Sausage Platter",
  price: 329,
  image: "./nonveg-15.jpg",
  desc: "Grilled chicken sausages served with sautéed vegetables and mustard dip."
},
{
  name: "Calamari Rings",
  price: 379,
  image: "./nonveg-16.jpg",
  desc: "Lightly battered squid rings fried crispy and served with garlic aioli."
},
{
  name: "Chicken Croquettes",
  price: 269,
  image: "./nonveg-17.jpg",
  desc: "Crispy fried rolls filled with creamy chicken mixture, inspired by European street food."
}
];
let dispatch = useDispatch();
 const itemsPerPage=8;
  const totalPages = Math.ceil(nonVegItems.length/itemsPerPage);
  const [currentPage,setCurrentPage] = useState(1);
 const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = nonVegItems.slice(indexOfFirstItem, indexOfLastItem);
 
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
          <span className="nonveg-price">₹{item.price}</span> 
               
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


export default NonVeg
