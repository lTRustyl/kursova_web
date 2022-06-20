import { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
} from '@mui/material';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { sortBy } from 'lodash-es';
import { db } from '../sample_db';

export const Home = () => {
  let allProducts = db.map((x) => x.products).flat();
  const [filter, setFilter] = useState('ratingDesc');

  if (filter === 'priceAsc') {
    allProducts = sortBy(allProducts, (x) => x.price);
  }
  if (filter === 'priceDesc') {
    allProducts = sortBy(allProducts, (x) => x.price).reverse();
  }
  if (filter === 'ratingAsc') {
    allProducts = sortBy(allProducts, (x) => x.rating);
  }
  if (filter === 'ratingDesc') {
    allProducts = sortBy(allProducts, (x) => x.rating).reverse();
  }

  const handleSorting = (event) => {
    setFilter(event.target.value);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#e1f5fe',
        width: '100%',
        height: '95vh',
        display: 'flex',
        alignContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ height: 'auto', width: 1100 }}>
        <Carousel
          dynamicHeight={false}
          emulateTouch={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3500}
          showThumbs={false}
        >
          <div>
            <img src="./asus.png" alt="img1" style={{ width: 1100, height: 300 }} />
          </div>
          <div>
            <img src="./gigabyte.png" alt="img3" style={{ width: 1100, height: 300 }} />
          </div>
          <div>
            <img src="./intel.jpg" alt="img3"  style={{ width: 1100, height: 300 }} />
          </div>
          <div>
            <img src="./samsung.jpg" alt="img3"  style={{ width: 1100, height: 300 }} />
          </div>
          <div>
            <img src="./kingston.png" alt="img2" style={{ width: 1100, height: 300 }} />
          </div>
          <div>
            <img src="./hyperx.png" alt="img2" style={{ width: 1100, height: 300 }} />
          </div>
        </Carousel>
      </div>

      <div style={{ paddingLeft: 35 }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: 150,
            alignItems: 'center',
            gap: 35,
          }}
        >
          <h2>Товари</h2>
          <FormControl sx={{ width: 550 }}>
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 35 }}>
          {allProducts.map((product) => (
            <Card
              sx={{
                width: 225,
                height: 'auto',
                backgroundColor: '#4fc3f7',
                display: 'flex',
                flexDirection: 'column',
              }}
              key={product.name}
            >
              <CardContent>
                <img src={product.image} style={{ width: 195, height: 175 }}></img>
              </CardContent>
              <CardContent>
                <Typography sx={{ textAlign: 'center', height: 75, fontWeight: 'bold'}}>{product.name}</Typography>
              </CardContent>

              <CardContent>
                <Typography>Ціна: {product.price}$</Typography>
              </CardContent>

              <CardContent>
              <Typography>
                Рейтинг: {product.rating}/5
              </Typography>
            </CardContent>
            </Card>
          ))}
        </div>

        <div style={{ height: 200}}></div>
      </div>
    </Box>
  );
};
