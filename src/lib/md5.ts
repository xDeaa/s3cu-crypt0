// Convert Buffer to big-endian 32-bit words
function bytesToWord(bytes: Buffer): number[] {
  const words: number[] = []

  for (let i = 0, b = 0; i < bytes.length; i++, b += 8) {
    words[b >>> 5] |= bytes[i] << (24 - b % 32)
  }

  return words
}

function bytesToHex(bytes: number[]): string {
  const result = []

  for(let i = 0; i < bytes.length; i++) {
    result.push((bytes[i] >>> 4).toString(16))
    result.push((bytes[i] & 0xF).toString(16))
  }

  return result.join('')
}

function F(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
  const n = a + (b & c | ~b & d) + (x >>> 0) + t
  return ((n << s) | (n >>> (32 - s))) + b
}

function G(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
  const n = a + (b & d | c & ~d) + (x >>> 0) + t
  return ((n << s) | (n >>> (32 - s))) + b
}

function H(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
  const n = a + (b ^ c ^ d) + (x >>> 0) + t
  return ((n << s) | (n >>> (32 - s))) + b
}

function I(a: number, b: number, c: number, d: number, x: number, s: number, t: number): number {
  const n = a + (c ^ (b | ~d)) + (x >>> 0) + t
  return ((n << s) | (n >>> (32 - s))) + b
}

function md5(message: string): string {
  const m = bytesToWord(Buffer.from(message))
  const l = message.length * 8

  const a0 = 1732584193,
        b0 = -271733879,
        c0 = -1732584194,
        d0 = 271733878

  let a = a0,
        b = b0,
        c = c0,
        d = d0

  // big-endian to little-endian
  for (let i = 0; i < m.length; i++) {
    m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
      ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00
  }

  // MD5 Padding
  m[l >>> 5] |= 0x80 << (l % 32);
  m[(((l + 64) >>> 9) << 4) + 14] = l

  for (let i = 0; i < m.length; i += 16) {
    // F Round
    a = F(a, b, c, d, m[i],  7, -680876936)
    d = F(d, a, b, c, m[i + 1], 12, -389564586)
    c = F(c, d, a, b, m[i + 2], 17,  606105819)
    b = F(b, c, d, a, m[i + 3], 22, -1044525330)
    a = F(a, b, c, d, m[i + 4],  7, -176418897)
    d = F(d, a, b, c, m[i + 5], 12,  1200080426)
    c = F(c, d, a, b, m[i + 6], 17, -1473231341)
    b = F(b, c, d, a, m[i + 7], 22, -45705983)
    a = F(a, b, c, d, m[i + 8],  7,  1770035416)
    d = F(d, a, b, c, m[i + 9], 12, -1958414417)
    c = F(c, d, a, b, m[i + 10], 17, -42063)
    b = F(b, c, d, a, m[i + 11], 22, -1990404162)
    a = F(a, b, c, d, m[i + 12],  7,  1804603682)
    d = F(d, a, b, c, m[i + 13], 12, -40341101)
    c = F(c, d, a, b, m[i + 14], 17, -1502002290)
    b = F(b, c, d, a, m[i + 15], 22,  1236535329)

    // G Round
    a = G(a, b, c, d, m[i + 1],  5, -165796510)
    d = G(d, a, b, c, m[i + 6],  9, -1069501632)
    c = G(c, d, a, b, m[i + 11], 14,  643717713)
    b = G(b, c, d, a, m[i], 20, -373897302)
    a = G(a, b, c, d, m[i + 5],  5, -701558691)
    d = G(d, a, b, c, m[i + 10],  9,  38016083)
    c = G(c, d, a, b, m[i + 15], 14, -660478335)
    b = G(b, c, d, a, m[i + 4], 20, -405537848)
    a = G(a, b, c, d, m[i + 9],  5,  568446438)
    d = G(d, a, b, c, m[i + 14],  9, -1019803690)
    c = G(c, d, a, b, m[i + 3], 14, -187363961)
    b = G(b, c, d, a, m[i + 8], 20,  1163531501)
    a = G(a, b, c, d, m[i + 13],  5, -1444681467)
    d = G(d, a, b, c, m[i + 2],  9, -51403784)
    c = G(c, d, a, b, m[i + 7], 14,  1735328473)
    b = G(b, c, d, a, m[i + 12], 20, -1926607734)

    // H Round
    a = H(a, b, c, d, m[i + 5],  4, -378558)
    d = H(d, a, b, c, m[i + 8], 11, -2022574463)
    c = H(c, d, a, b, m[i + 11], 16,  1839030562)
    b = H(b, c, d, a, m[i + 14], 23, -35309556)
    a = H(a, b, c, d, m[i + 1],  4, -1530992060)
    d = H(d, a, b, c, m[i + 4], 11,  1272893353)
    c = H(c, d, a, b, m[i + 7], 16, -155497632)
    b = H(b, c, d, a, m[i + 10], 23, -1094730640)
    a = H(a, b, c, d, m[i + 13],  4,  681279174)
    d = H(d, a, b, c, m[i], 11, -358537222)
    c = H(c, d, a, b, m[i + 3], 16, -722521979)
    b = H(b, c, d, a, m[i + 6], 23,  76029189)
    a = H(a, b, c, d, m[i + 9],  4, -640364487)
    d = H(d, a, b, c, m[i + 12], 11, -421815835)
    c = H(c, d, a, b, m[i + 15], 16,  530742520)
    b = H(b, c, d, a, m[i + 2], 23, -995338651)

    // I Round
    a = I(a, b, c, d, m[i],  6, -198630844)
    d = I(d, a, b, c, m[i + 7], 10,  1126891415)
    c = I(c, d, a, b, m[i + 14], 15, -1416354905)
    b = I(b, c, d, a, m[i + 5], 21, -57434055)
    a = I(a, b, c, d, m[i + 12],  6,  1700485571)
    d = I(d, a, b, c, m[i + 3], 10, -1894986606)
    c = I(c, d, a, b, m[i + 10], 15, -1051523)
    b = I(b, c, d, a, m[i + 1], 21, -2054922799)
    a = I(a, b, c, d, m[i + 8],  6,  1873313359)
    d = I(d, a, b, c, m[i + 15], 10, -30611744)
    c = I(c, d, a, b, m[i + 6], 15, -1560198380)
    b = I(b, c, d, a, m[i + 13], 21,  1309151649)
    a = I(a, b, c, d, m[i + 4],  6, -145523070)
    d = I(d, a, b, c, m[i + 11], 10, -1120210379)
    c = I(c, d, a, b, m[i + 2], 15,  718787259)
    b = I(b, c, d, a, m[i + 9], 21, -343485551)

    a = (a + a0) >>> 0
    b = (b + b0) >>> 0
    c = (c + c0) >>> 0
    d = (d + d0) >>> 0
  }

  const result = [a, b, c, d]
  for (let i = 0; i < result.length; i++) {
    result[i] = ((result[i] <<  8) | (result[i] >>> 24)) & 0x00FF00FF |
      ((result[i] << 24) | (result[i] >>>  8)) & 0xFF00FF00
  }

  return bytesToHex(result)
}

export default md5