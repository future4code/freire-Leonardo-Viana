export type Produto = {
    id: string,
    name: string,
    price: number
}

export const produtos: Produto[] = [
    {
        id: "1",
        name: "mouse",
        price: 100     
    },
    {
        id: "2",
        name: "teclado",
        price: 200    
    },
    {
        id: "3",
        name: "monitor",
        price: 500     
    }
]