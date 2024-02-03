import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ShoppingBasketStore } from './shopping-basket-store';
import * as i0 from "@angular/core";
export class ShoppingBasketDataAccessModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('ShoppingBasketDataAccessModule is already loaded');
        }
    }
    static { this.ɵfac = function ShoppingBasketDataAccessModule_Factory(t) { return new (t || ShoppingBasketDataAccessModule)(i0.ɵɵinject(ShoppingBasketDataAccessModule, 12)); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ShoppingBasketDataAccessModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [ShoppingBasketStore], imports: [CommonModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ShoppingBasketDataAccessModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule
                ],
                providers: [ShoppingBasketStore]
            }]
    }], () => [{ type: ShoppingBasketDataAccessModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }], null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ShoppingBasketDataAccessModule, { imports: [CommonModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvcHBpbmctYmFza2V0LWRhdGEtYWNjZXNzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2xpYnMvc2hvcHBpbmctYmFza2V0L2RhdGEtYWNjZXNzL3NyYy9saWIvc2hvcHBpbmctYmFza2V0LWRhdGEtYWNjZXNzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQVE5RCxNQUFNLE9BQU8sOEJBQThCO0lBQ3pDLFlBQW9DLFlBQTZDO1FBQy9FLElBQUksWUFBWSxFQUFFLENBQUM7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7SUFDSCxDQUFDOytGQUxVLDhCQUE4QjttRUFBOUIsOEJBQThCO3dFQUY5QixDQUFDLG1CQUFtQixDQUFDLFlBRjlCLFlBQVk7O2lGQUlILDhCQUE4QjtjQU4xQyxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7YUFDakM7O3NCQUVjLFFBQVE7O3NCQUFJLFFBQVE7O3dGQUR0Qiw4QkFBOEIsY0FKdkMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaG9wcGluZ0Jhc2tldFN0b3JlIH0gZnJvbSAnLi9zaG9wcGluZy1iYXNrZXQtc3RvcmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1Nob3BwaW5nQmFza2V0U3RvcmVdXG59KVxuZXhwb3J0IGNsYXNzIFNob3BwaW5nQmFza2V0RGF0YUFjY2Vzc01vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZT86IFNob3BwaW5nQmFza2V0RGF0YUFjY2Vzc01vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignU2hvcHBpbmdCYXNrZXREYXRhQWNjZXNzTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkJyk7XG4gICAgfVxuICB9XG59XG4iXX0=