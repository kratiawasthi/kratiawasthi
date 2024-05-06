"use client"
import React from 'react'
import {client} from '/sanity'
import Image from 'next/image';

 const page = async() => {
    const result = await client.fetch('*[_type =="poster"]');
    console.log(result);
  return (

    <div>
        { result && 
        result.map((item) =>{
            return (
                <div className="  float-none items-center gap-10 " width={100} height={500}   >
                <>
                
                <Image  src={item.imageUrl} className=" object-cover object-center float-none gap-4"width={500} height={100} priority />
                
                </>
                
                </div>   
                  
                
            )
        }
        )}
        
        </div>
  )
}
export default page;

/*import React from 'react';
import { client } from '@/sanity';
import Image from 'next/image';

const Page = ({ posters }) => {
    return (
        <div>
            {posters && posters.map((item, index) => (
                <div key={index}>
                    <h1>Navbar {item.userId}</h1>
                    {item.images.map((imageUrl, imageIndex) => (
                        <Image key={imageIndex} src={imageUrl} width={500} height={100} />
                    ))}
                </div>
            ))}
        </div>
    );
};


  const page = async() => {
    const posters = await client.fetch('*[_type =="poster"]');
    return {
        props: {
            posters,
        },
    };
}

export default Page;*/

