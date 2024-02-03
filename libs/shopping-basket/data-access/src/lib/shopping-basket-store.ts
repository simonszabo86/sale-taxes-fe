import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { GetShoppingBasketResponse, ProductDTO, ShoppingBasketControllerService } from '@sale-taxes-fe/api';
import { computed, inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';

export type CallState = 'init' | 'loading' | 'loaded' | { error: string };

export const ShoppingBasketStore = signalStore(
  withState({
    products: [] as ProductDTO[],
    callState: 'init' as CallState
  }),

  withMethods((state) => {
    const shoppingBasketControllerService = inject(ShoppingBasketControllerService);

    return {
      // action
      getShoppingBasket: rxMethod<number>(
        // effect
        pipe(
          switchMap((id) => shoppingBasketControllerService.getShoppingBasket(id)),
          tapResponse({
            next: (response: GetShoppingBasketResponse) => {
              // success reducer
              console.log("response: ", response);
              patchState(state, {
                products: response.products,
                callState: 'loaded'
              });
            },
            error: (error: unknown) => {
              // error reducer
              const errorMessage = 'Could not get shoppingBasket';
              patchState(state, {
                callState: { error: errorMessage }
              });
              console.error(errorMessage + ': ' + error);
            }
          })
        )
      )

    };

  }),

  withComputed(({ products }) => ({
    totalShelfPrice: computed(() =>
      +products().reduce((acc, a) => {
        return acc + (a.shelfPrice || 0);
      }, 0).toFixed(2)),
    totalSalesTaxes: computed(() => +products().reduce((acc, a) => { return acc + ((a.shelfPrice || 0) - (a.price || 0)) }, 0).toFixed(2))
  }))
);
