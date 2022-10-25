export const parseDateToString = (date?: string) => {
  if (date) {
    return new Date(date).toISOString().slice(0, 10);
  }
  return new Date().toISOString().slice(0, 10);
};
