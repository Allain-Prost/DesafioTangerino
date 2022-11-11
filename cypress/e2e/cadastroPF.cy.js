/// <reference types="Cypress" />

import loc from "../support/locators/locators"
import dadosPF from "../fixtures/dadosPF.json"

describe('CadastroPF', () => {
    context('Cadastro PF com falha', () => {

        it('Deve verificar se o primeiro nome é obrigatório', () => {
            cy.AcessarTelaDeCadastro()
            cy.PreencherSobreNome(dadosPF.sobreNome)
            cy.PreencherEmail(dadosPF.email)
            cy.PreencherSexo(dadosPF.sexo)
            cy.PreencherDocumento(dadosPF.documento)
            cy.PreencherDataNascimento(dadosPF.nascimento.dia, dadosPF.nascimento.mes, dadosPF.nascimento.ano)
            cy.PreencherSenha(dadosPF.senha, dadosPF.confirmandoSenha)
            cy.CriarConta()

            //Primeira assertiva para garantir que a mensagem de erro está sendo exibida
            cy.get('.parsley-required')
                .contains('Campo obrigatório')
                .should('contain', 'Campo obrigatório')

            //Segunda assertiva para garantir que o usuário permanece na tela de cadastro
            cy.get(loc.form_Cadastro.btn_criarConta)
                .should('contain', 'Criar Conta')
        })

        it('Deve verificar se o sobrenome é obrigatório', () => {

            cy.AcessarTelaDeCadastro()
            cy.PreencherNome(dadosPF.primeiroNome)
            cy.PreencherEmail(dadosPF.email)
            cy.PreencherSexo(dadosPF.sexo)
            cy.PreencherDocumento(dadosPF.documento)
            cy.PreencherDataNascimento(dadosPF.nascimento.dia, dadosPF.nascimento.mes, dadosPF.nascimento.ano)
            cy.PreencherSenha(dadosPF.senha, dadosPF.confirmandoSenha)
            cy.CriarConta()

            //Primeira assertiva para garantir que a mensagem de erro está sendo exibida
            cy.get(loc.mensagemCampoObrigatorio)
                .contains('Campo obrigatório')
                .should('contain', 'Campo obrigatório')

            //Segunda assertiva para garantir que o usuário permanece na tela de cadastro
            cy.get(loc.form_Cadastro.btn_criarConta)
                .should('contain', 'Criar Conta')
        })

    })

})