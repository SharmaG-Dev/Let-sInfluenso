import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './navbar/header'

const InfluencerUser = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default InfluencerUser