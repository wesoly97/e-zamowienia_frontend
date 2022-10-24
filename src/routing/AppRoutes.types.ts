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
  Login = '/logowanie',
  Register = '/rejestracja',
  Orders = '/zamowienia',
  OrderEdit = '/zamowienia/edytuj/:orderId',
  OrderDetails = '/zamowienia/szczegoly/:orderId',
  OrderAdd = '/zamowienia/dodaj',
}
