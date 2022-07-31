import { Route, Routes } from 'react-router-dom';

import { AppRoute } from './AppRoutes.types';

export const AppRoutes = () => (
  <Routes>
    <Route path={AppRoute.Login} element={<Login />} />
  </Routes>
);
