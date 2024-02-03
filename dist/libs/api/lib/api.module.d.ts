import { ModuleWithProviders } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export declare class ApiModule {
    static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<ApiModule>;
    constructor(parentModule: ApiModule, http: HttpClient);
    static ɵfac: i0.ɵɵFactoryDeclaration<ApiModule, [{ optional: true; skipSelf: true; }, { optional: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ApiModule, never, [typeof i1.HttpClientModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ApiModule>;
}
