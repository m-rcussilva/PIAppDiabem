# App Dia Bem

DiaBem é um Aplicativo para monitoramento de glicose.

Missão e valores: https://diabemdb.netlify.app/

## Como usar

Clonando o repositório:

Opção 1:

Clique no botão `<> Code` escolha entre as opções `HTTPS` ou `SSH`, em seguida,
copie o link do repositório e, dentro do seu temrinal, rode o comando abaixo:

```bash
$ git clone https://github.com/m-rcussilva/piAppDiabem
```

Opção 2:

Clique no botão `<> Code`, em seguida, clique em: `Download ZIP`. Quando
o download foi concluído, extraia o arquivo.

Etapa 1:

Ao entrar na pasta _piAppDiabem_ você verá mais duas pastas. Uma está
associada ao Front-end e a outra ao Back-end. Primeiramente, utilizando uma IDE
ou seu editor de texto preferido, vamos abrir a pasta que faz parte do
Front-end do projeto: _appdiabemfrontend_.

Como um terminal aberto e que esteja dentro da pasta _appdiabemfrontend_,
instale as dependências do projeto com o comando abaixo:

```bash
$ npm install
```

Agora, para ver a aplição DiaBem no seu browser, porém, ainda sem funcionar, no
seu temrinal, e também, que esteja dentro da pasta _appdiabemfrontend_, rode
o comando:

```bash
$ npm run dev
```

Etapa 2:

Em seguida, podemos abrir com uma IDE ou editor de texto sua preferência - como
já foi mencionado anteriormente - o projeto que faz parte do Back-end da nossa
aplicação: _appDiabemBackend_

Antes de iniciarmos o server da nossa aplicação Back-end, é necesário
iniciarmos o server MySQL ou o banco de dados de sua escolha. Recomendamos
utilizar o banco de dados MySQL, tendo em vista que foi o BD utilizado durante
o desenvolvimento da aplicação e o qual foi configurado no
application.proerties do projeto.

Vamos começar fazendo algumas alterações no arquivo application.properties
que está dentro da pasta _resources_. Ele é o responsável por fazer a conexão
com o banco de dados MySQL. Substitua o nome do banco de dados, nome de usuário
e senha pelos valores reais do seu banco de dados:

spring.datasource.url=jdbc:mysql://${MYSQL_HOST:localhost}:3306/nome_do_banco_de_dados
spring.datasource.username=nome_de_usuario
spring.datasource.password=sua_senha
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true

Após fazer isso, inicie seu server MySQL e, logo após ter salvo as
configurações realizados no arquivo application.properties, inicie o server
do projeto Back-end de acordo com a IDE que você escolheu utilizar para abrir
o projeto Back-end.

Pronto. Agora sua aplicação que está rodando no browser deve estar completamente
funcional e pronta para ser utilizada.

## Grupo 36

PROJETO INTEGRADOR: DESENVOLVIMENTO DE SISTEMAS ORIENTADO A DISPOSITIVOS MÓVEIS
E BASEADOS NA WEB

Integrantes:

1. GUILHERME AUGUSTO PEREIRA MELO
2. CRISTIANO BARBOSA DE ARAUJO
3. ELOA BRANDAO LACERDA
4. LUCAS CARDOSO DE MIRANDA
5. PEDRO HENRIQUE ANDREATTI
6. MARCUS LUIS SILVA
7. MARCOS ROBERTO BRABO
8. HENRIQUE ROMANI OLIVEIRA
9. GIOVANNI SOMBRA MATHNE HOLANDA
