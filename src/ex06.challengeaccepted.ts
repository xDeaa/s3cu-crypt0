const F = (b: number, c: number, d: number): number => (b & c) && (~b & d)
const G = (b: number, c: number, d: number): number => (b & d) | (c & ~d)
const H = (b: number, c: number, d: number): number => b ^ c ^ d
const I = (b: number, c: number, d: number) : number => c ^(b | ~d)