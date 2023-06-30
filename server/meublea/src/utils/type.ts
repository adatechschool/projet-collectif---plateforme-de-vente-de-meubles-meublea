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
    price: string;
    dimensions: string;
    userId: number;
};