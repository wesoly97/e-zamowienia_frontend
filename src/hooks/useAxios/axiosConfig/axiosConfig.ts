export const getAxiosConfig = () => {
  return {
    timeout: 500,
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      'X-Use-Cookies': true,
    },
    withCredentials: true,
  };
};
