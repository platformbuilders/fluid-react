import { AxiosError } from 'axios';

const defaultErrorMessage =
  'Erro inesperado. Verifique sua internet e tente novamente.';

export default class ResponseError {
  message: string;

  code: number;

  constructor({ response }: AxiosError) {
    this.message = response?.data?.message || defaultErrorMessage;
    this.code = response?.status || 0;
  }
}
