# Cadastro de alunos #
Aplicação para cadastrar alunos.




### Início ###
Este módulo é capaz de monitorar o desempenho e eficiência das máquinas do cliente com base nas informações de produção e eventos de paradas, estados, modos de operação e tempo de ciclo.

### Add-ons ###
1. Andon de Produção (link em breve)
2. Andon de Ciclos (link em breve)

### Pré-requisitos ###
- NodeJS
- MongoDB
- Módulo comum do MMI
- Submódulo MMI DB Connector

### Passo a passo ###
1. Execute os seguintes comandos para iniciar o submódulo de conexão com o banco de dados:

```
git submodule init
git submodule update
```

2. Instale as dependências do projeto:

```
npm install
```

3. Configure o banco de dados editando o arquivo `mmi_db_connector/models/sqlConfig.json`

4. Inicie o software:

```
npm start
```

5. Acesse o sistema no link http://localhost:4001
