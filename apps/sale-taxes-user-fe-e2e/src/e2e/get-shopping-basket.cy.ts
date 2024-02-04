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
    }).as('getBasketRequest1');

    cy.intercept('GET', '/api/basket/2', {
      'shoppingBasketId': 2,
      'products': [
        {
          'id': 4,
          'productType': 'FOOD',
          'title': 'imported box of chocolates',
          'price': 10.0,
          'shelfPrice': 10.5
        },
        {
          'id': 5,
          'productType': 'PERFUME',
          'title': 'imported bottle of perfume',
          'price': 47.5,
          'shelfPrice': 54.65
        }
      ]
    }).as('getBasketRequest2');

    cy.intercept('GET', '/api/basket/3', {
      'shoppingBasketId': 3,
      'products': [
        {
          'id': 6,
          'productType': 'PERFUME',
          'title': 'imported bottle of perfume',
          'price': 27.99,
          'shelfPrice': 32.2
        },
        {
          'id': 7,
          'productType': 'PERFUME',
          'title': 'bottle of perfume',
          'price': 18.99,
          'shelfPrice': 20.9
        },
        {
          'id': 8,
          'productType': 'MEDICINE',
          'title': 'packet of headache pills',
          'price': 9.75,
          'shelfPrice': 9.75
        },
        {
          'id': 9,
          'productType': 'FOOD',
          'title': 'box of imported chocolates',
          'price': 11.25,
          'shelfPrice': 11.85
        }
      ]
    }).as('getBasketRequest3');

    // Mock out be error request
    cy.intercept('GET', '/api/basket/4', (req) => {
      req.reply({ statusCode: 404 });
    }).as('getBasketRequest4');
  });

  it('should prove that header is working correctly', () => {
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
    cy.wait('@getBasketRequest1');
    cy.getBySel('getShoppingBasketError').should('not.exist');

    cy.get('th').should('include.text', 'Title').and('include.text', 'Shelf Price');

    cy.log('check total totalSalesTaxes and totalShelfPrice calculation logic for getBasketRequest1');
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

  it('should check calculation logics for getBasketRequest2 and getBasketRequest3', () => {
    cy.visit('/shopping-basket');
    cy.getBySel('getShoppingBasket2').click();
    cy.wait('@getBasketRequest2');

    cy.getBySel('totalSalesTaxes').should('include.text', '7.65');
    cy.getBySel('totalShelfPrice').should('include.text', '65.15');

    cy.getBySel('getShoppingBasket3').click();
    cy.wait('@getBasketRequest3');

    cy.getBySel('totalSalesTaxes').should('include.text', '6.72');
    cy.getBySel('totalShelfPrice').should('include.text', '74.7');
  });

  it('should check the error scenario with invalid id', () => {
    cy.visit('/shopping-basket');
    cy.getBySel('getShoppingBasketError').should('not.exist');
    cy.getBySel('getShoppingBasket4').click();
    cy.wait('@getBasketRequest4');
    cy.getBySel('getShoppingBasketError').should('include.text', 'Error, could not get shopping basket.');

    cy.log('After error case it should still work correctly and clear error');
    cy.getBySel('getShoppingBasket1').click();
    cy.wait('@getBasketRequest1');
    cy.getBySel('getShoppingBasketError').should('not.exist');
  });
});
