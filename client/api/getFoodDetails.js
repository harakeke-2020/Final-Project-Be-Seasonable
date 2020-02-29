import request from 'superagent'

const apiURL = '/api/v1/foods/'

export function getFoodDetails (id) {
  return request
    .get(`${apiURL}${id}`)
    .then(res => res.body)
}
