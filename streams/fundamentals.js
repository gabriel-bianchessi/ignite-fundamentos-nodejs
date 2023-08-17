// process.stdin
//   .pipe(process.stdout)

import { Readable, Writable, Transform } from 'node:stream'

class OneToHundredStream extends Readable { 
  index = 1

  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i> 100) { 
        this.push(null)
      } else {
        const buff = Buffer.from(String(i))
  
        this.push(buff)
      }
    }, 1000)
  }
}

class InverseNumberStream extends Transform {
  _transform(chunk, _encoding, callaback) {
    const transformed = Number(chunk.toString()) * -1

    callaback(null, Buffer.from(String(transformed)))
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, _encoding, callaback) {
    console.log(Number(chunk.toString()) * 10)
    callaback()
  }
}

new OneToHundredStream()
  .pipe(new InverseNumberStream())
  .pipe(new MultiplyByTenStream())