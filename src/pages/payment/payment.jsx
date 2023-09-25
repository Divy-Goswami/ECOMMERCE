import React, {useContext} from 'react'
import "./payment.css"
import { PRODUCTS } from '../../products'
import { ShopContext } from '../../context/shop-context';
import { useNavigate } from 'react-router-dom';
function Payment() {
  const navigate = useNavigate();
  const { cartItems } = useContext(ShopContext);
  let a = Object.values(cartItems)
  let b = a.map((item) => item !== 0 ? PRODUCTS[item] : null).filter((item) => item)?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
  return (
    <div>
      <div className='container1'>
        <div className='order'>
          <div className='header'>
         <div><h1 style={{color:"#ee4d2d"}}>Payment Method</h1></div> 
         <div>100% safe <br></br>Payments</div>
          </div>
          <hr></hr>
          <div className='cod'>
            <div><h2 style={{color:"#008000"}}><i class="bi bi-cash-coin"></i> Cash on Delivery</h2></div>
            <div><h2 style={{color:"#008000"}}><i class="bi bi-bag-check"></i></h2></div>
          </div>
        </div>
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
          <div className='btn'>
          <button onClick={()=>{
             navigate("/Conorder");
          }} style={{ backgroundColor: "#ee4d2d", padding: "10px", width: "200px", color: "white" , marginTop:"5px" }}> Continue</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Payment
