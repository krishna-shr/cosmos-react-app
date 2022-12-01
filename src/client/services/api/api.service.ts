import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const baseURL = `${location.protocol}//${location.hostname}:${process.env.NODE_SERVER_PORT}/api`;
const axiosInstance = axios.create({
    withCredentials: true,
    baseURL,
    headers: {},
});

const constructUri = (segment = '', params = []): string => {
    const p = params ? `?${params.join('&')}` : '';
    const completeUrl = p !== '?' ? `${segment}${p}` : `${segment}`;
    return completeUrl;
};

export interface IRequest extends AxiosRequestConfig {}
export interface IResponse extends AxiosResponse {}

export const axiosHandler = (options: IRequest): Promise<IResponse> => {
    const url = constructUri(options.url, options.params);
    return axiosInstance({
        ...options,
        url,
    })
        .then((res: AxiosResponse) => {
            return res.data;
        })
        .catch((err) => {
            err = err.response || err;
            const errorObj = {
                error: err?.data?.error || 'Unexpected Error',
                status: err?.status || 500,
            };
            throw errorObj;
        });
};

export const makeGet = <T>(
    url: string,
    params = [],
    headers = {}
): Promise<T> => {
    const reqOptions: IRequest = {
        method: 'GET',
        url,
        headers: { ...headers },
        params,
    };
    return axiosHandler(reqOptions as IRequest) as unknown as Promise<T>;
};

export const makePost = (
    url: string,
    data: unknown,
    headers = {},
    params = []
): Promise<IResponse> => {
    const reqOptions: IRequest = {
        method: 'POST',
        url,
        data,
        headers: { ...headers },
        params,
    };
    return axiosHandler(reqOptions);
};

export const makePut = (
    url: string,
    data: unknown,
    headers = {},
    params = []
): Promise<AxiosResponse> => {
    const reqOptions: IRequest = {
        url,
        data,
        method: 'PUT',
        headers: { ...headers },
        params,
    };
    return axiosHandler(reqOptions);
};

export const makeDelete = (
    url: string,
    headers = {}
): Promise<AxiosResponse> => {
    return axiosHandler({
        url,
        headers,
        method: 'DELETE',
    });
};

export default axiosInstance;
