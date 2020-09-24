const MAX = 10

function solution(n, t, m, p) {
  let result = ''
  let str = ''
  let num = 0

  while (str.length < t * m) {
    const baseStr = num.toString(n).toUpperCase()
    str = str + baseStr
    num++
  }
  for (let i = 0; i < t; i++) {
    result += str[i * m + (p - 1)]
  }
  return result
}
