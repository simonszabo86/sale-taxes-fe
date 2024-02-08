import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { GetShoppingBasketResponse, ProductDTO, ShoppingBasketControllerService } from '@sale-taxes-fe/api';
import { computed, inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { delay, map, pipe, switchMap, tap } from 'rxjs';
import { tapResponse } from '@ngrx/operators';

export enum CallState {
  'init',
  'loading',
  'loaded',
  'error'
}

export const ShoppingBasketStore = signalStore(
  withState({
    products: [] as ProductDTO[],
    callState: CallState.init
  }),

  withMethods((state) => {
    const shoppingBasketControllerService = inject(ShoppingBasketControllerService);

    const result = {
      // This action is just added to show a possible way of action chaining
      logOutMessage: rxMethod<string>(
        // effect
        pipe(
          map((message: string) => console.log('Message arrived: ', message))
        )
      ),

      // action
      getShoppingBasket: rxMethod<number>(
        // effect
        pipe(
          tap(() => {
            patchState(state, {
              callState: CallState.loading
            });
          }),
          switchMap((id: number) => shoppingBasketControllerService.getShoppingBasket(id).pipe(
            // Added to show the loading indicator
            delay(1000),
            tapResponse({
              next: (response: GetShoppingBasketResponse) => {
                result.logOutMessage("Got the Shopping basket with id: " + id);
                // success reducer
                patchState(state, {
                  products: response.products,
                  callState: CallState.loaded
                });
              },
              error: (error: unknown) => {
                // error reducer
                result.logOutMessage("Could not get the Shopping basket with id: " + id + ", error: " + error);
                patchState(state, {
                  callState: CallState.error
                });
              }
            })
          ))
        )
      )
    };

    return result;
  }),

  // custom entries and selectors
  withComputed(({ products }) => ({
    totalShelfPrice: computed(() =>
      +products().reduce((acc, a) => {
        return acc + (a.shelfPrice || 0);
      }, 0).toFixed(2)),
    totalSalesTaxes: computed(() => +products().reduce((acc, a) => {
      return acc + ((a.shelfPrice || 0) - (a.price || 0));
    }, 0).toFixed(2))
  }))
);
