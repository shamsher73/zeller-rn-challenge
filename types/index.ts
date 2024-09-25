export type User = {
    id: string,
    name: string,
    role: string,
}

export enum UserType {
    ADMIN = 'ADMIN',
    MANAGER = 'MANAGER',
}

export type QueryResponse = {
    data: {
        listZellerCustomers: {
            items: User[];
        };
    }
};