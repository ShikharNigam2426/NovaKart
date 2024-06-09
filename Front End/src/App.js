import React from 'react'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Caraousel from './Component/Caraousel.js';
import Product from './Component/Product.js';
import SignUp from './Component/SignUp.js';
import SignIn from './Component/Signin.js';
import ProductDetails from './Component/ProductDetails.js';
import Checkout from './Component/Checkout.js';
import Payment from './Component/Payment.js';

const App = () => {
  return (
    <div>
      <Router>
        <Routes> 
          {/* Home Page Route */}
          <Route path='/'
          element={
            <div>
              <Navbar />
              <Caraousel />
              <Product />
            </div>
          } />
          {/* checkout Page Route  */}
          <Route path='/checkout'
          element={
            <div>
              <Navbar />
              <Checkout />
            </div>
          } />
          <Route path='/signup'
          element={
            <div>
              <SignUp />
            </div>
          } />
          <Route path='/signin'
          element={
            <div>
              <SignIn />
            </div>
          } />
          <Route path='/productdetails/:id'
          element={
            <div>
              <Navbar />
              <ProductDetails />
            </div>
          } />
          <Route path='checkout/cart/checkoutpayemnt'
          element={
            <div>
              <Payment />
            </div>
          } />
         </Routes>
      </Router>
    </div>
  )
}

export default App