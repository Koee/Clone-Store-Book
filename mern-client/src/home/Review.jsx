import React from 'react'
import { FaStar } from "react-icons/fa6"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { Avatar } from 'flowbite-react';

import ProPic from "../assets/banner-books/biasach1.jpg"
const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'><h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Our Customers</h2><div><Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '@0.75': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '@1.00': {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        '@1.50': {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
          <div className='text-amber-500 flex gap-2 '>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className='mt-7'>
            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui porro ducimus maxime distinctio doloribus molestiae quod, dolore ipsam pariatur necessitatibus amet temporibus nihil quas, recusandae, modi eveniet reprehenderit veniam inventore.</p>
            <Avatar img={ProPic} rounded bordered className='w-10 mb-4' />
            <h5 className='text-lg font-medium'>Mark Ping</h5>
            <p className='text-base'>CEO</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
          <div className='text-amber-500 flex gap-2 '>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className='mt-7'>
            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui porro ducimus maxime distinctio doloribus molestiae quod, dolore ipsam pariatur necessitatibus amet temporibus nihil quas, recusandae, modi eveniet reprehenderit veniam inventore.</p>
            <Avatar img={ProPic} rounded bordered className='w-10 mb-4' />
            <h5 className='text-lg font-medium'>Mark Ping</h5>
            <p className='text-base'>CEO</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
          <div className='text-amber-500 flex gap-2 '>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className='mt-7'>
            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui porro ducimus maxime distinctio doloribus molestiae quod, dolore ipsam pariatur necessitatibus amet temporibus nihil quas, recusandae, modi eveniet reprehenderit veniam inventore.</p>
            <Avatar img={ProPic} rounded bordered className='w-10 mb-4' />
            <h5 className='text-lg font-medium'>Mark Ping</h5>
            <p className='text-base'>CEO</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
          <div className='text-amber-500 flex gap-2 '>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className='mt-7'>
            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui porro ducimus maxime distinctio doloribus molestiae quod, dolore ipsam pariatur necessitatibus amet temporibus nihil quas, recusandae, modi eveniet reprehenderit veniam inventore.</p>
            <Avatar img={ProPic} rounded bordered className='w-10 mb-4' />
            <h5 className='text-lg font-medium'>Mark Ping</h5>
            <p className='text-base'>CEO</p>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
          <div className='text-amber-500 flex gap-2 '>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className='mt-7'>
            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui porro ducimus maxime distinctio doloribus molestiae quod, dolore ipsam pariatur necessitatibus amet temporibus nihil quas, recusandae, modi eveniet reprehenderit veniam inventore.</p>
            <Avatar img={ProPic} rounded bordered className='w-10 mb-4' />
            <h5 className='text-lg font-medium'>Mark Ping</h5>
            <p className='text-base'>CEO</p>
          </div>
        </div>
      </SwiperSlide> <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
          <div className='text-amber-500 flex gap-2 '>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className='mt-7'>
            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui porro ducimus maxime distinctio doloribus molestiae quod, dolore ipsam pariatur necessitatibus amet temporibus nihil quas, recusandae, modi eveniet reprehenderit veniam inventore.</p>
            <Avatar img={ProPic} rounded bordered className='w-10 mb-4' />
            <h5 className='text-lg font-medium'>Mark Ping</h5>
            <p className='text-base'>CEO</p>
          </div>
        </div>
      </SwiperSlide> <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
        <div className='space-y-6'>
          <div className='text-amber-500 flex gap-2 '>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <div className='mt-7'>
            <p className='mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui porro ducimus maxime distinctio doloribus molestiae quod, dolore ipsam pariatur necessitatibus amet temporibus nihil quas, recusandae, modi eveniet reprehenderit veniam inventore.</p>
            <Avatar img={ProPic} rounded bordered className='w-10 mb-4' />
            <h5 className='text-lg font-medium'>Mark Ping</h5>
            <p className='text-base'>CEO</p>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </div></div>
  )
}

export default Review