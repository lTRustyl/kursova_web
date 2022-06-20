import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { db } from '../sample_db';
import { sortBy } from 'lodash-es';
import { useCartContext } from './CartContext';

export const Products = ({ catId }) => {
  const productCategory = db.find((x) => x.categoryId === catId);
  let products = productCategory.products;
  const { cart, updateCart } = useCartContext();
  const [filter, setFilter] = useState('ratingDesc');

  if (filter === 'priceAsc') {
    products = sortBy(products, (x) => x.price);
  }
  if (filter === 'priceDesc') {
    products = sortBy(products, (x) => x.price).reverse();
  }
  if (filter === 'ratingDesc') {
    products = sortBy(products, (x) => x.rating).reverse();
  }
  if (filter === 'ratingAsc') {
    products = sortBy(products, (x) => x.rating);
  }

  const handleSorting = (event) => {
    setFilter(event.target.value);
  };

  const ProductsCards = products.map((product) => (
    <Card
      sx={{
        width: 1250,
        height: 275,
        backgroundColor: '#29b6f6',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
      }}
      key={product.id}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          height: '100%',
          justifyContent: 'space-around',
        }}
      >
        <div style={{ display: 'flex',width: 1000, height: 250 }}>
          <div style={{ width: 250 }}>
            <CardContent sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
              <img src={product.image} style={{ width: 200, height: 200 }} />
            </CardContent>
          </div>
          <div>
            <CardContent>
              <Typography sx={{ textAlign: 'center', fontSize: 21, fontWeight: 'bold' }}>
                {product.name}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography sx={{fontWeight: 3, height: 115}}>
                {product.description}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography sx={{ fontSize: 15, fontWeight: 3, height: 50, width: 100 }}>
                Рейтинг: {product.rating}/5
              </Typography>
            </CardContent>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingRight: 10,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'space-around',
        }}
      >
        <CardContent>
          <Typography sx={{ textAlign: 'center', fontWeight: 3, fontSize: 30 }}>
            {product.price}$
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          sx={{ color: 'white', backgroundColor: '#0288d1' }}
          onClick={() => updateCart(product.id, product)}
        >
          Купити
        </Button>
      </div>
    </Card>
  ));
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
          <Typography
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              paddingTop: 4,
              height: 30,
            }}
          >
            {productCategory.categoryName.toUpperCase()}
          </Typography>
          <FormControl sx={{ width: 1000, margin: 5 }}>
            <InputLabel id="sortingSelect" variant="standard">
              Сортування
            </InputLabel>
            <Select defaultValue={'ratingDesc'} onChange={handleSorting}>
              <MenuItem value={'ratingDesc'}>За спаданням рейтингу</MenuItem>
              <MenuItem value={'ratingAsc'}>За зростанням рейтингу</MenuItem>
              <MenuItem value={'priceAsc'}>Від дешевих до дорогих</MenuItem>
              <MenuItem value={'priceDesc'}>Від дорогих до дешевих</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20}}>{ProductsCards}</div>
        <div style={{ height: 200}}></div>
      </div>
    </>
  );
};
