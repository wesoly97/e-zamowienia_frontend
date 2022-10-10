import { Route, Routes } from 'react-router-dom';

import { AppRoute } from './AppRoutes.types';

import { Main } from '@/app/main/Main';
import { OrdersContainer } from '@/app/orders/OrdersContainers';
import { Nav } from '@/app/nav/Nav';
import { Footer } from '@/app/footer/Footer';
import { Login } from '@/app/login/Login';
import { Register } from '@/app/register/Register';
import { UnauthenticatedLayout } from '@/layouts/unauthenticatedLayout/UnauthenticatedLayout';

export const AppRoutes = () => (
  <Routes>
    <Route
      path={AppRoute.Main}
      element={
        <>
          <Nav position={'static'} />
          <Main />
          <Footer />
        </>
      }
    />
    <Route
      path={AppRoute.Login}
      element={
        <UnauthenticatedLayout>
          <Nav position={'absolute'} />
          <Login />
        </UnauthenticatedLayout>
      }
    />
    <Route
      path={AppRoute.Register}
      element={
        <UnauthenticatedLayout>
          <Nav position={'absolute'} />
          <Register />
        </UnauthenticatedLayout>
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
