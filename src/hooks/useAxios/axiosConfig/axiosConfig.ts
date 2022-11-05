export const getAxiosConfig = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 5000,
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
  };
};
