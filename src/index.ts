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

// comparingValues(10, 10)

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

// aprovationStatus(10, 5)

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

// calcArea(5, 40)

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

// newSalary("Diogo", 1000, 3)

// Exercício 05
const randomNumber = (n: number) => {
    const random = Math.floor(Math.random() * 5) + 1

    return n === random ? console.log("Acertou, parabéns") : console.log("Errou, tente novamente") 
}

// randomNumber(5)

// ESTRUTURA DE REPETIÇÃO

// Exercício 01 
const countAsc = () => {
    let start: number = 0 

    while (start !== 40) {
        console.log(start)
        start += 5
        
        if (start === 40) {
            console.log(start)
            console.log("ACABOU!")
        }
    }
}

// countAsc()

// Exercício 02
const countDesc = () => {
    let start: number = 100 

    while (start !== 0) {
        console.log(start)
        start -= 10

        if (start === 0) {
            console.log(start)
            console.log("ACABOU!")
        }
    } 
}

// countDesc()

// Exercício 03
const multiTable = (num: number) => {
    let count = 1
  
    while(count !== 11) {
      console.log(`${num} * ${count} = ${num * count}`)
      count += 1
    }
}
  
// multiTable(6)

// EXERCÍCIOS COM ENUM

// Exercício 01
enum Genres {
    ACAO = "ação",
    DRAMA ="drama",
    COMEDIA ="comédia",
    ROMANCE ="romance",
    TERROR = "terror"
}
  
type movie = {
    name : string,
    releaseYear : number,
    genre : Genres,
    score : number
}

const listarFilme = (name: string, year: number, genre: Genres, score: number) => {
    const newMovie = {
        name : name,
        releaseYear : year,
        genre : genre,
        score : score
    }
    
    return console.log(newMovie)

  }
  
    //listarFilme("A maldição de Node.JS", 1999, Genres.TERROR, 100)

// Exercício 02
    enum Sector {
        MARKETING = "marketing",
        VENDAS = "vendas",
        FINANCEIRO = "financeiro",
    }

    type Employee = {
        name: string, 
        salary: number, 
        sector: Sector, 
        presential: boolean
    }
  
    const employees: Employee[] = [
        {name: "Marcos", salary: 2500, sector: Sector.MARKETING, presential: true},
        {name: "Maria" ,salary: 1500, sector: Sector.VENDAS, presential: false},
        {name: "Salete" ,salary: 2200, sector: Sector.FINANCEIRO, presential: true},
        {name: "João" ,salary: 2800, sector: Sector.MARKETING, presential: false},
        {name: "Josué" ,salary: 5500, sector: Sector.FINANCEIRO, presential: true},
        {name: "Natalia" ,salary: 4700, sector: Sector.VENDAS, presential: true},
        {name: "Paola" ,salary: 3500, sector: Sector.MARKETING, presential: true }  
    ] 
  
    const returnMarkPresential = (array: Employee[]) => {
        let marPresential: Employee[] = []
        
        array.filter((emp) => {
            if (emp.sector === Sector.MARKETING && emp.presential === true) {
                marPresential.push(emp)
            }
        })
        
        return console.log(marPresential)

    }
  
    //returnMarkPresential(employees)

// Exercício 03
    type Func = {
        name: string, 
        email: string,
        role: string
    }

    const func: Func[] = [
        {name: "Rogério", email: "roger@email.com", role: "user"},
        {name: "Ademir", email: "ademir@email.com", role: "admin"},
        {name: "Aline", email: "aline@email.com", role: "user"},
        {name: "Jéssica", email: "jessica@email.com", role: "user"},  
        {name: "Adilson", email: "adilson@email.com", role: "user"},  
        {name: "Carina", email: "carina@email.com", role: "admin"}      
    ] 
    
    const filterEmailAdm = (array: Func[]) => {
      let adminEmail: string[] = []
      
      array.filter((func) => {
        if (func.role === "admin") {
          adminEmail.push(func.email)
        }
      })
      
      return console.log(adminEmail)

    }
    
    //filterEmailAdm(func)

