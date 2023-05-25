interface HttpErrorArgs {
  httpCode: number;
  message: string;
}

export class HttpError extends Error {
  public readonly httpCode: number;
  public readonly message: string;

  constructor(args: HttpErrorArgs) {
    super(args.message);

    this.httpCode = args.httpCode;
    this.message = args.message;
  }
}
