import { Route, Routes } from 'react-router-dom';

import { AppRoute } from './AppRoutes.types';

import { Main } from '@/app/main/Main';
import { OrdersContainer } from '@/app/orders/OrdersContainers';
import { Nav } from '@/app/nav/Nav';
import { Footer } from '@/app/footer/Footer';

export const AppRoutes = () => (
  <Routes>
    <Route
      path={AppRoute.Main}
      element={
        <>
          <Nav />
          <Main />
          <Footer />
        </>
      }
    />
    <Route
      path={AppRoute.Orders}
      element={
        <>
          <Nav />
          <OrdersContainer />
        </>
      }
    />
  </Routes>
);
