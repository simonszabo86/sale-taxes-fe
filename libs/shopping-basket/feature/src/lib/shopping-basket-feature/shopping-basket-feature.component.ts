import { ChangeDetectionStrategy, Component, inject, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingBasketDataAccessModule, ShoppingBasketStore, CallState } from '@sale-taxes-fe/shopping-basket-data-access';
import { ShoppingBasketUiComponent } from '@sale-taxes-fe/shopping-basket-ui';
import { ProductDTO } from '@sale-taxes-fe/api';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'shopping-basket-feature',
  standalone: true,
  imports: [CommonModule, ShoppingBasketDataAccessModule, ShoppingBasketUiComponent, MatButton, MatProgressSpinner],
  templateUrl: './shopping-basket-feature.component.html',
  styleUrl: './shopping-basket-feature.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingBasketFeatureComponent {

  shoppingBasketStore = inject(ShoppingBasketStore);

  ids = [1,2,3,4];

  CallState = CallState;

  products: Signal<ProductDTO[]> = this.shoppingBasketStore.products
  totalShelfPrice: Signal<number> = this.shoppingBasketStore.totalShelfPrice
  totalSalesTaxes: Signal<number> = this.shoppingBasketStore.totalSalesTaxes
  callState: Signal<CallState> = this.shoppingBasketStore.callState

  getShoppingBasket(id: number) {
    this.shoppingBasketStore.getShoppingBasket(id);
  }
}
