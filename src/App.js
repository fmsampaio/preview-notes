import './App.css';
import { useState } from 'react';

import Stopwatch from './components/Stopwatch';
import TimeTable from './components/TimeTable';

import { calculateTimeElapsed } from './utils/utilities';

function App() {

  const [timeMarks, setTimeMarks] = useState([])
  const [timeElapsed, setTimeElapsed] = useState([])

  const addTimeMark = (time, isFinal) => {
    const partialTimeMark = { 
        ...time,
        is_final : isFinal
    }
    const newTimeMarks = [ ...timeMarks ]
    newTimeMarks.push(partialTimeMark)
    setTimeMarks(newTimeMarks)
    setTimeElapsed(calculateTimeElapsed(newTimeMarks))

    console.log(newTimeMarks)
  }


  return (
    <div className='main_container'>
      <h1>Preview Notes</h1>
      <Stopwatch addTimeMark = {addTimeMark} />
      <TimeTable timeElapsed = {timeElapsed} />
    </div>
  );
}

export default App;
