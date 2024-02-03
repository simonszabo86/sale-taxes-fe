import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDTO } from '@sale-taxes-fe/api';
import { MatTableModule } from '@angular/material/table';
import { toObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'shopping-basket-ui',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatListItem, MatList],
  templateUrl: './shopping-basket-ui.component.html',
  styleUrl: './shopping-basket-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingBasketUiComponent {

  displayedColumns: string[] = ['title', 'shelfPrice'];

  products: InputSignal<ProductDTO[]> = input<ProductDTO[]>([]);
  products$: Observable<ProductDTO[]> = toObservable(this.products);

  totalSalesTaxes: InputSignal<number> = input<number>(0);

  totalShelfPrice: InputSignal<number> = input<number>(0);

  protected readonly ProductDTO = ProductDTO;
}
