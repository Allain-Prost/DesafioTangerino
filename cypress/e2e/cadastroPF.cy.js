/// <reference types="Cypress" />

import loc from "../support/locators/locators"
import dadosPF from "../fixtures/dadosPF.json"
import dadosPFInv from "../fixtures/dadosPFInv.json"
import PF from "../support/geradorDePessoa/geradorDeCPF"

describe('CadastroPF', () => {
    context('Deve verificar a obrigatoriedade dos campos para PF', () => {

        it('Deve verificar se o primeiro nome é obrigatório', () => {
            cy.AcessarTelaDeCadastro()
            
            cy.PreencherTipoPessoa(dadosPF.tipoPessoaPF)
            cy.PreencherSobreNome(dadosPF.sobreNome)
            cy.PreencherEmail(dadosPF.email)
            cy.PreencherSexo(dadosPF.sexo)
            cy.PreencherDocumento(dadosPF.documento)
            cy.PreencherDataNascimento(dadosPF.nascimento.dia, dadosPF.nascimento.mes, dadosPF.nascimento.ano)
            cy.PreencherSenha(dadosPF.senha)
            cy.ConfirmarSenha(dadosPF.confirmandoSenha)
            
            cy.CriarConta()

            cy.VerificarCampoObrigatorio('first_name')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

        it('Deve verificar se o sobrenome é obrigatório', () => {
            cy.AcessarTelaDeCadastro()

            cy.PreencherTipoPessoa(dadosPF.tipoPessoaPF)
            cy.PreencherNome(dadosPF.primeiroNome)
            cy.PreencherEmail(dadosPF.email)
            cy.PreencherSexo(dadosPF.sexo)
            cy.PreencherDocumento(dadosPF.documento)
            cy.PreencherDataNascimento(dadosPF.nascimento.dia, dadosPF.nascimento.mes, dadosPF.nascimento.ano)
            cy.PreencherSenha(dadosPF.senha)
            cy.ConfirmarSenha(dadosPF.confirmandoSenha)

            cy.CriarConta()

            cy.VerificarCampoObrigatorio('last_name')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

        it('Deve verificar se o email é obrigatório', () => {
            cy.AcessarTelaDeCadastro()

            cy.PreencherTipoPessoa(dadosPF.tipoPessoaPF)
            cy.PreencherNome(dadosPF.primeiroNome)
            cy.PreencherSobreNome(dadosPF.sobreNome)
            cy.PreencherSexo(dadosPF.sexo)
            cy.PreencherDocumento(dadosPF.documento)
            cy.PreencherDataNascimento(dadosPF.nascimento.dia, dadosPF.nascimento.mes, dadosPF.nascimento.ano)
            cy.PreencherSenha(dadosPF.senha)
            cy.ConfirmarSenha(dadosPF.confirmandoSenha)
            
            cy.CriarConta()

            cy.VerificarCampoObrigatorio('email')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

        it('Deve verificar se o sexo é obrigatório', () => {
            cy.AcessarTelaDeCadastro()

            cy.PreencherTipoPessoa(dadosPF.tipoPessoaPF)
            cy.PreencherNome(dadosPF.primeiroNome)
            cy.PreencherSobreNome(dadosPF.sobreNome)
            cy.PreencherEmail(dadosPF.email)
            cy.PreencherDocumento(dadosPF.documento)
            cy.PreencherDataNascimento(dadosPF.nascimento.dia, dadosPF.nascimento.mes, dadosPF.nascimento.ano)
            cy.PreencherSenha(dadosPF.senha)
            cy.ConfirmarSenha(dadosPF.confirmandoSenha)
            
            cy.CriarConta()

            cy.VerificarCampoObrigatorio('gender')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

        it('Deve verificar se o documento é obrigatório', () => {
            cy.AcessarTelaDeCadastro()

            cy.PreencherTipoPessoa(dadosPF.tipoPessoaPF)
            cy.PreencherNome(dadosPF.primeiroNome)
            cy.PreencherSobreNome(dadosPF.sobreNome)
            cy.PreencherEmail(dadosPF.email)
            cy.PreencherSexo(dadosPF.sexo)
            cy.PreencherDataNascimento(dadosPF.nascimento.dia, dadosPF.nascimento.mes, dadosPF.nascimento.ano)
            cy.PreencherSenha(dadosPF.senha)
            cy.ConfirmarSenha(dadosPF.confirmandoSenha)
            
            cy.CriarConta()

            cy.VerificarCampoObrigatorio('tax_identification')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

        it('Deve verificar se a data de nascimento é obrigatório', () => {
            cy.AcessarTelaDeCadastro()

            cy.PreencherTipoPessoa(dadosPF.tipoPessoaPF)
            cy.PreencherNome(dadosPF.primeiroNome)
            cy.PreencherSobreNome(dadosPF.sobreNome)
            cy.PreencherEmail(dadosPF.email)
            cy.PreencherSexo(dadosPF.sexo)
            cy.PreencherDocumento(dadosPF.documento)
            cy.PreencherSenha(dadosPF.senha)
            cy.ConfirmarSenha(dadosPF.confirmandoSenha)
            
            cy.CriarConta()
            cy.xpath(loc.mensagemErroNascimento).should('be.enabled').and('be.visible')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

        it('Deve verificar se a senha é obrigatório', () => {
            cy.AcessarTelaDeCadastro()

            cy.PreencherTipoPessoa(dadosPF.tipoPessoaPF)
            cy.PreencherNome(dadosPF.primeiroNome)
            cy.PreencherSobreNome(dadosPF.sobreNome)
            cy.PreencherEmail(dadosPF.email)
            cy.PreencherSexo(dadosPF.sexo)
            cy.PreencherDocumento(dadosPF.documento)
            cy.PreencherDataNascimento(dadosPF.nascimento.dia, dadosPF.nascimento.mes, dadosPF.nascimento.ano)
            cy.ConfirmarSenha(dadosPF.confirmandoSenha)
            
            cy.CriarConta()

            cy.VerificarCampoObrigatorio('password')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

        it('Deve verificar se a repetição de senha é obrigatório', () => {
            cy.AcessarTelaDeCadastro()

            cy.PreencherTipoPessoa(dadosPF.tipoPessoaPF)
            cy.PreencherNome(dadosPF.primeiroNome)
            cy.PreencherSobreNome(dadosPF.sobreNome)
            cy.PreencherEmail(dadosPF.email)
            cy.PreencherSexo(dadosPF.sexo)
            cy.PreencherDocumento(dadosPF.documento)
            cy.PreencherDataNascimento(dadosPF.nascimento.dia, dadosPF.nascimento.mes, dadosPF.nascimento.ano)
            cy.PreencherSenha(dadosPF.senha)
            
            cy.CriarConta()

            cy.VerificarCampoObrigatorio('password2')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

    })

    context('Deve verificar valores inválidos', () => {
        it('Deve verificar se o formato do email é valido', () => {
            cy.AcessarTelaDeCadastro()

            cy.PreencherTipoPessoa(dadosPF.tipoPessoaPF)
            cy.PreencherNome(dadosPF.primeiroNome)
            cy.PreencherSobreNome(dadosPF.sobreNome)
            cy.PreencherEmail(dadosPFInv.emailInvalido)
            cy.PreencherSexo(dadosPF.sexo)
            cy.PreencherDocumento(dadosPF.documento)
            cy.PreencherDataNascimento(dadosPF.nascimento.dia, dadosPF.nascimento.mes, dadosPF.nascimento.ano)
            cy.PreencherSenha(dadosPF.senha)
            cy.ConfirmarSenha(dadosPF.confirmandoSenha)
            
            cy.CriarConta()

            cy.xpath(loc.mensagemErroEmailInv).should('contain', 'E-mail inválido. Verifique se digitou corretamente.')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

        it('Deve verificar se o documento é valido', () => {
            cy.AcessarTelaDeCadastro()

            cy.PreencherTipoPessoa(dadosPF.tipoPessoaPF)
            cy.PreencherNome(dadosPF.primeiroNome)
            cy.PreencherSobreNome(dadosPF.sobreNome)
            cy.PreencherEmail(dadosPF.email)
            cy.PreencherSexo(dadosPF.sexo)
            cy.PreencherDocumento(dadosPFInv.documentoInvalido)
            cy.PreencherDataNascimento(dadosPF.nascimento.dia, dadosPF.nascimento.mes, dadosPF.nascimento.ano)
            cy.PreencherSenha(dadosPF.senha)
            cy.ConfirmarSenha(dadosPF.confirmandoSenha)
            
            cy.CriarConta()

            cy.xpath(loc.mensagemDocumentoInv).should('contain', 'CPF/CNPJ inválido')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })
    })

    context('Deve verificar se o cadastro foi feito corretamente', () => {
        it.only('Deve realizar o cadastro com sucesso', () => {
            cy.AcessarTelaDeCadastro()
            
            cy.PreencherTipoPessoa(PF.tipoPessoaPF)
            cy.PreencherNome(PF.primeiroNome)
            cy.PreencherSobreNome(PF.sobreNome)
            cy.PreencherEmail(PF.email)
            cy.PreencherSexo(PF.sexo)
            cy.PreencherDocumento(PF.cpf)
            cy.PreencherDataNascimento(PF.nascimentoDia, PF.nascimentoMes, PF.nascimentoAno)
            cy.PreencherSenha(PF.senha)
            cy.ConfirmarSenha(PF.confirmandoSenha)

            cy.CriarConta()
            cy.get('.header-login-welcome').should('contain', `${PF.primeiroNome}`)



        })
    })

})