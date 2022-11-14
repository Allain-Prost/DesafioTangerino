/// <reference types="Cypress" />

import PJ from "../support/geradorDePessoa/geradorDePJ"
import dadosPJ from "../fixtures/dadosPJ.json"
import loc from "../support/locators/locators"

describe('CadastroPJ', () => {
    //912813941306 insc repetida

    context('Fluxo básico', () => {
        it('Deve realizar o cadastro com sucesso', () => {
            cy.AcessarTelaDeCadastro()
            
            cy.PreencherTipoPessoa(PJ.tipoPessoa)
            cy.PreencherNome(PJ.razaoSocial)
            cy.PreencherInscricaoEst(PJ.inscricaoEstadual)
            cy.PreencherEmail(PJ.email)
            cy.PreencherDocumento(PJ.cnpj)
            cy.PreencherSenha(PJ.senha)
            cy.ConfirmarSenha(PJ.confirmandoSenha)
            
            cy.CriarConta()

            cy.VerificarCadastroComSucesso(PJ.razaoSocial)

        })
    })

    context('Fluxo de exceção', () => {

        it('Deve verificar se razão social é obrigatório', () => {
            cy.AcessarTelaDeCadastro()
            
            cy.PreencherTipoPessoa(dadosPJ.tipoPessoa)
            cy.PreencherInscricaoEst(dadosPJ.inscricaoEstadual)
            cy.PreencherEmail(dadosPJ.email)
            cy.PreencherDocumento(dadosPJ.cnpj)
            cy.PreencherSenha(dadosPJ.senha)
            cy.ConfirmarSenha(dadosPJ.confirmandoSenha)
            
            cy.CriarConta()

            cy.VerificarCampoObrigatorio('first_name')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

        it('Deve verificar se a inscrição estadual é obrigatório', () => {
            cy.AcessarTelaDeCadastro()
            
            cy.PreencherTipoPessoa(dadosPJ.tipoPessoa)
            cy.PreencherNome(dadosPJ.razaoSocial)
            
            cy.PreencherEmail(dadosPJ.email)
            cy.PreencherDocumento(dadosPJ.cnpj)
            cy.PreencherSenha(dadosPJ.senha)
            cy.ConfirmarSenha(dadosPJ.confirmandoSenha)
            
            cy.CriarConta()

            cy.xpath(loc.mensagemErroInscricao).should('contain', 'Campo obrigatório')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

        it('Deve verificar se o email é obrigatório', () => {
            cy.AcessarTelaDeCadastro()
            
            cy.PreencherTipoPessoa(dadosPJ.tipoPessoa)
            cy.PreencherNome(dadosPJ.razaoSocial)
            cy.PreencherInscricaoEst(dadosPJ.inscricaoEstadual)
            cy.PreencherDocumento(dadosPJ.cnpj)
            cy.PreencherSenha(dadosPJ.senha)
            cy.ConfirmarSenha(dadosPJ.confirmandoSenha)
            
            cy.CriarConta()

            cy.VerificarCampoObrigatorio('email')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

        it('Deve verificar se o cnpj é obrigatório', () => {
            cy.AcessarTelaDeCadastro()
            
            cy.PreencherTipoPessoa(dadosPJ.tipoPessoa)
            cy.PreencherNome(dadosPJ.razaoSocial)
            cy.PreencherInscricaoEst(dadosPJ.inscricaoEstadual)
            cy.PreencherEmail(dadosPJ.email)
            cy.PreencherSenha(dadosPJ.senha)
            cy.ConfirmarSenha(dadosPJ.confirmandoSenha)
            
            cy.CriarConta()

            cy.VerificarCampoObrigatorio('tax_identification')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

        it('Deve verificar se a senha é obrigatório', () => {
            cy.AcessarTelaDeCadastro()
            
            cy.PreencherTipoPessoa(dadosPJ.tipoPessoa)
            cy.PreencherNome(dadosPJ.razaoSocial)
            cy.PreencherInscricaoEst(dadosPJ.inscricaoEstadual)
            cy.PreencherDocumento(dadosPJ.cnpj)
            cy.PreencherEmail(dadosPJ.email)
            cy.ConfirmarSenha(dadosPJ.confirmandoSenha)
            
            cy.CriarConta()

            cy.VerificarCampoObrigatorio('password')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

        it('Deve verificar se a senha é obrigatório', () => {
            cy.AcessarTelaDeCadastro()
            
            cy.PreencherTipoPessoa(dadosPJ.tipoPessoa)
            cy.PreencherNome(dadosPJ.razaoSocial)
            cy.PreencherInscricaoEst(dadosPJ.inscricaoEstadual)
            cy.PreencherDocumento(dadosPJ.cnpj)
            cy.PreencherEmail(dadosPJ.email)
            cy.PreencherSenha(dadosPJ.senha)
            
            cy.CriarConta()

            cy.VerificarCampoObrigatorio('password2')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })


    })
})