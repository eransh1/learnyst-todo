import React, { useState } from 'react'
import styles from "./FlipCard.module.css"
import ReactCardFlip from 'react-card-flip';
import CreateTodo from '../CreateTodo';
import ShowTodos from '../ShowTodos';

const FlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
      };

  return (
    <>
 <ReactCardFlip containerClassName={styles.outerContainer} isFlipped={isFlipped} flipDirection="horizontal">
        
<CreateTodo flipCard={flipCard} showButton={true}/>    
<ShowTodos flipCard={flipCard} showButton={true}/>
       
</ReactCardFlip>
    </>
  )
}

export default FlipCard