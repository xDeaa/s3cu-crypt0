import convertHexToBase64 from './ex01.hex2base64'
import encrypt from './ex02.fixedxor'
import singleByteXOR from './ex03.singlebytexor'
import decode from './ex04.xordetect'
import repeatKeyXOR from './ex05.repeatxor'

console.log("== Challenge 1 ==");
console.log(convertHexToBase64("49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d"));

console.log("== Challenge 2 ==");
console.log(encrypt('1c0111001f010100061a024b53535009181c', '686974207468652062756c6c277320657965'))

console.log("== Challenge 3 ==");
console.log(singleByteXOR('1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736'))

console.log("== Challenge 4 ==");
console.log(decode(`${process.cwd()}/data/h014.txt`))

console.log("== Challenge 5 ==");
console.log(repeatKeyXOR("Burning 'em, if you ain't quick and nimble\nI go crazy when I hear a cymbal", "ICE"))
