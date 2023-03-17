import type { NextApiRequest, NextApiResponse } from 'next';
import { Response, Product, Prices } from '@/types';
import brands from '@/src/database/products.js';
import pricesWithoutInterface from '@/src/database/stock-price.js';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  if (req.method === "GET") {

    let products : Product[] = [];

    const prices: Prices = pricesWithoutInterface;

    brands.forEach(brand => {
      brand.skus.forEach(product => {
        products.push({
          ...brand,
          ...product,
          ...prices[product.code]
        })
      });
    });

    res.status(200).json({ products });
    return;
  }

  res.status(404).json({ error: "Method does not exist" });
};
