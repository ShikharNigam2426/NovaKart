import './style/Caraousel.css'
import './style/All.css'
import ReplayIcon from '@mui/icons-material/Replay';
import SecurityIcon from '@mui/icons-material/Security';


const Carousel = () => {

    return (
        <div class="parent">
            <div class="overImg bg-light px-4 py-4">
                <img class="SonyLogo" src="https://imgs.search.brave.com/z86Wzp3HxQ-vxEKIymGm30P1MsYwx7bMQEU4yWKlnJg/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL25ld19nYWxs/ZXJ5LzM4MDMxX3Nv/bnktbG9nby1wbmcu/cG5n" alt="" />
                <h1 class="capital py-3">The best Home Entertainment is Here</h1>
                <p className='pb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, maiores.</p>
                <b><a href="/">Shop Now</a></b>
            </div>
            <div className="feature d-flex align-items-center justify-content-around">
                <div className="freeShipping featureContent d-flex px-5 align-items-center">
                    <img className='featureImg' src="./images/truck.png" alt="" />
                    <div className="d-flex flex-column FeatureTypeContent">
                        <p className='FeatureHeading'><b>Free Shipping</b></p>
                        <p className="secondary">On order of 500 or more</p>
                    </div>
                </div>

                <div className="available featureContent d-flex px-5 align-items-center">
                    <img className='featureImg' src="./images/refresh.png" alt="" />
                    <div className="d-flex flex-column FeatureTypeContent">
                        <p className='FeatureHeading'><b>
                            Satisfied or return</b></p>
                        <p className="secondary">Easy 30-day return policy</p>
                    </div>
                </div>
                <div className="paymentSecurity featureContent d-flex px-5 align-items-center">
                    <img className='featureImg' src="./images/security.png" alt="" />
                    <div className="d-flex flex-column FeatureTypeContent">
                        <p className='FeatureHeading'><b>100% secure payments</b></p>
                        <p className="secondary">Visa, Mastercard, Stripe, PayPal</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
