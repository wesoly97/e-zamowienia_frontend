export const getStringifySortOption = (sortOption: -1 | 1) => {
  if (sortOption === -1) {
    return 'desc';
  }

  return 'asc';
};
