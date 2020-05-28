function encrypt(a: string, b: string): string {
  const aBuffer = Buffer.from(a, 'hex')
  const bBuffer = Buffer.from(b, 'hex')

  const resultBuffer = Buffer.from(
    aBuffer.map((value, i) => value ^ bBuffer[i])
  )

  return resultBuffer.toString('hex')
}

console.log(encrypt('1c0111001f010100061a024b53535009181c', '686974207468652062756c6c277320657965'))
