import Home from './Home'
import Veg from './Veg'
import NonVeg from './NonVeg'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Desserts from './Desserts'
import Cart from './Cart'
import Error from './Error' 
import Order from './Orders' 
import { useSelector } from 'react-redux'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Register from './register'
import Login from './Login'
import Msg from './Msg'
import Diary from './Diary'
import Bevrage from './Beverage'




function App() {
 let cartItems = useSelector(globalState => globalState.cart);
 let total = cartItems.reduce((sum,items)=>sum+items.quantity,0);   
 
  return (
    <>
      <BrowserRouter>
        <header className="floating-nav">
          <nav>
            <Link to="/"> <i class="fa-solid fa-house"></i> Home</Link>
            <Link to="/veg"> <i class="fa-solid fa-carrot"></i> Veg</Link>
            <Link to="/nonveg"> <i class="fa-solid fa-drumstick-bite"></i> Non-Veg</Link>
            <Link to="/diary"><i class="fa-brands fa-java"></i>Diary</Link>
            <Link to="/bevrage"><i class="fa-solid fa-martini-glass-citrus"></i>Bevrage</Link>
            <Link to="/desserts"> <i class="fa-solid fa-stroopwafel"></i> Desserts</Link>
            <Link to="/cart"> <i class="fa-solid fa-cart-shopping"></i> Cart   {total}</Link>
            <Link to="/orders">Orders</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
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
          <Route path='/orders' element={<Order/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='Msg' element={<Msg />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
