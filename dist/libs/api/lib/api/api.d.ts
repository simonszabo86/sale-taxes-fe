export * from './product-controller.service';
import { ProductControllerService } from './product-controller.service';
export * from './product-controller.serviceInterface';
export * from './shopping-basket-controller.service';
import { ShoppingBasketControllerService } from './shopping-basket-controller.service';
export * from './shopping-basket-controller.serviceInterface';
export declare const APIS: (typeof ProductControllerService | typeof ShoppingBasketControllerService)[];
