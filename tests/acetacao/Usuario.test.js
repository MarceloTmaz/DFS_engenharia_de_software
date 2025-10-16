const { Builder, By, Key,until  } = require("selenium-webdriver");
const path = require("path");
const axios = require("axios");



describe( "testar aceitação das usuario", ()=>{

     it('deve permitir o login', async()=>{
        let driver = await new Builder().forBrowser('chrome').build();

        await driver.get('http://localhost:3000/usuario/login')

        await driver.findElement(By.id('email')).sendKeys('Jose@gmail.com')
        await driver.findElement(By.id('senha')).sendKeys('zezinho')
        await driver.findElement(By.id('login')).click();

        await driver.wait(until.elementLocated(By.id('emailusuario')), 10000);

        let titulo = await driver.findElement(By.id('emailusuario'));
      
        expect(await titulo.getText()).toEqual('Jose@gmail.com');
    },90000)

    it('não deve permiir o login', async()=>{

       let driver = await new Builder().forBrowser('chrome').build();

        await driver.get('http://localhost:3000/usuario/login')

        await driver.findElement(By.id('email')).sendKeys('batata@gmail.com')
        await driver.findElement(By.id('senha')).sendKeys('batatinha@123')
        await driver.findElement(By.id('login')).click();

        await driver.wait(until.elementLocated(By.id('loginTexto')), 10000);

        let titulo = await driver.findElement(By.id('loginTexto'));
      
        expect(await titulo.getText()).toEqual('Por favor, insira seus dados:');
    },90000)

})