import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ShoppingBasketStore } from './shopping-basket-store';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [ShoppingBasketStore]
})
export class ShoppingBasketDataAccessModule {
  constructor(@Optional() @SkipSelf() parentModule?: ShoppingBasketDataAccessModule) {
    if (parentModule) {
      throw new Error('ShoppingBasketDataAccessModule is already loaded');
    }
  }
}
