function solution(answers) {
  const first = [1, 2, 3, 4, 5]
  const second = [2, 1, 2, 3, 2, 4, 2, 5]
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]

  const countList = [0, 0, 0]
  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i]
    if (answer === first[i % first.length]) {
      countList[0]++
    }
    if (answer === second[i % second.length]) {
      countList[1]++
    }
    if (answer === third[i % third.length]) {
      countList[2]++
    }
  }

  const [firstPerson, ...rest] = countList
    .map((value, index) => ({
      num: index + 1,
      count: value,
    }))
    .sort((a, b) => b.count - a.count)

  const another = rest
    .filter((person) => firstPerson.count === person.count)
    .map(({ num }) => num)

  return [firstPerson.num, ...another]
}
