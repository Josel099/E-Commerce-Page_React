import React,{useState} from 'react'
import './contactform.css'

function ContactFormComponent() {
    
    const [formData,setFormData]=useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        message:""
    })
    
  
    const handleClick = (formData) => {
        console.log(formData);
        setFormData({
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:"",
        message:""
        })
      }
  return (
    <>
<h2>Contact Form</h2>
<div className='form-container'>
<div className="form-section">
    <div className='each-form-row'>
    First Name: <input type="text"  name="firstname" placeholder="firstname" value={formData.firstName} onChange={(e)=>setFormData({...formData,firstName:e.target.value})}/>
    <p className="input-re">{formData.firstName}</p>
    </div>
    
    <div className='each-form-row'>
    Last Name:  <input type="text" name="lastname" placeholder="lastname" value={formData.lastName} onChange={(e)=>setFormData({...formData,lastName:e.target.value})}/>  
    <p className="input-re">{formData.lastName}</p>
    </div>
    <div className='each-form-row'>
    Email: <input type="text"  name="mail" placeholder="email" value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})}/>    
    <p className="input-re">{formData.email}</p>
    </div>
    <div className='each-form-row'>
    phone number: <input type="text" name="number" placeholder="phone number"value={formData.phoneNumber} onChange={(e)=>setFormData({...formData,phoneNumber:e.target.value})}/> 
    <p className="input-re">{formData.phoneNumber}</p>
    </div>


<div className='each-form-row'>
    Message:  <textarea className="message-input"  type="text" rows="5"  name="Message" value={formData.message} onChange={(e)=>setFormData({...formData,message:e.target.value})}/>
    <p className="input-re">{formData.message}</p>
    </div>
    
    <div className='each-form-row '>
     <input className="submit-button"type="submit"  name="submit" onClick={() => handleClick(formData)}  />
     </div>
</div>
</div>
</>
  )
}

export default ContactFormComponent