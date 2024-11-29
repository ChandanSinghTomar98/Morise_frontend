export const base64ToBlob = (rawBase64, mimeType) => {
  // Decode the Base64 string into a binary string
  const base64 = rawBase64.split(",")[1];
  const byteCharacters = atob(base64);

  // Create an array of bytes from the binary string
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += 1024) {
    const slice = byteCharacters.slice(offset, offset + 1024);
    const byteNumbers = new Array(slice.length);

    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    byteArrays.push(new Uint8Array(byteNumbers));
  }

  // Create and return the Blob object from the byte arrays
  return new Blob(byteArrays, { type: mimeType });
};
