import type { NextApiRequest, NextApiResponse } from 'next';
import { ResponseProducts, Product, Prices } from '@/types';
import brands from '@/src/database/products.js';
import pricesWithoutInterface from '@/src/database/stock-price.js';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseProducts>
) {
  if (req.method === "GET") {

    let products : Product[] = [];

    const prices: Prices = pricesWithoutInterface;

    brands.forEach(brand => {
      const code = brand.skus[0].code;
      const price = prices[code].price;
      
      products.push({
        ...brand,
        price
      })
    });

    res.status(200).json({ products });
    return;
  }

  res.status(404).json({ error: "Method does not exist" });
};
