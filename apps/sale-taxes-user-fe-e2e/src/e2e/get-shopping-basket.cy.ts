describe('sale-taxes-user-fe get a shopping basket by id scenario', () => {
  beforeEach(() => {
    cy.visit('');
    // Mock out be request
    cy.intercept('GET', '/api/basket/1', {
      'shoppingBasketId': 1,
      'products': [
        {
          'id': 1,
          'productType': 'BOOK',
          'title': 'book',
          'price': 12.49,
          'shelfPrice': 12.49
        },
        {
          'id': 2,
          'productType': 'ENTERTAINMENT',
          'title': 'music CD',
          'price': 14.99,
          'shelfPrice': 16.5
        },
        {
          'id': 3,
          'productType': 'FOOD',
          'title': 'chocolate bar',
          'price': 0.85,
          'shelfPrice': 0.85
        }
      ]
    }).as('getBasket');

    // Mock out be error request
    cy.intercept('GET', '/api/basket/4', (req) => {
      req.reply({statusCode: 404})
    }).as('getBasketWithError');
  });

  it('should prove that header is working correctly', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.get('layout-header')
      .should('contain', 'Sales Taxes')
      .and('contain', 'Shopping basket');

    cy.log('Navigation should work correctly');
    cy.getBySel('gotToShoppingBasket').click();
    cy.url().should('include', '/shopping-basket');
  });

  it('should check that shopping-basket-feature and shopping-basket-ui are working together correctly', () => {
    cy.visit('/shopping-basket');

    cy.get('shopping-basket-feature').find('button').should('have.length', 4);

    cy.getBySel('getShoppingBasket1').should('include.text', 'Get shopping Basket 1');

    cy.log('Data should be represented correctly after get getBasket1');

    cy.getBySel('getShoppingBasket1').click();
    cy.wait('@getBasket');
    cy.getBySel('getShoppingBasketError').should('not.exist');

    cy.get('th').should('include.text', 'Title').and('include.text', 'Shelf Price');
    cy.getBySel('totalSalesTaxes').should('include.text', '1.51');
    cy.getBySel('totalShelfPrice').should('include.text', '29.84');

    cy.log('Data Table should be presented correctly');
    cy.get('table')
      .should('include.text', 'book')
      .and('include.text', '12.49')
      .and('include.text', 'music CD')
      .and('include.text', '16.5')
      .and('include.text', 'chocolate bar')
      .and('include.text', '0.85');
  });

  it('should check the error scenario with invalid id', () => {
    cy.visit('/shopping-basket');
    cy.getBySel('getShoppingBasketError').should('not.exist');
    cy.getBySel('getShoppingBasket4').click();
    cy.wait('@getBasketWithError');
    cy.getBySel('getShoppingBasketError').should('include.text', 'Error, could not get shopping basket.');

    cy.log('After error case it should still work correctly and clear error')
    cy.getBySel('getShoppingBasket1').click();
    cy.wait('@getBasket');
    cy.getBySel('getShoppingBasketError').should('not.exist');
  });


});
