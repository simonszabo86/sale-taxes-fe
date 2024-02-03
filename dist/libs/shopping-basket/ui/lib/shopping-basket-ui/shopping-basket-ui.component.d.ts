import { InputSignal } from '@angular/core';
import { ProductDTO } from '@sale-taxes-fe/api';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ShoppingBasketUiComponent {
    displayedColumns: string[];
    products: InputSignal<ProductDTO[]>;
    products$: Observable<ProductDTO[]>;
    totalSalesTaxes: InputSignal<number>;
    totalShelfPrice: InputSignal<number>;
    protected readonly ProductDTO: typeof ProductDTO;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShoppingBasketUiComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ShoppingBasketUiComponent, "shopping-basket-ui", never, { "products": { "alias": "products"; "required": false; "isSignal": true; }; "totalSalesTaxes": { "alias": "totalSalesTaxes"; "required": false; "isSignal": true; }; "totalShelfPrice": { "alias": "totalShelfPrice"; "required": false; "isSignal": true; }; }, {}, never, never, true, never>;
}
