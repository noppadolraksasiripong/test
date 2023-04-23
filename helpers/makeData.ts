

const range = (len: number) => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = (id: number) => {
  const statusChance = Math.random()
  return {
    id,
    firstName: "test",
    lastName: 'lastname',
    age: Math.floor(Math.random() * 30),
    visits: Math.floor(Math.random() * 100),
    progress: Math.floor(Math.random() * 100),
    status:
      statusChance > 0.66
        ? 'relationship'
        : statusChance > 0.33
          ? 'complicated'
          : 'single',
  }
}

export default function makeData(...lens: any[]): any {
  const makeDataLevel = (depth = 0): any => {
    const len = lens[depth]
    return range(len).map((_, i) => {
      return {
        ...newPerson(i + 1),
      }
    })
  }

  return makeDataLevel()
}
