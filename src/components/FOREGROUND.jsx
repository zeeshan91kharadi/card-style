import React, { useRef, useState } from 'react'
import CARD from './card'

function foreground() {
const ref = useRef(null);

    const data = [{desc:"this is the back ground colour of the card",filesize:".9mb", close:false, tag:{isOpen:true,tagTitle:"Download Now", tagColor:"green", },
    },

    {desc:"this is the back ground colour of the card",filesize:".9mb", close:true, tag:{isOpen:true,tagTitle:"upload", tagColor:"blue", },
    },

    {desc:"this is the back ground colour of the card",filesize:".9mb", close:false, tag:{isOpen:false,tagTitle:"Download Now", tagColor:"green", },
    },
    
];
    useState()
  return (

    <div ref={ref} className=' fixed top-0 left-0  z-[3] w-full h-full flex gap-10 flex-wrap p-5'>
{data.map((item,index)=>(
    <CARD data={item} reference={ref}/>
))}
    </div>

  )
}

export default foreground
