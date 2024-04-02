import { createSlice } from "@reduxjs/toolkit";

let initialState=null

const editedTodoSlice=createSlice({
    name:"editedtodo",
    initialState,
reducers:{
    setEditedTodo:(_,action)=>{
    return action.payload   
     }, 
    
    removeEditedTodo:(_,action)=>{
        return null
     },
    }
})
export const {setEditedTodo,removeEditedTodo}=editedTodoSlice.actions
export default editedTodoSlice.reducer