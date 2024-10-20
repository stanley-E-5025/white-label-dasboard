import { useApiRequest } from "../../../utils";

interface Recipient {
  email: string;
  phone: string;
}

const notificationApi = () => {
  const { fetchEndpointUnauthorized } = useApiRequest();

  const GetNotifications = async (): Promise<[]> => {
    const endpoint = `/notifications/?page=${1}&size=${50}&current_org=e6f2930e-1ea3-4217-943b-8d7be29051b6`;
    const method = "GET";

    try {
      const response = await fetchEndpointUnauthorized({ endpoint, method });
      if (!response.ok) {
        const result = await response.json();
        throw result.detail;
      }
      return response.json();
    } catch (error) {
      throw new Error("Something went wrong! ");
    }
  };

  const SendNotification = async (
    idNotification: string,
    channels: string[],
    recipient: Recipient
  ): Promise<any> => {
    const endpoint = `/send-notification`;
    const method = "POST";

    const body = JSON.stringify({
      id_notification: idNotification,
      channels: channels,
      to: recipient,
    });

    try {
      const response = await fetchEndpointUnauthorized({
        endpoint,
        method,
        body,
        headers: {
          "Content-Type": "application/json", // Ensure the content type is set correctly
        },
      });

      if (!response.ok) {
        const result = await response.json();
        throw result.detail;
      }

      return response.json();
    } catch (error) {
      throw new Error("Something went wrong!");
    }
  };

  return {
    GetNotifications,
    SendNotification,
  };
};

export default notificationApi;
