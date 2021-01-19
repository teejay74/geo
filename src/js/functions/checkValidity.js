export default function checkValidity(string) {
  return string.match(/(-*\d+\.\d+),\s*(-*\d+\.\d+)/gm);
}
