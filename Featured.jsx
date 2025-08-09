import React from 'react'

function Featured() {
  return (
    <div className='w-full py-20'>
      <div className='w-full px-20 border-b-[1px] border-zinc-700 pb-20'>
        <h1 className='text-7xl tracking-tight'>Featured Projects</h1>
      
      </div>
      <div className='px-20'>
        <div className=' cards flex gap-10 cards w-full mt-10'>
          <div className='cardcontainer relative w-1/2 h-[75vh]'>
          <h1 className='absolute text-[#CDEA68] left-full z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2   leading-none tracking-tighter  text-8xl' >
          {"FYDE".split("").map((item,index) =>(
              <span>{item}</span>
            ))}
          </h1>
          <div className='card w-full h-full rounded-xl  overflow-hidden'>
            <img className='w-full h-full bg-cover' src='https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg'></img>
          </div>
          </div>
           <div className='cardcontainer w-1/2 h-[75vh] relative '>
            <h1 className='absolute text-[#CDEA68] right-full z-[9] translate-x-1/2 top-1/2 -translate-y-1/2   leading-none tracking-tighter  text-8xl' >
            
            </h1>
          <div className='card w-full h-full rounded-xl overflow-hidden'>
            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" />
          </div>
         
          </div>
        
          </div>
          

        </div>
      
    </div>
  )
}

export default Featured