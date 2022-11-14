
const faker = require('faker-br')

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
const confirmandoSenha = "tangerino123"


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
export default geradorDePessoaPF