# DesafioTangerino

# Automação do cadastro para pessoas físicas e pessoas jurídicas da Kanui


* Dependências do Projeto
  * Node - 16.17.1
  * Npm - 8.15.0
  * faker - 7.6.0
  * faker-br - 0.4.1
  * cypress/xpath - 2.0.3

* Instalação do projeto

   1. Clone o repositorio em sua máquina
   2. No diretório do projeto execute o comando abaixo:
   
      ``` npm install ```
  
    
* Execução do projeto


  1. Podemos executar o projeto acompanhando toda a execução vendo o passo a passo através do Dashboard do Cypress. Para isso é necessário executar o comando abaixo no diretório do projeto:
     
        ``` npm run cypress:open ```
        
         Com isso, o Cypress vai abrir o DashBoard no qual você deve escolher a opção "e2e testing";
  
         Seleciona o navegador, de preferência o Chrome e clique no botão "Start E2E Testing in Chrome";
  
         Por fim, basta clicar em uma das suítes de testes, sendo elas: cadastroPF e cadastroPJ
  
  5. Ou podemos executar todos os scripts de uma só vez através do terminal de comandos, sem acompanhar o passo a passo, executando o comando abaixo no diretório do projeto:
     
     
     ``` npm run cypress:ci ``` 
     
     
## Relatório de teste

* Doc: https://drive.google.com/file/d/1kPd-uQqlPFAN1_fa1nwGVahyjlthdzUd/view?usp=sharing
