import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  Modal,
  TextField,
  Card,
  CardContent,
  FormControl
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AppsIcon from '@mui/icons-material/Apps';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useCartContext } from './CartContext';
import _ from 'lodash';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  border: '1px solid gray',
  borderRadius: 5,
  backgroundColor: 'white',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 1,
};

export const Navbar = () => {
  const navigate = useNavigate();
  const [shoppingCartModal, setShoppingCartModal] = useState(false);
  const [aboutUsModal, setAboutUsModal] = useState(false);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isRegistrationOpened, setIsRegistrationOpened] = useState(false);

  const { cart, updateCart } = useCartContext();

  const textIfCartEmpty = "У вас не має товарів у корзині."
  const textIfCartNotEmpty = "Ваше замовлення прийнято. Очікуйте на лист, який ми вам вислали на електронну пошту, вказану в особистому кабінеті."

  const handleRegistrationModalOpen = () => {
    setIsModalOpened(false);
    setIsRegistrationOpened(!isRegistrationOpened);
  };

  const CartItems = cart?.map((cartItem) => (
    <Card
      sx={{
        width: 350,
        height: 90,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#b3e5fc',
      }}
      key={cartItem?.id}
    >
      <CardContent>
        <Typography sx={{ width: 150 }}>{cartItem?.name}</Typography>
      </CardContent>
      <CardContent>
        <Typography>{cartItem?.price}$</Typography>
      </CardContent>
      <CardContent>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#039be5' }}
          onClick={() => updateCart(cartItem.id)}
          endIcon={<RemoveCircleIcon />}
        ></Button>
      </CardContent>
    </Card>
  ));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: '#b3e5fc', bottom: 'auto', top: 0 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => navigate('/')}
            >
              <Typography style={{ color: '', fontSize: 35 }}>TRUSTY</Typography>
              <Typography style={{ color: '#039be5', fontSize: 35 }}>SHOP</Typography>
            </Button>
          </div>
          <div>
            <Button
              variant="contained"
              endIcon={<ShoppingCartIcon />}
              sx={{ backgroundColor: '#039be5', marginRight: 2 }}
              onClick={() => setShoppingCartModal(!shoppingCartModal)}
            >
              Корзина
            </Button>
            <Button
              variant="contained"
              endIcon={<AppsIcon />}
              onClick={() => navigate('/categories')}
              sx={{ backgroundColor: '#039be5', marginRight: 2 }}
            >
              Категорії товарів
            </Button>
            <Button
              variant="contained"
              endIcon={<LoginIcon />}
              onClick={() => {
                setIsModalOpened(!isModalOpened);
              }}
              sx={{ backgroundColor: '#039be5', marginRight: 2 }}
            >
              Вхід/Реєстрація
            </Button>
            <Button
              variant="contained"
              sx={{ backgroundColor: '#039be5' }}
              onClick={() => {
                setAboutUsModal(true);
              }}
            >
              Про нас
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Modal
        open={isModalOpened}
        onClose={() => {
          setIsModalOpened(!isModalOpened);
        }}
      >
        <Box sx={style}>
          <TextField required id="login" label="Login" placeholder="Логин" variant="filled" />
          <TextField
            required
            id="password"
            label="Password"
            placeholder="Пароль"
            variant="filled"
          />
          <Button variant="contained" sx={{ backgroundColor: '#0288d1' }}>
            Увійти
          </Button>
          <p>або</p>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#0288d1' }}
            onClick={handleRegistrationModalOpen}
          >
            Зареєструватися
          </Button>
        </Box>
      </Modal>
      <Modal
        open={isRegistrationOpened}
        onClose={() => {
          setIsModalOpened(false);
          setIsRegistrationOpened(!isRegistrationOpened);
        }}
      >
        <Box sx={style}>
          <FormControl>
            <TextField required id="login" label="email" placeholder="email" variant="filled" />
            <TextField required id="password" label="Пароль" placeholder="Пароль" variant="filled" />
            <TextField
              required
              id="password"
              label="Повторіть пароль"
              placeholder="Повторіть пароль"
              variant="filled"
            />
            <Button variant="contained" sx={{ backgroundColor: '#000000' }}>
              Зареєструватися
            </Button>
          </FormControl>
        </Box>
      </Modal>
      <Modal
        open={aboutUsModal}
        onClose={() => {
          setAboutUsModal(false);
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 350,
            border: '1px solid gray',
            borderRadius: 5,
            backgroundColor: 'white',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography sx={{ fontSize: 18 }}>
          TRUSTYSHOP − найбільший онлайн-ритейлер комплектуючих для комп'ютерної в місті Львів.
          </Typography>
          <Typography sx={{ fontSize: 18 }}>
          Ми продаємо за справедливою ціною та надаємо гарантію, бо вважаємо, що онлайн-шопінг має бути максимально зручним і безпечним.
          </Typography>
          <Typography sx={{ fontSize: 18 }}>
          Ми доставляємо замовлення по Львову протягом одного дня. Усе − без передоплати, якщо потрібно − у кредит. Оплата готівкова або безготівкова − як вам зручніше.
          </Typography>
        </Box>
      </Modal>

      <Modal
        open={shoppingCartModal}
        onClose={() => {
          setShoppingCartModal(false);
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 350,
            border: '1px solid gray',
            borderRadius: 5,
            backgroundColor: '#81d4fa',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography sx={{ fontSize: 20 }}>Корзина</Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20}}>{CartItems}</div>

          <div>
            {_.sumBy(cart, 'price') === 0 ? (
              'No items in cart'
            ) : (
              <div>Total price: {_.sumBy(cart, 'price')}$</div>
            )}
          </div>
          <div>
            <Button variant="contained" sx={{ backgroundColor: 'green' }} onClick={() => cart.length === 0 ? alert(textIfCartEmpty) : alert(textIfCartNotEmpty)}>
              Оформити замовлення
            </Button>
          </div>
        </Box>
      </Modal>
    </Box>
  );
};
