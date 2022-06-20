import { Categories } from './Categories';
import { Products } from './Products';
import { Box, Button } from '@mui/material';
import React, { useState } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const MainContainer = () => {
  const [currentTab, setCurrentTab] = useState(null);

  return (
    <Box
      sx={{
        width: 'auto',
        height: 'auto',
        backgroundColor: '#e1f5fe',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        paddingTop: '-5%',
      }}
    >
      {currentTab === null ? (
        <Categories setCurrentTab={setCurrentTab} />
      ) : (
        <>
          <div>
            <Button
              onClick={() => {
                setCurrentTab(null);
              }}
              variant="contained"
              sx={{ backgroundColor: '#039be5', width: 150, height: 60 }}
              startIcon={<ArrowBackIcon />}
            >
              Назад
            </Button>
            <Products catId={currentTab}/>
          </div>
        </>
      )}
    </Box>
  );
};
