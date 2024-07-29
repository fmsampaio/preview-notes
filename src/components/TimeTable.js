export default function TimeTable( {timeMarks} ) {
    return (
        <div>            
            <p>{timeMarks.length}</p>    
            {
                timeMarks.map( (mark) => (
                    <p>{mark.is_final} - {mark.hr}:{mark.min}:{mark.sec}</p>
                ))
            }
       </div>
    )
}