export type Statement = {
    value: number,
    date: string,
    description: string
}

export type Account = {
    name: string,
    CPF: number,
    birthDate: string,
    balance: number,
    statements: Statement[]
}

export let accounts: Account[] = [{
    name: "Jacqueline Nascimento",
    CPF: 10291540406,
    birthDate: "24/02/1995",
    balance: 0,
    statements: []
}]