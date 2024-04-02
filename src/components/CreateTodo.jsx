'use client'
import { addNewTodow, updateTodo } from '@/provider/redux/todos';
import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from "./FlipCard/FlipCard.module.css"
import GreaterThanIcon from '@/utils/GreaterThanIcon';
import { removeEditedTodo } from '@/provider/redux/editedTodo';

const CreateTodo = ({flipCard=()=>{},showButton=false}) => {
    const dispatch = useDispatch()
    const formRef = useRef();
    const editedTodo=useSelector((state)=>state.editedTodo)
    console.log("editedTodo",editedTodo)

useEffect(()=>{
  if(editedTodo){
    formRef.current.elements.title.value=editedTodo.title
    formRef.current.elements.description.value=editedTodo.description
  }
},[editedTodo])

function createTodo(e){
    e.preventDefault()
    const formData = {
        title: formRef.current.elements.title.value,
        description: formRef.current.elements.description.value,
      };

      dispatch(addNewTodow(formData))
      formRef.current.reset();
}

function handleUpdate(){
  const newTodo={
    id:editedTodo.id,
    title:formRef.current.elements.title.value,
    description:formRef.current.elements.description.value,
    completed:editedTodo.completed
  }
dispatch(updateTodo(newTodo))
formRef.current.reset();
dispatch(removeEditedTodo())
if(showButton){
  flipCard()
}
}
function handleCancel(){
  formRef.current.reset();
  dispatch(removeEditedTodo())
  if(showButton){
    flipCard()
  }
}

  return (
   <>
    <section className='w-full md:w-[40%] flex flex-col bg-[#E8F2FF] p-4 md:p-8 h-full rounded-md md:rounded-none'>
    <h1 className='text-2xl text-[#002964] font-medium'>Add task</h1>
    <form ref={formRef} onSubmit={createTodo} className='flex flex-col'>
        <label className='text-[#191919] text-base mt-5 mb-1' htmlFor="create_todo_title">Task Title</label>
        <input className='border border-[#E3E5E5] rounded pl-2 py-2 focus:outline-[#d1e5ff]' id='create_todo_title' type="text" name="title" placeholder='Enter task title' required/>

        <label htmlFor="create_todo_description" className="text-[#191919] text-base mt-5 mb-1"> Task Description</label>
        <textarea className='border-[#E3E5E5] rounded pl-2 py-2 focus:outline-[#d1e5ff] resize-none' name="description" id="create_todo_description" rows="5" placeholder='Enter task description' required></textarea>
        {!editedTodo?<button type='submit' className='bg-[#002964] text-white py-2 rounded mt-8'>Add task</button>:<div className='w-full flex mt-8 gap-4 items-center justify-center'>
        <p onClick={handleUpdate} className='bg-[#002964] text-white rounded w-[120px] h-[35px] flex items-center justify-center cursor-pointer'>Update</p>
        <p onClick={handleCancel} className='text-[#002964] rounded w-[120px] h-[35px] border border-[#002964] flex items-center justify-center cursor-pointer'>Cancel</p>
        </div>}

    </form>
    {showButton&&<div onClick={flipCard} className='absolute bottom-0 left-0 w-full h-[30px] flex cursor-pointer'>
    <button className={`${styles.saveBtn} m-auto`}>Next <span className={styles.greaterThanCont}>{Array(3).fill(0).map((_,idx)=>{return <GreaterThanIcon key={idx}/> })}</span></button>
    </div>}
    </section>
   </>
  )
}

export default CreateTodo