function solution(brown, yellow) {
  const divisors = []
  const rectangles = []
  for (let i = 1; i <= yellow / 2; i++) {
    yellow % i === 0 && divisors.push(i)
  }
  divisors.push(yellow)

  for (let i = 0; i <= divisors.length / 2; i++) {
    const width = divisors[divisors.length - i - 1]
    const height = divisors[i]
    if (width >= height) {
      rectangles.push({
        width,
        height,
      })
    }
  }

  const rectangle = rectangles.filter(({ width, height }) => {
    const WIDTH = (width + 2) * 2
    const HEIGHT = height * 2
    return WIDTH + HEIGHT === brown
  })
  const [{ width, height }] = rectangle
  return [width + 2, height + 2]
}
