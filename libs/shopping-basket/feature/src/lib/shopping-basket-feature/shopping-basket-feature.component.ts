import { ChangeDetectionStrategy, Component, inject, NO_ERRORS_SCHEMA, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingBasketDataAccessModule, ShoppingBasketStore } from '@sale-taxes-fe/shopping-basket-data-access';
import { ShoppingBasketUiComponent } from '@sale-taxes-fe/shopping-basket-ui';
import { ProductDTO } from '@sale-taxes-fe/api';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'shopping-basket-feature',
  standalone: true,
  imports: [CommonModule, ShoppingBasketDataAccessModule, ShoppingBasketUiComponent, MatButton],
  templateUrl: './shopping-basket-feature.component.html',
  styleUrl: './shopping-basket-feature.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoppingBasketFeatureComponent {

  shoppingBasketStore = inject(ShoppingBasketStore);

  products: Signal<ProductDTO[]> = this.shoppingBasketStore.products
  totalShelfPrice: Signal<number> = this.shoppingBasketStore.totalShelfPrice
  totalSalesTaxes: Signal<number> = this.shoppingBasketStore.totalSalesTaxes

  getShoppingBasket(id: number) {
    this.shoppingBasketStore.getShoppingBasket(id);
  }
}
