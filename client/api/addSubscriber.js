import request from 'superagent'

export function addSubscriber (subscriber) {
  console.log('hit api')
  return request
    .post('/api/v1/subscribe')
    .send(subscriber)
}
