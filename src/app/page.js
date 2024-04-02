'use client'

import ClassComponentForResizeCalculation from "@/components/ClassComponentForResizeCalculation";
import CreateTodo from "@/components/CreateTodo";
import FlipCard from "@/components/FlipCard/FlipCard";
import ShowTodos from "@/components/ShowTodos";
import { throttle } from "lodash";
import { useState } from "react";

function getInnerWidth(){
  if (typeof window !== 'undefined'){
    return window.innerWidth
  }

}

export default function Home() {
  const innerWidth=getInnerWidth()
  const [width, setWidth] = useState(innerWidth);

  const updateWidth = throttle(() => {
    if (typeof window !== 'undefined'){
      setWidth(window.innerWidth);
    }
  },500)
  
   

  return (
    <>
    <ClassComponentForResizeCalculation updateWidth={updateWidth}/>
  <section className="w-full h-screen overflow-hidden flex items-center justify-center bg-gray-300">
  {width<760?<FlipCard/>:
  <div className="flex w-[95%] md:w-[90%] lg:w-[80%] h-[95vh] md:h-[90vh] rounded-md shadow-md overflow-hidden">
    <CreateTodo/>
    <ShowTodos/>
  </div>
}
  </section>
    </>
  );
}
