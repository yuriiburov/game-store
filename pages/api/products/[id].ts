import { products } from '../data/products';

export default function handler(req, res) {
  const { id } = req.query;
  const product = products.find(product => product.id === id);
  // console.log(product.id, parseInt(id));
  res.status(200).json(product);
}
