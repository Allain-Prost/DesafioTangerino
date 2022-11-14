const locators = {

    BASE_URL: "https://www.kanui.com.br/",

    btn_login: '.header-login-link',
    btn_formLoginCadastro: '.account-form-title',
    tipoPessoa: tipo => `#RegistrationForm_customer_personality_${tipo}`,

    form_Cadastro: {
        primeiroNome: '#RegistrationForm_first_name',
        sobreNome: '#RegistrationForm_last_name',
        email: '#RegistrationForm_email',
        genero: '#RegistrationForm_gender',
        documento: '#RegistrationForm_tax_identification',
        inscricao: '#RegistrationForm_state_registration',
        isento: '#RegistrationForm_state_registration_exempt',
        ofertas: '#RegistrationForm_is_newsletter_subscribed',
        
        dataDeNascimento: {
            dia: '#RegistrationForm_day',
            mes: '#RegistrationForm_month',
            ano: '#RegistrationForm_year'
        },

        senha: '#form-customer-account-password',
        confimacaoSenha: '#RegistrationForm_password2',
        btn_criarConta: '#customer-account-create'
    },

    mensagemCampoObrigatorio: '.parsley-required',
    mensagemErro: tipo => `//label[@for='RegistrationForm_${tipo}']/../ul/li[@class="parsley-required"]`,
    mensagemErroNascimento: `//select[@class="selectbox day is-invalid parsley-error"]`,
    mensagemErroEmailInv: `//label[@for='RegistrationForm_email']/../ul/li[@class="parsley-type"]`,
    mensagemDocumentoInv: `//label[@for='RegistrationForm_tax_identification']/../div[@class="errorMessage"]`,
    mensagemEmailCpfRepetido: '.message-description',
    mensagemErroInscricao: `//label[@for="RegistrationForm_state_registration"]/../ul/li[@class="parsley-required"]`, 

    olaPessoa: '.header-login-welcome'

}

export default locators;