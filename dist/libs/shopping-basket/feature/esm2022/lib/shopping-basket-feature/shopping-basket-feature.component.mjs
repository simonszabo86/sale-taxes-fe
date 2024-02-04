import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingBasketDataAccessModule, ShoppingBasketStore, CallState } from '@sale-taxes-fe/shopping-basket-data-access';
import { ShoppingBasketUiComponent } from '@sale-taxes-fe/shopping-basket-ui';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import * as i0 from "@angular/core";
function ShoppingBasketFeatureComponent_For_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 0);
    i0.ɵɵlistener("click", function ShoppingBasketFeatureComponent_For_1_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r10); const item_r4 = restoredCtx.$implicit; const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.getShoppingBasket(item_r4)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵattribute("data-test", "getShoppingBasket" + item_r4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("Get shopping Basket ", item_r4, "");
} }
function ShoppingBasketFeatureComponent_Case_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "mat-spinner");
} }
function ShoppingBasketFeatureComponent_Case_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "shopping-basket-ui", 1);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("products", ctx_r2.products())("totalShelfPrice", ctx_r2.totalShelfPrice())("totalSalesTaxes", ctx_r2.totalSalesTaxes());
} }
function ShoppingBasketFeatureComponent_Case_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "br");
    i0.ɵɵelementStart(1, "button", 2);
    i0.ɵɵtext(2, "Error, could not get shopping basket.");
    i0.ɵɵelementEnd();
} }
export class ShoppingBasketFeatureComponent {
    constructor() {
        this.shoppingBasketStore = inject(ShoppingBasketStore);
        this.ids = [1, 2, 3, 4];
        this.CallState = CallState;
        this.products = this.shoppingBasketStore.products;
        this.totalShelfPrice = this.shoppingBasketStore.totalShelfPrice;
        this.totalSalesTaxes = this.shoppingBasketStore.totalSalesTaxes;
        this.callState = this.shoppingBasketStore.callState;
    }
    getShoppingBasket(id) {
        this.shoppingBasketStore.getShoppingBasket(id);
    }
    static { this.ɵfac = function ShoppingBasketFeatureComponent_Factory(t) { return new (t || ShoppingBasketFeatureComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ShoppingBasketFeatureComponent, selectors: [["shopping-basket-feature"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 5, vars: 1, consts: [["mat-button", "", "color", "primary", 3, "click"], [3, "products", "totalShelfPrice", "totalSalesTaxes"], ["data-test", "getShoppingBasketError", "mat-flat-button", "", "color", "warn"], ["mat-button", "", "color", "primary"]], template: function ShoppingBasketFeatureComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵrepeaterCreate(0, ShoppingBasketFeatureComponent_For_1_Template, 2, 2, "button", 3, i0.ɵɵrepeaterTrackByIdentity);
            i0.ɵɵtemplate(2, ShoppingBasketFeatureComponent_Case_2_Template, 1, 0)(3, ShoppingBasketFeatureComponent_Case_3_Template, 1, 3)(4, ShoppingBasketFeatureComponent_Case_4_Template, 3, 0);
        } if (rf & 2) {
            let ShoppingBasketFeatureComponent_contFlowTmp;
            i0.ɵɵrepeater(ctx.ids);
            i0.ɵɵadvance(2);
            i0.ɵɵconditional(2, (ShoppingBasketFeatureComponent_contFlowTmp = ctx.callState()) === ctx.CallState.loading ? 2 : ShoppingBasketFeatureComponent_contFlowTmp === ctx.CallState.loaded ? 3 : ShoppingBasketFeatureComponent_contFlowTmp === ctx.CallState.error ? 4 : -1);
        } }, dependencies: [CommonModule, ShoppingBasketDataAccessModule, ShoppingBasketUiComponent, MatButton, MatProgressSpinner], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShoppingBasketFeatureComponent, [{
        type: Component,
        args: [{ selector: 'shopping-basket-feature', standalone: true, imports: [CommonModule, ShoppingBasketDataAccessModule, ShoppingBasketUiComponent, MatButton, MatProgressSpinner], changeDetection: ChangeDetectionStrategy.OnPush, template: "@for(item of ids; track item){\n  <button [attr.data-test]=\"'getShoppingBasket' + item\" mat-button color=\"primary\" (click)=\"getShoppingBasket(item)\">Get shopping Basket {{item}}</button>\n}\n@switch (callState()) {\n  @case (CallState.loading) {\n    <mat-spinner></mat-spinner>\n  }\n  @case (CallState.loaded) {\n    <shopping-basket-ui\n      [products]=\"products()\"\n      [totalShelfPrice]=\"totalShelfPrice()\"\n      [totalSalesTaxes]=\"totalSalesTaxes()\"\n    >\n    </shopping-basket-ui>\n  }\n  @case (CallState.error) {\n    <br><button data-test=\"getShoppingBasketError\"  mat-flat-button  color=\"warn\">Error, could not get shopping basket.</button>\n  }\n}\n\n\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ShoppingBasketFeatureComponent, { className: "ShoppingBasketFeatureComponent", filePath: "lib\\shopping-basket-feature\\shopping-basket-feature.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmctYmFza2V0LWZlYXR1cmUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbGlicy9zaG9wcGluZy1iYXNrZXQvZmVhdHVyZS9zcmMvbGliL3Nob3BwaW5nLWJhc2tldC1mZWF0dXJlL3Nob3BwaW5nLWJhc2tldC1mZWF0dXJlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvc2hvcHBpbmctYmFza2V0L2ZlYXR1cmUvc3JjL2xpYi9zaG9wcGluZy1iYXNrZXQtZmVhdHVyZS9zaG9wcGluZy1iYXNrZXQtZmVhdHVyZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLDhCQUE4QixFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzVILE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQzs7OztJQ0x0RSxpQ0FBbUg7SUFBbEMsdU9BQVMsZUFBQSxpQ0FBdUIsQ0FBQSxJQUFDO0lBQUMsWUFBNEI7SUFBQSxpQkFBUzs7O0lBQWhKLDBEQUE2QztJQUE4RCxjQUE0QjtJQUE1QiwwREFBNEI7OztJQUk3SSw4QkFBMkI7OztJQUczQix3Q0FLcUI7OztJQUpuQiw0Q0FBdUIsNkNBQUEsNkNBQUE7OztJQU96QixxQkFBSTtJQUFBLGlDQUEwRTtJQUFBLHFEQUFxQztJQUFBLGlCQUFTOztBREFoSSxNQUFNLE9BQU8sOEJBQThCO0lBUjNDO1FBVUUsd0JBQW1CLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFFbEQsUUFBRyxHQUFHLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFFaEIsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUV0QixhQUFRLEdBQXlCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUE7UUFDbEUsb0JBQWUsR0FBbUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQTtRQUMxRSxvQkFBZSxHQUFtQixJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFBO1FBQzFFLGNBQVMsR0FBc0IsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQTtLQUtsRTtJQUhDLGlCQUFpQixDQUFDLEVBQVU7UUFDMUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7K0ZBZlUsOEJBQThCO29FQUE5Qiw4QkFBOEI7WUNoQjNDLHNIQUVDO1lBRUMsc0VBRUMseURBQUEseURBQUE7OztZQU5ILHNCQUVDO1lBQ0QsZUFlQztZQWZELHlRQWVDOzRCRFBXLFlBQVksRUFBRSw4QkFBOEIsRUFBRSx5QkFBeUIsRUFBRSxTQUFTLEVBQUUsa0JBQWtCOztpRkFLckcsOEJBQThCO2NBUjFDLFNBQVM7MkJBQ0UseUJBQXlCLGNBQ3ZCLElBQUksV0FDUCxDQUFDLFlBQVksRUFBRSw4QkFBOEIsRUFBRSx5QkFBeUIsRUFBRSxTQUFTLEVBQUUsa0JBQWtCLENBQUMsbUJBR2hHLHVCQUF1QixDQUFDLE1BQU07O2tGQUVwQyw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBpbmplY3QsIFNpZ25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFNob3BwaW5nQmFza2V0RGF0YUFjY2Vzc01vZHVsZSwgU2hvcHBpbmdCYXNrZXRTdG9yZSwgQ2FsbFN0YXRlIH0gZnJvbSAnQHNhbGUtdGF4ZXMtZmUvc2hvcHBpbmctYmFza2V0LWRhdGEtYWNjZXNzJztcbmltcG9ydCB7IFNob3BwaW5nQmFza2V0VWlDb21wb25lbnQgfSBmcm9tICdAc2FsZS10YXhlcy1mZS9zaG9wcGluZy1iYXNrZXQtdWknO1xuaW1wb3J0IHsgUHJvZHVjdERUTyB9IGZyb20gJ0BzYWxlLXRheGVzLWZlL2FwaSc7XG5pbXBvcnQgeyBNYXRCdXR0b24gfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NTcGlubmVyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Nob3BwaW5nLWJhc2tldC1mZWF0dXJlJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU2hvcHBpbmdCYXNrZXREYXRhQWNjZXNzTW9kdWxlLCBTaG9wcGluZ0Jhc2tldFVpQ29tcG9uZW50LCBNYXRCdXR0b24sIE1hdFByb2dyZXNzU3Bpbm5lcl0sXG4gIHRlbXBsYXRlVXJsOiAnLi9zaG9wcGluZy1iYXNrZXQtZmVhdHVyZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9zaG9wcGluZy1iYXNrZXQtZmVhdHVyZS5jb21wb25lbnQuc2NzcycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0Jhc2tldEZlYXR1cmVDb21wb25lbnQge1xuXG4gIHNob3BwaW5nQmFza2V0U3RvcmUgPSBpbmplY3QoU2hvcHBpbmdCYXNrZXRTdG9yZSk7XG5cbiAgaWRzID0gWzEsMiwzLDRdO1xuXG4gIENhbGxTdGF0ZSA9IENhbGxTdGF0ZTtcblxuICBwcm9kdWN0czogU2lnbmFsPFByb2R1Y3REVE9bXT4gPSB0aGlzLnNob3BwaW5nQmFza2V0U3RvcmUucHJvZHVjdHNcbiAgdG90YWxTaGVsZlByaWNlOiBTaWduYWw8bnVtYmVyPiA9IHRoaXMuc2hvcHBpbmdCYXNrZXRTdG9yZS50b3RhbFNoZWxmUHJpY2VcbiAgdG90YWxTYWxlc1RheGVzOiBTaWduYWw8bnVtYmVyPiA9IHRoaXMuc2hvcHBpbmdCYXNrZXRTdG9yZS50b3RhbFNhbGVzVGF4ZXNcbiAgY2FsbFN0YXRlOiBTaWduYWw8Q2FsbFN0YXRlPiA9IHRoaXMuc2hvcHBpbmdCYXNrZXRTdG9yZS5jYWxsU3RhdGVcblxuICBnZXRTaG9wcGluZ0Jhc2tldChpZDogbnVtYmVyKSB7XG4gICAgdGhpcy5zaG9wcGluZ0Jhc2tldFN0b3JlLmdldFNob3BwaW5nQmFza2V0KGlkKTtcbiAgfVxufVxuIiwiQGZvcihpdGVtIG9mIGlkczsgdHJhY2sgaXRlbSl7XG4gIDxidXR0b24gW2F0dHIuZGF0YS10ZXN0XT1cIidnZXRTaG9wcGluZ0Jhc2tldCcgKyBpdGVtXCIgbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiZ2V0U2hvcHBpbmdCYXNrZXQoaXRlbSlcIj5HZXQgc2hvcHBpbmcgQmFza2V0IHt7aXRlbX19PC9idXR0b24+XG59XG5Ac3dpdGNoIChjYWxsU3RhdGUoKSkge1xuICBAY2FzZSAoQ2FsbFN0YXRlLmxvYWRpbmcpIHtcbiAgICA8bWF0LXNwaW5uZXI+PC9tYXQtc3Bpbm5lcj5cbiAgfVxuICBAY2FzZSAoQ2FsbFN0YXRlLmxvYWRlZCkge1xuICAgIDxzaG9wcGluZy1iYXNrZXQtdWlcbiAgICAgIFtwcm9kdWN0c109XCJwcm9kdWN0cygpXCJcbiAgICAgIFt0b3RhbFNoZWxmUHJpY2VdPVwidG90YWxTaGVsZlByaWNlKClcIlxuICAgICAgW3RvdGFsU2FsZXNUYXhlc109XCJ0b3RhbFNhbGVzVGF4ZXMoKVwiXG4gICAgPlxuICAgIDwvc2hvcHBpbmctYmFza2V0LXVpPlxuICB9XG4gIEBjYXNlIChDYWxsU3RhdGUuZXJyb3IpIHtcbiAgICA8YnI+PGJ1dHRvbiBkYXRhLXRlc3Q9XCJnZXRTaG9wcGluZ0Jhc2tldEVycm9yXCIgIG1hdC1mbGF0LWJ1dHRvbiAgY29sb3I9XCJ3YXJuXCI+RXJyb3IsIGNvdWxkIG5vdCBnZXQgc2hvcHBpbmcgYmFza2V0LjwvYnV0dG9uPlxuICB9XG59XG5cblxuIl19