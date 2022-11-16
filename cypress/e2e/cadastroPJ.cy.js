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

        it('01 - Deve realizar o cadastro com sucesso', () => {
            
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

        it('02 - Deve realizar o cadastro com a inscrição estadual isento com sucesso', () => {
            
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

        it('03 - Deve realizar o cadastro sem receber descontos e ofertas por email e SMS com sucesso', () => {
            
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

        it('04 - Deve verificar se razão social é obrigatório', () => {
            
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

        it('05 - Deve verificar se a inscrição estadual é obrigatório', () => {
            
            cy.PreencherTipoPessoa(dadosPJ.tipoPessoa)
            cy.doubleClickIsento()
            cy.PreencherNome(dadosPJ.razaoSocial)
            cy.PreencherEmail(dadosPJ.email)
            cy.PreencherDocumento(dadosPJ.cnpj)
            cy.PreencherSenha(dadosPJ.senha)
            cy.ConfirmarSenha(dadosPJ.confirmandoSenha)
            
            cy.CriarConta()

            cy.xpath(loc.mensagemErroInscricao).should('contain', 'Campo obrigatório')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

        it('06 - Deve verificar se o email é obrigatório', () => {
        
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

        it('07 - Deve verificar email repetido', () => {
            
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

        it('08 - Deve verificar se o formato do email é valido', () => {

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

        it('09 - Deve verificar se o cnpj é obrigatório', () => {
            
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

        it('10 - Deve verificar se o cnpj é valido', () => {
            
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

        it('11 -Deve verificar se o cnpj é repetido', () => {
            
            cy.PreencherTipoPessoa(dadosPJ.tipoPessoa)
            cy.PreencherNome(dadosPJ.razaoSocial)
            cy.PreencherInscricaoEst(dadosPJ.inscricaoEstadual)
            cy.PreencherDocumento('70.305.272/0001-85')
            cy.PreencherEmail(dadosPJ.email)
            cy.PreencherSenha(dadosPJ.senha)
            cy.ConfirmarSenha(dadosPJ.confirmandoSenha)
            
            cy.CriarConta()

            cy.get(loc.mensagemEmailCpfRepetido).should('contain', 'E-mail ou CNPJ já cadastrado(s).')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

        it('12 - Deve verificar se a senha é obrigatório', () => {
            
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

        it('13 - Deve verificar se a confirmação de senha é obrigatório', () => {
            
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

        it('14 - Deve verificar se a senha e confirmação de senha são idênticas', () => {
            
            cy.PreencherTipoPessoa(dadosPJ.tipoPessoa)
            cy.PreencherNome(dadosPJ.razaoSocial)
            cy.PreencherInscricaoEst(dadosPJ.inscricaoEstadual)
            cy.PreencherDocumento(dadosPJ.cnpj)
            cy.PreencherEmail(dadosPJ.email)
            cy.PreencherSenha(dadosPJ.senha)
            cy.ConfirmarSenha('123123asdas')
            
            cy.CriarConta()
            cy.xpath(loc.mensagemErroSenhasIdentica).should('contain', 'Certifique-se de que as senhas informadas são idênticas')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

    })
})