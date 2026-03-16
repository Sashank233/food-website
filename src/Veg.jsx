import React, { useState } from 'react'
import './Veg.css'
import { useDispatch } from "react-redux";
import { addToCart } from "./addToCart";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
function Veg() {

 const vegItems = [
  {
    name: "Margherita Pizza",
    price: 249,
    image: "./veg-1.jpg",
    desc: "Classic Italian pizza with fresh basil, mozzarella & tangy tomato sauce baked on a thin crust."
  },
  {
    name: "Pasta Alfredo",
    price: 279,
    image: "./veg-2.jpg",
    desc: "Creamy white sauce pasta tossed with butter, garlic and parmesan for a rich smooth taste."
  },
  {
    name: "Veg Lasagna",
    price: 299,
    image: "./veg.jpg",
    desc: "Layered pasta sheets baked with vegetables, tomato sauce & melted cheese perfection."
  },
  {
    name: "Bruschetta",
    price: 199,
    image: "./veg-4.jpg",
    desc: "Toasted bread topped with fresh tomatoes, olive oil, garlic & herbs for a refreshing bite."
  },
  {
    name: "Caprese Salad",
    price: 189,
    image: "./veg-5.jpg",
    desc: "Fresh mozzarella, tomatoes & basil drizzled with olive oil — light & authentic Italian."
  },
  {
    name: "Garlic Bread",
    price: 169,
    image: "./veg-6.jpg",
    desc: "Crispy toasted bread brushed with garlic butter and herbs, served warm with Italian flavors."
  },
  {
    name: "Veggie Supreme Pizza",
    price: 269,
    image: "./veg-7.jpg",
    desc: "Loaded pizza with bell peppers, olives, onions, sweet corn and melted mozzarella cheese."
  },
  {
    name: "Mushroom Risotto",
    price: 289,
    image: "./veg-8.jpg",
    desc: "Creamy Italian rice cooked slowly with mushrooms, garlic, butter and parmesan cheese."
  }
];
  const itemsPerPage=4;
  const totalPages = Math.ceil(vegItems.length/itemsPerPage);
  const [currentPage,setCurrentPage] = useState(1);
 const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = vegItems.slice(indexOfFirstItem, indexOfLastItem);
let dispatch = useDispatch();
  // track liked items
const [likedItems, setLikedItems] = useState([]);

  const toggleLike = (index) => {
    setLikedItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
   <ToastContainer postion="top-right" autoClose={2000}/>
      {/* Wishlist Counter Badge */}
      <div className="wishlist-badge">
        {likedItems.length}
      </div>

      <div className="veg-container">
        {currentItems.map((item, index) => (
          <div className="veg-card" key={index}>

            <div
              className={`heart ${likedItems.includes(index) ? "active" : ""}`}
              onClick={() => toggleLike(index)}
            >
              ♥
            </div>

            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>

            <p className="desc">{item.desc}</p>
          
            <div className="bottom">
              <span className="price">₹{item.price}</span>
              
             <button onClick={() => {
    dispatch(addToCart(item));
    toast.success("Item added to cart!");
  }}
>
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

export default Veg
