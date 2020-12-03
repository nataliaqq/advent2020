const input = day3input.split('\n')

const day3 = () => {
    const countTrees = (params) => {
        let inputMap = []
        const h = input.length
        const w = input[0].length

        for (let i = 0; i < input.length; i++) {
            const line = input[i]
            for (let j = 0; j < line.length; j++) {
                const element = line[j]
                inputMap.push({
                    element: element,
                    x: j,
                    y: i
                })
            }
        }

        const start = { x: 0, y: 0 }

        let count = 0
        let currentCoord = start
        for (let i = 0; i < input.length; i++) {
            const curerntElement = inputMap.find(elem => elem.x === currentCoord.x % w && elem.y === currentCoord.y)?.element
            if (curerntElement && curerntElement === '#') {
                count++
            }
            currentCoord.x = currentCoord.x + params.right
            currentCoord.y = currentCoord.y + params.down
        }
        return count
    }

    const part1 = ()  => {
        const a = countTrees({ right: 3, down: 1 })
        console.log('day3_1: ', a)
    }

    const part2 = () => {
        const a = countTrees({ right: 1, down: 1})
        const b = countTrees({ right: 3, down: 1})
        const c = countTrees({ right: 5, down: 1})
        const d = countTrees({ right: 7, down: 1})
        const e = countTrees({ right: 1, down: 2})
        console.log('day3_2: ', a* b * c * d * e)
    }

    part1()
    part2()
}

day3()