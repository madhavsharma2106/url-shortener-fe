import { IMakeRequest, IRequest, RequestMethods } from './types';

const request = async ({ method, url, body, options }: IRequest) => {
  return new Promise(async (resolve, reject) => {
    const token = localStorage.getItem('token');

    const reqOptions = {
      headers: {
        accept: '*/*',
      },
      method,
      ...options,
    };

    if (body) reqOptions.body = JSON.stringify(body);
    if (token) reqOptions.headers.Authorization = `Bearer ${token}`;

    try {
      const response = await fetch(url, reqOptions);
      const data = await response.json();

      if (!data.ok) {
        reject(data);
      }

      resolve(data);
    } catch (err: any) {
      reject(err);
    }
  });
};

export const makeRequest = {
  post: (args: IMakeRequest) =>
    request({ ...args, method: RequestMethods.POST }),
  get: (args: IMakeRequest) => request({ ...args, method: RequestMethods.GET }),
  put: (args: IMakeRequest) => request({ ...args, method: RequestMethods.PUT }),
  delete: (args: IMakeRequest) =>
    request({ ...args, method: RequestMethods.DELETE }),
};
