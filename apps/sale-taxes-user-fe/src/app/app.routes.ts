import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {path: 'shopping-basket', loadComponent: () => import('@sale-taxes-fe/shopping-basket-feature').then(mod => mod.ShoppingBasketFeatureComponent)}
];
