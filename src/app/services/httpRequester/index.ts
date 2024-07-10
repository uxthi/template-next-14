import axios, { AxiosError } from "axios";
import HttpMethods from "./httpMethods";
import redirectToLogin from "./redirectToLogin/redirectToLogin";
import { environment } from "@/environment";

export const JWT_TOKEN_KEY = "accessToken";

interface RequestInfo<Body, Params> {
  path: string;
  method: HttpMethods;
  body?: Body;
  params?: Params;
  customBaseUrl?: string;
  shouldUseCredentials?: boolean;
}

export const UNAUTHORIZED_STATUS = 401;

const buildPathUrl = (path: string, params?: Record<string, any>): string => {
  if (params && Object.keys(params).length > 0) {
    const queryString = buildQueryString(params);
    path += `?${queryString}`;
  }

  return path;
};

const buildQueryString = (params: Record<string, any>): string => {
  const urlQueryString = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      urlQueryString.append(key, String(value));
    }
  });
  return urlQueryString.toString();
};

const checkIfShouldLogout = (
  reason: any,
  shouldIgnoreUnauthorized?: boolean
) => {
  const status = reason?.response?.status;
  const isUnauthorized = status === UNAUTHORIZED_STATUS;
  return !shouldIgnoreUnauthorized && isUnauthorized;
};

const makeRequest = <
  Response,
  Body = any,
  Params extends Record<string, any> | undefined = any
>(
  requestInfo: RequestInfo<Body, Params>,
  shouldIgnoreUnauthorized?: boolean,
  customHeaders?: any
): Promise<Response> => {
  return new Promise((resolve, reject) => {
    const baseURL = requestInfo.customBaseUrl || environment.baseUrlApi;
    const url = buildPathUrl(requestInfo.path, requestInfo.params);
    const token = "";

    axios({
      baseURL,
      method: requestInfo.method,
      url,
      data: requestInfo.body,
      headers: {
        Authorization: `Bearer ${token}`,
        ...customHeaders,
      },
      withCredentials: requestInfo?.shouldUseCredentials ?? true,
    })
      .then((response) => {
        resolve(response.data as Response);
      })
      .catch((reason: AxiosError) => {
        const shouldLogoutUser = checkIfShouldLogout(
          reason,
          shouldIgnoreUnauthorized
        );
        if (shouldLogoutUser) {
          redirectToLogin();
        }

        reject(reason);
      });
  });
};

export default makeRequest;
