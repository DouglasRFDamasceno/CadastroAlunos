# Cadastro de alunos #
Aplicação para cadastrar alunos.

### Início ###
Este aplicativo é capaz de realizar as seguintes operações no cadastro de alunos:

- Inserir
- Leitura de cadastrados
- atualizar
- Remover

### Add-ons ###
1. Disponibilidade na Play Store (em breve)

### Pré-requisitos ###
- NodeJS
- Postgres 4.24
- Expo

### Passo a passo ###
1. Instale as dependências do projeto:

```
yarn install
```

3. Configure o banco de dados (test) editando o arquivo `config/config.json`.

4. Inicie o software. Será necessário dois cmds aberto com o diretório da pasta. Assim, digite:

```
1 - yarn start_expo
2 - yarn start
```

5. A partir do simulador será possível testar o aplicativo. Recomenda-se que rode o aplicativo no simulador (android ou ios) ou no celular com o aplicativo expo, pois este aplicativo não estará disponível para web.

6. Copie o ip que está acima do QRCode e cole na baseUrl em services/Api. Não é necessário colocar a porta. Exemplo:

```
baseURL: "http://192.168.0.120:3000"
```

7. Crie um database no postgres e faça restore com o arquivo (database_test) para teste

8. A senha padrão:

```
Login: admin
Senha: 123
```

9. O demo do aplicativo foi configurado para o meu servidor local. Deste mode, não será possível acessar os dados.