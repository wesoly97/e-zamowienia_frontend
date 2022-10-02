import { Counters } from './components/counter/Counters';
import { CreateAccount } from './components/createAccount/CreateAccount';
import { Header } from './components/header/Header';
import { Trailer } from './components/trailer/Trailer';

export const Main = () => {
  return (
    <>
      <Header />
      <Trailer />
      <Counters />
      <CreateAccount />
    </>
  );
};
