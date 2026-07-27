import React from 'react'
import {Link, Outlet} from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div>
      <h1>Product Page</h1>
      <Link to='/product/Men'>Men</Link>
      <Link to='/product/Women'>Women</Link>
    </div>
    <Outlet/>
    </div>   
  )
}


export default Product
