import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import products from './DataArray/ProductArray';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './style/Checkout.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Checkout = () => {
    AOS.init();
    const loginSelector = useSelector((state) => state.logger.value);
    const [hoveredButtonId, setHoveredButtonId] = useState(null);
    const [cartItems, setCartItems] = useState([]);
    const [color, setColor] = useState('white')
    const navigate = useNavigate();




    const handleCart = async () => {
        const userId = loginSelector;
        try {
            const response = await axios.get('http://localhost:2000/user/cartitem', {
                params: { userId }
            });
            setCartItems(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (loginSelector !== -1) {
            handleCart();
        }
        if (loginSelector === -1) {
            setColor('white');
        }
        else {
            setColor('#f6f6f69c');
        }
    }, [loginSelector]);

    const handleMouseOver = (id) => {
        setHoveredButtonId(id);
    };

    const handleMouseOut = () => {
        setHoveredButtonId(null);
    };

    const handleRemove = async (itemId) => {
        const userId = loginSelector;
        try {
            const response = await axios.delete(`http://localhost:2000/user/cartitem/delete`, {
                params: {
                    userId,
                    itemId
                }
            });
            console.log(response.data);
            handleCart();
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className='proSection' style={{ backgroundColor: color }}>
            {loginSelector === -1 ? (
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <Link to={'/signin'}>
                        <button className='btn btn-primary mx-2t'>Sign In & Checkout</button>
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
                                {cartItems.map((item, index) => {
                                    const product = products.find(p => p.pro_id === item.pro_id);
                                    return (
                                        product && (
                                            <div data-aos="flip-left" key={product.pro_id} className="proCard col-3 card">
                                                <Link className='black' to={`/productdetails/${product.pro_id}`}>
                                                    <img className='proImg card-img-top' src={product.pro_image} alt="" />
                                                    <div className="card-body">
                                                        <p className='proTitle my-2 card-title'>{product.pro_name}</p>
                                                        <div className="proPrice card-text my-2">${product.pro_price}</div>
                                                    </div>
                                                </Link>
                                                <b className='mb-5'>Quantity: {item.pro_qty} </b>
                                                <button
                                                    className={`btn ${hoveredButtonId === product.pro_id ? 'btn-danger' : 'btn-secondary'}`}
                                                    onMouseOver={() => handleMouseOver(product.pro_id)}
                                                    onMouseOut={handleMouseOut}
                                                    onClick={() => { handleRemove(item.pro_id) }}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        )
                                    );
                                })}
                            </div>
                            <div className='mb-5'>
                                <Link to='cart/checkoutpayemnt'>
                                    <button className="btn btn-primary">Proceed to checkout</button>
                                </Link>

                            </div>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Checkout;
