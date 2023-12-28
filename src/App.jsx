import { useRef, useState } from 'react'
import './App.css'
import { data } from './assets/data'


const App=()=> {
  let [index,setIndex]=useState(0);
  let [question,setQuestion]=useState(data[index]);
  let[lock,setLock]=useState(false);
let [score,setScore]=useState(0)
let [quizCompleted, setQuizCompleted] = useState(false);

  let option1=useRef(null);
  let option2=useRef(null);
  let option3=useRef(null);
  let option4=useRef(null);

  let option_array =[option1,option2,option3,option4];



  const checkAns =(e,ans)=>{
    if(lock===false){
      if(question.Ans===ans){
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev=>prev+1);
      }
      else{
        e.target.classList.add("Worng");
        setLock(true);
        option_array[question.Ans-1].current.classList.add("correct")
    }
    }
  }
 const next=()=>{
  if(lock===true){
    if (index + 1 === data.length) {
      setQuizCompleted(true);
    } 
    setIndex(++index);
    setQuestion(data[index]);
    setLock(false);
    option_array.map((option)=>{
      option.current.classList.remove("Worng");
      option.current.classList.remove("correct");
      return null;
    })
  }

 }

  return (
    <>
      <div className='container'>
        <h1>quiz-app</h1>
        <hr />
        <div>
            <p>Your Score: {score} out of {data.length}</p>
          </div>
        <h2>{index+1}.{question. question}</h2>
        <ul>
          <li ref={option1} onClick={(e)=>{checkAns(e,1)}} >{question.option1}</li>
          <li ref={option2} onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
          <li ref={option3} onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
          <li ref={option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
        </ul>
        <button onClick={next}>Next</button>
        <div className='index'>{index+1}of {data.length} questions
        </div>
      </div>
    </>
  )
}

export default App
