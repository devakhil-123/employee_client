import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Add() {

  const [formdata,setFormData ]=useState({
    name:"",age:"",phone:"",email:"",dept:""
  })


  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(formdata)
  }





  return (
    <div className='d-flex flex-coloumn align-items-center p-5 container-fluid'>
    <div className='w-100 border shadow p-5'>
        <h1 className='text-success text-center'>Add employee</h1>
        <form>
        <FloatingLabel controlId="floatingInputGrid" label="Name">
          <Form.Control onChange={(e)=>{ setFormData({...formdata,name: e.target.value})}} type="text" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputGrid" label="Age">
          <Form.Control onChange={(e)=>{ setFormData({...formdata,age: e.target.value})}} type="number" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputGrid" label="Phone">
          <Form.Control onChange={(e)=>{ setFormData({...formdata,phone: e.target.value})}} type="number" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputGrid" label="email">
          <Form.Control onChange={(e)=>{ setFormData({...formdata,email: e.target.value})}} type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputGrid" label="Department">
          <Form.Control onChange={(e)=>{ setFormData({...formdata,dept: e.target.value})}} type="text" placeholder="name@example.com" />
        </FloatingLabel>

        <div className='text-center mt-2 d-flex justify-content-around'>
            <button className='btn btn-primary' onClick={(e)=>handleSubmit(e)}>Submit</button>
            <button className='btn btn-danger'>Cancel</button>
        </div>

            
        </form>

    </div>

    </div>
  )
}

export default Add