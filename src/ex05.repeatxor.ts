const repeatKeyXOR = (text: string, key: string): string => {
    const textBuffer = Buffer.from(text)
    const keyBuffer = Buffer.from(key)

    return Buffer.from(textBuffer.map((a, i) => a ^ keyBuffer[i % key.length])).toString('hex')
}

export default repeatKeyXOR