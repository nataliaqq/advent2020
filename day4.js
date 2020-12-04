const input = day4input.split('\n\n')

const day4 = () => {

    let passports = []
    
    input.forEach(passport => {

        const passportMapped = passport.split(/ |\n/).map(line => {
            return {
                code: line.split(':')[0],
                data: line.split(':')[1]
            }
        })

        passports.push(passportMapped)
        
    })

    const part1 = () => {
        let count = 0;

        const fieldsReq = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']

        passports.forEach(passport => {
            let valid = true;
            fieldsReq.forEach(field => {
                if (!passport.find(data => data.code === field)) valid = false
            })

            if (valid) count++
        })

        console.log('day4_1: ', count)

    }

    const part2 = () => {
        let count = 0;

        const fieldsReq = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid']
        const validator = {
            byr: (data) => {
                return Number(data) >= 1920 && Number(data) <= 2002
            },
            iyr: (data) => {
                return Number(data) >= 2010 && Number(data) <= 2020
            },
            eyr: (data) => {
                return Number(data) >= 2020 && Number(data) <= 2030
            },
            hgt: (data) => {
                const split = data.split(/(\d+)/)
                const num = split[1]
                const letr = split[2]
                if (letr === 'cm') return Number(num) >= 150 && Number(num) <= 193
                if (letr === 'in') return Number(num) >= 59 && Number(num) <= 76
                return false
            },
            hcl: (data) => {
                return data.match(/^#([a-fA-F0-9]{6})$/)
            },
            ecl: (data) => {
                const colors = ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']
                return !!colors.find(color => color === data)
            },
            pid: (data) => {
                return data.length === 9 && !data.split('').find(symb => isNaN(symb))
            }
        }

        passports.forEach(passport => {
            let valid = true;
            fieldsReq.forEach(field => {
                const passportField = passport.find(data => data.code === field)
                
                if (!passportField || !validator[passportField.code](passportField.data)) {
                    valid = false
                }
            })

            if (valid) count++
        })


        console.log('day4_2: ', count)

    }

    part1()
    part2()

}

day4()