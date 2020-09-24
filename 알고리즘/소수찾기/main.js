const primeNums = []

function isPrime(n) {
  if (n === 1) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

function pick(numbers, picked, pickCount, str = '') {
  if (pickCount <= 0) {
    const num = parseInt(str)
    num && isPrime(num) && primeNums.push(num)
    return
  }
  const num = parseInt(str)
  num && isPrime(num) && primeNums.push(num)

  for (let i = 0; i < numbers.length; i++) {
    if (!picked[i]) {
      picked[i] = true
      pick(numbers, picked, pickCount - 1, str + numbers[i])
      picked[i] = false
    }
  }
}

function solution(numbers) {
  pick(
    numbers.split(''),
    new Array(numbers.length).fill(false),
    numbers.length,
    ''
  )
  return new Set(primeNums).size
}
