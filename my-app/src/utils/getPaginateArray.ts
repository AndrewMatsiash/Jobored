export const getPaginateArray = <T>(
  array: T[],
  page: number,
  perPage: number
) => {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  return array.slice(start, end);
};
