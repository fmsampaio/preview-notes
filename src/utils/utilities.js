const timeToStr = function(time) {
    const returnable = `${time.hr < 10 ? 0 : ""}${time.hr} : ${time.min < 10 ? 0 : ""}${time.min} : ${time.sec < 10 ? 0 : ""}${time.sec}`
    return returnable
}

export {timeToStr}