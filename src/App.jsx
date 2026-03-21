import Home from './Home'
import Veg from './Veg'
import NonVeg from './NonVeg'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Desserts from './Desserts'
import Cart from './Cart'
import Error from './Error'
import Order from './Orders'
import { useSelector } from 'react-redux'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Register from './Register'
import Login from './Login'
import Msg from './Msg'
import Diary from './Diary'
import Bevrage from './Beverage'
import { useState, useEffect } from 'react'
import AboutUs from './AboutUs'
import ContactUs from './ContactUs'

function App() {

  let cartItems = useSelector(globalState => globalState.cart);
  let total = cartItems.reduce((sum, items) => sum + items.quantity, 0);

  const [currentUser, setCurrentUser] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    nav("/login");
  };

  return (
    <>
      <header className="floating-nav">
        <nav>

          <Link to="/"> <i className="fa-solid fa-house"></i> Home</Link>
          <Link to="/veg"> <i className="fa-solid fa-carrot"></i> Veg</Link>
          <Link to="/nonveg"> <i className="fa-solid fa-drumstick-bite"></i> Non-Veg</Link>
          <Link to="/diary"><i className="fa-brands fa-java"></i> Diary</Link>
          <Link to="/bevrage"><i className="fa-solid fa-martini-glass-citrus"></i> Beverage</Link>
          <Link to="/desserts"> <i className="fa-solid fa-stroopwafel"></i> Desserts</Link>
          <Link to="/cart"> <i className="fa-solid fa-cart-shopping"></i> Cart {total}</Link>
          <Link to="/orders">Orders</Link>
           <Link to="/AboutUs">AboutUs</Link>
           <Link to="/ContactUs">ContactUs</Link>

          {currentUser ? (
            <span className="user-section">
             <h3> <i>Hello {currentUser.name}</i></h3>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </span>
          ) : (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          )}

        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/veg' element={<Veg />} />
        <Route path='/nonveg' element={<NonVeg />} />
        <Route path='/diary' element={<Diary />} />
        <Route path='/bevrage' element={<Bevrage />} />
        <Route path='/desserts' element={<Desserts />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<Order />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Msg' element={<Msg />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/ContactUs' element={<ContactUs />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default App