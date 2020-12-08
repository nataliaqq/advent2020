const day8 = () => {
    const input = day8input.split('\n')
    const commands = input.map(cmd => {
        return {
            command: cmd.split(' ')[0],
            value: parseInt(cmd.split(' ')[1])
        }
    })

    

    const executeProgram = (input) => {
        let acc = 0
        let executed = []
        let index = 0
        let looped = false
        let end = false

        while (looped === false && end === false) {
            const { command: cmd, value } = input[index]
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
            looped = !!(executed.indexOf(index) > -1)
            end = !input[index]
        }
        return { value: acc, endReached: end }
    }
    const part1 = () => {
        const acc = executeProgram(commands).value
        console.log('day8_1: ', acc)
    }

    const part2 = () => {
        commands.forEach((command, index) => {
            if (command.command === 'jmp' || command.command === 'nop') {
                let newInput = [...commands]
                let newCmd = { command: command.command === 'jmp' ? 'nop' : 'jmp', value: command.value}
                newInput[index] = newCmd
                const acc = executeProgram(newInput).endReached ? executeProgram(newInput).value : false
                if (acc) console.log('day8_2: ', acc)

            }
        })
    }

    part1()
    part2()
}

day8()