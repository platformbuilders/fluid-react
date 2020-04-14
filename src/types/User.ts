export type User = {
  id: number;
  name: string;
  email: string;
};

export type AuthUser = {
  cpf: string;
  email: string;
  password: string;
  keepSession: boolean;
};

export type UserAction = {
  user: {
    login(parameter: any): void;
    logout(): void;
  };
};
