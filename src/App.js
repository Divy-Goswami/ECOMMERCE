import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import { Checkout } from "./checkout";
import Payment from "./pages/payment/payment";
import Conorder from "./conorder/conorder";
import Service from "./service/Service";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/payment" element={<Payment/>} />
            <Route path="/conorder" element={<Conorder/>}/>
            <Route path="/Service" element={<Service/>}/>
          </Routes>
        </Router>
      </ShopContextProvider>

{/* Contact & Address */}

      <div className="row justify-content-evenly mt-4 mb-4" style={{background:"#f1f1f1"}}>
          <div className="col-md-5 mt-4 p-3">
            <form>
              <h2>Contact Form</h2>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
              </div>
           
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Massage</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-danger">Submit</button>
            </form>
          </div>
          <div className="col-md-5 mt-4 p-3">
            <h2>Address</h2>
            <h6 className="mb-4"> 56,Shopeefy Store<br></br>
                New-Naroda,Ahmedabad<br></br>
                <i className="bi bi-telephone text-success"></i>:+91 8160150192</h6>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.8173055844745!2d72.60703951476955!3d23.03047928494914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8599ba2f87fd%3A0x6a9c1113cb4ac919!2s__shopify__!5e0!3m2!1sen!2sin!4v1680493748679!5m2!1sen!2sin" width="600" height="300" style={{border:"0"}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>
        </div>
 {/* Footer */}
 <div class="row text-center mb-4">
             <div className="col-md-12">
              <h3 className="mb-3">FAQ</h3>
              <div className="accordion border" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What is it?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>Shopeefy websites can range from</strong>  small online stores that sell a few products to large-scale platforms that offer a wide range of products and services from multiple vendors. Some popular ecommerce websites include Amazon, eBay, and Etsy. 
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      why is it?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>Convenience: </strong>  Shopeefy websites offer the convenience of shopping from anywhere at any time, as long as you have an internet connection. You can shop from the comfort of your own home, office, or even on-the-go using your mobile device.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      What will you get?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      <strong>Access to a wide range of products: </strong> Shopeefy websites offer a wider range of products than traditional brick-and-mortar stores. You can easily browse through products from multiple vendors and compare prices and features.
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className="row justify-content-evenly bg-dark text-light mt-2 p-3">
          <div className="col-md-3 pt-3">
           <h5> SHOPEEFY</h5><br></br>
           <p>Shopeefy website is an online platform that enables businesses to sell their products and services to customers over the internet. </p>
       

          </div>
          <div className="col-md-3 pt-3">
            <h5>Information link</h5><br></br>
            <a className="text-decoration-none text-light" href="http://localhost:3000/">Home</a><br></br>
            <a className="text-decoration-none text-light">About Us</a><br></br>
            <a className="text-decoration-none text-light" href="http://localhost:3000/contact">Contact</a><br></br>
            <a className="text-decoration-none text-light" href="http://localhost:3000/">Websites</a><br></br>
            <a className="text-decoration-none text-light" href="https://studio.youtube.com/channel/UCRsiNnXiUOWdASwIqZoRmgA/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D">Youtube</a><br></br>


            <br></br>
          </div>
          <div className="col-md-3 pt-3">
            <h5>Contact</h5><br></br>
            <a className="text-decoration-none text-light" href="https://www.instagram.com/"> <i class="bi bi-instagram"></i></a><br></br>
            <a className="text-decoration-none text-light" href="https://studio.youtube.com/channel/UCRsiNnXiUOWdASwIqZoRmgA/videos/upload?filter=%5B%5D&sort=%7B%22columnType%22%3A%22date%22%2C%22sortOrder%22%3A%22DESCENDING%22%7D"><i class="bi bi-youtube"></i></a><br></br>
            <a className="text-decoration-none text-light" href="https://twitter.com/home?lang=en"><i class="bi bi-twitter"></i></a><br></br>
            <a className="text-decoration-none text-light" href="https://www.messenger.com/t/453546158000269/"><i class="bi bi-messenger"></i></a>
 
            <br></br>
          </div>
          <div className="col-md-3 pt-3">
            <h6>Address</h6><br></br>
            <h6 className="mb-4">56,Amrakunj Society<br></br>
                New-Naroda,Ahmedabad<br></br>
                <i className="bi bi-telephone text-success"></i> : +91 8160150192</h6>

          </div>
        </div>
        <div className="row br-secondary text-center ">
          <div className="col-md-12 p-2">Copyright@1999/2022 Office to find the records you need.</div>
        </div>
  
   </div>
  );
}

export default App;
