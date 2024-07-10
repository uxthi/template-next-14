import axios from "axios";
import HttpMethods from "./httpMethods";
import makeRequest from ".";

type AxiosFirstCallArgs = {
  url: string;
  baseURL: string;
}

jest.mock("axios", () => jest.fn(() => Promise.resolve("teste")));
const mockAxios = axios as jest.MockedFunction<typeof axios>;

beforeEach(() => {
  mockAxios.mockClear();
});

describe("httpRequester", () => {
  describe("with defined query parameters, path and a custom base url using GET method", () => {
    it("makes a request building url correctly", async () => {
      const customBaseUrl = "www.someUrl.net";
      const path = "/my-path";
      interface Params {
        queryParam1: string;
        queryParam2: string;
      }
      const params: Params = {
        queryParam1: "value1",
        queryParam2: "value2",
      };

      await makeRequest<undefined, Params, unknown>({
        method: HttpMethods.GET,
        params,
        customBaseUrl,
        path,
      });

      expect(mockAxios).toHaveBeenCalled();
      const axiosFirstCallArgs = mockAxios.mock?.calls?.[0]?.[0] as unknown as AxiosFirstCallArgs;
      expect(axiosFirstCallArgs).toBeDefined();

      const fullPath = `${axiosFirstCallArgs.baseURL}${axiosFirstCallArgs.url}`

      expect(fullPath).toBe(
        "www.someUrl.net/my-path?queryParam1=value1&queryParam2=value2"
      );
      expect((axiosFirstCallArgs as unknown as { method: string }).method).toBe(
        HttpMethods.GET
      );
    });
  });

  describe("with a custom base url, a path and a body using POST method", () => {
    it("makes a request with the correct body", () => {
      const customBaseUrl = "www.someUrl.com";
      const path = "/some-path";
      interface Body {
        bodyParameter: number;
      }
      const body: Body = {
        bodyParameter: 1,
      };
      makeRequest<Body, undefined, unknown>({
        method: HttpMethods.POST,
        body,
        customBaseUrl,
        path,
      });

      expect(mockAxios).toHaveBeenCalled();
      const axiosFirstCallArgs = mockAxios.mock?.calls?.[0]?.[0] as unknown as AxiosFirstCallArgs;
      expect(axiosFirstCallArgs).toBeDefined();
      expect(axiosFirstCallArgs.baseURL).toBe("www.someUrl.com");
      expect(axiosFirstCallArgs.url).toBe("/some-path");
      expect((axiosFirstCallArgs as unknown as { method: string }).method).toBe(
        HttpMethods.POST
      );
      expect(
        (axiosFirstCallArgs as unknown as { data: Body }).data
      ).toStrictEqual(body);
    });
  });
});
