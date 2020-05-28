const cesar = (message: string, offset: number): string => {
    return message.split('').map((char) => {
        return String.fromCharCode(char.charCodeAt(0) + offset)
    }).join('')
}

export default cesar