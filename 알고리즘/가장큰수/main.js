function solution(numbers) {
  const result = numbers
    .map((value) => value.toString())
    .sort((a, b) => {
      console.log('a', a, 'b', b)
      return b + a - (a + b)
    })
    .join('')
  if (result.split('').every((value) => value === '0')) {
    return '0'
  }
  return result
}
