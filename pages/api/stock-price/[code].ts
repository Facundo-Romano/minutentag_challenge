import type { NextApiRequest, NextApiResponse } from 'next';
import { Prices, ResponseStockPrice } from '@/types';
import pricesWithoutInterface from '@/src/database/stock-price.js';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseStockPrice>
) {
  if (req.method === "GET") {
    const { code } = req.query; 

    if (typeof code !== "string") return res.status(404).json({ error: "Product not found" });

    const prices: Prices = pricesWithoutInterface;

    const stockPrice = prices[code];

    res.status(200).json({ stockPrice });
    return;
  }

  res.status(404).json({ error: "Method does not exist" });
};
