import { HttpClient, HttpHeaders, HttpResponse, HttpEvent, HttpParameterCodec, HttpContext } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetShoppingBasketResponse } from '../model/get-shopping-basket-response';
import { Configuration } from '../configuration';
import { ShoppingBasketControllerServiceInterface } from './shopping-basket-controller.serviceInterface';
import * as i0 from "@angular/core";
export declare class ShoppingBasketControllerService implements ShoppingBasketControllerServiceInterface {
    protected httpClient: HttpClient;
    protected basePath: string;
    defaultHeaders: HttpHeaders;
    configuration: Configuration;
    encoder: HttpParameterCodec;
    constructor(httpClient: HttpClient, basePath: string | string[], configuration: Configuration);
    private addToHttpParams;
    private addToHttpParamsRecursive;
    /**
     * @param id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    getShoppingBasket(id: number, observe?: 'body', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<GetShoppingBasketResponse>;
    getShoppingBasket(id: number, observe?: 'response', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpResponse<GetShoppingBasketResponse>>;
    getShoppingBasket(id: number, observe?: 'events', reportProgress?: boolean, options?: {
        httpHeaderAccept?: 'application/json';
        context?: HttpContext;
    }): Observable<HttpEvent<GetShoppingBasketResponse>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ShoppingBasketControllerService, [null, { optional: true; }, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ShoppingBasketControllerService>;
}
