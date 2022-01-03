export interface IRequest {
  options?: any;
  method: RequestMethods;
  url: string;
  body?: Body;
}

export enum RequestMethods {
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
  GET = 'GET',
}

export interface IMakeRequest extends Omit<IRequest, 'method'> {}

export enum Devices {
  MOBILE = 'MOBILE',
  DESKTOP = 'DESKTOP',
}
