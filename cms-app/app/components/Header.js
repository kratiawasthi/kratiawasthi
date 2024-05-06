import Link from 'next/link'
import React from 'react'
//import { FaShoppingCart } from "react-icons/fa";
function Header() {
  return (
    <div className="p-3 border-b-2 border-[#F5F3FF] bg-purple-800">
        <div className="max-w-7xl mx-auto flex justify-between">
            <div className="flex items-center">
                
               <h1 className="ml-2 text-2xl lg:text-3xl font-bold bg-purple-800"> Artistic Prints</h1>

            </div>
            <div className='max-w-4xl flex gap-4 items-center font-extrabold'>
              <Link  href='/sign-up'>Sign Up</Link>
              <Link href='/sign-in'>Sign In</Link>
            
          
             
            </div>

        </div>
      
        </div>
  )
}

export default Header