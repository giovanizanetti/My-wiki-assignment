import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  return (
    <Navbar title='header' bg='info'>
      <h1 className='text-light px-5 m-auto'>My Wiki</h1>
      {location?.pathname === '/' ? (
        <Link className='mx-3 text-dark' to='/wikilist'>
          WikiList
        </Link>
      ) : (
        <Link className='mx-3 text-dark' to='/'>
          Home
        </Link>
      )}
    </Navbar>
  )
}

export default Header
