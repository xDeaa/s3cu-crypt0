export default function convertHexToBase64(str: string) {
    return Buffer.from(str, 'hex').toString('base64')
}