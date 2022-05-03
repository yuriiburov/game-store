import { ICartProduct } from '../../types';
import { cartProducts } from './data/cart';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(cartProducts);
  } else if (req.method === 'POST') {
    const product = req.body.product;
    const newCartProduct = {
      id: Date.now().toString(),
      name: product.name,
      image: product.image,
      price: product.price,
      pageId: product.id,
    };
    cartProducts.push(newCartProduct);
    res.status(201).json(newCartProduct);
  }
}
