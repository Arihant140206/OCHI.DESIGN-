import { motion } from 'framer-motion'
import React from 'react'

function LandingPage() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-53 px-20'>
            {["WE CREATE ", "EYE OPENING" , "PRESENTATIONS"].map((item,index)=>{
                return(
                    <div className='masker'>
                        <div className='w-fit flex items-end overflow-hidden'>
                            {index===1 && (
                                <motion.div
                                initial={{width:0}}
                                animate={{width:"9vw"}}
                                transition={{ease : [0.76,0,0.24,1] , duration : 2}}
                                
                                 className='mr-[1vw] w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative bg-green-500' >
                                    <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"  />
                                 </motion.div>
                            )}
                            <h1 className='pt-[2vw] mb-[1vw] uppercase text-[9vw] leading-[.75] font-bold'>
                                {item}</h1>
                        </div>

                    </div>
                )
            })}
        </div>
        <div className='border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-10 px-20'>
            {["For public and private companies " , "From the pitch to IPO"].map((items,index)=>
            <p className='text-md font-light tracking-tighter leading-none'>{items}</p>
            )}
            <div className='start'>
                <div className='px-4 py-2 border-[2px] border-zinc-500 rounded-full text-sm capitalise'>Start The Project</div>
            </div>

        </div>


    </div>
  )
}

export default LandingPage