import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import products from './DataArray/ProductArray';
import './style/ProductDetails.css';
import { increaseAmount } from '../features/checkOut/checkOutSlice';

const ProductDetails = () => {
    const { id } = useParams();
    const logginSelector = useSelector((state) => state.logger.value);
    const dispatch = useDispatch();
    const [ItemCount, setItemCount] = useState(1);

    const productIndex = parseInt(id) - 1;
    const product = products[productIndex];

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the component mounts
    }, [id]);

    const Update = (event) => {
        const operator = event.target.innerText;
        operator === '+' ? setItemCount(ItemCount + 1) : setItemCount(ItemCount > 1 ? ItemCount - 1 : 1);
    }

    const addToCart = async (product) => {
        const userId = logginSelector;
        const proDesc = product.pro_desc;
        try {
            const response = await axios.post('http://localhost:2000/user/cart/add', { proDesc, userId, ItemCount });
            console.log('Item Added to Cart');
            console.log(response);
            
            // increasing the value of the checkout amount when a product is added to the cart
            dispatch(increaseAmount(product.pro_price));
        } catch (error) {
            console.log(error.message);
        }
    }

    if (!product) {
        return <div>Product not found</div>;
    }

    let rating = [];
    for (let i = 1; i <= product.pro_rating; i++) {
        rating.push('⭐');
    }

    return (
        <div className="container ubuntu-regular mt-4">
            <div className="row">
                <div className="imageColumn col-6">
                    <img className='proDeatailImg' src={product.pro_image} alt="" />
                </div>
                <div className="col-6 mt-5">
                    <h2 className='proDetailHeading'>{product.pro_desc}</h2>
                    <h3 className='proDetailPrice'>${product.pro_price}</h3>
                    <div className="d-flex align-items-center">
                        <div className="counterButton btn btn-danger px-2" onClick={(event) => Update(event)}>-</div>
                        <div className="count counterButton px-2">{ItemCount}</div>
                        <div className="counterButton btn btn-primary px-2" onClick={(event) => Update(event)}>+</div>
                        <button className="btn btn-dark mx-4 hoverBlue" onClick={() => { addToCart(product) }}>Add to Cart</button>
                    </div>
                    <hr />
                    <p>Category: {product.pro_category}</p>
                </div>
            </div>
            <div className="row">
                <h1 className='RelProHeading mt-4'>Related Products</h1>
                {products.map((item) => {
                    let link = item.pro_image;
                    if (item.pro_category === product.pro_category && item.pro_id !== product.pro_id) {
                        return (
                            <div key={item.pro_id} className="proCard col-3 card ubuntu-regular">
                                <Link className='black' to={`/productdetails/${item.pro_id}`}>
                                    <img className='proImg  card-img-top' src={link} alt="" />
                                    <div className="card-body">
                                        <p className='proTitle my-2 card-title'>{item.pro_name}</p>
                                        <p className='proDesc card-text mb-2'>{item.pro_desc}</p>
                                        {rating.map((star, index) => <span key={index}>{star}</span>)}
                                        <div className="proPrice card-text my-2">${item.pro_price}</div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export default ProductDetails;
