import { Signal } from '@angular/core';
import { CallState } from '@sale-taxes-fe/shopping-basket-data-access';
import { ProductDTO } from '@sale-taxes-fe/api';
import * as i0 from "@angular/core";
export declare class ShoppingBasketFeatureComponent {
    shoppingBasketStore: {
        callState: Signal<CallState>;
        products: Signal<ProductDTO[]>;
        totalShelfPrice: Signal<number>;
        totalSalesTaxes: Signal<number>;
        getShoppingBasket: ((input: number | Signal<number> | import("rxjs").Observable<number>) => import("rxjs").Unsubscribable) & import("rxjs").Unsubscribable;
    } & import("@ngrx/signals/src/state-signal").StateSignal<{
        callState: CallState;
        products: ProductDTO[];
    }>;
    ids: number[];
    CallState: typeof CallState;
    products: Signal<ProductDTO[]>;
    totalShelfPrice: Signal<number>;
    totalSalesTaxes: Signal<number>;
    callState: Signal<CallState>;
    getShoppingBasket(id: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShoppingBasketFeatureComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ShoppingBasketFeatureComponent, "shopping-basket-feature", never, {}, {}, never, never, true, never>;
}
