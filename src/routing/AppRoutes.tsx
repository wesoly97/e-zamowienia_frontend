import { Route, Routes } from 'react-router-dom';

import { AppRoute } from './AppRoutes.types';

import { Nav } from '@/app/nav/Nav';
import { Main } from '@/app/main/Main';
import { OrdersContainer } from '@/app/orders/OrdersContainer';
import { Footer } from '@/app/footer/Footer';
import { Login } from '@/app/login/Login';
import { Register } from '@/app/register/Register';
import { UnauthenticatedLayout } from '@/layouts/unauthenticatedLayout/UnauthenticatedLayout';
import { AuthenticatedLayout } from '@/layouts/authenticatedLayout/AuthenticatedLayout';
import { OrdersEdit } from '@/app/ordersEdit/OrdersEdit';
import { OrdersAdd } from '@/app/ordersAdd/OrdersAdd';
import { OrdersDetailsContainer } from '@/app/ordersDetails/OrdersDetailsContainer';
import { PasswordRecoveryContainer } from '@/app/passwordRecovery/PasswordRecoveryContainer';
import { UserProfile } from '@/app/userProfile/UserProfile';
import { RoleTypes } from '@/api/types/types';
import { UserVerification } from '@/app/userVerification/UserVerification';
import { UserOrdersContainer } from '@/app/userOrders/UserOrdersContainer';

//TODO lazy
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
    <Route path={AppRoute.Orders}>
      <Route
        index
        element={
          <>
            <Nav position={'static'} />
            <OrdersContainer />
            <Footer />
          </>
        }
      />
      <Route path={AppRoute.OrderDetails}>
        <Route path={AppRoute.OrderId}>
          <Route
            index
            element={
              <>
                <Nav position={'static'} />
                <OrdersDetailsContainer />
                <Footer />
              </>
            }
          />
        </Route>
      </Route>
      <Route path={AppRoute.OrderEdit}>
        <Route path={AppRoute.OrderId}>
          <Route
            index
            element={
              <AuthenticatedLayout acceptedRoles={[RoleTypes.Orderer]}>
                <Nav position={'static'} />
                <OrdersEdit />
                <Footer />
              </AuthenticatedLayout>
            }
          />
        </Route>
      </Route>
      <Route path={AppRoute.OrderAdd}>
        <Route
          index
          element={
            <AuthenticatedLayout acceptedRoles={[RoleTypes.Orderer]}>
              <Nav position={'static'} />
              <OrdersAdd />
              <Footer />
            </AuthenticatedLayout>
          }
        />
      </Route>
      <Route path={AppRoute.OrdersUserList}>
        <Route
          index
          element={
            <AuthenticatedLayout acceptedRoles={[RoleTypes.Orderer]}>
              <Nav position={'static'} />
              <UserOrdersContainer />
              <Footer />
            </AuthenticatedLayout>
          }
        />
      </Route>
    </Route>
    <Route path={AppRoute.PasswordRecovery}>
      <Route
        index
        element={
          <UnauthenticatedLayout>
            <Nav position={'absolute'} />
            <PasswordRecoveryContainer />
          </UnauthenticatedLayout>
        }
      />
      <Route path={AppRoute.PasswordRecoveryTokenId}>
        <Route
          index
          element={
            <UnauthenticatedLayout>
              <Nav position={'absolute'} />
              <PasswordRecoveryContainer />
            </UnauthenticatedLayout>
          }
        />
      </Route>
    </Route>
    <Route
      path={AppRoute.UserProfile}
      element={
        <AuthenticatedLayout>
          <Nav position={'static'} />
          <UserProfile />
          <Footer />
        </AuthenticatedLayout>
      }
    />
    <Route
      path={AppRoute.UserVerification}
      element={
        <AuthenticatedLayout acceptedRoles={[RoleTypes.Regular]}>
          <Nav position={'static'} />
          <UserVerification />
          <Footer />
        </AuthenticatedLayout>
      }
    />
  </Routes>
);
