/// <reference types="Cypress" />

import loc from "../support/locators/locators"
import dadosPF from "../fixtures/dadosPF.json"
import dadosPFInv from "../fixtures/dadosPFInv.json"
import PF from "../support/geradorDePessoa/geradorDePF"

describe('CadastroPF', () => {
    beforeEach(() => {
        cy.AcessarTelaDeCadastro()
    })
    
    context('Fluxo básico', () => {
        it('01 - Deve realizar o cadastro com sucesso', () => {
            
            cy.PreencherTipoPessoa(PF[0].tipoPessoaPF)
            cy.PreencherNome(PF[0].primeiroNome)
            cy.PreencherSobreNome(PF[0].sobreNome)
            cy.PreencherEmail(PF[0].email)
            cy.PreencherSexo(PF[0].sexo)
            cy.PreencherDocumento(PF[0].cpf)
            cy.PreencherDataNascimento(PF[0].nascimentoDia, PF[0].nascimentoMes, PF[0].nascimentoAno)
            cy.PreencherSenha(PF[0].senha)
            cy.ConfirmarSenha(PF[0].confirmandoSenha)

            cy.CriarConta()
            cy.VerificarCadastroComSucesso(PF[0].primeiroNome)
        })

        it('02 - Deve realizar o cadastro sem receber descontos e ofertas por email e SMS com sucesso', () => {
            
            cy.PreencherTipoPessoa(PF[1].tipoPessoaPF)
            cy.PreencherNome(PF[1].primeiroNome)
            cy.PreencherSobreNome(PF[1].sobreNome)
            cy.PreencherEmail(PF[1].email)
            cy.PreencherSexo(PF[1].sexo)
            cy.PreencherDocumento(PF[1].cpf)
            cy.PreencherDataNascimento(PF[1].nascimentoDia, PF[1].nascimentoMes, PF[1].nascimentoAno)
            cy.PreencherSenha(PF[1].senha)
            cy.ConfirmarSenha(PF[1].confirmandoSenha)
            cy.RemoverOfertas()
            
            cy.CriarConta()

            cy.VerificarCadastroComSucesso(PF[1].primeiroNome)

        })
    })

    context('Fluxo exceção', () => {

        it('03 - Deve verificar se o nome é obrigatório', () => {
            
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

        it('04 - Deve verificar se o sobrenome é obrigatório', () => {

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

        it('05 - Deve verificar se o email é obrigatório', () => {

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

        it('06 - Deve verificar se o sexo é obrigatório', () => {

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

        it('07 - Deve verificar se o cpf é obrigatório', () => {

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

        it('08- Deve verificar se a data de nascimento é obrigatório', () => {

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

        it('09 - Deve verificar se a senha é obrigatório', () => {

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

        it('10 - Deve verificar se a repetição de senha é obrigatório', () => {

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

        it('11 - Deve verificar se a senha e confirmação de senha são idênticas', () => {
            
            cy.PreencherTipoPessoa(dadosPF.tipoPessoaPF)
            cy.PreencherNome(dadosPF.primeiroNome)
            cy.PreencherSobreNome(dadosPF.sobreNome)
            cy.PreencherEmail(dadosPF.email)
            cy.PreencherSexo(dadosPF.sexo)
            cy.PreencherDocumento(dadosPF.documento)
            cy.PreencherDataNascimento(dadosPF.nascimento.dia, dadosPF.nascimento.mes, dadosPF.nascimento.ano)
            cy.PreencherSenha(dadosPF.senha)
            cy.ConfirmarSenha('123123asdas')
            
            cy.CriarConta()
            cy.xpath(loc.mensagemErroSenhasIdentica).should('contain', 'Certifique-se de que as senhas informadas são idênticas')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

        it('12 - Deve verificar se o formato do email é valido', () => {

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

        it('13 - Deve verificar email repetido', () => {

            cy.PreencherTipoPessoa(dadosPF.tipoPessoaPF)
            cy.PreencherNome(dadosPF.primeiroNome)
            cy.PreencherSobreNome(dadosPF.sobreNome)
            cy.PreencherEmail('Analeia.Oliveira94@live.com')
            cy.PreencherSexo(dadosPF.sexo)
            cy.PreencherDocumento(dadosPF.documento)
            cy.PreencherDataNascimento(dadosPF.nascimento.dia, dadosPF.nascimento.mes, dadosPF.nascimento.ano)
            cy.PreencherSenha(dadosPF.senha)
            cy.ConfirmarSenha(dadosPF.confirmandoSenha)
            
            cy.CriarConta()

            cy.get(loc.mensagemEmailCpfRepetido).should('contain', 'E-mail ou CPF já cadastrado(s).')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

        it('14 - Deve verificar se o cpf é valido', () => {

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

        it('15 - Deve verificar cpf repetido', () => {

            cy.PreencherTipoPessoa(dadosPF.tipoPessoaPF)
            cy.PreencherNome(dadosPF.primeiroNome)
            cy.PreencherSobreNome(dadosPF.sobreNome)
            cy.PreencherEmail(dadosPF.email)
            cy.PreencherSexo(dadosPF.sexo)
            cy.PreencherDocumento('111.111.111-11')
            cy.PreencherDataNascimento(dadosPF.nascimento.dia, dadosPF.nascimento.mes, dadosPF.nascimento.ano)
            cy.PreencherSenha(dadosPF.senha)
            cy.ConfirmarSenha(dadosPF.confirmandoSenha)
            
            cy.CriarConta()

            cy.get(loc.mensagemEmailCpfRepetido).should('contain', 'E-mail ou CPF já cadastrado(s).')
            cy.VerificarSeUsuarioEstaNaTelaDeCadastro()
        })

    })
})