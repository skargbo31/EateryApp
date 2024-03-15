import React from 'react'

const HeadLineCads = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Cards 1*/}
        <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4 '>Sun's Out, BOGO Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
                
        </div>

           {/* Cards 2*/}
           <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4 '>New Restauarts</p>
                <p className='px-2'>Added Daily</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
                
        </div>

           {/* Cards */}
           <div className='rounded-xl relative'>
            {/* overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4 '>We Delived At Your Home</p>
                <p className='px-2'>Reach Out To Us Now</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
            </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1262302/pexels-photo-1262302.jpeg?auto=compress&cs=tinysrgb&w=600" alt="/" />
                
        </div>
    </div>
  )
}

export default HeadLineCads