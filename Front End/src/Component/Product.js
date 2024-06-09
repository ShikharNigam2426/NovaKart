import React from 'react'
import './style/Product.css'
import products from './DataArray/ProductArray'
import './style/All.css'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

let id;
const Product = () => {
  AOS.init();

  // YE FUNCTION BTA RHA HAI KI KAUN SE OBJECT PE CLICK KIYA HAI USKE INDEX + 1 KI VALUE KO PRINT KR RHA HAI 
  const showProductDetails = (product) => {
    id = product.pro_id;
    console.log(`Click On ${product.pro_id}`);
  }

  return (
    <div className='proSection py-2 px-2'>
      <div className="topDeals d-flex align-items-center mb-4">
        <h2 className='px-3 my-3 mx-0'>Today's best deal</h2>
        <a href="/">See more</a>
      </div>
      <div className="row px-4 pb-3">
        {
          products.slice(0, 8).map((product, key) => {
            let link = product.pro_image;
            const rating = []
            for (let i = 1; i <= product.Rating; i++) {
              rating.push('⭐');
            }
            return (
              <div data-aos="flip-left" className="proCard col-3 card ubuntu-regular" onClick={() => showProductDetails(product)}>
                <Link className='black' to= {`/productdetails/${product.pro_id}`}>
                  <img className='proImg card-img-top' src={link} alt="" />
                  <div className="card-body">
                    <p className='proTitle my-2 card-title'>{product.pro_name}</p>
                    <p className='proDesc card-text mb-2'>{product.pro_desc}</p>
                    {rating}
                    <div className="proPrice card-text my-2">${product.pro_price}</div>
                  </div>
                </Link>
              </div>)
          })
        }
      </div>
    </div>
  )
}

export { id }
export default Product