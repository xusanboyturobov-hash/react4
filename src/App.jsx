import React from 'react'
import logo from "./assets/logo.png" 
const App = () => {
  return (
    <div>
      <header className='py-[10px]'>
        <div className='container max-w-[1300px] w-full mx-auto px-[20px] '>
          <nav className='flex justify-between items-center'>
<img src={logo} alt="" />
<ul className='flex gap-[20px]'>
  <li className='font-[500] text-[20px] text-[#272727]  hover:text-[#39DB4A] '>Home</li>
  <li className='font-[500] text-[20px] text-[#272727]  hover:text-[#39DB4A] '>Menu</li>
  <li className='font-[500] text-[20px] text-[#272727]  hover:text-[#39DB4A] '>Services</li>
  <li className='font-[500] text-[20px] text-[#272727]  hover:text-[#39DB4A] '>Offers</li>
</ul>
<button className='w-[180px] bg-[#39DB4A] rounded-[40px] py-[15px] font-[500] text-[20px] text-[#FFFFFF]  hover:bg-[#000]'>Contact</button>

          </nav>
        </div>
      </header>
      <div> 
                 
          
        <h1 className='text-black text-[30px] font-[400]'>  Dive into Delights Of Delectable <span className='text-[#39DB4A]'>Food</span> 
        </h1>
      </div>
    </div>
  )
}

export default App