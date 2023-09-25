import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { useNavigate } from 'react-router-dom';
import "./navbar.css";

export const Navbar = () => {
  
  const navigate = useNavigate();
  const [firstname, setfirstname1] = useState("");
  const [firsterr, setfirsterr] = useState("");
  const [lastname, setlastname1] = useState("");
  const [lasterr, setlasterr] = useState("");
  const [isclick, setisclick] = useState(false);
  const [isclick2, setisclick2] = useState(false);
  const [pass1, setpass1] = useState("");
  const [email1, setemail1] = useState("");
  const [emailerr, setemailerr] = useState(" ");
  const [isclick3, setisclick3] = useState(false);
  const [passerr, setpasserr] = useState(" ");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setuser] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    email1: "",
    pass1: "",

  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setuser({ ...user, [name]: value });
  }


  const clicked = () => {
    setisclick(true);
  }
  const clicked2 = () => {
    setisclick2(true);
  }
  const clicked3 = () => {
    setisclick3(true);
  }
  const clickedcls = () => {
    setisclick(false);
    setisclick2(false);
    setisclick3(false);
  }
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);

  }
  const postData = async (e) => {

    e.preventDefault();
    
    window.alert('Form submitted successfully!');

    const { email, password, firstname, lastname, email1, pass1 } = user;
    const res = await fetch("https://ecommerce-2a40d-default-rtdb.firebaseio.com/EloginDetails.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application.json",
      },
      body: JSON.stringify({
        email,
        password,
        firstname,
        lastname,
        email1,
        pass1
      })
    }
  )


    

    if (user.email === "") {
      setemailerr("Please Enter Register Email id");
    } else if (user.email.length <= 5) {
      setemailerr("Email must be grater than 5 characters");
    }else {
      setemailerr("");
    }

    if (user.email1 === "") {
      setemail1("Please Enter Register Email id");
    } else if (user.email1.length <= 5) {
      setemail1("Email must be grater than 5 characters");
    } else {
      setemail1("");
    }

    if (user.password === "") {
      setpasserr("Password can not be empty");
    } else if (user.password.length <= 5) {
      setpasserr("Password must be grater than 5 characters");
    } else {
      setpasserr("");
    }

    if (user.pass1 === "") {
      setpass1("Password can not be empty");
    } else if (user.pass1.length <= 5) {
      setpass1("Password must be grater than 5 characters");
    } else {
      setpass1("");
    }

     if (user.firstname === "") {
       setfirsterr("Please Enter FirstName");
     } else if (user.firstname.length <= 1) {
       setfirsterr("FirstName must be grater than 1 character");
     } else {
       setfirsterr("");
     }
     if (user.lastname === "") {
       setlasterr("Please Enter LastName");
     } else if (user.lastname.length <= 1) {
       setlasterr("LastName must be grater than 1 character");
     } else {
       setlasterr("");
     }
  }
  return (
    <div className="navbar">
      <div className="heading" ><h2 style={{ marginRight: "5px" }}><i class="bi bi-bag-fill"></i></h2> Shopeefy</div>
      <div className="links">
        <Link to="/" id="shopbtn"> Shop </Link>
        <Link to="/contact" id="conbtn"> Contact </Link>
        <Link to="/cart">
          <ShoppingCart id="cartbtn" />
        </Link>
        <h2 style={{ color: "black", cursor: "pointer" }} className="icon"><i className="bi bi-person-lines-fill" id='opnbtn' onClick={clicked}></i></h2>
        <h2 style={{ color: "black", cursor: "pointer" }} className="icon"><i className="bi bi-box-arrow-in-right" id="logbtn" onClick={clicked2}></i></h2>
        <h2 style={{ color: "black", cursor: "pointer" }} className="icon"><i className="bi bi-calendar-plus " id="regbtn" onClick={clicked3} ></i></h2>
      </div>
      {/* Navbar-pop     */}
      <div className='nav-pop' id={isclick ? "show" : "hide"}>
        <ul>
          <h1 className="clsbtn" ><i className="bi bi-x-circle" onClick={clickedcls}></i></h1>
          <li className="nav-item">
            <NavLink className="nav-link active ms-2" aria-current="page" to="/" id="home" onClick={clickedcls} >Home</NavLink>
          </li>
          <li className="nav-item me-3">
            <NavLink className="nav-link" to="/contact" onClick={clickedcls}>Contact</NavLink>
          </li>
          <li className="nav-item ms-2">
            <NavLink className="nav-link" to="/about" id='about' onClick={clickedcls}>About</NavLink>
          </li>
        </ul>
      </div>
      {/* Login-pop */}
      <div className='login-pop' id={isclick2 ? "show" : "hide"}>
        <h1 style={{ color: "red" }} className="clsbtn" ><i className="bi bi-x-circle" onClick={clickedcls}></i></h1>
        <div className='frm'>
          <form method="POST">
            <div className="mb-3">
              <h1 style={{ color: "#ee4d2d" }} id="loghead">Login</h1>
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={user.email} onChange={getUserData}
                placeholder='Enter Register Email Address' />
              <p style={{ color: "#FF647F" }}>{emailerr}</p>
            </div>
            <div className="mb-3">
              <label className="form-label" >Password</label>
              <input type={showPassword ? "text" : "password"} className="form-control" id="exampleInputPassword1" placeholder='Enter Password' name="password" value={user.password} onChange={getUserData} />
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={togglePasswordVisibility} />
              <label className="form-check-label" >{showPassword ? "Hide Password" : "Show Password"}</label>
              <p style={{ color: "#FF647F" }}>{passerr}</p>
            </div>
            <div className='loginbtndiv'>
              <button type="button" className="btn btn-outline-danger" onClick={postData}>Login</button>
            </div>
          </form>
        </div>
      </div>
      {/* Register-pop */}
      <div className='register-pop' id={isclick3 ? "show" : "hide"}>
        <h1 style={{ color: "red" }} className="clsbtn" ><i className="bi bi-x-circle" onClick={clickedcls}></i></h1>
        <div className="row" id='frmreg'>
          <div className='headfrmreg'>
            <h1 style={{ color: "#ee4d2d" }}>Register</h1>
          </div>
          <div className="col">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control" placeholder="First name" aria-label="First name" name="firstname" value={user.firstname} onChange={getUserData} />
            <p style={{ color: "#FF647F" }}>{firsterr}</p>
          </div>
          <div className="col">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" name="lastname" value={user.lastname} onChange={getUserData} />
            <p style={{ color: "#FF647F" }}>{lasterr}</p>
          </div>
          <label className="form-label" id='email-lab'>Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" name="email1" value={user.email1} onChange={getUserData} placeholder='Enter Register Email Address' />
          <p style={{ color: "#FF647F" }}>{email1}</p>
          <div className="mb-3">
            <label className="form-label" >Password</label>
            <input type={showPassword ? "text" : "password"} className="form-control" id="exampleInputPassword1" name="pass1" placeholder='Enter Password' value={user.pass1} onChange={getUserData} />
          </div>
          <div className="form-check" id='showpass' >
            <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={togglePasswordVisibility} />
            <label className="form-check-label"  >{showPassword ? "Hide Password" : "Show Password"}</label>
            <p style={{ color: "#FF647F" }}>{pass1}</p>
          </div>
          <div className='loginbtndiv'>
            <button type="button" className="btn btn-outline-danger" onClick={postData}>Sign Up</button>
          </div>
        </div>

      </div>
    </div>
  );
};
