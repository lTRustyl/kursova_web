import { Navbar } from './components/Navbar';
import { MainContainer } from './components/MainContainer';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Footer } from './components/Footer';

function App() {
  document.body.style = 'background: #e1f5fe';

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 20,
            marginBottom: 40,
          }}
        >
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/categories" element={<MainContainer/>} />
          </Routes>
        </Box>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
