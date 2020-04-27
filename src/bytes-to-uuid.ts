const byteToHex: string[] = []

for (let index = 0; index < 256; ++index) {
  byteToHex[index] = (index + 0x100).toString(16).substr(1)
}

export const bytesToUuid = (buffer: Buffer): string => {
  let index = 0

  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return [
    byteToHex[buffer[index++]],
    byteToHex[buffer[index++]],
    byteToHex[buffer[index++]],
    byteToHex[buffer[index++]],
    '-',
    byteToHex[buffer[index++]],
    byteToHex[buffer[index++]],
    '-',
    byteToHex[buffer[index++]],
    byteToHex[buffer[index++]],
    '-',
    byteToHex[buffer[index++]],
    byteToHex[buffer[index++]],
    '-',
    byteToHex[buffer[index++]],
    byteToHex[buffer[index++]],
    byteToHex[buffer[index++]],
    byteToHex[buffer[index++]],
    byteToHex[buffer[index++]],
    byteToHex[buffer[index++]]
  ].join('')
}
