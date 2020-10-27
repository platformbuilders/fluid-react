export declare type User = {
    id: number;
    name: string;
    email: string;
};
export declare type AuthUser = {
    cpf: string;
    email: string;
    password: string;
    keepSession: boolean;
};
export declare type UserAction = {
    user: {
        login(parameter: any): void;
        logout(): void;
    };
};
//# sourceMappingURL=User.d.ts.map