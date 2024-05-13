import React from 'react'
import { Row,Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Home() {
  return (


    <div className='m-2'>
<Row>
    <Col sm={12} md={3}>
        <Link to={'/Add'} className='btn btn-success'>Add New Employee</Link>
    </Col>
    <Col sm={12} md={9}>
        <table className='table table-success'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Ajith</td>
                    <td>987654567</td>

                    <td>
                        <button className='mb-6 block btn btn-success'>View details</button>
                        <Link to={'/Edit'} className=''><i className="fa-solid fa-pen-to-square" /></Link>
                        <button><i className="fa-solid fa-trash" style={{color: "#020203",}} /></button>
                    </td>
                </tr>
            </tbody>
        </table>

    </Col>
</Row>

    </div>

)
}

export default Home