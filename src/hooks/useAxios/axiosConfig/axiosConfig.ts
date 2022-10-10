export const getAxiosConfig = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 2500,
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
  };
};
