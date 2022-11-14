
const faker = require('faker-br')

const pessoasPF = []

for (let i = 0; i < 3; i++) {
    const tipoPessoaPF = "0"
    const primeiroNome = faker.name.firstName()
    const sobreNome = faker.name.firstName()
    const email = faker.internet.email(primeiroNome)
    const sexo = "male"
    const cpf = faker.br.cpf()
    const nascimentoDia = "20"
    const nascimentoMes = "08"
    const nascimentoAno = "1990"
    const senha = "tangerino123"
    const confirmandoSenha = senha

    const geradorDePessoaPF = {
        tipoPessoaPF,
        primeiroNome,
        sobreNome,
        email,
        sexo,
        cpf,
        nascimentoDia,
        nascimentoMes,
        nascimentoAno,
        senha,
        confirmandoSenha
    }

    pessoasPF.push(geradorDePessoaPF)
}

export default pessoasPF