import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  return (
    <header className='d-flex justify-content-between align-items-center' title='header' bg='info'>
      <h1 className='text-light px-2 ml-4'>My Wiki</h1>
      {location?.pathname === '/' ? (
        <Link className='mx-3 text-dark' to='/wikilist'>
          WikiList
        </Link>
      ) : (
        <Link className='mx-3 text-dark' to='/'>
          Home
        </Link>
      )}
    </header>
  )
}

export default Header
