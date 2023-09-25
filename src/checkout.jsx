import React, { useContext , useState } from 'react'

import "./checkout.css"
import { PRODUCTS } from './products'
import { ShopContext } from './context/shop-context';
import { useNavigate } from 'react-router-dom';

export const Checkout = () => {
  const navigate = useNavigate();
  const [nameerr, setnameerr] = useState("");
  const [numbererr, setnumbererr] = useState("");
  const [hnumbererr, sethnumbererr] = useState("");
  const [cityerr, setcityerr] = useState("");
  const [areaerr, setareaerr] = useState("");
  const [stateerr, setstateerr] = useState("");
  const [pincodeerr, setpincodeerr] = useState("");
  const [nearlocerr, setnearlocerr] = useState("");
 
const savedata = async(e) =>{

  e.preventDefault();

if(user.Name !== "" &&user.number !== "" && user.hnumber !== "" && user.pincode !== "" && user.nearloc !== "" && user.state !== "" && user.city !== "" && user.area !== "" ){
  window.alert("Address has been saved");
const {Name , number , hnumber , area , pincode , nearloc , state , city} = user
  const res = await fetch("https://ecommerce-2a40d-default-rtdb.firebaseio.com/AddressDetails.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name,
        number,
        hnumber,
        area,
        pincode,
        nearloc,
        state,
        city
    
      }),
    }
  )
}
if(user.Name == ""){
  setnameerr("Please enter Name")
}else{
  setnameerr("");
}
if(user.number == ""){
setnumbererr("Please enter Number")
}else{
  setnumbererr("");
}
if(user.hnumber == ""){
  sethnumbererr("Please enter House number")
}else{
  sethnumbererr("");
}
if(user.city == ""){
  setcityerr("Please enter your city")
}else{
  setcityerr("");
}
if(user.state == ""){
  setstateerr("Please enter your state")
}else{
  setstateerr("");
}
if(user.pincode == ""){
  setpincodeerr("Please enter pincode")
}else{
  setpincodeerr("");
}
if(user.nearloc == ""){
  setnearlocerr("Please enter Nearby location")
}else{
  setnearlocerr("");
}
if(user.area == ""){
  setareaerr("Please enter your Area")
}else{
  setareaerr("");
}
}

  const [user, setuser] = useState({
    Name: "",
    number: "",
    hnumber: "",
    area: "",
    pincode: "",
    nearloc: "",
    state: "",
    city: "",

  });
  console.log(user);
  let name, value;
  const getuserdata = (event) => {
    name = event.target.name;
    value = event.target.value;

    setuser({ ...user, [name]: value });
  }

  const { cartItems } = useContext(ShopContext);
  let a = Object.values(cartItems)
  let b = a.map((item) => item !== 0 ? PRODUCTS[item] : null).filter((item) => item)?.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
 

  // array1.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue,
  //   initialValue
  // );
  
  // Object.values((value) => {console.log("value",value);})
  console.log("cartItems", b);
  //  PRODUCTS.filter((item) => cartItems[item.id] !== 0 )
  return (
    <>

      <div className="con-cont">
        <div className="details">
          <h3 style={{ color: "#ee4d2d" }}>Select Deliver Address</h3>
          <form>
            <h4><i class="bi bi-telephone" style={{ color: "#ee4d2d" }}></i> Contact Details</h4>
            <br></br>
            <input type="text" placeholder="Name" name='Name' value={user.Name} onChange={getuserdata}  required></input>
            <p style={{color:"red"}}>{nameerr}</p>
            <br></br>
            <input type="text" placeholder="Phone Number" name='number' value={user.number} onChange={getuserdata} required></input>
            <p style={{color:"red"}}>{numbererr}</p>
            <br></br>
            <h4><i class="bi bi-geo-alt" style={{ color: "#ee4d2d" }}></i> Address</h4>
            <br></br>
            <input type="text" placeholder="House Number/Bulding Number" name='hnumber' value={user.hnumber} onChange={getuserdata} required ></input>
            <p style={{color:"red"}}>{hnumbererr}</p>
            <br></br>
            <input type="text" placeholder="Road Name/Area/Colony" name='area' value={user.area} onChange={getuserdata} required></input>
            <p style={{color:"red"}}>{areaerr}</p>
            <br></br>
            <input type="text" placeholder="Pin Code" value={user.pincode} name='pincode' onChange={getuserdata} required ></input>
            <p style={{color:"red"}}>{pincodeerr}</p>
            <br></br>
            <input type="text" placeholder="City" id="cityin" value={user.city} name='city' onChange={getuserdata} required ></input>
            <p style={{color:"red"}}>{cityerr}</p>
            <input type="text" placeholder="State" id="statein" value={user.state} name='state' onChange={getuserdata} required></input>
            <p style={{color:"red"}}>{stateerr}</p>
            <br></br>
            <input type="text" placeholder="Nearby Location(Optional)" name='nearloc' value={user.nearloc} onChange={getuserdata} required></input>
            <p style={{color:"red"}}>{nearlocerr}</p>
            <br></br>
            <div className="btndiv">
              <button onClick={savedata} style={{ backgroundColor: "#ee4d2d", padding: "10px", width: "200px", color: "white" }}> Save Address</button>
              <button onClick={()=>{
                navigate("/payment")
              }} style={{ backgroundColor: "#ee4d2d", padding: "10px", width: "200px", color: "white" }}> Continue</button>
            </div>
          </form>
        </div>
        <div className="pricediv">
          <h3 style={{ color: "#ee4d2d" , marginTop:"50px" }}>Price Details</h3>
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

    </>
  )
}

