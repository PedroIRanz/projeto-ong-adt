# ADT - Amigos da Tesoura

Projeto desenvolvido para a disciplina de Desenvolvimento Front-end.

A aplicação representa uma ONG fictícia chamada ADT - Amigos da Tesoura, que oferece serviços de cuidado pessoal para pessoas em situação de vulnerabilidade.

## Funcionalidades

- Navegação em formato SPA (Single Page Application);
- Página inicial com informações sobre a ONG;
- Área de projetos e formas de contribuição;
- Cadastro de colaboradores;
- Validação de formulário;
- Feedback visual dos campos;
- Armazenamento dos cadastros utilizando localStorage;
- Modal de informações;
- Layout responsivo;
- Navegação por menu hambúrguer em telas menores.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- LocalStorage
- Git e GitHub

## Estrutura do projeto

```text
Projeto ONG/
├── html/
│   ├── index.html
│   ├── projetos.html
│   └── cadastro.html
├── css/
│   └── style.css
├── imagens/
│   └── ong.png
├── js/
│   ├── main.js
│   ├── router.js
│   ├── templates.js
│   ├── formulario.js
│   ├── storage.js
│   └── modal.js
└── README.md
```

## Organização do JavaScript

O JavaScript foi dividido em módulos com responsabilidades diferentes:

- `main.js`: inicialização da aplicação;
- `router.js`: controle das rotas da SPA;
- `templates.js`: templates das páginas;
- `formulario.js`: validação e envio do formulário;
- `storage.js`: armazenamento e recuperação dos dados;
- `modal.js`: controle do modal.

## Como executar

1. Faça o download ou clone o projeto.
2. Abra a pasta em um editor como o Visual Studio Code.
3. Execute o arquivo `html/index.html` utilizando um servidor local, como a extensão Live Server.

O projeto não necessita de instalação de bibliotecas externas.

## Controle de versão

O projeto utiliza Git e a organização de branches baseada no GitFlow:

- `main`: versão estável;
- `develop`: desenvolvimento;
- `feature/*`: novas funcionalidades e alterações específicas.

## Autor

Projeto acadêmico desenvolvido por PedroIRanz
