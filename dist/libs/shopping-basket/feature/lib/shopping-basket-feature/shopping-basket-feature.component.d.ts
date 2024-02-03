import { Signal } from '@angular/core';
import { ProductDTO } from '@sale-taxes-fe/api';
import * as i0 from "@angular/core";
export declare class ShoppingBasketFeatureComponent {
    shoppingBasketStore: {
        products: Signal<ProductDTO[]>;
        callState: Signal<import("@sale-taxes-fe/shopping-basket-data-access").CallState>;
        totalShelfPrice: Signal<number>;
        totalSalesTaxes: Signal<number>;
        getShoppingBasket: ((input: number | Signal<number> | import("rxjs").Observable<number>) => import("rxjs").Unsubscribable) & import("rxjs").Unsubscribable;
    } & import("@ngrx/signals/src/state-signal").StateSignal<{
        products: ProductDTO[];
        callState: import("@sale-taxes-fe/shopping-basket-data-access").CallState;
    }>;
    products: Signal<ProductDTO[]>;
    totalShelfPrice: Signal<number>;
    totalSalesTaxes: Signal<number>;
    getShoppingBasket(id: number): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShoppingBasketFeatureComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ShoppingBasketFeatureComponent, "shopping-basket-feature", never, {}, {}, never, never, true, never>;
}
