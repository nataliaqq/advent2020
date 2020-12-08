const day8 = () => {
    const input = day8input.split('\n')
    const commands = input.map(cmd => {
        return {
            command: cmd.split(' ')[0],
            value: parseInt(cmd.split(' ')[1])
        }
    })

    const part1 = () => {
        let acc = 0
        let executed = []
        let index = 0
        let found = false

        while (found === false) {
            const { command: cmd, value } = commands[index]
            executed.push(index)
            
            if (cmd === 'jmp') {
                index = index + value
            }
            if (cmd === 'acc') {
                acc = acc + value
                index++
            }
            if (cmd === 'nop') {
                index++
            }
            found = !!(executed.indexOf(index) > -1)
        }

        console.log('day8_1: ', acc)
    }

    part1()
}

day8()