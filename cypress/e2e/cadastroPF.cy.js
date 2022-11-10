/// <reference types="Cypress" />

import loc from "../support/locators/locators"

describe('CadastroPF', () => {

  context('Cadastro PF com falha', () => {

    it('Deve verificar se o primeiro nome é obrigatório', () => {
        
      cy.visit(loc.BASE_URL);
      cy.get(loc.btn_login).click()

      cy.intercept('GET','https://securepubads.g.doubleclick.net/static/topics/topics_frame.html').as('esperaTelaLogin')
      cy.wait('@esperaTelaLogin')

      cy.get(loc.btn_formLoginCadastro)
        .contains('Quero me cadastrar')
        .click();
      
      //form
      //cy.get(loc.form_Cadastro.primeiroNome).type('')
      cy.get(loc.form_Cadastro.ultimoNome).type('Tangerino')
      cy.get(loc.form_Cadastro.email).type('tangerino@testegmail.com')
      cy.get(loc.form_Cadastro.genero).select('male')
      cy.get(loc.form_Cadastro.documento).type('572.552.080-37')

      //data de nascimento 
      cy.get(loc.form_Cadastro.dataDeNascimento.dia).select('20')
      cy.get(loc.form_Cadastro.dataDeNascimento.mes).select('08')
      cy.get(loc.form_Cadastro.dataDeNascimento.ano).select('1990')

      cy.get(loc.form_Cadastro.senha).type('tangerino123')
      cy.get(loc.form_Cadastro.confimacaoSenha).type('tangerino123')
      cy.get(loc.form_Cadastro.btn_criarConta).click()

      //Primeira assertiva para garantir que a mensagem de erro está sendo exibida
      cy.get('.parsley-required')
        .contains('Campo obrigatório')
        .should('contain', 'Campo obrigatório')

      //Segunda assertiva para garantir que o usuário permanece na tela de cadastro
      cy.get(loc.form_Cadastro.btn_criarConta)
        .should('contain','Criar Conta')
    })

    it('Deve verificar se o sobrenome é obrigatório', () => {
        
      cy.visit(loc.BASE_URL);
      cy.get(loc.btn_login).click()

      cy.intercept('GET','https://securepubads.g.doubleclick.net/static/topics/topics_frame.html').as('esperaTelaLogin')
      cy.wait('@esperaTelaLogin')

      cy.get(loc.btn_formLoginCadastro)
        .contains('Quero me cadastrar')
        .click();
      
      //form
      cy.get(loc.form_Cadastro.primeiroNome).type('Teste')
      //cy.get(loc.form_Cadastro.ultimoNome).type('Tangerino')
      cy.get(loc.form_Cadastro.email).type('tangerino@testegmail.com')
      cy.get(loc.form_Cadastro.genero).select('male')
      cy.get(loc.form_Cadastro.documento).type('572.552.080-37')

      //data de nascimento 
      cy.get(loc.form_Cadastro.dataDeNascimento.dia).select('20')
      cy.get(loc.form_Cadastro.dataDeNascimento.mes).select('08')
      cy.get(loc.form_Cadastro.dataDeNascimento.ano).select('1990')

      cy.get(loc.form_Cadastro.senha).type('tangerino123')
      cy.get(loc.form_Cadastro.confimacaoSenha).type('tangerino123')
      cy.get(loc.form_Cadastro.btn_criarConta).click()

      //Primeira assertiva para garantir que a mensagem de erro está sendo exibida
      cy.get('.parsley-required')
        .contains('Campo obrigatório')
        .should('contain', 'Campo obrigatório')

      //Segunda assertiva para garantir que o usuário permanece na tela de cadastro
      cy.get(loc.form_Cadastro.btn_criarConta)
        .should('contain','Criar Conta')
    })

  })

})