import fs from 'fs'
import {generateDecodedText, rankText} from './ex03.singlebytexor'

export default function decode(filePath: string) {
  const data = fs.readFileSync(filePath, 'utf8').split('\n')
  let sortedResults = []

  for (const row of data) {
    let results = []

    for (let i = 0; i < 255; i++) {
      const key = parseInt(i.toString(16))
      const decodedText = generateDecodedText(row, key)

      results.push([decodedText, rankText(decodedText)])
    }

    sortedResults.push(results.sort((a,b) => b[1] - a[1])[0])
  }

  return sortedResults.sort((a,b) => b[1] - a[1])[0]
}