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

    part1()

}

day4()