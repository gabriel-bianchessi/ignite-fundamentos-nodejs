import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNumberStream extends Transform {
  _transform(chunk, encoding, callaback) {
    const transformed = Number(chunk.toString()) * -1

    console.log(transformed)
    callaback(null, Buffer.from(String(transformed)))
  }
}

const server = http.createServer(async (req, res) => {
  console.log(fullStreamContent)

  return res.end(fullStreamContent)
})

server.listen(3334)