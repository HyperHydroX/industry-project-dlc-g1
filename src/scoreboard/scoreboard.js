var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  withCredentials: true,
  credentials: 'include',
  mode: 'no-cors',
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

export const updateTeamScoreBord = (team, score, isScoreOmhoog) => {
  let verzendScoreNaar, score
  if (team == 'thuis') {
    verzendScoreNaar = 'G1'
    score = isScoreOmhoog == true ? 'NEXT' : 'PREVIOUS'
  } else if (team == 'uit') {
    verzendScoreNaar = 'G2'
    score = isScoreOmhoog == true ? 'NEXT' : 'PREVIOUS'
  }

  fetch(
    `http://192.168.15.140:1234/update?${verzendScoreNaar}=${score}`,
    requestOptions,
  )
    .then(() => {})
    .catch((error) => console.log('error', error))
}

export const updateTimerBord = (requestType, time) => {
  console.log(requestType)
  if (requestType == 'starttimer') {
    requestType = 'starttimer'
  } else if (requestType == 'resettimer') {
    requestType = 'resettimer'
  } else if (requestType == 'settimer') {
    requestType = 'settimer'
  } else if (requestType == 'stoptimer') {
    requestType = 'stoptimer'
  }

  fetch(
    `http://192.168.15.140:1234/update?${requestType}=${time}`,
    requestOptions,
  )
    .then(() => {})
    .catch((error) => console.log('error', error))
}
