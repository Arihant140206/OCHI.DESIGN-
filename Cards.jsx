import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-800 flex items-center px-32 gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2'>
        <div className='card rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
            <img className='h-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>
        </div>

        </div>
        <div className='cardcontainer h-[50vh] flex gap-5 w-1/2'>
        <div className='card rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
          <img className='h-32 rounded-xl' src='https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png'></img>
        </div>
        <div className='card rounded-xl w-1/2 h-full bg-[#192826] flex items-center justify-center'>
           <img className='h-32 rounded-xl' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img></div>

        </div>

    </div>
  )
}
  
export default Cards