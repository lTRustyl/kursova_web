import { Card, CardContent, Typography, Box } from '@mui/material';
import { db } from '../sample_db';

export const Categories = ({ setCurrentTab }) => {
  const CategoriesCards = db.map((categoryItem) => (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: 3 }}
      key={categoryItem.categoryId}
    >
      <Card
        sx={{
          width: 325,
          height: 300,
          paddingRight: 5,
          backgroundColor: '#29b6f6',
          paddingBottom: 5,
          display: 'flex',
          flexDirection: 'row',
        }}
        onClick={() => {
          setCurrentTab(categoryItem.categoryId);
        }}
      >
      <CardContent sx={{ display: 'flex', alignContent: 'center', justifyContent: 'center' }}>
        <img src={categoryItem.categoryImage} style={{ width: 330, height: 300 }} />
      </CardContent>
      </Card>
      <Typography sx={{ textAlign: 'center' }}>
        {categoryItem.categoryName.toUpperCase()}
      </Typography>
    </Box>
  ));
  return <>{CategoriesCards}</>;
};
