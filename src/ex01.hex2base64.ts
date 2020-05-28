
export default function convertHexToBase64(str : string) {
    const base64String = Buffer.from(str, 'hex').toString('base64')

    return base64String
}