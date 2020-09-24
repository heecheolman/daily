function solution(array, commands) {
  return commands.map((command) => {
    const [from, to, target] = command
    const sliced = array.slice(from - 1, to)
    return sliced.sort((a, b) => a - b)[target - 1]
  })
}
