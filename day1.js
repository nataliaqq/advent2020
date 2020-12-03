const day1 = () => {

    const input = day1input.split('\n')

    const part1 = () => {

        let result;

        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input.length; j++) {
                if (+input[i] + +input[j] === 2020) {
                    result = input[i] * input[j]
                }
            }
        }
            
        console.log('day1_1:', result)
    }

    const part2 = () => {
        let result;

        for (let i = 0; i < input.length; i++) {
            for (let j = 0; j < input.length; j++) {
                for (let k = 0; k < input.length; k++) {
                    if (+input[i] + +input[j] + +input[k] === 2020) {
                        result = input[i] * input[j] * input[k]
                    }
                }
            }
        }
            
        console.log('day1_2:', result)
    }

    part1()
    part2()
}

day1()