import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import type { Product } from '../data/products';

export const useCategoryFilter = (allProducts: Product[]) => {
  const [params] = useSearchParams();
  const categoryParam = params.get('category') ?? 'all';

  const filtered = useMemo(() => {
    if (categoryParam === 'all') return allProducts;
    return allProducts.filter((p) => p.category === categoryParam);
  }, [allProducts, categoryParam]);

  return { category: categoryParam, products: filtered } as const;
};

export default useCategoryFilter;


