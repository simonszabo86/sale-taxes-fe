import { NgModule, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductControllerService } from './api/product-controller.service';
import { ShoppingBasketControllerService } from './api/shopping-basket-controller.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ApiModule {
    static forRoot(configurationFactory) {
        return {
            ngModule: ApiModule,
            providers: [{ provide: Configuration, useFactory: configurationFactory }]
        };
    }
    constructor(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    static { this.ɵfac = function ApiModule_Factory(t) { return new (t || ApiModule)(i0.ɵɵinject(ApiModule, 12), i0.ɵɵinject(i1.HttpClient, 8)); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ApiModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            ProductControllerService,
            ShoppingBasketControllerService
        ], imports: [HttpClientModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApiModule, [{
        type: NgModule,
        args: [{
                imports: [HttpClientModule],
                declarations: [],
                exports: [],
                providers: [
                    ProductControllerService,
                    ShoppingBasketControllerService
                ]
            }]
    }], () => [{ type: ApiModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }, { type: i1.HttpClient, decorators: [{
                type: Optional
            }] }], null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ApiModule, { imports: [HttpClientModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2xpYnMvYXBpL3NyYy9saWIvYXBpLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFcEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDNUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sMENBQTBDLENBQUM7OztBQVUzRixNQUFNLE9BQU8sU0FBUztJQUNYLE1BQU0sQ0FBQyxPQUFPLENBQUMsb0JBQXlDO1FBQzNELE9BQU87WUFDSCxRQUFRLEVBQUUsU0FBUztZQUNuQixTQUFTLEVBQUUsQ0FBRSxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsVUFBVSxFQUFFLG9CQUFvQixFQUFFLENBQUU7U0FDOUUsQ0FBQztJQUNOLENBQUM7SUFFRCxZQUFxQyxZQUF1QixFQUNuQyxJQUFnQjtRQUNyQyxJQUFJLFlBQVksRUFBRSxDQUFDO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDO1FBQ3hGLENBQUM7UUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDUixNQUFNLElBQUksS0FBSyxDQUFDLCtEQUErRDtnQkFDL0UsMERBQTBELENBQUMsQ0FBQztRQUNoRSxDQUFDO0lBQ0wsQ0FBQzswRUFqQlEsU0FBUzttRUFBVCxTQUFTO3dFQUpUO1lBQ1Qsd0JBQXdCO1lBQ3hCLCtCQUErQjtTQUFFLFlBTHBCLGdCQUFnQjs7aUZBT3BCLFNBQVM7Y0FSckIsUUFBUTtlQUFDO2dCQUNSLE9BQU8sRUFBTyxDQUFDLGdCQUFnQixDQUFDO2dCQUNoQyxZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFPLEVBQUU7Z0JBQ2hCLFNBQVMsRUFBRTtvQkFDVCx3QkFBd0I7b0JBQ3hCLCtCQUErQjtpQkFBRTthQUNwQzs7c0JBU2lCLFFBQVE7O3NCQUFJLFFBQVE7O3NCQUNwQixRQUFROzt3RkFUYixTQUFTLGNBUEwsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMsIFNraXBTZWxmLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiB9IGZyb20gJy4vY29uZmlndXJhdGlvbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBQcm9kdWN0Q29udHJvbGxlclNlcnZpY2UgfSBmcm9tICcuL2FwaS9wcm9kdWN0LWNvbnRyb2xsZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTaG9wcGluZ0Jhc2tldENvbnRyb2xsZXJTZXJ2aWNlIH0gZnJvbSAnLi9hcGkvc2hvcHBpbmctYmFza2V0LWNvbnRyb2xsZXIuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6ICAgICAgW0h0dHBDbGllbnRNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxuICBleHBvcnRzOiAgICAgIFtdLFxuICBwcm92aWRlcnM6IFtcbiAgICBQcm9kdWN0Q29udHJvbGxlclNlcnZpY2UsXG4gICAgU2hvcHBpbmdCYXNrZXRDb250cm9sbGVyU2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIEFwaU1vZHVsZSB7XG4gICAgcHVibGljIHN0YXRpYyBmb3JSb290KGNvbmZpZ3VyYXRpb25GYWN0b3J5OiAoKSA9PiBDb25maWd1cmF0aW9uKTogTW9kdWxlV2l0aFByb3ZpZGVyczxBcGlNb2R1bGU+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5nTW9kdWxlOiBBcGlNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFsgeyBwcm92aWRlOiBDb25maWd1cmF0aW9uLCB1c2VGYWN0b3J5OiBjb25maWd1cmF0aW9uRmFjdG9yeSB9IF1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciggQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBBcGlNb2R1bGUsXG4gICAgICAgICAgICAgICAgIEBPcHRpb25hbCgpIGh0dHA6IEh0dHBDbGllbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcGlNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpbiB5b3VyIGJhc2UgQXBwTW9kdWxlIG9ubHkuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFodHRwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBuZWVkIHRvIGltcG9ydCB0aGUgSHR0cENsaWVudE1vZHVsZSBpbiB5b3VyIEFwcE1vZHVsZSEgXFxuJyArXG4gICAgICAgICAgICAnU2VlIGFsc28gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMjA1NzUnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==