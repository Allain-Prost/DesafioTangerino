// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import loc from '../support/locators/locators'

Cypress.Commands.add('AcessarTelaDeCadastro', () => {    
  cy.visit(loc.BASE_URL);
  cy.get(loc.btn_login).click()

  cy.intercept('GET','https://securepubads.g.doubleclick.net/static/topics/topics_frame.html').as('esperaTelaLogin')
  cy.wait('@esperaTelaLogin')

  cy.get(loc.btn_formLoginCadastro)
    .contains('Quero me cadastrar')
    .click();
})

Cypress.Commands.add('PreencherNome', (nome) => {
  cy.get(loc.form_Cadastro.primeiroNome).type(nome)
})

Cypress.Commands.add('PreencherSobreNome', (sobreNome) => {
  cy.get(loc.form_Cadastro.sobreNome).type(sobreNome)
})

Cypress.Commands.add('PreencherEmail', (email) => {
  cy.get(loc.form_Cadastro.email).type(email)
})

Cypress.Commands.add('PreencherSexo', (sexo) => {
  cy.get(loc.form_Cadastro.genero).select(sexo)
})

Cypress.Commands.add('PreencherDocumento', (documento) => {
  cy.get(loc.form_Cadastro.documento).type(documento)
})

Cypress.Commands.add('CriarConta', () => {
  cy.get(loc.form_Cadastro.btn_criarConta).click()
})


Cypress.Commands.add('PreencherDataNascimento', (dia, mes, ano) => {
  //data de nascimento 
  cy.get(loc.form_Cadastro.dataDeNascimento.dia).select(dia)
  cy.get(loc.form_Cadastro.dataDeNascimento.mes).select(mes)
  cy.get(loc.form_Cadastro.dataDeNascimento.ano).select(ano)
})

Cypress.Commands.add('PreencherSenha', (senha, confimacaoSenha) => {
  cy.get(loc.form_Cadastro.senha).type(senha)
  cy.get(loc.form_Cadastro.confimacaoSenha).type(confimacaoSenha)
})