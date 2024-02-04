import { ProductDTO } from '@sale-taxes-fe/api';
export declare enum CallState {
    'init' = 0,
    'loading' = 1,
    'loaded' = 2,
    'error' = 3
}
export declare const ShoppingBasketStore: import("@angular/core").Type<{
    callState: import("@angular/core").Signal<CallState>;
    products: import("@angular/core").Signal<ProductDTO[]>;
    totalShelfPrice: import("@angular/core").Signal<number>;
    totalSalesTaxes: import("@angular/core").Signal<number>;
    getShoppingBasket: ((input: number | import("rxjs").Observable<number> | import("@angular/core").Signal<number>) => import("rxjs").Unsubscribable) & import("rxjs").Unsubscribable;
} & import("@ngrx/signals/src/state-signal").StateSignal<{
    callState: CallState;
    products: ProductDTO[];
}>>;
