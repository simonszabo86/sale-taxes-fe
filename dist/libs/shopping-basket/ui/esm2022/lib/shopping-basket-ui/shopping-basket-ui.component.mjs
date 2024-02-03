import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDTO } from '@sale-taxes-fe/api';
import { MatTableModule } from '@angular/material/table';
import { toObservable } from '@angular/core/rxjs-interop';
import { MatList, MatListItem } from '@angular/material/list';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
function ShoppingBasketUiComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Title ");
    i0.ɵɵelementEnd();
} }
function ShoppingBasketUiComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", element_r6.title, " ");
} }
function ShoppingBasketUiComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 9);
    i0.ɵɵtext(1, " Shelf Price ");
    i0.ɵɵelementEnd();
} }
function ShoppingBasketUiComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 10);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", element_r7.shelfPrice, " ");
} }
function ShoppingBasketUiComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 11);
} }
function ShoppingBasketUiComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 12);
} }
export class ShoppingBasketUiComponent {
    constructor() {
        this.displayedColumns = ['title', 'shelfPrice'];
        this.products = input([]);
        this.products$ = toObservable(this.products);
        this.totalSalesTaxes = input(0);
        this.totalShelfPrice = input(0);
        this.ProductDTO = ProductDTO;
    }
    static { this.ɵfac = function ShoppingBasketUiComponent_Factory(t) { return new (t || ShoppingBasketUiComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ShoppingBasketUiComponent, selectors: [["shopping-basket-ui"]], inputs: { products: [i0.ɵɵInputFlags.SignalBased, "products"], totalSalesTaxes: [i0.ɵɵInputFlags.SignalBased, "totalSalesTaxes"], totalShelfPrice: [i0.ɵɵInputFlags.SignalBased, "totalShelfPrice"] }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 14, vars: 5, consts: [["mat-table", "", 3, "dataSource"], ["matColumnDef", "title"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "shelfPrice"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["data-test", "totalSalesTaxes"], ["data-test", "totalShelfPrice"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function ShoppingBasketUiComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵelementContainerStart(1, 1);
            i0.ɵɵtemplate(2, ShoppingBasketUiComponent_th_2_Template, 2, 0, "th", 2)(3, ShoppingBasketUiComponent_td_3_Template, 2, 1, "td", 3);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementContainerStart(4, 4);
            i0.ɵɵtemplate(5, ShoppingBasketUiComponent_th_5_Template, 2, 0, "th", 2)(6, ShoppingBasketUiComponent_td_6_Template, 2, 1, "td", 3);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵtemplate(7, ShoppingBasketUiComponent_tr_7_Template, 1, 0, "tr", 5)(8, ShoppingBasketUiComponent_tr_8_Template, 1, 0, "tr", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "mat-list")(10, "mat-list-item", 7);
            i0.ɵɵtext(11);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "mat-list-item", 8);
            i0.ɵɵtext(13);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("dataSource", ctx.products$);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
            i0.ɵɵadvance();
            i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate1("Sale taxes: ", ctx.totalSalesTaxes(), "");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("Total: ", ctx.totalShelfPrice(), "");
        } }, dependencies: [CommonModule, MatTableModule, i1.MatTable, i1.MatHeaderCellDef, i1.MatHeaderRowDef, i1.MatColumnDef, i1.MatCellDef, i1.MatRowDef, i1.MatHeaderCell, i1.MatCell, i1.MatHeaderRow, i1.MatRow, MatListItem, MatList], changeDetection: 0 }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShoppingBasketUiComponent, [{
        type: Component,
        args: [{ selector: 'shopping-basket-ui', standalone: true, imports: [CommonModule, MatTableModule, MatListItem, MatList], changeDetection: ChangeDetectionStrategy.OnPush, template: "<table mat-table [dataSource]=\"products$\" >\n  <ng-container matColumnDef=\"title\">\n    <th mat-header-cell *matHeaderCellDef> Title </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"shelfPrice\">\n    <th mat-header-cell *matHeaderCellDef> Shelf Price </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.shelfPrice}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n<mat-list>\n  <mat-list-item data-test=\"totalSalesTaxes\">Sale taxes: {{ totalSalesTaxes() }}</mat-list-item>\n  <mat-list-item data-test=\"totalShelfPrice\">Total: {{ totalShelfPrice() }}</mat-list-item>\n</mat-list>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ShoppingBasketUiComponent, { className: "ShoppingBasketUiComponent", filePath: "lib\\shopping-basket-ui\\shopping-basket-ui.component.ts", lineNumber: 17 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmctYmFza2V0LXVpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvc2hvcHBpbmctYmFza2V0L3VpL3NyYy9saWIvc2hvcHBpbmctYmFza2V0LXVpL3Nob3BwaW5nLWJhc2tldC11aS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9saWJzL3Nob3BwaW5nLWJhc2tldC91aS9zcmMvbGliL3Nob3BwaW5nLWJhc2tldC11aS9zaG9wcGluZy1iYXNrZXQtdWkuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTFELE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7SUNKMUQsNkJBQXNDO0lBQUMsdUJBQU07SUFBQSxpQkFBSzs7O0lBQ2xELDhCQUF1QztJQUFDLFlBQWtCO0lBQUEsaUJBQUs7OztJQUF2QixjQUFrQjtJQUFsQixpREFBa0I7OztJQUkxRCw2QkFBc0M7SUFBQyw2QkFBWTtJQUFBLGlCQUFLOzs7SUFDeEQsOEJBQXVDO0lBQUMsWUFBdUI7SUFBQSxpQkFBSzs7O0lBQTVCLGNBQXVCO0lBQXZCLHNEQUF1Qjs7O0lBR2pFLHlCQUE0RDs7O0lBQzVELHlCQUFrRTs7QURJcEUsTUFBTSxPQUFPLHlCQUF5QjtJQVJ0QztRQVVFLHFCQUFnQixHQUFhLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRXJELGFBQVEsR0FBOEIsS0FBSyxDQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQzlELGNBQVMsR0FBNkIsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVsRSxvQkFBZSxHQUF3QixLQUFLLENBQVMsQ0FBQyxDQUFDLENBQUM7UUFFeEQsb0JBQWUsR0FBd0IsS0FBSyxDQUFTLENBQUMsQ0FBQyxDQUFDO1FBRXJDLGVBQVUsR0FBRyxVQUFVLENBQUM7S0FDNUM7MEZBWlkseUJBQXlCO29FQUF6Qix5QkFBeUI7WUNoQnRDLGdDQUEyQztZQUN6QyxnQ0FBbUM7WUFDakMsd0VBQWtELDJEQUFBO1lBRXBELDBCQUFlO1lBRWYsZ0NBQXdDO1lBQ3RDLHdFQUF3RCwyREFBQTtZQUUxRCwwQkFBZTtZQUVmLHdFQUE0RCwyREFBQTtZQUU5RCxpQkFBUTtZQUNSLGdDQUFVLHdCQUFBO1lBQ21DLGFBQW1DO1lBQUEsaUJBQWdCO1lBQzlGLHlDQUEyQztZQUFBLGFBQThCO1lBQUEsaUJBQWdCLEVBQUE7O1lBaEIxRSwwQ0FBd0I7WUFXbkIsZUFBaUM7WUFBakMsc0RBQWlDO1lBQ3BCLGNBQTBCO1lBQTFCLHVEQUEwQjtZQUdoQixlQUFtQztZQUFuQyxnRUFBbUM7WUFDbkMsZUFBOEI7WUFBOUIsMkRBQThCOzRCREwvRCxZQUFZLEVBQUUsY0FBYyxnS0FBRSxXQUFXLEVBQUUsT0FBTzs7aUZBS2pELHlCQUF5QjtjQVJyQyxTQUFTOzJCQUNFLG9CQUFvQixjQUNsQixJQUFJLFdBQ1AsQ0FBQyxZQUFZLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMsbUJBRzVDLHVCQUF1QixDQUFDLE1BQU07O2tGQUVwQyx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBpbnB1dCwgSW5wdXRTaWduYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBQcm9kdWN0RFRPIH0gZnJvbSAnQHNhbGUtdGF4ZXMtZmUvYXBpJztcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHsgdG9PYnNlcnZhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTWF0TGlzdCwgTWF0TGlzdEl0ZW0gfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2hvcHBpbmctYmFza2V0LXVpJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0VGFibGVNb2R1bGUsIE1hdExpc3RJdGVtLCBNYXRMaXN0XSxcbiAgdGVtcGxhdGVVcmw6ICcuL3Nob3BwaW5nLWJhc2tldC11aS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9zaG9wcGluZy1iYXNrZXQtdWkuY29tcG9uZW50LnNjc3MnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBTaG9wcGluZ0Jhc2tldFVpQ29tcG9uZW50IHtcblxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsndGl0bGUnLCAnc2hlbGZQcmljZSddO1xuXG4gIHByb2R1Y3RzOiBJbnB1dFNpZ25hbDxQcm9kdWN0RFRPW10+ID0gaW5wdXQ8UHJvZHVjdERUT1tdPihbXSk7XG4gIHByb2R1Y3RzJDogT2JzZXJ2YWJsZTxQcm9kdWN0RFRPW10+ID0gdG9PYnNlcnZhYmxlKHRoaXMucHJvZHVjdHMpO1xuXG4gIHRvdGFsU2FsZXNUYXhlczogSW5wdXRTaWduYWw8bnVtYmVyPiA9IGlucHV0PG51bWJlcj4oMCk7XG5cbiAgdG90YWxTaGVsZlByaWNlOiBJbnB1dFNpZ25hbDxudW1iZXI+ID0gaW5wdXQ8bnVtYmVyPigwKTtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgUHJvZHVjdERUTyA9IFByb2R1Y3REVE87XG59XG4iLCI8dGFibGUgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cInByb2R1Y3RzJFwiID5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ0aXRsZVwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFRpdGxlIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnRpdGxlfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzaGVsZlByaWNlXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gU2hlbGYgUHJpY2UgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuc2hlbGZQcmljZX19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG48L3RhYmxlPlxuPG1hdC1saXN0PlxuICA8bWF0LWxpc3QtaXRlbSBkYXRhLXRlc3Q9XCJ0b3RhbFNhbGVzVGF4ZXNcIj5TYWxlIHRheGVzOiB7eyB0b3RhbFNhbGVzVGF4ZXMoKSB9fTwvbWF0LWxpc3QtaXRlbT5cbiAgPG1hdC1saXN0LWl0ZW0gZGF0YS10ZXN0PVwidG90YWxTaGVsZlByaWNlXCI+VG90YWw6IHt7IHRvdGFsU2hlbGZQcmljZSgpIH19PC9tYXQtbGlzdC1pdGVtPlxuPC9tYXQtbGlzdD5cbiJdfQ==