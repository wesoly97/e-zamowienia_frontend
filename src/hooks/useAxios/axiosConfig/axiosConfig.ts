export const getAxiosConfig = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
  };
};
