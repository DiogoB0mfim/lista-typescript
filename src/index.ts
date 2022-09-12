// CONDIÇÕES COMPOSTAS

// Exercício 01 
const comparingValues = (n1: number, n2: number) => {
    if (n1 > n2) {
        console.log("O primeiro valor é o maior")
    }

    else if (n1 < n2) {
        console.log("O segundo valor é o maior")
    }

    else {console.log("Não existe valor maior, os dois são iguais")}
}

comparingValues(10, 10)

// Exercício 02
const aprovationStatus = (n1: number, n2: number) => {
    const media = (n1 + n2) / 2
    
    if (media <= 4.9) {
        console.log("REPROVADO")
    }

    else if (media > 4.9 && media <= 6.9) {
       console.log("RECUPERAÇÃO") 
    }

    else {
        console.log("APROVADO")
    }
}

aprovationStatus(10, 5)

// Exercício 03
const calcArea = (width: number, length: number) => {
    const area = width * length

    if (area < 100) {
        console.log("TERRENO POPULAR")
    }

    else if (area >= 100 && area <= 500) {
        console.log("TERRENO MASTER")
    }

    else { 
        console.log("TERRENO VIP")
    }
}

calcArea(5, 40)

// Exercício 04
const newSalary = (name: string, salary: number, timeWorking: number) => {
    if (timeWorking <= 3) {
        console.log(`Olá ${name} você trabalha na empresa a ${timeWorking} ano(s) e seu salário atualizado é de ${(3 / 100) * salary + salary}`)
    }

    else if (timeWorking > 3 && timeWorking <= 10) {
        console.log(`Olá ${name} você trabalha na empresa a ${timeWorking} ano(s) e seu salário atualizado é de ${(12.5 / 100) * salary + salary}`)
    }

    else {
        console.log(`Olá ${name} você trabalha na empresa a ${timeWorking} ano(s) e seu salário atualizado é de ${(20 / 100) * salary + salary}`)
    }
}

newSalary("Diogo", 1000, 3)

// Exercício 05
const randomNumber = (n: number) => {
    const random = Math.floor(Math.random() * 5) + 1

    return n === random ? console.log("Acertou, parabéns") : console.log("Errou, tente novamente") 
}

randomNumber(5)
