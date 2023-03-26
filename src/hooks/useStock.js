import { useMemo } from "react";

export const useSortedStock = (stock, sort) => {
  const sortedStock = useMemo(() => {
    if (sort) {
      return [...stock].sort((a, b) => a[sort] - b[sort]);
    }
    return stock;
  }, [sort, stock]);

  return sortedStock;
};

export const useStock = (stock, sort, query) => {
  const sortedStock = useSortedStock(stock, sort);
  const sortedAndSearchedProduct = useMemo(() => {
    return sortedStock.filter((p) => p.name.toLowerCase().includes(query));
  }, [query, sortedStock]);
  return sortedAndSearchedProduct;
};
