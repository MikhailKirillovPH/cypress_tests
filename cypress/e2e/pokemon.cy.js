describe('Автотест для покемонов', function () {

   it('Покупку нового аватара', function () {
        cy.visit('https://pokemonbattle.me');                              //заходим на сайт
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');   //Вводим почту
        cy.get('#password').type('USER_PASSWORD').type('{enter}');   //Вводим пароль и нажимаем ввод
        cy.get('.header__btns > [href="/shop"]').click();          //Переходим в магазин
        cy.get('.available > button').first().click();                     //Клик по активной кнопке
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');  //вводим данные
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1227');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Miska').type('{enter}');
        cy.get('#cardnumber').type('56456');
        cy.get('.payment__submit-button').click();
        cy.get('.payment__font-for-success').should('be.visible');            //Проверяем видимость
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); //Проверяем текст

    })
    
})


