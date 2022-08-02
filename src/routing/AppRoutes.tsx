import { Route, Routes } from 'react-router-dom';

import { AppRoute } from './AppRoutes.types';

import { Main } from '@/app/main/Main';

export const AppRoutes = () => (
  <Routes>
    <Route path={AppRoute.Main} element={<Main />} />
  </Routes>
);
