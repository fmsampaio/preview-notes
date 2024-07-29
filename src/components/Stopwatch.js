import { useState } from "react"
import styles from "./Stopwatch.module.css"

export default function Stopwatch( {addTimeMark} ) {
	const [time, setTime] = useState({
		sec: 0,
		min: 0,
		hr: 0
	})

	const [intervalId, setIntervalId] = useState()
    

	const updateTimer = () => {
		setTime((prev) => {
			let newTime = { ...prev }
			// update sec and see if we need to increase min
			if (newTime.sec < 59) newTime.sec += 1
			else {
				newTime.min += 1
				newTime.sec = 0
			}
			// min has increased in *newTime* by now if it was updated, see if it has crossed 59
			if (newTime.min === 60) {
				newTime.min = 0
				newTime.hr += 1
			}

			return newTime
		})
	}

	const handleStartPauseBtn = () => {
		if (!intervalId) {
			let id = setInterval(updateTimer, 1000)
			setIntervalId(id)
		} else {
			clearInterval(intervalId)
			setIntervalId("")
		}
	}

	const handleFinishBtn = () => {
		clearInterval(intervalId)
		addTimeMark(time, true)
	}

    const handleMarkTimeBtn = () => {
        addTimeMark(time, false)
    }
    

	return (
		<div className={styles.main_container}>
			<h1>Stopwatch</h1>
			<h2>{`${time.hr < 10 ? 0 : ""}${time.hr} : ${time.min < 10 ? 0 : ""}${time.min} : ${time.sec < 10 ? 0 : ""}${time.sec}`}</h2>
			<button onClick={handleStartPauseBtn}>Start/Pause</button>
			<button onClick={handleFinishBtn}>Finish</button>
            <button onClick={handleMarkTimeBtn}>Time Mark</button>
		</div>
	)
}
