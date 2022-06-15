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
    vlagBovenHalf = "thuiskleurboven"
    vlagOnderHalf = "thuiskleuronder"
  } else if (team == 'out') {
    vlagBovenHalf = "uitkleurboven"
    vlagOnderHalf = "uitkleuronder"
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
