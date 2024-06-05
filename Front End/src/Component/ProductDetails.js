import React from 'react'
import products from './DataArray/ProductArray'
import './style/ProductDetails.css'
import { id } from './Product'
import { Link } from 'react-router-dom'

const ProductDetails = () => {
    const [index, setIndex] = React.useState(id);
    const [ItemCount, setItemCount] = React.useState(0);

    let product = products[index - 1];
    let keyFeatures = product.key_features;
    let category = product.pro_category;

    const Update = (Event) => {
        const operator = Event.target.innerText;
        operator === '+' ? (setItemCount(ItemCount + 1)) : (ItemCount === 0 ? setItemCount(0) : setItemCount(ItemCount - 1));
    }


    const showProductDetails = (product) => {
        setIndex(product.pro_id);
        console.log(`Click On ${product.pro_id}`);
    }

    let rating = [];
    for (let i = 1; i <= product.pro_rating; i++) {
        rating.push('⭐');
    }

    const addToHandler = (product) => {
        const addItem = {
            img: product.pro_image,
            desc: product.pro_desc,
            price: product.pro_price,
            category: product.pro_category,
            rating: product.pro_rating
        }
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
                    <div className="keyFeature">
                        <h5 className=''>Key Feature</h5>
                        <ul className='keyFeatureList mt-3'>
                            {
                                keyFeatures.map((feature) => {
                                    return <li>{feature}</li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="counterButton btn btn-danger px-2" onClick={(Event) => Update(Event)}>-</div>
                        <div className="count counterButton px-2">{ItemCount}</div>
                        <div className="counterButton btn btn-primary px-2" onClick={(Event) => Update(Event)}>+</div>
                        <button className="btn btn-dark mx-4 hoverBlue" onClick={() => {addToHandler(product)}}>Add to Cart</button>
                    </div>
                    <hr />
                    <p>Category: {product.pro_category}</p>
                </div>
            </div>
            <div className="row">
                <h1 className='RelProHeading mt-4'>Related Product</h1>

                {products.map((item) => {
                    let link = item.pro_image;
                    if (item.pro_category === category && item.pro_id !== index) {
                        return (
                            <div className="proCard col-3 card ubuntu-regular" onClick={() => showProductDetails(item)}>
                                <Link className='black' to='/productdetails'>
                                    <img className='proImg card-img-top' src={link} alt="" />
                                    <div className="card-body">
                                        <p className='proTitle my-2 card-title'>{item.pro_name}</p>
                                        <p className='proDesc card-text mb-2'>{item.pro_desc}</p>
                                        {rating}
                                        <div className="proPrice card-text my-2">${item.pro_price}</div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                    return <></>;
                })
                }
            </div>
        </div>
    )
}

export default ProductDetails