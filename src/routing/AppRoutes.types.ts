export enum AppRoute {
  Main = '/',
  Login = 'logowanie',
  Register = 'rejestracja',
  Orders = 'zamowienia',
  OrderAdd = 'dodaj',
  OrderEdit = 'edytuj',
  OrderDetails = 'szczegoly',
  OrderId = ':orderId',
}

export enum AppLinks {
  Main = '/',
  Login = '/logowanie',
  Register = '/rejestracja',
  Orders = '/zamowienia',
  OrderDetails = '/zamowienia/szczegoly/:orderId',
  OrderAdd = '/zamowienia/dodaj',
}
