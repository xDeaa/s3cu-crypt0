const F = (b: number, c: number, d: number): number => (b & c) | (~b & d)
const G = (b: number, c: number, d: number): number => (b & d) | (c & ~d)
const H = (b: number, c: number, d: number): number => b ^ c ^ d
const I = (b: number, c: number, d: number): number => c ^ (b | ~d)

function stringToBytes(str: string): number[] {
    const bytes: number[] = []

    for (let i = 0; i < str.length; i++) {
        bytes.push(str.charCodeAt(i) & 0xFF)
    }

    return bytes
}

function leftRotate(x: number, c: number): number {
    return (x << c) | (x >> (32 - c))
}


function chunks (buffer: Buffer, chunkSize: number) {
	const result = [];
	const len = buffer.length;
	let i = 0;

	while (i < len) {
		result.push(buffer.slice(i, i += chunkSize));
	}

	return result;
}

export default function md5(message: string): string {
    const ROUND_SHIFT: number[] = [
        7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22, 7, 12, 17, 22,
        5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20, 5, 9, 14, 20,
        4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23, 4, 11, 16, 23,
        6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21, 6, 10, 15, 21
    ]

    const K: number[] = []
    for (let i = 0; i < 64; i++) {
        K[i] = Math.floor(Math.pow(2, 32) * Math.abs(Math.sin(i + 1)))
    }

    let a0 = 1732584193,
        b0 = -271733879,
        c0 = -1732584194,
        d0 = 271733878

    let bits = Buffer.from(message)
    const originalLength = bits.length % Math.pow(2, 64)
    bits = Buffer.concat([Buffer.from([1]), bits])


    const messageHeader = Buffer.alloc(10)
    messageHeader.writeUInt8(originalLength)
    console.log(messageHeader)


    const leadingZero = (512 - (bits.length * 8)) / 8 

    console.log(bits.length, leadingZero)

    for (let i = 0; i < leadingZero; i++) {
        bits = Buffer.concat([Buffer.from([0]), bits])
    }

    //bits = Buffer.concat([Buffer.from([originalLength]), bits])

    console.log('bits', bits)
    console.log(bits.length)

    const words: Buffer[15] = chunks(bits, 4)
    console.log(words)

    let A = a0,
        B = b0,
        C = c0,
        D = d0

    for (let i = 0; i < 64; i++) {
        let E = 0
        let g = 0

        if (i >= 0 && i <= 15) {
            E = F(B, C, D)
            g = i
        } else if (i >= 16 && i <= 31) {
            E = G(B, C, D)
            g = (5 * i + 1) % 16
        } else if (i >= 32 && i <= 47) {
            E = H(B, C, D)
            g = (3 * i + 5) % 16
        } else if (i >= 48 && i <= 63) {
            E = I(B, C, D)
            g = (7 * i) % 16
        }

        E += A + K[i] + parseInt(words[g].toString("hex"), 16)
        A = D
        D = C
        C = B
        B = B + leftRotate(E, ROUND_SHIFT[i])
    }

    a0 += A
    b0 += B
    c0 += C
    d0 += D

    return [d0, c0, b0, a0].map(v => v.toString(16)).join('')
}