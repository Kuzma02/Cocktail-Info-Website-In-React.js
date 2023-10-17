import React from 'react'
import { Outlet } from 'react-router-dom'
import {Navbar} from '../components'

export const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <section className='page'>
      <Outlet />  
      </section>
    </>
  )
}

export default HomeLayout