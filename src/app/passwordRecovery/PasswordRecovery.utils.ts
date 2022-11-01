export const isTokenExpired = (tokenExpirationDate: number) => tokenExpirationDate < new Date().getTime();
