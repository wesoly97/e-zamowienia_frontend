import { Route, Routes } from 'react-router-dom';

import { AppRoute } from './AppRoutes.types';

import { Main } from '@/app/main/Main';
import { OrdersContainer } from '@/app/orders/OrdersContainers';

export const AppRoutes = () => (
  <Routes>
    <Route path={AppRoute.Main} element={<Main />} />
    <Route path={AppRoute.Orders} element={<OrdersContainer />} />
  </Routes>
);
