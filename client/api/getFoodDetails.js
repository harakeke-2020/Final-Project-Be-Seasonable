import request from 'superagent'

const apiURL = '/api/v1/foods/'

export function getFoodDetails (month, id) {
  return request
    .get(`${apiURL}${month}/${id}`)
    .then(res => res.body)
}
