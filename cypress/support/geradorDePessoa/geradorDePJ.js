
const faker = require('faker-br')

const tipoPessoa = "1"
const razaoSocial = faker.name.firstName()
// adaptação para gerar um número aleatório
const inscricaoEstadual = faker.br.cnpj()
const email = faker.internet.email(razaoSocial)
const cnpj = faker.br.cnpj()
const senha = "tangerino123"
const confirmandoSenha = senha


const geradorDePessoaPJ = {
    tipoPessoa,
    razaoSocial,
    inscricaoEstadual,
    email,
    cnpj,
    senha,
    confirmandoSenha
}
export default geradorDePessoaPJ
