export const CHANGE_PAGE: string = 'PAGINATION/CHANGE_PAGE';

export const paginationAction = (payload: number) => ({
  type: CHANGE_PAGE,
  payload,
});
