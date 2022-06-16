let requestOptions = {
  method: 'GET',
  redirect: 'follow',
  withCredentials: true,
  credentials: 'include',
  mode: 'no-cors',
}

let minutes, seconds
let mins = 0,
  secs = 0
let stoptime = false
let timerloop

export const milliToMinsAndSecs = (millis) => {
  let TimeArray = []
  console.log(millis)
  const d = new Date()
  let timeSpan = d.getTime() - millis
  let timeSpanInSecs = timeSpan / 1000
  let secs = timeSpanInSecs % 60
  let mins = (timeSpanInSecs - secs) / 60
  TimeArray.push(mins)
  TimeArray.push(Math.round(secs))
  console.log(TimeArray)
  return TimeArray
}

export const startLocalAndBordTimer = () => {
  fetch(`http://192.168.15.140:1234/update?starttimer=''`, requestOptions)
    .then()
    .catch((error) => console.log('error', error))

  minutes = document.querySelector('.js-timer-minutes')
  seconds = document.querySelector('.js-timer-seconds')
  console.log(minutes)
  console.log(seconds)
  timerLocalCycle()
  if (stoptime == true) {
    stoptime = false
    timerLocalCycle()
  }
}

export const resetLocalAndBordTimer = () => {
  fetch(`http://192.168.15.140:1234/update?resettimer=''`, requestOptions)
    .then()
    .catch((error) => console.log('error', error))

  stoptime = true
  mins = 0
  secs = 0
  minutes.innerHTML = '0' + mins.toString()
  seconds.innerHTML = '0' + secs.toString()
  clearTimeout(timerloop)
}

export const stopLocalAndBordTimer = () => {
  fetch(`http://192.168.15.140:1234/update?stoptimer=''`, requestOptions)
    .then()
    .catch((error) => console.log('error', error))

  stoptime = true
  clearTimeout(timerloop)
}

export const setLocalAndBordTimer = (currentTimeArray) => {
  minutes = document.querySelector('.js-timer-minutes')
  seconds = document.querySelector('.js-timer-seconds')
  fetch(
    `http://192.168.15.140:1234/update?settimer=${currentTimeArray[0]},${currentTimeArray[1]}`,
    requestOptions,
  )
    .then()
    .catch((error) => console.log('error', error))
  // resetLocalAndBordTimer();

  console.log(currentTimeArray)
  let tempSec = currentTimeArray[0]
  let tempMin = currentTimeArray[1]

  if (currentTimeArray[0] < 9) {
    tempSec = "0" + currentTimeArray[0].toString()
  }
  if (currentTimeArray[1] < 9) {
    tempMin = "0" + currentTimeArray[1].toString()
  }

  mins = currentTimeArray[0],
  secs = currentTimeArray[1]

  console.log(currentTimeArray)
  minutes.innerHTML = tempMin
  seconds.innerHTML = tempSec
  startLocalAndBordTimer();
}

export const timerLocalCycle = () => {
  if (stoptime == false) {
    secs = secs + 1

    if (secs == 60) {
      mins = mins + 1
      secs = 0
    }
    if (mins == 90) {
      mins = 0
    }

    if (secs >= 10) {
      seconds.innerHTML = secs
    } else {
      seconds.innerHTML = '0' + secs
    }

    if (mins >= 10) {
      minutes.innerHTML = mins
    } else {
      minutes.innerHTML = '0' + mins
    }

    timerloop = setTimeout(timerLocalCycle, 1000)
  }
}

export const updateTekst = (text) => {
  fetch(
    `http://192.168.15.140:1234/update?tekstopscherm=${text}`,
    requestOptions,
  )
    .then()
    .catch((error) => console.log('error', error))
}

export const updateScherm = (requestType) => {
  console.log(requestType)
  if (requestType == 'scoreboard') {
    requestType = 'P200'
  } else if (requestType == 'sponsers') {
    requestType = 'P201'
  } else if (requestType == 'zwart scherm') {
    requestType = 'P3'
  }

  fetch(
    `http://192.168.15.140:1234/update?Keuze=${requestType}`,
    requestOptions,
  )
    .then(() => {})
    .catch((error) => console.log('error', error))
}

export const updateTeamScoreBord = (team, isScoreOmhoog) => {
  let verzendScoreNaar, updateValue
  if (team == 'thuis') {
    verzendScoreNaar = 'G1'
    updateValue = isScoreOmhoog == true ? 'NEXT' : 'PREVIOUS'
  } else if (team == 'uit') {
    verzendScoreNaar = 'G2'
    updateValue = isScoreOmhoog == true ? 'NEXT' : 'PREVIOUS'
  }

  fetch(
    `http://192.168.15.140:1234/update?${verzendScoreNaar}=${updateValue}`,
    requestOptions,
  )
    .then(() => {})
    .catch((error) => console.log('error', error))
}

export const updateTeamVlagBord = (team, colour01, colour02) => {
  let vlagBovenHalf, vlagOnderHalf
  if (team == 'home') {
    vlagBovenHalf = 'thuiskleurboven'
    vlagOnderHalf = 'thuiskleuronder'
  } else if (team == 'out') {
    vlagBovenHalf = 'uitkleurboven'
    vlagOnderHalf = 'uitkleuronder'
  }
  fetch(
    `http://192.168.15.140:1234/update?${vlagBovenHalf}=${colour01}`,
    requestOptions,
  )
    .then(() => {})
    .catch((error) => console.log('error', error))
  fetch(
    `http://192.168.15.140:1234/update?${vlagOnderHalf}=${colour02}`,
    requestOptions,
  )
    .then(() => {})
    .catch((error) => console.log('error', error))
}
// TODO
