import React, { useEffect, useState } from 'react';
import './style/Product.css';
import products from './DataArray/ProductArray';
import './style/All.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

let id;
const Product = () => {
  const [numberOfProduct, setNumberOfProduct] = useState(10);

  const showProductDetails = (product) => {
    id = product.pro_id;
    console.log(`Click On ${product.pro_id}`);
  };

  useEffect(() => {
    AOS.init();

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setNumberOfProduct(6);
      } else {
        setNumberOfProduct(12);
      }
    };

    // Set initial number of products based on window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='proSection py-2 px-2'>
      <div className="topDeals d-flex align-items-center mb-4">
        <h2 className='px-3 my-3 mx-0'>Today's best deal</h2>
        <a href="/">See more</a>
      </div>
      <div className="row px-4 pb-3">
        {products.slice(0, numberOfProduct).map((product, key) => {
          const link = product.pro_image;
          const rating = Array.from({ length: product.Rating }, () => '⭐');

          return (
            <div
              data-aos="flip-left"
              className="proCard col-lg-3 col-4  card ubuntu-regular"
              onClick={() => showProductDetails(product)}
              key={product.pro_id}
            >
              <Link className='black' to={`/productdetails/${product.pro_id}`}>
                <img className='proImg card-img-top' src={link} alt="" />
                <div className="card-body">
                  <p className='proTitle my-2 card-title'>{product.pro_name}</p>
                  <p className='proDesc card-text mb-2'>{product.pro_desc}</p>
                  <div>{rating}</div>
                  <div className="proPrice card-text my-2">${product.pro_price}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { id };
export default Product;
