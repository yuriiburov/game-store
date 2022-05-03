import { products } from './data/products';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(products);
  }
}
