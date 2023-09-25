import React, {useContext} from 'react'
import { PRODUCTS } from '../products'
import { ShopContext } from '../context/shop-context';
import "./conorder.css"

function Conorder ()  {
    const { cartItems } = useContext(ShopContext);
  let a = Object.values(cartItems)
  let b = a.map((item) => item !== 0 ? PRODUCTS[item] : null).filter((item) => item)?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  let c =a.map((item) => item !== 0 ? PRODUCTS[item] : null).filter((item) => item)?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.productName,
    0
  );
  return (
    <div>
        <div className='container2'>
            <h1 style={{color:"#008000"}}>Your Order has confirmed... <i class="bi bi-check-circle-fill"></i></h1>
            <h2>Your Product : {c}</h2>
            <div className="pricediv">
          <h3 style={{ color: "#ee4d2d" }}>Price Details</h3>
          <div className='pdiv'>
            <div className="pd">
              <h5>Total Product Price</h5>
              <h5>{b}</h5>
            </div>
            <div className="pd">
              <h5>Total Discount</h5>
              <h5>500</h5>
            </div>
            <hr></hr>
            <div className="pd">
              <h5>Order Total</h5>
              <h5>{b-500}</h5>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Conorder