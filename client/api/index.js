import request from 'superagent'

export function getMemes() {
return request.get('/v1/memes')
.then(res => {
  // console.log(res.body)
    return res.body
  })

}

