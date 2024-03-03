import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'

const HOME = () => {
  return (
    <div className=''>
      {/* <div className='h-screen'>HOME</div> */}
      <Banner></Banner>
      <BestSellerBooks />
      <FavBook />
      <PromoBanner />
      <OtherBooks/>
      <Review></Review>
      {/* <div className='h-screen bg-red-400'></div> */}
    </div>
  )
}

export default HOME