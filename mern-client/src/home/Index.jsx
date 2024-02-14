import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavBook from './FavBook'

const HOME = () => {
  return (
    <div className=''>
      {/* <div className='h-screen'>HOME</div> */}
      <Banner></Banner>
      <BestSellerBooks/>
      <FavBook/>
      {/* <div className='h-screen bg-red-400'></div> */}
    </div>
  )
}

export default HOME