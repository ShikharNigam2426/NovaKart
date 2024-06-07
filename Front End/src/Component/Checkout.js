import React, { useEffect, useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import axios from 'axios';
import products from './DataArray/ProductArray';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style/Checkout.css';

const Checkout = () => {
    const checkoutAmount = useSelector((state) => state.checkout.value);
    const loginSelector = useSelector((state) => state.logger.value);
    const [hoveredButtonId, setHoveredButtonId] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    const navigate = useNavigate();

    const handleCart = async () => {
        const userId = loginSelector;
        try {
            const response = await axios.get('http://localhost:2000/user/cartitem', {
                params: { userId }
            });
            console.log(response.data);
            setCartItems(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (loginSelector !== -1) {
            handleCart();
        }
    }, [loginSelector]);

    const handleMouseOver = (id) => {
        setHoveredButtonId(id);
    };

    const handleMouseOut = () => {
        setHoveredButtonId(null);
    };

    const handleRemove = async(itemId) => {
        const userId = loginSelector;
        try {
            const response = await axios.delete('http://localhost:2000/user/cartitem/delete', {userId, itemId})
            console.log(response.data);
            navigate('/checkout')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='proSection'>
            {loginSelector === -1 ? (
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <h4>You are logged out, click this button to go to the login page</h4>
                    <Link to={'/signin'}>
                        <button className='btn btn-success mx-2'>Sign In</button>
                    </Link>
                </div>
            ) : (
                <>
                    {cartItems.length === 0 ? (
                        <div className='d-flex justify-content-center align-items-center'>
                            <h1>You have no item in your cart</h1>
                        </div>
                    ) : (
                        <div className='d-flex justify-content-center align-items-center flex-column'>
                            <h1 className='mt-3'>Your Cart</h1>
                            <div className="row widthRow my-5 px-auto my-3">
                                {cartItems.map(item => {
                                    const product = products.find(p => p.pro_id === item.pro_id);
                                    return (
                                        product && (
                                            <div key={product.pro_id} className="proCard col-3 card">
                                                <Link className='black' to={`/productdetails/${product.pro_id}`}>
                                                    <img className='proImg card-img-top' src={product.pro_image} alt="" />
                                                    <div className="card-body">
                                                        <p className='proTitle my-2 card-title'>{product.pro_name}</p>
                                                        <div className="proPrice card-text my-2">${product.pro_price}</div>
                                                    </div>
                                                </Link>
                                                <button className='btn btn-primary my-2'>Purchase</button>
                                                <button
                                                    className={`btn ${hoveredButtonId === product.pro_id ? 'btn-danger' : 'btn-secondary'}`}
                                                    onMouseOver={() => handleMouseOver(product.pro_id)}
                                                    onMouseOut={handleMouseOut}
                                                    onClick={() => {handleRemove(item.pro_id)}}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        )
                                    );
                                })}
                            </div>
                            <h3>Total: ${checkoutAmount}</h3>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Checkout;
