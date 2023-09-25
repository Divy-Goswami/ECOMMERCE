import React, { useState } from "react";
import "./contact.css"

export const Contact = () => {
  const [fullname, setfullname] = useState("");
  const [fullnameerr, setfullnameerr] = useState("");
  const [phone, setphone] = useState("");
  const [phoneerr, setphoneerr] = useState("");
  const [email, setemail] = useState("");
  const [emailerr, setemailerr] = useState("");
  const [issubmit, setissubmit] = useState(false);
  const [msg, setmsg] = useState("");
  const [msgerr, setmsgerr] = useState("");
  const [user, setuser] = useState({
    fullname,
    phone,
    email,
    msg
  })
  let name,value;
  const getUserData = (event) =>{
   name= event.target.name;
   value=event.target.value;

   setuser({...user, [name]:value });

  }
  const submitted = (e) =>{
    e.preventDefault();
    setissubmit(true);
    window.alert('Form submitted successfully!');
  }
  const postData = async (e) =>{

    e.preventDefault();
   
    if(user.email === ""){
      setemailerr("Please Enter Register Email id");
    }else if (user.email.length <= 5) {
              setemailerr("Email must be grater than 5 characters");
          }
       else {
              setemailerr("");
   }
   if(user.fullname === ""){
    setfullnameerr("Please Enter FullName");
}else if (user.fullname.length <= 5) {
 setfullnameerr("Fullname must be grater than 5 character");
}else{
setfullnameerr("");
} 
if(user.phone === ""){
  setphoneerr("Please Enter Mobile Number");
}else if (user.phone.length <= 9) {
setphoneerr("Fullname must be 10 character");
}else{
setphoneerr("");
}  


if(user.msg === ""){
  setmsgerr("Please Enter your Message");
}else if (user.msg.length <= 4) {
setmsgerr("Message must be grater than 4 character");
}else{
setmsgerr("");
}  
 


 

    const {email,fullname,phone,msg} = user;

    const res = await fetch("https://ecommerce-2a40d-default-rtdb.firebaseio.com/ContactDetails.json",
       {
         method:"POST",
         headers:{
          "Content-Type":"application.json",
         },
         body:JSON.stringify({
          email,
          fullname,
          phone,
          msg
          
         })
       }
    
    
    )
      }
  

  return (
   <>
    <div className='my-5'>
          <h1 className='text-center display-6' style={{color:"#ee4d2d"}}>Contact Us</h1>
          </div>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
              <form  method="POST" className="form" onSubmit={submitted}>
            <div className="mb-3">
          <label  className="form-label">Full Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname" value={user.fullname} onChange={getUserData} placeholder="Enter Full Name" required/>
              <p style={{color:"red"}}>{fullnameerr}</p>
           </div>
           <div className="mb-3">
          <label  className="form-label">Phone</label>
              <input type="number" className="form-control" id="exampleFormControlInput1" name="phone" value={user.phone} onChange={getUserData}  placeholder="Enter Mobile Nummber" required/>
              <p style={{color:"red"}}>{phoneerr}</p>
           </div>
            <div className="mb-3">
          <label  className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={user.email} onChange={getUserData}  placeholder="name@example.com" required/>
              <p style={{color:"red"}}>{emailerr}</p>
           </div>
           <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" name="msg" value={user.msg} onChange={getUserData}  rows="3" required></textarea>
              <p style={{color:"red"}}>{msgerr}</p>
              </div>
              <div className='mt-3 text-center'>
                   <button to=""  type='submit'className='btn btn-outline-danger p-2' onClick={postData}>Submit</button>
                   </div>
                   </form>
                        </div>
                        
          </div>
        </div>
   </>
  );
};




