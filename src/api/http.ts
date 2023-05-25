import { HttpError } from '@/api/http-error';

interface IError extends Error {
  status: number;
  message: string;
}

const http = async <T>(path: string, config: RequestInit): Promise<T> => {
  const request = new Request(path, config);
  const response: Response | IError = await fetch(request);

  if (!response.ok) {
    throw new HttpError({
      httpCode: response.status,
      message: response.statusText
    });
  }

  return response.json().catch(() => ({}));
};

export async function get<T>(path: string, config?: RequestInit): Promise<T> {
  const init = { method: 'get', ...config };
  return await http<T>(path, init);
}

export async function post<T, U>(
  path: string,
  body: T,
  config?: RequestInit
): Promise<U> {
  const init = { method: 'post', body: JSON.stringify(body), ...config };
  return await http<U>(path, init);
}
