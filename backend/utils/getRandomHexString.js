function getRandomHexString(length) {
  let result = "";
  const chars = "0123456789abcdef";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * 16)];
  }
  return result;
}

export default getRandomHexString;
