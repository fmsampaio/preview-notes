const timeToStr = function(time) {
    const returnable = `${time.hr < 10 ? 0 : ""}${time.hr} : ${time.min < 10 ? 0 : ""}${time.min} : ${time.sec < 10 ? 0 : ""}${time.sec}`
    return returnable
}

const calculateTimeElapsed = function(timeMarks) {
    var timeElapsed = [];

    if(timeElapsed !== undefined) 
        for (let iMark = 0; iMark < timeMarks.length; iMark++) {
            const mark = timeMarks[iMark];
            if(iMark === 0) {
                timeElapsed.push(mark);
            }
            else {
                timeElapsed.push(getElapsedTime(timeMarks[iMark], timeMarks[iMark-1]))
                if(mark.is_final) {
                    const totalElapsed = {
                        ... timeMarks[iMark],
                        is_total : true
                    }
                    timeElapsed.push(totalElapsed)
                }
            }        
        }
    return timeElapsed
}

export {timeToStr, calculateTimeElapsed}

function getElapsedTime(t0, t1) {
    const totalSec0 = t0.hr * 3600 + t0.min * 60 + t0.sec;
    const totalSec1 = t1.hr * 3600 + t1.min * 60 + t1.sec;

    // Calcular a diferença em segundos
    let diff = Math.abs(totalSec1 - totalSec0);

    // Converter de volta para horas, minutos e segundos
    const hrs = Math.floor(diff / 3600);
    diff %= 3600;
    const mins = Math.floor(diff / 60);
    const secs = diff % 60;

    const returnable = {
        hr : hrs,
        min : mins,
        sec : secs,
        is_total : false
    }

    // Retornar o resultado
    return returnable;
}