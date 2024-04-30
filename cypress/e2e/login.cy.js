describe('Проверка авторизации', function () {

   it('Позитивный кейс авторизации', function () {
        cy.visit('login.qa.studio');                              //заходим на сайт
        cy.get('#mail').type('german@dolnikov.ru');               //Вводим логин
        cy.get('#pass').type('iLoveqastudio1').type('{enter}');   //Вводим пароль и нажимаем ввод
        cy.get('#messageHeader').should('be.visible');            //Проверяем видимость
        cy.get('#messageHeader').contains('Авторизация прошла успешно') //Проверяем текст
        cy.get('#exitMessageButton').should('be.visible');        //Проверка наличия крестика
    })

   it('Проверка логики восстановления пароля', function () {
        cy.visit('login.qa.studio');                              //заходим на сайт
        cy.get('#forgotEmailButton').click();                     //Нажать «Забыли пароль»
        cy.get('#mailForgot').type('test@test.com')               //Ввести любой имейл
        cy.get('#restoreEmailButton').click();                    //Нажать кнопку отправить код
        cy.get('#messageHeader').should('be.visible');            //Проверяем видимость
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail') //Проверяем текст
        cy.get('#exitMessageButton').should('be.visible');        //Проверка наличия крестика
    })  

   it('Негативный кейс авторизации1', function () {
        cy.visit('login.qa.studio');                              //заходим на сайт
        cy.get('#mail').type('german@dolnikov.ru');               //Вводим логин
        cy.get('#pass').type('iLoveqastudio33').type('{enter}');   //Вводим неправильный пароль и нажимаем ввод      
        cy.get('#messageHeader').should('be.visible');            //Проверяем видимость
        cy.get('#messageHeader').contains('Такого логина или пароля нет') //Проверяем текст
        cy.get('#exitMessageButton').should('be.visible');        //Проверка наличия крестика
    })    

   it('Негативный кейс авторизации2', function () {
        cy.visit('login.qa.studio');                              //заходим на сайт
        cy.get('#mail').type('test@test.com');               //Вводим неправильный логин
        cy.get('#pass').type('iLoveqastudio1').type('{enter}');   //Вводим пароль и нажимаем ввод      
        cy.get('#messageHeader').should('be.visible');            //Проверяем видимость
        cy.get('#messageHeader').contains('Такого логина или пароля нет') //Проверяем текст
        cy.get('#exitMessageButton').should('be.visible');        //Проверка наличия крестика
    })   

   it('Негативный кейс валидации', function () {
        cy.visit('login.qa.studio');                              //заходим на сайт
        cy.get('#mail').type('germandolnikov.ru');               //Вводим логин без @
        cy.get('#pass').type('iLoveqastudio1').type('{enter}');   //Вводим неправильный пароль и нажимаем ввод      
        cy.get('#messageHeader').should('be.visible');            //Проверяем видимость
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации') //Проверяем текст
        cy.get('#exitMessageButton').should('be.visible');        //Проверка наличия крестика
    })     

   it('Проверку на приведение к строчным буквам в логине', function () {
        cy.visit('login.qa.studio');                              //заходим на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru');               //Вводим логи
        cy.get('#pass').type('iLoveqastudio1').type('{enter}');   //Вводим пароль и нажимаем ввод
        cy.get('#messageHeader').should('be.visible');            //Проверяем видимость
        cy.get('#messageHeader').contains('Авторизация прошла успешно') //Проверяем текст
        cy.get('#exitMessageButton').should('be.visible');        //Проверка наличия крестика
    })     
})


