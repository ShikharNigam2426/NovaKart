import React, { useEffect, useState } from 'react'
import './style/Payment.css'

const Payment = () => {
    const [deliveryDate, setDeliveryDate] = useState({
        date: '',
        month: '',
    })

    const [checkoutPrice, setCheckoutPrice] = useState(0);
    const [tax, setTax] = useState(0);
    let totalAmount = 0;

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    useEffect(() => {
        const currDate = new Date();
        setDeliveryDate({
            date: currDate.getDate() + 3,
            month: currDate.getMonth()
        });
    }, []);

    return (
        <div className='border'>
            <div className='row mx-5 mt-5 border'>
                <div className="col-lg-8 col-md-8 checkoutPage">
                    <div className='px-5 py-3'>
                        <h3 className='text-secondary'>Checkout</h3>
                        <hr />
                        <h5 className='pb-3 pt-3'>Pickup or Delivery</h5>
                        <form action="submit">
                            <div className='d-flex flex-row align-items-baseline'>
                                <input className='checkbox' type="radio" id="pickup" name="deliveryOption" />
                                <div className='mx-2'>
                                    <b>Free pickup</b>
                                    <p className='text-secondary'>Your Location</p>
                                </div>
                            </div>
                            <div className='d-flex flex-row align-items-baseline'>
                                <input className='checkbox' type="radio" id="delivery" name="deliveryOption" />
                                <div className='mx-2'>
                                    <b>Delivery</b>
                                    <p className='text-secondary'>Delivery till: {deliveryDate.date} {months[deliveryDate.month]}</p>
                                </div>
                            </div>
                        </form>
                        <p className='text-secondary'>Free Delivery</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 checkoutPage px-5 py-3">
                    <h4 className="text-secondary">Review Order</h4>
                    <p className='my-2 d-flex justify-content-between'>
                        <b>Your items: </b>
                        <span className='text-secondary'>${checkoutPrice}
                        </span>
                    </p>
                    <p className='my-2 d-flex justify-content-between'>
                        <b>Delivery: </b>
                        <span className='text-secondary'>Free
                        </span>
                    </p>
                    <p className='my-2 d-flex justify-content-between'>
                        <b >Estimated Tax: </b>
                        <span className='text-secondary'>${tax}
                        </span>
                    </p>
                    <hr />
                    <p className='d-flex justify-content-between'>
                        <b>Estimated Total: </b>
                        <span className='text-secondary'>${totalAmount}
                        </span>
                    </p>
                    <button className='my-3 btn btn-dark w-100'>Pay Now</button>
                </div>
            </div>
            <div className="row row mx-5 border">
                <div className="col-lg-8 col-md-8 checkoutPage">
                    <div className='px-5 py-3'>
                        <h3 className='text-secondary'>Shipping Address</h3>
                        <hr />
                        <p className='text-secondary'>We will not share this information with anyone</p>
                        <form action="submit">
                            <div className='d-flex flex-column align-items-baseline'>
                                <label htmlFor="" className='my-2'>First Name</label>
                                <input className='addressInput' type="text" id="firstName" name='firstName' placeholder='Enter your First name' />
                            </div>
                            <div className='d-flex flex-column align-items-baseline'>
                                <label htmlFor="" className='my-2'>Last Name</label>
                                <input className='addressInput' type="text" id="lastName" name="lastName" placeholder='Enter your Last name' />
                            </div>
                            <div className='d-flex flex-column align-items-baseline'>
                                <label htmlFor="" className='my-2'>Address</label>
                                <input className='addressInput' type="text" id="lastName" name="lastName" placeholder='Enter your Delivery Address' />
                            </div>
                            <button className='my-3 btn btn-dark addressInput bg-dark'>Submit Address</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 checkoutPage px-5 py-3">
                    <h4 className="text-secondary">Insulation</h4>
                    <p className='text-secondary my-2 d-flex justify-content-between'>
                        help keep local kids warm this winter by donating to Insulation, a non-profit NGO who is giving good quality coat to locals kids to keep them warm this winter
                    </p>
                    <p className='my-2 d-flex justify-content-between'>
                        <input className='checkbox' type="checkbox" />
                        <b>Donate $5.00</b>
                    </p>
                    <p className='my-2 d-flex justify-content-between'>
                        <input className='checkbox' type="checkbox" />
                        <b>Donate $1.00</b>
                    </p>
                    <hr />
                    <p className='text-secondary'>
                        All the donation are <strong className='text-dark'>non refundable</strong> and not eligible for tax deduction, <strong className='text-dark'>100%</strong> of your donation goes to the Insulation NGO.
                    </p>
                    <button className='my-3 btn btn-dark w-100'>Donate Now</button>
                </div>
            </div>
        </div>
    )
}

export default Payment