// https://tools.ietf.org/html/rfc1321

const FF = (b: number, c: number, d: number): number => (b & c) | (~b & d)
const GG = (b: number, c: number, d: number): number => (b & d) | (c & ~d)
const HH = (b: number, c: number, d: number): number => b ^ c ^ d
const II = (b: number, c: number, d: number): number => c ^ (b | ~d)

function md5(message: string): string {
    // Initialization
    const A = 0x67452301,
          B = 0xefcdab89,
          C = 0x98badcfe,
          D = 0x10325476


    // Round 1
    FF (a, b, c, d, x[0], 7, 0xd76aa478)
    FF (d, a, b, c, x[1], 12, 0xe8c7b756)
    FF (c, d, a, b, x[2], 17, 0x242070db)
    FF (b, c, d, a, x[3], 22, 0xc1bdceee)
    FF (a, b, c, d, x[4], 7, 0xf57c0faf)
    FF (d, a, b, c, x[5], 12, 0x4787c62a)
    FF (c, d, a, b, x[6], 17, 0xa8304613)
    FF (b, c, d, a, x[7], 22, 0xfd469501)
    FF (a, b, c, d, x[8], 7, 0x698098d8)
    FF (d, a, b, c, x[9], 12, 0x8b44f7af)
    FF (c, d, a, b, x[10], 17, 0xffff5bb1)
    FF (b, c, d, a, x[11], 22, 0x895cd7be)
    FF (a, b, c, d, x[12], 7, 0x6b901122)
    FF (d, a, b, c, x[13], 12, 0xfd987193)
    FF (c, d, a, b, x[14], 17, 0xa679438e)
    FF (b, c, d, a, x[15], 22, 0x49b40821)

    // Round 2

    // Round 3

    // Round 4

    return ''
}

export default md5