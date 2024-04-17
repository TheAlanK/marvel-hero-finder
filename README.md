# Marvel Hero Finder

O Marvel Hero Finder é uma aplicação web desenvolvida com Angular que permite aos usuários explorar o vasto universo de super-heróis da Marvel. Com uma interface intuitiva e recursos poderosos, o projeto demonstra habilidades em desenvolvimento front-end, com foco em usabilidade, performance e integração com APIs externas.

## Instruções para Executar a Aplicação

Para executar o Marvel Hero Finder localmente em sua máquina, siga as etapas abaixo:

### Pré-requisitos

- **Node.js e npm:** Certifique-se de ter o Node.js e o npm (gerenciador de pacotes Node) instalados em seu sistema. Você pode baixá-los em [nodejs.org](https://nodejs.org/).

- **Angular CLI:** A interface de linha de comando do Angular é necessária para gerenciar o projeto e construir a aplicação. Instale-o globalmente usando o comando:
  
  ```bash
  npm install -g @angular/cli
  ```

- **Conta da Marvel API:** Para acessar a API da Marvel, você precisará de uma conta e uma chave de API. Você pode se inscrever em [developer.marvel.com](https://developer.marvel.com/).

- **Conta da OpenAI API:** Para acessar a API da OpenAI, você precisará de uma conta e uma chave de API. Você pode se inscrever em [openai.com](https://openai.com/product).

### Obtenção do Código-Fonte
- **Clone o repositório:** Use o Git para clonar o repositório do Marvel Hero Finder em sua máquina local:

  ```bash
    git clone https://github.com/TheAlanK/marvel-hero-finder.git
  ```

- **Acesse o diretório:** Navegue até o diretório do projeto:

  ```bash
    cd marvel-hero-finder/hero-finder
  ```

### Instalando as Dependências
- **Instale as dependências:** Use o npm para instalar as dependências do projeto:

  ```bash
    npm install
  ```

### Configuração das Chaves de API
- **Defina as chaves de API:** Abra o arquivo `src/environments/environment.ts` e `src/environments/environment.prod.ts` e adicione suas chaves de API da Marvel e da OpenAI:

  ```typescript
    export const environment = {
      production: false,
      marvel: {
        apiKey: 'SUA_CHAVE_PUBLICA',
      },
      openai: {
        apiKey: 'SUA_CHAVE_API',
      },
    };
  ```

 **AVISO:** *NUNCA* compartilhe ou versione suas chaves de API publicamente. Certifique-se de manter suas chaves privadas e seguras.

### Executando a Aplicação
- **Inicie o servidor de desenvolvimento:** Use o Angular CLI para iniciar o servidor de desenvolvimento:
  ```bash
    ng serve
  ```
- **Acesse a aplicação:** Abra seu navegador e acesse `http://localhost:4200/` para visualizar a aplicação em execução.

### Executando Testes
- **Executando testes unitários:** Use o Angular CLI para executar os testes unitários:
  ```bash
    ng test
  ```
## Objetivos e Funcionalidades

O objetivo principal do projeto é fornecer uma experiência de busca e descoberta de heróis da Marvel eficiente e agradável. Os usuários podem pesquisar seus heróis favoritos, acessar informações detalhadas sobre eles, e até mesmo explorar conteúdo offline.
As principais funcionalidades incluem:
- **Busca de Heróis:** A barra de busca permite encontrar heróis pelo nome, com sugestões em tempo real e histórico de pesquisas.
- **Detalhes do Herói:** Apresenta informações como nome, imagem, descrição, participações em quadrinhos e filmes, e links para recursos externos.
- **Acesso Offline:** Os detalhes dos heróis visualizados anteriormente são armazenados em cache, permitindo o acesso sem conexão com a internet.
- **Feedback e Notificações:** A aplicação oferece feedback visual durante o carregamento de dados, informa o usuário sobre termos de busca inválidos, e exibe notificações sobre o status da conexão com a internet.
- **Acessibilidade:** O projeto foi desenvolvido com foco em acessibilidade, utilizando atributos ARIA, semântica HTML e contraste adequado para garantir que a aplicação seja utilizável por todos.

## Tecnologias Utilizadas

Para atingir os objetivos do projeto, foram escolhidas tecnologias modernas e eficientes:
 - **Angular 17:** Ultima versão do framework para desenvolvimento de aplicações web complexas e escaláveis.
 - **NgRx:** Gerenciamento de estado da aplicação com base no padrão Redux.
 - **Marvel REST API:** Fonte de dados para informações sobre heróis da Marvel.
 - **OpenAI API (GPT-4):** Geração de descrições narrativas dos heróis utilizando inteligência artificial.
 - **IndexedDB:** Armazenamento em cache de dados para acesso offline.
 - **Angular Material:** Biblioteca de componentes UI baseados no Material Design.
 - **Angular Service Worker:** Habilita recursos offline, principalmente de arquivos estáticos, e melhora a performance da aplicação.
 - **Firebase Analytics:** Coleta dados sobre o uso da aplicação para análise e otimização.
 - **Firebase Hosting:** Hospedagem da aplicação web para acesso público.
 - **ChatGPT, Claude AI, Copilot (plugin)** Suporte generalizado no desenvolvimento desta aplicação.
 - **Gemini 1.5 Pro:** Suporte e revisão da documentação.

## Arquitetura e Design da Aplicação

A aplicação Marvel Hero Finder foi projetada com foco em modularidade, escalabilidade e manutenibilidade. A arquitetura baseia-se nos princípios do desenvolvimento orientado a componentes, com separação clara de responsabilidades e um fluxo de dados unidirecional.

### Estrutura de Componentes

 - **AppComponent:** Componente raiz da aplicação, responsável por gerenciar a estrutura geral e o roteamento.
 - **MenuComponent:** Componente que exibe o menu principal e permite a navegação para a funcionalidade de busca de heróis.
 - **MarvelSearchComponent:** Componente principal da funcionalidade de busca, gerenciando a barra de busca, a lista de heróis e os detalhes do herói selecionado.
 - **MarvelDetailsComponent:** Exibe as informações detalhadas do herói selecionado, incluindo imagem, descrição, participações em quadrinhos, e links externos.
 - **SearchBarComponent:** Componente reutilizável para a barra de busca, com sugestões em tempo real e histórico de pesquisas.
 - **ConnectionSnackbarComponent:** Componente para exibir notificações sobre o status da conexão com a internet.

### Gerenciamento de Estado com NgRx

O NgRx é utilizado para gerenciar o estado da aplicação de forma centralizada e previsível.

  - **State:** Armazena o estado global da aplicação, incluindo a lista de heróis, o herói selecionado, o status da conexão, etc.
  - **Actions:** Representam eventos que disparam mudanças no estado da aplicação, como buscar heróis, selecionar um herói, atualizar o status da conexão, etc.
  - **Reducers:** Funções que recebem o estado atual e uma action, e retornam um novo estado.
  - **Selectors:**  Funções que extraem informações específicas do estado da aplicação para serem utilizadas pelos componentes.
  - **Effects:** Efeitos colaterais, como chamadas à API, são tratados aqui e disparam novas actions para atualizar o estado.

### Acesso a Dados e APIs

  - **MarvelService:** Serviço responsável por interagir com a Marvel REST API, realizando as requisições para buscar informações sobre heróis.
  - **OpenAIService:**  Serviço que interage com a OpenAI API para gerar descrições de heróis utilizando o GPT-4.
  - **OpenAICacheService:** Serviço que gerencia o cache de respostas do GPT-4 no IndexedDB para acesso offline.


### Estilização e Acessibilidade
  - **CSS customizado:**  Estilos adicionais são aplicados para personalizar a aparência da aplicação.
  - **Atributos ARIA:**  Atributos ARIA são utilizados para melhorar a acessibilidade da aplicação para usuários com deficiências.
  - **Semântica HTML:** Elementos HTML semânticos são utilizados para garantir uma estrutura clara e acessível.

### Performance e PWA
  - **Service Worker:** O Angular Service Worker é configurado para habilitar recursos offline, principalmente de arquivos estáticos, e melhorar a performance da aplicação.
  - **IndexedDB:** O cache de dados é armazenado no IndexedDB para permitir o acesso offline aos detalhes dos heróis visualizados anteriormente.
  - **Firebase Hosting:** A aplicação é hospedada no Firebase Hosting para garantir alta disponibilidade e baixa latência.


## Melhorias Futuras
 - **Backend com Python:** Implementar um backend em Python para gerenciar as chamadas à API da Marvel e da OpenAI e possiveis novas features.
 - **Pesquisa Avançada:** Adicionar filtros e opções de pesquisa avançada para refinar os resultados.
 - **Feature VERSUS:** Combate simulado entre dois heróis gerado por inteligência artificial.
 - **Animações e Transições:** Adicionar animações e transições para melhorar a experiência do usuário.
 - **Testes E2E:** Implementar testes end-to-end para garantir a qualidade e a integridade da aplicação.
 - **Disponibilidade i18n (en-US e pt-BR):** Feature parcialmente desenvolvida, mas não implementada. Necessaria estratégia de implementação para o Firebase.

## Desenvolvedores
 Alan K. - Desenvolvedor Front-End

