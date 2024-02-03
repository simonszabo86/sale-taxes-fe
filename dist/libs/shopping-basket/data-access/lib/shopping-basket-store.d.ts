import { ProductDTO } from '@sale-taxes-fe/api';
export type CallState = 'init' | 'loading' | 'loaded' | {
    error: string;
};
export declare const ShoppingBasketStore: import("@angular/core").Type<{
    products: import("@angular/core").Signal<ProductDTO[]>;
    callState: import("@angular/core").Signal<CallState>;
    totalShelfPrice: import("@angular/core").Signal<number>;
    totalSalesTaxes: import("@angular/core").Signal<number>;
    getShoppingBasket: ((input: number | import("rxjs").Observable<number> | import("@angular/core").Signal<number>) => import("rxjs").Unsubscribable) & import("rxjs").Unsubscribable;
} & import("@ngrx/signals/src/state-signal").StateSignal<{
    products: ProductDTO[];
    callState: CallState;
}>>;
