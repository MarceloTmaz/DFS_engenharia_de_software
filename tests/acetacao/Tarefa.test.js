const { Builder, By, Key , until} = require("selenium-webdriver");
const path = require("path");
const axios = require("axios");



describe( "testar aceitação das tarefas", ()=>{

    it('deve permitir a troca de status', async()=>{
        let driver = await new Builder().forBrowser('chrome').build();

        await driver.get('http://localhost:3000/tarefa/listar')

        await driver.findElement(By.id('trocar1')).click();
        
        await driver.wait(until.elementLocated(By.id('concluido1')), 10000);

        let status=await driver.findElement(By.id("concluido1"))

        expect(await status.getText()).toEqual('Concluido.')
    },90000)

    it('deve permiir a criação de uma tarera', async()=>{

        let driver = await new Builder().forBrowser('chrome').build();

        await driver.get('http://localhost:3000/tarefa/criar')

        await driver.findElement(By.id('titulo')).sendKeys('Rodar a aplicação')
        await driver.findElement(By.id('descricao')).sendKeys('Execultar a aplicação em um sistema mac e torcer para não resultar em nenhum bug')
        await driver.findElement(By.id('esforco')).sendKeys('1')
        await driver.findElement(By.id('criar')).click();

        await driver.wait(until.elementLocated(By.id('titulo3')), 10000);

        let titulo = await driver.findElement(By.id('titulo3'));
        let descricao = await driver.findElement(By.id('descricao3'));
        let esforco= await driver.findElement(By.id('Rodar a aplicação3'))

        expect(await titulo.getText()).toEqual('Rodar a aplicação');
        expect(await descricao.getText()).toEqual('Execultar a aplicação em um sistema mac e torcer para não resultar em nenhum bug');
        expect(await esforco.getText()).toEqual('1');
    })

})