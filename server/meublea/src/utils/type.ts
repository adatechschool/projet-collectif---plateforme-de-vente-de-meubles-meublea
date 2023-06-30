export type CreateUserParams = {
    username: string;
    mail: string;
    password: string;
};

export type UpdateUserParams = {
    username: string;
    mail: string;
    password: string;
};

export type CreateUserItemParams = {
    name: string;
    type: string;
    price: number;
    dimensions: string;
    userId: number;
};