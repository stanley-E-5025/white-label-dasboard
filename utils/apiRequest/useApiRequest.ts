import { IFetchEndpoint } from "./apiRequest.model";
import { NEXT_PUBLIC_PUBLIC_API_URL } from "../../constants/config";

const useApiRequest = () => {
  const fetchEndpointUnauthorized = async ({
    endpoint,
    method,
    body,
    headers,
  }: IFetchEndpoint) => {
    try {
      const response = await fetch(`${NEXT_PUBLIC_PUBLIC_API_URL}${endpoint}`, {
        method,
        body,
        headers,
      });
      return response;
    } catch (error) {
      throw new Error(
        `An error has occured while processing your request. Please try again later or contact customer support. ${
          (error as Error).message
        }`
      );
    }
  };

  return {
    fetchEndpointUnauthorized,
  };
};

export default useApiRequest;
