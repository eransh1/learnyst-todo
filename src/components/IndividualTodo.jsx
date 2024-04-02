'use client'

import React, { useRef, useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import useClickOutside from '@/utils/UseClickOutside';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function IndividualTodo({todo,handleToggle,handleDelete,handleEdit}) {
const [expanded,setExpanded]=useState(false)
const ignoreElement = useRef(null);
const domNode = useClickOutside(() => setExpanded(false),ignoreElement.current);


  return (
    <section ref={domNode} onClick={()=>setExpanded(!expanded)} className={`flex-none w-full h-max flex flex-col px-2 py-3 rounded-md border border-[#E4E9F2] transition-all duration-300 ease-in-out cursor-pointer overflow-hidden`}>
    <div className='flex items-center'>
    <span onClick={(e)=>handleToggle(e,todo)} className={`flex-none w-5 h-5 rounded ${todo.completed? 'bg-[#002964]':""} text-white border border-[#E4E9F2] mr-3 cursor-pointer flex items-center justify-center text-sm`}>✔</span>
    <div className='flex gap-2 w-[90%]'>
    <p className={`w-[90%] break-words ${todo.completed? 'text-[#B6B6B6] line-through':"text-[#002964]"}`}>{todo.title}</p>
    <MdEdit onClick={(e)=>handleEdit(e,todo)} className='cursor-pointer text-lg'/>
    <MdDelete onClick={(e)=>handleDelete(e,todo)} className='cursor-pointer text-lg text-red-500'/>
    </div>
    <FaChevronDown className={`flex-none ml-auto ${expanded?"rotate-180":"rotate-0"}`}/>
    </div>
    <p className={`ml-7 md:ml-6 lg:ml-8 mt-2 ${todo.completed? 'text-[#B6B6B6] line-through':"text-[#313131]"} text-sm max-w-[90%] break-words ${expanded?"block":"hidden"}`}>{todo.description}</p>
    </section>
  )
}

export default IndividualTodo