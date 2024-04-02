'use client'

import CreateTodo from "@/components/CreateTodo";
import FlipCard from "@/components/FlipCard/FlipCard";
import ShowTodos from "@/components/ShowTodos";
import { throttle } from "lodash";
import { useEffect, useState } from "react";


export default function Home() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = throttle(() => {
    setWidth(window.innerWidth);
  },900)
  
    useEffect(() => {
      window.addEventListener("resize", updateWidth);
      return () => window.removeEventListener("resize", updateWidth);
    }, []);

  return (
    <>
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
