import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingBasketDataAccessModule, ShoppingBasketStore } from '@sale-taxes-fe/shopping-basket-data-access';
import { ShoppingBasketUiComponent } from '@sale-taxes-fe/shopping-basket-ui';
import { MatButton } from '@angular/material/button';
import * as i0 from "@angular/core";
export class ShoppingBasketFeatureComponent {
    constructor() {
        this.shoppingBasketStore = inject(ShoppingBasketStore);
        this.products = this.shoppingBasketStore.products;
        this.totalShelfPrice = this.shoppingBasketStore.totalShelfPrice;
        this.totalSalesTaxes = this.shoppingBasketStore.totalSalesTaxes;
    }
    getShoppingBasket(id) {
        this.shoppingBasketStore.getShoppingBasket(id);
    }
    static { this.ɵfac = function ShoppingBasketFeatureComponent_Factory(t) { return new (t || ShoppingBasketFeatureComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ShoppingBasketFeatureComponent, selectors: [["shopping-basket-feature"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 7, vars: 3, consts: [["data-test", "getShoppingBasket1", "mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "primary", 3, "click"], [3, "products", "totalShelfPrice", "totalSalesTaxes"]], template: function ShoppingBasketFeatureComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 0);
            i0.ɵɵlistener("click", function ShoppingBasketFeatureComponent_Template_button_click_0_listener() { return ctx.getShoppingBasket(1); });
            i0.ɵɵtext(1, "Get shopping Basket 1");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 1);
            i0.ɵɵlistener("click", function ShoppingBasketFeatureComponent_Template_button_click_2_listener() { return ctx.getShoppingBasket(2); });
            i0.ɵɵtext(3, "Get shopping Basket 2");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "button", 1);
            i0.ɵɵlistener("click", function ShoppingBasketFeatureComponent_Template_button_click_4_listener() { return ctx.getShoppingBasket(3); });
            i0.ɵɵtext(5, "Get shopping Basket 3");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "shopping-basket-ui", 2);
        } if (rf & 2) {
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("products", ctx.products())("totalShelfPrice", ctx.totalShelfPrice())("totalSalesTaxes", ctx.totalSalesTaxes());
        } }, dependencies: [CommonModule, ShoppingBasketDataAccessModule, ShoppingBasketUiComponent, MatButton], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShoppingBasketFeatureComponent, [{
        type: Component,
        args: [{ selector: 'shopping-basket-feature', standalone: true, imports: [CommonModule, ShoppingBasketDataAccessModule, ShoppingBasketUiComponent, MatButton], changeDetection: ChangeDetectionStrategy.OnPush, template: "<button data-test=\"getShoppingBasket1\"  mat-button color=\"primary\" (click)=\"getShoppingBasket(1)\">Get shopping Basket 1</button>\n<button mat-button color=\"primary\" (click)=\"getShoppingBasket(2)\">Get shopping Basket 2</button>\n<button mat-button color=\"primary\" (click)=\"getShoppingBasket(3)\">Get shopping Basket 3</button>\n<shopping-basket-ui\n  [products]=\"products()\"\n  [totalShelfPrice]=\"totalShelfPrice()\"\n  [totalSalesTaxes]=\"totalSalesTaxes()\"\n>\n</shopping-basket-ui>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ShoppingBasketFeatureComponent, { className: "ShoppingBasketFeatureComponent", filePath: "lib\\shopping-basket-feature\\shopping-basket-feature.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmctYmFza2V0LWZlYXR1cmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9zaG9wcGluZy1iYXNrZXQvZmVhdHVyZS9zcmMvbGliL3Nob3BwaW5nLWJhc2tldC1mZWF0dXJlL3Nob3BwaW5nLWJhc2tldC1mZWF0dXJlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvc2hvcHBpbmctYmFza2V0L2ZlYXR1cmUvc3JjL2xpYi9zaG9wcGluZy1iYXNrZXQtZmVhdHVyZS9zaG9wcGluZy1iYXNrZXQtZmVhdHVyZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDckcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ2pILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFVckQsTUFBTSxPQUFPLDhCQUE4QjtJQVIzQztRQVVFLHdCQUFtQixHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBRWxELGFBQVEsR0FBeUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQTtRQUNsRSxvQkFBZSxHQUFtQixJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFBO1FBQzFFLG9CQUFlLEdBQW1CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUE7S0FLM0U7SUFIQyxpQkFBaUIsQ0FBQyxFQUFVO1FBQzFCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDOytGQVZVLDhCQUE4QjtvRUFBOUIsOEJBQThCO1lDZjNDLGlDQUFrRztZQUEvQiwyR0FBUyxzQkFBa0IsQ0FBQyxDQUFDLElBQUM7WUFBQyxxQ0FBcUI7WUFBQSxpQkFBUztZQUNoSSxpQ0FBa0U7WUFBL0IsMkdBQVMsc0JBQWtCLENBQUMsQ0FBQyxJQUFDO1lBQUMscUNBQXFCO1lBQUEsaUJBQVM7WUFDaEcsaUNBQWtFO1lBQS9CLDJHQUFTLHNCQUFrQixDQUFDLENBQUMsSUFBQztZQUFDLHFDQUFxQjtZQUFBLGlCQUFTO1lBQ2hHLHdDQUtxQjs7WUFKbkIsZUFBdUI7WUFBdkIseUNBQXVCLDBDQUFBLDBDQUFBOzRCRE1iLFlBQVksRUFBRSw4QkFBOEIsRUFBRSx5QkFBeUIsRUFBRSxTQUFTOztpRkFLakYsOEJBQThCO2NBUjFDLFNBQVM7MkJBQ0UseUJBQXlCLGNBQ3ZCLElBQUksV0FDUCxDQUFDLFlBQVksRUFBRSw4QkFBOEIsRUFBRSx5QkFBeUIsRUFBRSxTQUFTLENBQUMsbUJBRzVFLHVCQUF1QixDQUFDLE1BQU07O2tGQUVwQyw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBpbmplY3QsIE5PX0VSUk9SU19TQ0hFTUEsIFNpZ25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNob3BwaW5nQmFza2V0RGF0YUFjY2Vzc01vZHVsZSwgU2hvcHBpbmdCYXNrZXRTdG9yZSB9IGZyb20gJ0BzYWxlLXRheGVzLWZlL3Nob3BwaW5nLWJhc2tldC1kYXRhLWFjY2Vzcyc7XG5pbXBvcnQgeyBTaG9wcGluZ0Jhc2tldFVpQ29tcG9uZW50IH0gZnJvbSAnQHNhbGUtdGF4ZXMtZmUvc2hvcHBpbmctYmFza2V0LXVpJztcbmltcG9ydCB7IFByb2R1Y3REVE8gfSBmcm9tICdAc2FsZS10YXhlcy1mZS9hcGknO1xuaW1wb3J0IHsgTWF0QnV0dG9uIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hvcHBpbmctYmFza2V0LWZlYXR1cmUnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTaG9wcGluZ0Jhc2tldERhdGFBY2Nlc3NNb2R1bGUsIFNob3BwaW5nQmFza2V0VWlDb21wb25lbnQsIE1hdEJ1dHRvbl0sXG4gIHRlbXBsYXRlVXJsOiAnLi9zaG9wcGluZy1iYXNrZXQtZmVhdHVyZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9zaG9wcGluZy1iYXNrZXQtZmVhdHVyZS5jb21wb25lbnQuc2NzcycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0Jhc2tldEZlYXR1cmVDb21wb25lbnQge1xuXG4gIHNob3BwaW5nQmFza2V0U3RvcmUgPSBpbmplY3QoU2hvcHBpbmdCYXNrZXRTdG9yZSk7XG5cbiAgcHJvZHVjdHM6IFNpZ25hbDxQcm9kdWN0RFRPW10+ID0gdGhpcy5zaG9wcGluZ0Jhc2tldFN0b3JlLnByb2R1Y3RzXG4gIHRvdGFsU2hlbGZQcmljZTogU2lnbmFsPG51bWJlcj4gPSB0aGlzLnNob3BwaW5nQmFza2V0U3RvcmUudG90YWxTaGVsZlByaWNlXG4gIHRvdGFsU2FsZXNUYXhlczogU2lnbmFsPG51bWJlcj4gPSB0aGlzLnNob3BwaW5nQmFza2V0U3RvcmUudG90YWxTYWxlc1RheGVzXG5cbiAgZ2V0U2hvcHBpbmdCYXNrZXQoaWQ6IG51bWJlcikge1xuICAgIHRoaXMuc2hvcHBpbmdCYXNrZXRTdG9yZS5nZXRTaG9wcGluZ0Jhc2tldChpZCk7XG4gIH1cbn1cbiIsIjxidXR0b24gZGF0YS10ZXN0PVwiZ2V0U2hvcHBpbmdCYXNrZXQxXCIgIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImdldFNob3BwaW5nQmFza2V0KDEpXCI+R2V0IHNob3BwaW5nIEJhc2tldCAxPC9idXR0b24+XG48YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImdldFNob3BwaW5nQmFza2V0KDIpXCI+R2V0IHNob3BwaW5nIEJhc2tldCAyPC9idXR0b24+XG48YnV0dG9uIG1hdC1idXR0b24gY29sb3I9XCJwcmltYXJ5XCIgKGNsaWNrKT1cImdldFNob3BwaW5nQmFza2V0KDMpXCI+R2V0IHNob3BwaW5nIEJhc2tldCAzPC9idXR0b24+XG48c2hvcHBpbmctYmFza2V0LXVpXG4gIFtwcm9kdWN0c109XCJwcm9kdWN0cygpXCJcbiAgW3RvdGFsU2hlbGZQcmljZV09XCJ0b3RhbFNoZWxmUHJpY2UoKVwiXG4gIFt0b3RhbFNhbGVzVGF4ZXNdPVwidG90YWxTYWxlc1RheGVzKClcIlxuPlxuPC9zaG9wcGluZy1iYXNrZXQtdWk+XG4iXX0=