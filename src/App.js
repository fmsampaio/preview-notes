import './App.css';
import { useState } from 'react';

import Stopwatch from './components/Stopwatch';
import TimeTable from './components/TimeTable';

function App() {

  const [timeMarks, setTimeMarks] = useState([])

  const addTimeMark = (time, isFinal) => {
    const partialTimeMark = { 
        ...time,
        is_final : isFinal
    }
    const newTimeMarks = [ ...timeMarks ]
    newTimeMarks.push(partialTimeMark)
    setTimeMarks(newTimeMarks)

    console.log(newTimeMarks)
}

  return (
    <div className='main_container'>
      <h1>Preview Notes</h1>
      <Stopwatch addTimeMark = {addTimeMark} />
      <TimeTable timeMarks = {timeMarks} />
    </div>
  );
}

export default App;
