import { useQuery } from 'react-query';
import axios from 'axios';

const fetchProducts = async () => {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  return data;
};

const ProductsComponent = () => {
  const { data: products, isLoading, error } = useQuery('products', fetchProducts);

  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
};

export default ProductsComponent;
