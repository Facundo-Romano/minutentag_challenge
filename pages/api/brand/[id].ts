import type { NextApiRequest, NextApiResponse } from 'next';
import { Product, ResponseProduct } from '@/types';
import brands from '@/src/database/products.js';    

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseProduct>
) {
  if (req.method === "GET") {
    const { id } = req.query;

    let brand: Product | string = "";

    for (const thisBrand of brands) {
      if (thisBrand.id.toString() === id) {
        brand = thisBrand;
        break;
      };
    }

    res.status(200).json({ brand });
    return;
  }

  res.status(404).json({ error: "Method does not exist" });
};