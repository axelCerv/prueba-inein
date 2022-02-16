import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
        <Link to="/" >Preguntas</Link>
        <Link to="/test1" >Empleados</Link>
        <Link to="/test2" >Pokeapi</Link>
    </nav>
  )
}

export default Navbar