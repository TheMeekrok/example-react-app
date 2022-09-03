import {useEffect, useState} from 'react';
import axios from 'axios';
import { IProduct } from '../models';

export function UseProducts() {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    function addProduct(product: IProduct) {
      setProducts(prev => [...prev, product]);
    }
  
    async function fetchProducts() {
      setLoading(true);
  
      try {
        const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=4');
        setProducts(response.data);
      } catch(e: any) {
        setError(e.message)
      }
  
      setLoading(false);
    }
  
    useEffect(() => {
      fetchProducts();
    }, []);

    return { products, loading, error, addProduct };
}