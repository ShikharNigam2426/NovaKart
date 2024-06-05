import React from 'react';
import './style/Navbar.css'
import './style/Fonts.css'
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [items, setItems] = React.useState(0);
  return (
    <div className='Navbar d-flex flex-column justify-content-between bg-primary pb-3'>
      <div className="top py-2">
        <Link to='/'>
          <h1 className='jersey-20-regular link'>Nova Cart</h1>
        </Link>
        <div className="searchBar d-flex">
          <input className='SearchArea px-3 py-1 ubuntu-regular' type="text" placeholder='Search Product' />
          <div className="search d-flex align-items-center justify-content-center">
            <button className='btn searchIcon btn-success'><SearchIcon /></button>
          </div>
        </div>
      </div>

      <hr className='mt-1' />

      <div className="bottom d-flex justify-content-around">
        <div className="category ubuntu-regular">
          <p>Home Appliance</p>
          <p>Audio & Video</p>
          <p>Refrigerator</p>
          <p>Today's Deal</p>
          <p>Gift Cards</p>
        </div>

        <div className="loginButton d-flex align-items-center">
          <div className="CartIcon px-3">
            <Link to='/checkout'>
              <IconButton component="a" href="">
                <ShoppingCartIcon />
              </IconButton>
            </Link>
          </div>
          <Link to='/signup'>
            <button className='btn btn-success'>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
