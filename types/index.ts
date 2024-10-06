export type Customer = {
    id: string,
    name: string,
    role: string,
}

export enum UserType {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
}

export type QueryResponse = {
    listZellerCustomers: {
        items: Customer[];
    };
};