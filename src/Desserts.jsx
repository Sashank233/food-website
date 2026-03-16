import React, { useState } from 'react'
import './Desserts.css';
import { useDispatch } from "react-redux";
import { addToCart } from "./addToCart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Desserts() {

const dessertItems = [
  {
    name: "Tiramisu",
    price: 249,
    image: "./desert-1.jpg",
    desc: "Italy’s most loved dessert — layers of espresso-soaked ladyfingers and velvety mascarpone cream."
  },
  {
    name: "Sicilian Cannoli",
    price: 229,
    image: "./desert-2.jpg",
    desc: "Crispy pastry shells from Sicily filled with sweet ricotta cream and hints of citrus zest."
  },
  {
    name: "Panna Cotta",
    price: 219,
    image: "./desert-3.jpg",
    desc: "Silky smooth Italian cream pudding topped with berry glaze for a light, elegant finish."
  },
  {
    name: "Gelato Trio",
    price: 199,
    image: "./desert-4.jpg",
    desc: "Authentic Italian gelato — rich, dense, and intensely flavored for a true European indulgence."
  },
  {
    name: "Chocolate Lava Cake",
    price: 259,
    image: "./desert-5.jpg",
    desc: "A warm European classic with a molten chocolate center that melts in every bite."
  },
  {
    name: "Strawberry Cheesecake",
    price: 239,
    image: "./desert-6.jpg",
    desc: "Creamy baked cheesecake layered with fresh strawberry compote and a buttery biscuit base."
  },
  {
    name: "Classic Crème Brûlée",
    price: 249,
    image: "./desert-7.jpg",
    desc: "Rich vanilla custard topped with a perfectly caramelized sugar crust that cracks with every spoon."
  },
  {
  name: "Affogato",
  price: 189,
  image: "./desert-8.jpg",
  desc: "A classic Italian treat — creamy vanilla gelato drowned in a shot of hot espresso for a perfect hot-cold contrast."
}
];
let dispatch = useDispatch();
 const itemsPerPage=4;
  const totalPages = Math.ceil(dessertItems.length/itemsPerPage);
  const [currentPage,setCurrentPage] = useState(1);
 const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = dessertItems.slice(indexOfFirstItem, indexOfLastItem);
return(
  <>
  <ToastContainer position="top-right" autoClose={2000}/>
<div className="dessert-container">
  {currentItems.map((item, index) => (
    <div className="dessert-card" key={index}>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p className="dessert-desc">{item.desc}</p>

      <div className="dessert-bottom">
          <span className="dessert-price">₹{item.price}</span>
          <button className="dessert-btn" onClick={() => {
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

export default Desserts;
