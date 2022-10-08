import { CreateAccount } from './components/createAccount/CreateAccount';
import { Header } from './components/header/Header';
import { Trailer } from './components/trailer/Trailer';
import { StatisticsContainer } from './components/statistics/StatisticsContainers';

export const Main = () => {
  return (
    <>
      <Header />
      <Trailer />
      <StatisticsContainer />
      <CreateAccount />
    </>
  );
};
