function encrypt(a: string, b: string): string {
  const aBuffer = Buffer.from(a, 'hex')
  const bBuffer = Buffer.from(b, 'hex')

  const resultBuffer = Buffer.from(
    aBuffer.map((value, i) => value ^ bBuffer[i])
  )

  return resultBuffer.toString('hex')
}

export default encrypt
