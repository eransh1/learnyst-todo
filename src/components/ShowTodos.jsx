'use client'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import IndividualTodo from './IndividualTodo'
import LessThanIcon from '../utils/LessThanIcon'
import styles from "./FlipCard/FlipCard.module.css"
import { removeTodo, toggleCompleted } from '@/provider/redux/todos'
import { setEditedTodo } from '@/provider/redux/editedTodo'

const ShowTodos = ({flipCard=()=>{},showButton=false}) => {
const [optionChoosen, setOptionChoosen] = useState('all')
const [todoToShow, setTodoToShow] = useState([])
const todos=useSelector((state)=>state.todos)
const dispatch=useDispatch()

useEffect(()=>{

if(todos.length){
if(optionChoosen === 'all'){
  setTodoToShow(todos)
}
else if(optionChoosen === 'done'){
  setTodoToShow(todos.filter((todo)=>todo.completed))
}
else if(optionChoosen === 'pending'){
  setTodoToShow(todos.filter((todo)=>!todo.completed))
}
}
else {
  setTodoToShow([])
}

  return () => {
    setTodoToShow([])
  }
},[todos,optionChoosen])




function handleToggle(e,todo){
  e.stopPropagation()
  dispatch(toggleCompleted(todo.id))
  }
  
  function handleDelete(e,todo){
      e.stopPropagation()
      dispatch(removeTodo(todo.id))
  }
  
  function handleEdit(e,todo){
      e.stopPropagation()
      dispatch(setEditedTodo(todo))
      if(showButton){
        flipCard()
      }
  }


  return (
    <section className='w-full md:w-[60%] flex flex-col bg-[#fff] p-5 md:p-8 h-full rounded-md md:rounded-none relative'>
    <h1 className='text-2xl text-[#002964] font-medium'>To do tasks</h1>
    <div className='flex gap-3 items-center mt-4'>
    <span onClick={()=>setOptionChoosen('all')} className={`border border-[#002964] ${optionChoosen === 'all' ? 'bg-[#002964] text-white' : ''} rounded-md px-7 cursor-pointer py-1`}>All</span>
    <span onClick={()=>setOptionChoosen('done')} className={`border border-[#002964] ${optionChoosen === 'done' ? 'bg-[#002964] text-white' : ''} rounded-md px-7 cursor-pointer py-1`}>Done</span>
    <span onClick={()=>setOptionChoosen('pending')} className={`border border-[#002964] ${optionChoosen === 'pending' ? 'bg-[#002964] text-white' : ''} rounded-md px-7 cursor-pointer py-1`}>To Do</span>
    </div>

    {!todoToShow.length&&<h1 className='text-[#002964] text-2xl md:text-3xl mt-5 h-full flex items-center justify-center'>No tasks to show</h1>}
    {!!todoToShow.length&&<div className='mt-4 h-[60vh] md:h-[65vh] flex flex-col gap-2 overflow-y-auto pr-1'>
      {todoToShow.map((todo)=>{
      return <>
      <IndividualTodo key={todo.id} todo={todo} handleToggle={handleToggle} handleDelete={handleDelete} handleEdit={handleEdit}/>
      </>
    })}
    </div>}
    
    {showButton&&<div onClick={flipCard} className='absolute bottom-0 left-0 w-full h-[30px] flex cursor-pointer'>
      <button className={`${styles.cancelBtn} m-auto`}><span className={styles.lessThanCont}><LessThanIcon/></span> Back</button>
    </div>}

    </section>
  )
}

export default ShowTodos