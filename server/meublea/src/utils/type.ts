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
    user_item_name: string;
    user_item_type: string;
    user_item_price: number;
    user_item_dimensions: string;
    user_item_user_id: number;
}