describe('Test_Case_Login_Description_saucedemo | 1941720015 - Erika Amalia', () => {
    it('Test_Case_1', () => {
        cy.visit('/');
        cy.get('#user-name').type("standard_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('.inventory_item_img:eq(0)').find('img').should('have.attr', 'src').should('include', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    })
    it('Test_Case_2', () => {
        cy.visit('/');
        cy.get('#user-name').type("problem_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('.inventory_item_img:eq(0)').find('img').should('have.attr', 'src').should('include', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    })
    it('Test_Case_3', () => {
        cy.visit('/');
        cy.get('#user-name').type("locked_out_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('.inventory_item_img:eq(0)').find('img').should('have.attr', 'src').should('include', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    })
    it('Test_Case_4', () => {
        cy.visit('/');
        cy.get('#user-name').type("performance_glitch_user");
        cy.get('#password').type("secret_sauce");
        cy.get('#login-button').click();
        cy.get('.inventory_item_img:eq(0)').find('img').should('have.attr', 'src').should('include', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    })
    it('Test_Case_5', () => {
        cy.visit('/');
        cy.get('#user-name').type("admin");
        cy.get('#password').type("admin");
        cy.get('#login-button').click();
        cy.get('form').find('h3').should('have,text', 'Epic sadface: Username and password do not match any user in this service');
    })
})