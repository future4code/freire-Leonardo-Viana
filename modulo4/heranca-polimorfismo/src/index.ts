// HERANÇA 

// 1-
// a)
class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }

    public getPassword(): string {
        return this.password
    }

    public introduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
    }
}

const user1: User = new User("001", "leo@email.com", "Leonardo", "123leo321")

console.log(user1.getPassword())

// b) A mensagem foi impressa apenas uma vez.



// 2-
class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

const user2: Customer = new Customer("002", "julia@email.com", "Julia", "123julia321", "R$ 1000,00")

// a) Foi impressa apenas uma vez.
// b) Foi impressa apenas uma vez, poruqe o Customer chamado é declarado como uma extensão do User.



// 3- 
console.log(user2.getPassword())



// 4 e 5-
const user3: Customer = new Customer("003", "fabiana@email.com", "Fabiana", "123fabiana321", "R$ 10,00")
console.log(user3.introduceYourself())



// POLIMORFISMO


// 1-
export interface Client {
    name: string;
    // Refere-se ao nome do cliente

    registrationNumber: number;
    // Refere-se ao número de cadastro do cliente na concessionária
    // como se fosse um id

    consumedEnergy: number;
    // Refere-se à energia consumida pelo cliente no mês

    calculateBill(): number
    // Retorna o valor da conta em reais
}

const client: Client = {
    name: "Jose",
    registrationNumber: 1,
    consumedEnergy: 50,

    calculateBill: () => {
        return 2
    }
}

console.log(client.name)
console.log(client.registrationNumber)
console.log(client.consumedEnergy)
console.log(client.calculateBill())


// 2-
export abstract class Place {
    constructor(protected cep: string) { }

    public getCep(): string {
        return this.cep;
    }   

}

// a) Não é possível criar uma instância de uma classe abstrata.
// const place: Place = new Place("03380-000")

// b) 
export class Residence extends Place {
    constructor(
      private dwellersQuantity: number,
  
      cep: string
    ) {
      super(cep);
    }
    
    public getDwellersQuantity(): number {
      return this.dwellersQuantity
    }
  }

const cepPlace: Residence = new Residence(5,"03380-000")


// 3- 
  export class Commerce extends Place {
    constructor(
      private floorsQuantity: number,
      // Refere-se à quantidade de andares do lugar
  
      cep: string
    ) {
      super(cep);
    }
  
    public getFloorsQuantity(): number {
      return this.floorsQuantity;
    }
  }

  export class Industry extends Place {
    constructor(
      private machinesQuantity: number,
      // Refere-se à quantidade de máquinas do local
  
      cep: string
    ) {
      super(cep);
    }
  
    public getMachinesQuantity(): number {
      return this.machinesQuantity;
    }
  }


// 4-
class ResidentialClient extends Residence implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cpf: string,
        residentsQuantity: number,
        cep: string
    ) {
        super(residentsQuantity, cep)
    }

    public getCpf(): string {
        return this.cpf
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.75
    }
}



// 5-
class CommercialClient extends Commerce implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private cnpj: string,
        floorsQuantity: number,
        cep: string
    ) {
        super(floorsQuantity, cep)
    }

    public getCnpj(): string {
        return this.cnpj
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.53
    }
}

// a  b) As diferenças são apenas no CNPJ E CPF, e também do extends que pega troca uma propriedade.



// 6- 
class IndustrialClient extends Industry implements Client {
    constructor(
        public name: string,
        public registrationNumber: number,
        public consumedEnergy: number,
        private industryNumber: string,
        machinesQuantity: number,
        cep: string
    ) {
        super(machinesQuantity, cep)
    }

    public getIndustryNumber(): string {
        return this.industryNumber
    }

    public calculateBill(): number {
        return this.consumedEnergy * 0.45 + this.getMachinesQuantity() * 100
    }
}