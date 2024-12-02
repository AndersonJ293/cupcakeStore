# 🍰 Loja de Cupcakes - Projeto Integrador Transdisciplinar (PIT)
## Feito por: Anderson Junior

Este é um sistema desenvolvido como parte do Projeto Integrador Transdisciplinar (PIT) da faculdade Cruzeiro do Sul Virtual. A aplicação permite a gestão e visualização de produtos de uma loja de cupcakes, com funcionalidades voltadas tanto para clientes quanto para administradores.

## 🚀 Tecnologias Utilizadas

- **Frontend:** [Angular](https://angular.io/)  
- **Backend:** [.NET 8](https://dotnet.microsoft.com/)  
- **Banco de Dados:** [PostgreSQL](https://www.postgresql.org/)  

## 📋 Funcionalidades

- Listagem de cupcakes disponíveis para compra.
- Cadastro e login de usuários.
- Carrinho de produtos.
- Tela de checkout e histórico de pedidos do cliente.
- Interface responsiva para desktop e dispositivos móveis.

---

## 📁 Estrutura do Projeto

```plaintext
CupcakeStore/
├── CupcakeStoreClient/      # Aplicação Angular
└── CupcakeStoreAPI/         # API em .NET
```

---

## 🛠️ Como Configurar o Ambiente

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas no seu ambiente de desenvolvimento:

- **Node.js** (v16 ou superior) e npm
- **Angular CLI** (v15 ou superior)
- **.NET SDK** (v8 ou superior)
- **PostgreSQL** (v13 ou superior)

### Passo a Passo

1. **Clone o Repositório**  
   ```bash
   git clone https://github.com/seu-usuario/cupcakeStore.git
   cd cupcakeStore
   ```

2. **Configuração do Banco de Dados**  
   - Crie um banco de dados no PostgreSQL:
     ```sql
     CREATE DATABASE cupcakeStore;
     ```
   - Aplique as migrations necessárias:
   ```bash
   dotnet tool install --global dotnet-ef

   dotnet tool update --global dotnet-ef

   cd cupcakeStore/CupcakeStoreAPI
   dotnet ef migrations update
   ```

3. **Configuração do Backend (.NET)**  
   - Navegue até a pasta `CupcakeStoreAPI`:
     ```bash
     cd CupcakeStoreAPI
     ```
   - Atualize a string de conexão no arquivo `appsettings.json` com as credenciais do seu banco:
     ```json
     "ConnectionStrings": {
       "DefaultConnection": "Host=localhost;Port=5432;Database=cupcakeStore;Username=seu_usuario;Password=sua_senha"
     }
     ```
   - Restaure os pacotes e inicie o servidor:
     ```bash
     dotnet restore
     dotnet run
     ```

4. **Configuração do Frontend (Angular)**  
   - Navegue até a pasta `frontend`:
     ```bash
     cd CupcakeStoreClient
     ```
   - Instale as dependências:
     ```bash
     npm install
     ```
   - Atualize o arquivo de ambiente (`environment.ts`) com a URL da API, caso necessário:
     ```typescript
     export const environment = {
       production: false,
       apiUrl: 'http://localhost:5000/api' // URL da API
     };
     ```
   - Inicie o servidor de desenvolvimento:
     ```bash
     ng serve --ssl
     ```

5. **Acessando a Aplicação**  
   - Frontend: [https://localhost:4200](http://localhost:4200)
   - API: [https://localhost:7046](http://localhost:7046)

---


## 📜 Licença

Este projeto é de uso acadêmico e não possui licença formal.

---

Se precisar de ajuda ou ajustes, avise! 😊
