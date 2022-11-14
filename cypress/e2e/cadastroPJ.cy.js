/// <reference types="Cypress" />

import PJ from "../support/geradorDePessoa/geradorDePJ"
import dadosPJ from "../fixtures/dadosPJ.json"
import dadosPJInv from "../fixtures/dadosPJInv.json"
import loc from "../support/locators/locators"

describe('CadastroPJ', () => {
    beforeEach(() => {
        cy.AcessarTelaDeCadastro()
    })

    context('Fluxo básico', () => {

        it('Deve realizar o cadastro com sucesso', () => {
            
            cy.PreencherTipoPessoa(PJ[0].tipoPessoa)
            cy.PreencherNome(PJ[0].razaoSocial)
            cy.PreencherInscricaoEst(PJ[0].inscricaoEstadual)
            cy.PreencherEmail(PJ[0].email)
            cy.PreencherDocumento(PJ[0].cnpj)
            cy.PreencherSenha(PJ[0].senha)
            cy.ConfirmarSenha(PJ[0].confirmandoSenha)
            
            cy.CriarConta()

            cy.VerificarCadastroComSucesso(PJ[0].razaoSocial)

        })

        it('Deve realizar o cadastro com a inscrição estadual isento com sucesso', () => {
            
            
            cy.PreencherTipoPessoa(PJ[1].tipoPessoa)
            cy.PreencherNome(PJ[1].razaoSocial)
            cy.MarcarIsento()
            cy.PreencherEmail(PJ[1].email)
            cy.PreencherDocumento(PJ[1].cnpj)
            cy.PreencherSenha(PJ[1].senha)
            cy.ConfirmarSenha(PJ[1].confirmandoSenha)
            
            cy.CriarConta()

            cy.VerificarCadastroComSucesso(PJ[1].razaoSocial)

        })

        it('Deve realizar o cadastro sem receber descontos e ofertas por email e SMS com sucesso', () => {
            
            cy.PreencherTipoPessoa(PJ[2].tipoPessoa)
            cy.PreencherNome(PJ[2].razaoSocial)
            cy.PreencherInscricaoEst(PJ[2].inscricaoEstadual)
            cy.PreencherEmail(PJ[2].email)
            cy.PreencherDocumento(PJ[2].cnpj)
            cy.PreencherSenha(PJ[2].senha)
            cy.ConfirmarSenha(PJ[2].confirmandoSenha)
            cy.RemoverOfertas()
            
            cy.CriarConta()

            cy.VerificarCadastroComSucesso(PJ[2].razaoSocial)

        })
    })

    context('Fluxo de exceção', () => {

        it('Deve verificar se razão social é obrigatório', () => {
            
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

        it('Deve verificar email repetido', () => {
            
            cy.PreencherTipoPessoa(dadosPJ.tipoPessoa)
            cy.PreencherNome(dadosPJ.razaoSocial)
            cy.PreencherInscricaoEst(dadosPJ.inscricaoEstadual)
            cy.PreencherEmail('Edwirges.Moreira98@gmail.com')
            cy.PreencherDocumento(dadosPJ.cnpj)
            cy.PreencherSenha(dadosPJ.senha)
            cy.ConfirmarSenha(dadosPJ.confirmandoSenha)
            
            cy.CriarConta()

            cy.get(loc.mensagemEmailCpfRepetido).should('contain', 'E-mail ou CNPJ já cadastrado(s).')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

        it('Deve verificar se o formato do email é valido', () => {

            cy.PreencherTipoPessoa(dadosPJ.tipoPessoa)
            cy.PreencherNome(dadosPJ.razaoSocial)
            cy.PreencherInscricaoEst(dadosPJ.inscricaoEstadual)
            cy.PreencherEmail(dadosPJInv.emailInvalido)
            cy.PreencherDocumento(dadosPJ.cnpj)
            cy.PreencherSenha(dadosPJ.senha)
            cy.ConfirmarSenha(dadosPJ.confirmandoSenha)
            
            cy.CriarConta()

            cy.xpath(loc.mensagemErroEmailInv).should('contain', 'E-mail inválido. Verifique se digitou corretamente.')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

        it('Deve verificar se o cnpj é obrigatório', () => {
            
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

        it('Deve verificar se o cnpj é valido', () => {
            
            cy.PreencherTipoPessoa(dadosPJ.tipoPessoa)
            cy.PreencherNome(dadosPJ.razaoSocial)
            cy.PreencherInscricaoEst(dadosPJ.inscricaoEstadual)
            cy.PreencherDocumento('04.104.104/104')
            cy.PreencherEmail(dadosPJ.email)
            cy.PreencherSenha(dadosPJ.senha)
            cy.ConfirmarSenha(dadosPJ.confirmandoSenha)
            
            cy.CriarConta()

            cy.get(loc.mensagemEmailCpfRepetido).should('contain', 'E-mail ou CNPJ já cadastrado(s).')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

        it('Deve verificar se o cnpj é repetido', () => {
            
            cy.PreencherTipoPessoa(dadosPJ.tipoPessoa)
            cy.PreencherNome(dadosPJ.razaoSocial)
            cy.PreencherInscricaoEst(dadosPJ.inscricaoEstadual)
            cy.PreencherDocumento('84.936.341/1101-63')
            cy.PreencherEmail(dadosPJ.email)
            cy.PreencherSenha(dadosPJ.senha)
            cy.ConfirmarSenha(dadosPJ.confirmandoSenha)
            
            cy.CriarConta()

            cy.xpath(loc.mensagemDocumentoInv).should('contain', 'CPF/CNPJ inválido')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

        it('Deve verificar se a senha é obrigatório', () => {
            
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

        it('Deve verificar se a confirmação de senha é obrigatório', () => {
            
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