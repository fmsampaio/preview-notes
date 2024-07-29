import './App.css';
import Stopwatch from './components/Stopwatch';
import { useState } from 'react';

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
    <div>
      <Stopwatch addTimeMark = {addTimeMark} />
    </div>
  );
}

export default App;
