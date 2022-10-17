import React from 'react'
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <h2 className='head'>The</h2>
    <h1 className='heading'>Siren</h1>

    <Nav  justify variant="tabs" defaultActiveKey="/home" className="main">
      <Nav.Item>
        <Link to="/Home" className="home">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/Bollywood" className="bollywood">Bollywood</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/Technology" className="technology">Technology</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/Hollywood" className="hollywood">Hollywood</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/Fitnees" className="fitness">Fitness</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/Food" className="food">Food</Link>
      </Nav.Item>
    </Nav>

    </>
    
  )
}

export default Navbar