import React from 'react'
import { Link } from 'react-router-dom' 
import { FaArrowRight } from "react-icons/fa6"


const Banner = () => {
  return (
    <div className='px-4 py-32 bg-black mx-auto'>
      <div className='text-white text-center'>
        <h1 className='text-5xl lg:text-5xl leading-snug font-bold mb-5'>Söylenmedi hiç sana layık düşler</h1>
        <p className='text-gray-100 lg:w-3/5 mb-5 mx-auto font-primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id ligula ac metus tristique congue. Maecenas vel orci vel justo hendrerit posuere. Nullam auctor justo ac lacus facilisis, vel tristique neque laoreet. Sed eget risus auctor, feugiat lectus vitae, vehicula orci. Proin ut tortor eget libero feugiat consectetur. In hac habitasse platea dictumst. </p>
        <div >
          <Link to="/" className='font-medium hover:text-orange-500 items-center inline-flex py-1'>Learn More <FaArrowRight className='mt-1 ml-2'/></Link>
        </div>
      </div>
    </div>
  )
}

export default Banner
