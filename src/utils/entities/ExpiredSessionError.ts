interface ResponseError {
  data: {
    message: string;
  };
  status: number;
}
export default class ExpiredSessionError extends Error {
  response: ResponseError;

  constructor() {
    super();
    this.response = {
      data: {
        message: 'Por questões de segurança, entre novamente',
      },
      status: 403,
    };
  }
}
