import type { NextApiRequest, NextApiResponse } from 'next';
import products from '@/src/database/products.js';

type Data = {
  products: object[],
  error?: string
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json({ products: products });
    return;
  };

  res.status(404).json({ products: [], error: "Method does not exist" });
};
