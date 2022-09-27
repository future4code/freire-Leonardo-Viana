describe("Exercícios Jest", () => {

    test("Exercicio 0", () => {

        expect(isEven(10)).toBe(true)
    })


    test("Exercicio 1", () => {

        expect(toUppercase("teste")).toBe("TESTE")
    })

    test("Exercicio 2", () => {

        expect(split("dev")).toEqual(["d","e","v"])
    })

    test("Exercicio 3", () => {

        expect(stringToNumber("10")).toBe(10)
    })

    test("Exercicio 4", () => {

        expect(size("teste")).toBe(5)
    })

    test("Exercicio 5", () => {

        expect(randomNumber()).toBeGreaterThan(0)
        expect(randomNumber()).toBeLessThan(10)
    })

    test("Exercicio 6", () => {

        expect(users).toContainEqual({name: "Astrodev"})
    })

    test("Exercicio 7", () => {

        expect(average([8,6,9,7,5,9])).toBe(8)
    })

    test("Exercicio 8", () => {

        expect(age(2000)).toBe(22)
    })

    test("Exercicio 9", () => {

        expect(date("2022/09/26")).toBe("26/09/2022")
    })
}) 



const isEven = (number: number) => {
    if(number % 2 == 0) {
        return true 
    } else {
        return false
    }
}

const toUppercase = (string: string) => {
    return string.toLocaleUpperCase()
}

const split = (string: string) => {
    return string.split("")
}

const stringToNumber = (number: string) => {
    return Number(number)
}

const size = (string: string) => {
    return string.length
}

const randomNumber = () => {
    return Math.floor(Math.random() * 10) + 1 
}

type User = {
    name: string
}

const users: User[] = [{name: "Astrodev"}, {name: "Leo"}]

const average = (array: number[]) => {
    let soma = 0
    for (let i = 0; i<array.length; i++) {
        soma = soma + array[i]        
    }
    const media: number = soma/array.length
    const mediaFormatada: number = Math.ceil(media)

    return mediaFormatada
}

const age = (anoNascimento: number) => {
    return 2022 - anoNascimento
}

const date = (date: string) => {
    const split = date.split("/")
    const newDate = `${split[2]}/${split[1]}/${split[0]}`

    return newDate
}