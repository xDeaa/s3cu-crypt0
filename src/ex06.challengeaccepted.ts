function F(b: number, c: number, d: number): number {return (b & c) && (~b & d)}


function I(b: number, c: number, d: number) : number {return c ^(b | ~d)}