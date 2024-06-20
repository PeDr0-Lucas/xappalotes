# XappaLotes :european_post_office:	

## Descrição :page_with_curl:

XappaLotes é uma aplicação web para a gestão de lotes imobiliários. Com esta ferramenta, os usuários podem visualizar, adicionar, editar e excluir informações sobre lotes de forma simples e eficiente. A interface intuitiva facilita o gerenciamento de propriedades, tornando o processo mais organizado e acessível.

## Funcionalidades :white_check_mark:

- **Visualização de lotes:** Veja detalhes completos de cada lote, incluindo área, quadra, número do lote, endereço, disponibilidade e proprietário.
- **Edição de lotes:** Edite informações existentes dos lotes.
- **Exclusão de lotes:** Remova lotes que não são mais necessários.
- **Adição de novos lotes:** Adicione novas propriedades ao sistema.
- **Notificações:** Receba notificações de sucesso ou erro durante operações de CRUD.

## Tecnologias Utilizadas :computer:

- **Frontend:**
  - React
  - React-Bootstrap
  - Axios
  - FontAwesome
  - React-Toastify

- **Backend:**
  - Node.js
  - Express
  - Banco de Dados - MongoDb

## Pré-requisitos :heavy_check_mark:

Antes de começar, certifique-se de ter o Node.js instalado em sua máquina.
Como este projeto foi criado para fins de teste, para conseguir a interalização do banco de dados é necessário certificar que o mesmo está conectado com as portas corretas, segue link de url para conexão com o banco: mongodb+srv://pedro:10031108@xappaloteamento.m3qoa2w.mongodb.net/?retryWrites=true&w=majority&appName=XappaLoteamento'

## Instalação :arrow_down:

1. Clone o repositório:

    ```bash
    git clone https://github.com/PeDr0-Lucas/xappalotes.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd xappalotes
    ```

3. Instale as dependências do BackEnd:

    ```bash
    cd server
    npm install express
    npm install cors
    npm install mongoose
    ```

4. Instale as dependências do FrontEnd:

    ```bash
    cd ../client
    npm install axios
    npm install @fortawesome/fontawesome-svg-core
    npm install @fortawesome/free-solid-svg-icons
    npm install @fortawesome/react-fontawesome
    npm install bootstrap
    npm install react-bootstrap
    npm install react-toastify
    ```

## Uso 

1. Inicie o servidor backend:

    ```bash
    cd server
    node --watch index.js
    ```

    O servidor backend estará disponível em `http://localhost:3000`.


2. Inicie o servidor frontend:

    ```bash
    cd ../client
    npm run dev
    ```
## Apresentação e Aplicação 

Após a inicialização do projeto:

![image](https://github.com/PeDr0-Lucas/xappalotes/assets/104226741/c5fc2cc0-614f-4fae-be2d-f02b7736e553)

Nesta página teremos acesso a todos os lotes já cadastrados.

Ao Clicar em "Cadastrar" teremos a opção de realizar um cadastro de um novo lote:

![image](https://github.com/PeDr0-Lucas/xappalotes/assets/104226741/ee4b692f-218d-4fdb-8b47-589ef053f2a4)

Após preencher os dados necessários, e clicar em cadastrar, o site irá dar um refresh e o seu cadastro será computado ficando disponível para a visualização. 

Mas lembre de preencher todos os dados para não dar erro.

<img src="https://github.com/PeDr0-Lucas/xappalotes/assets/104226741/623e6408-a439-45da-8704-9e8be0dd3674" alt="image" width="300"/>

![image](https://github.com/PeDr0-Lucas/xappalotes/assets/104226741/1b9b08b0-556d-4073-8fe0-eb66347e5555)

Ao clicar no ícone de um lápis, o usuário irá conseguir editar o cadastro:

<img src="https://github.com/PeDr0-Lucas/xappalotes/assets/104226741/bb55ad40-5c69-47f4-93e9-f09fbed650f5" alt="image" width="300"/>

<img src="https://github.com/PeDr0-Lucas/xappalotes/assets/104226741/62f4d72b-170f-4e22-9ddf-28824748da90"/>

Ao clicar no ícone de uma lixeira, o usuário irá conseguir excluir o cadastro: </br> </br>

![image](https://github.com/PeDr0-Lucas/xappalotes/assets/104226741/0d6c9df9-cd37-4ab1-b4c4-446c59e12897)



## Contribuição

1. Faça um fork do projeto.
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`).
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`).
4. Push para a branch (`git push origin feature/AmazingFeature`).
5. Abra um Pull Request.


## Considerações

Este projeto foi feito por Pedro Lucas, agradeço a oportunidade.

## Contatos

LinkdIn - https://www.linkedin.com/in/pedro-costa-09a8191a2/ </br>
E-mail - pedrocaslu2212@gmail.com
