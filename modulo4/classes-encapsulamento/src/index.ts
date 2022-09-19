import app from "./app"

// 1-
// a) Serve para setar os valores dentro da variável, e para chama-lo basta
//  declarar a variável com o tipo da class e passar os valores por parâmetros quando chmara um new class.

// b) 
class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }

    public getCpf(): string {
        return this.cpf
    }

    public getName(): string {
        return this.name
    }

    public getAge(): number {
        return this.age
    }

    public setTransactions(transaction:Transaction): void {
        this.transactions = [...this.transactions, transaction]
    } 
  
  }

  const user1: UserAccount = new UserAccount("123.123.123-32", "Leonardo", 19)

//   A mensagem foi impressa apenas uma vez no console.

// c) 
console.log(user1.getCpf())



// 2-
class Transaction  {
    private description: string;
    private value: number;
    private date: string

    constructor(
        description:string,
        value:number,
        date:string
    ) {
        this.description = description;
        this.value = value;
        this.date = date
    }

    public getDescription(): string {
        return this.description
    }

    public getValue(): number {
        return this.value
    }

    public getDate(): string {
        return this.date
    }

  }

  const transaction1: Transaction = new Transaction("Boleto",200,"10/09/2021")

  user1.setTransactions(transaction1)


// 3-
class Bank {
    private accounts: UserAccount[]
    
    constructor(account:UserAccount) {
        this.accounts = [account]
    }

    public getAccounts() {
        return this.accounts
    }

    public setAccounts(account:UserAccount) {
        this.accounts = [...this.accounts, account]
    }
}





