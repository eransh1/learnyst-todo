

import { createSlice, nanoid } from "@reduxjs/toolkit";

let initialState=localStorage.getItem('todos')?JSON.parse(localStorage.getItem('todos')):[]

function makeItLocallyAvailable(data){
localStorage.setItem('todos',JSON.stringify(data))
}

const todoSlice=createSlice({
    name:"todos",
    initialState,
reducers:{
    addNewTodow:(state,action)=>{
    const newList=[...state,{id:nanoid(),title:action.payload.title,completed:false,description:action.payload.description}]
    makeItLocallyAvailable(newList) 
    return newList   
     }, 
    
    removeTodo:(state,action)=>{
        const newList=state.filter((todo)=>todo.id!==action.payload)
        makeItLocallyAvailable(newList)
        return newList
     },

    toggleCompleted:(state,action)=>{
        const newList=state.map((todo)=>todo.id===action.payload?{...todo,completed:!todo.completed}:todo)
        makeItLocallyAvailable(newList)
        return newList
    },
    updateTodo:(state,action)=>{
        const newList=state.map((todo)=>todo.id===action.payload.id?{...todo,...action.payload}:todo)
        makeItLocallyAvailable(newList)
        return newList
    }

}
})
export const {addNewTodow,removeTodo,toggleCompleted,updateTodo}=todoSlice.actions
export default todoSlice.reducer