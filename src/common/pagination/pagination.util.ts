import { PaginationMeta } from "./pagination.type";

export function createPaginationMeta(
  page: number,
  limit: number,
  totalItems: number
): PaginationMeta {
  const totalPages = Math.ceil(totalItems / limit);

  return {
    page,
    limit,

    totalItems,
    totalPages,

    hasNextPage: page < totalPages,
    hasPreviousPage: page > 1,
  };
}