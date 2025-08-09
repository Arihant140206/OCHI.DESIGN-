import React from 'react'

function Footer() {
  return (
    <div className='w-full flex gap-5 h-screen bg-zinc-900 p-20'>
        <div className='w-1/2 h-full flex flex-col justify-between '>
       <div className='heading tracking-tighter'>
         <h1 className='text-[8vw]  font-semibold uppercase leading-none -mb-4'>EYE-</h1>
        <h1 className='text-[8vw]  font-semibold uppercase leading-none mb-10'>OPENING</h1>
       </div>
       <div>
        <img src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>

       </div>
         </div>
         <div className='w-1/2'>
         <h1 className='text-[5vw]  font-semibold uppercase leading-none -mb-4'>PRESENTATIONS</h1>
         <div className='dets mt-10 pt-10'>
            <a className='block text-xl font-light ' href='#'>Facebook</a>
             <a className='block text-xl font-light ' href='#'>Instagram</a>
              <a className='block text-xl font-light ' href='#'>Twitter</a>
         </div>
         </div>

    </div>
  )
}

export default Footer