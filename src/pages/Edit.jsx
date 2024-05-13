import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Edit() {

  const [formdata, setFormData] = useState({
    name: "", age: "", dept: "", phone: "", email: ""
})


const handleSubmit = (e) => {
  e.preventDefault()
  console.log(FormData)
}





return (
  <div>

    <div className='w-100 border shadow p-5'>
      <h1 className='text-success text-center'>Edit employee</h1>
      <form>
        <FloatingLabel controlId="floatingInputGrid" label="Name">
          <Form.Control onChange={(e) => { setFormData({ ...formdata, name: e.target.value }) }} type="text" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputGrid" label="Age">
          <Form.Control onChange={(e) => { setFormData({ ...formdata, age: e.target.value }) }} type="number" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputGrid" label="Phone">
          <Form.Control onChange={(e) => { setFormData({ ...formdata, phone: e.target.value }) }} type="number" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputGrid" label="email">
          <Form.Control onChange={(e) => { setFormData({ ...formdata, email: e.target.value }) }} type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInputGrid" label="Department">
          <Form.Control onChange={(e) => { setFormData({ ...formdata, dept: e.target.value }) }} type="text" placeholder="name@example.com" />
        </FloatingLabel>

        <div className='text-center mt-2 d-flex justify-content-around'>
          <button className='btn btn-primary' onClick={handleSubmit}>Update</button>
          <button className='btn btn-danger'>Cancel</button>
        </div>


      </form>

    </div>
  </div>
)
}

export default Edit