import { ShoppingBasketUiComponent } from './shopping-basket-ui.component';
import { input } from '@angular/core';
import { ProductDTO } from '@sale-taxes-fe/api';

describe(ShoppingBasketUiComponent.name, () => {

  it('should check the initial setup without inputs', () => {
    cy.mount(ShoppingBasketUiComponent);
    cy.get('table').should('exist');
    cy.getBySel('totalSalesTaxes')
      .should('contain.text', 'Sale taxes:')
      .and('contain.text', '0');

    cy.getBySel('totalShelfPrice')
      .should('contain.text', 'Total:')
      .and('contain.text', '0');
  });

  it('should check the component inputs are represented correctly', () => {
    cy.mount(ShoppingBasketUiComponent, {
      componentProperties: {
        totalSalesTaxes: input<number>(1.5),
        totalShelfPrice: input<number>(20),
        products: input<ProductDTO[]>([
          {
            id: 10,
            productType: ProductDTO.ProductTypeEnum.Food,
            title: 'Some food title',
            price: 18.5,
            shelfPrice: 20
          }
        ])
      }
    });

    cy.get('table')
      .should('include.text', 'Title')
      .should('include.text', 'Shelf Price')
      .should('include.text', 'Some food title')
      .and('include.text', '20');

    cy.getBySel('totalSalesTaxes')
      .should('contain.text', '1.5');

    cy.getBySel('totalShelfPrice')
      .should('contain.text', '20');
  });
});
