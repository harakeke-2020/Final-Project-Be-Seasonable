import request from 'superagent'

const apiURL = '/api/v1/foods/'

export function getInSeasonFoods(month) {
  return request 
    .get(`${apiURL}${month}`)
    .then(res => res.body)
}