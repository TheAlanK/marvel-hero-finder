# Marvel Hero Finder

Projeto pode ser acessado através do link: [Marvel Hero Finder](https://marvel.sethian.com.br/)

## Sumário
- [Introdução](#introducao)
- [Instruções para Executar a Aplicação](#instruções-para-executar-a-aplicação)
  - [Pré-requisitos](#pré-requisitos)
  - [Obtenção do Código-Fonte](#obtenção-do-código-fonte)
  - [Instalando as Dependências](#instalando-as-dependências)
  - [Configuração das Chaves de API](#configuração-das-chaves-de-api)
  - [Executando a Aplicação](#executando-a-aplicação)
  - [Executando Testes](#executando-testes)
- [Objetivos e Funcionalidades](#objetivos-e-funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura e Design da Aplicação](#arquitetura-e-design-da-aplicação)
  - [Estrutura de Componentes e Métodos](#estrutura-de-componentes-e-métodos)
    - [AppComponent](#appcomponent)
    - [MenuComponent](#menucomponent)
    - [MarvelSearchComponent](#marvelsearchcomponent)
    - [MarvelDetailsComponent](#marveldetailscomponent)
    - [SearchBarComponent](#searchbarcomponent)
    - [ConnectionSnackbarComponent](#connectionsnackbarcomponent)
  - [Gerenciamento de Estado com NgRx](#gerenciamento-de-estado-com-ngrx)
    - [State](#state)
    - [Actions](#actions)
    - [Reducers](#reducers)
    - [Selectors](#selectors)
    - [Effects](#effects)
  - [Acesso a Dados e APIs](#acesso-a-dados-e-apis)
    - [MarvelService](#marvelservice)
    - [OpenAIService](#openaiservice)
    - [OpenAICacheService](#openaicacheservice)
  - [Estilização e Acessibilidade](#estilizacao-e-acessibilidade)
  - [Performance e PWA](#performance-e-pwa)
- [Melhorias Futuras](#melhorias-futuras)
- [Desenvolvedores](#desenvolvedores)

<a name="introducao"></a>
## Introdução

O Marvel Hero Finder é uma aplicação web desenvolvida com Angular que permite aos usuários pesquisar super-heróis e super-vilões da Marvel. O projeto busca foco em usabilidade, performance e integração com APIs externas.

<a name="instruções-para-executar-a-aplicação"></a>
## Instruções para Executar a Aplicação

Para executar o Marvel Hero Finder localmente em sua máquina, siga as etapas abaixo:

<a name="pré-requisitos"></a>
### Pré-requisitos

- **Node.js e npm:** Certifique-se de ter o Node.js e o npm (gerenciador de pacotes Node) instalados em seu sistema. Você pode baixá-los em [nodejs.org](https://nodejs.org/).

- **Angular CLI:** A interface de linha de comando do Angular é necessária para gerenciar o projeto e construir a aplicação. Instale-o globalmente usando o comando:
  
  ```bash
  npm install -g @angular/cli
  ```

- **Conta da Marvel API:** Para acessar a API da Marvel, você precisará de uma conta e uma chave de API. Você pode se inscrever em [developer.marvel.com](https://developer.marvel.com/).

- **Conta da OpenAI API:** Para acessar a API da OpenAI, você precisará de uma conta e uma chave de API. Você pode se inscrever em [openai.com](https://openai.com/product).

- **Aplicativo Firebase:** Para hospedar a aplicação e coletar dados de análise, você precisará de um projeto Firebase. Você pode criar um projeto em [firebase.google.com](https://firebase.google.com/).

<a name="obtenção-do-código-fonte"></a>
### Obtenção do Código-Fonte
- **Clone o repositório:** Use o Git para clonar o repositório do Marvel Hero Finder em sua máquina local:

  ```bash
    git clone https://github.com/TheAlanK/marvel-hero-finder.git
  ```

- **Acesse o diretório:** Navegue até o diretório do projeto:

  ```bash
    cd marvel-hero-finder/hero-finder
  ```
<a name="instalando-as-dependências"></a>
### Instalando as Dependências
- **Instale as dependências:** Use o npm para instalar as dependências do projeto:

  ```bash
    npm install
  ```

<a name="configuração-das-chaves-de-api"></a>
### Configuração das Chaves de API
- **Defina as chaves de API:** Abra o arquivo `src/environments/environment.ts` e `src/environments/environment.prod.ts` e adicione suas chaves de API da Marvel, OpenAI e Firebase:

  ```typescript
    export const environment = {
      production: false,
      marvel: {
        apiKey: 'SUA_CHAVE_PUBLICA',
      },
      openai: {
        apiKey: 'SUA_CHAVE_API',
      },
      firebase: {
        apiKey: 'SUA_CHAVE_API',
        authDomain: 'SEU_DOMINIO.firebaseapp.com',
        projectId: 'SEU_PROJETO',
        storageBucket: 'SEU_BUCKET',
        messagingSenderId: 'SEU_ID',
        appId: 'SEU_APP_ID',
        measurementId: 'SEU_ID_DE_MEDICAO'
      }
    };
  ```

 **AVISO:** *NUNCA* compartilhe ou versione suas chaves de API publicamente. Certifique-se de manter suas chaves privadas e seguras.

<a name="executando-a-aplicação"></a>
### Executando a Aplicação
- **Inicie o servidor de desenvolvimento:** Use o Angular CLI para iniciar o servidor de desenvolvimento:
  ```bash
    ng serve
  ```
- **Acesse a aplicação:** Abra seu navegador e acesse `http://localhost:4200/` para visualizar a aplicação em execução.

<a name="executando-testes"></a>
### Executando Testes
- **Executando testes unitários:** Use o Angular CLI para executar os testes unitários:
  ```bash
    ng test
  ```

<a name="objetivos-e-funcionalidades"></a>
## Objetivos e Funcionalidades

O objetivo principal do projeto é fornecer uma experiência de busca e descoberta de heróis da Marvel eficiente e agradável. Os usuários podem pesquisar seus heróis favoritos, acessar informações detalhadas sobre eles, e até mesmo explorar conteúdo offline.
As principais funcionalidades incluem:
- **Busca de Heróis:** A barra de busca permite encontrar heróis pelo nome, com sugestões em tempo real e histórico de pesquisas.
- **Detalhes do Herói:** Apresenta informações como nome, imagem, descrição, participações em quadrinhos e filmes, e links para recursos externos.
- **Acesso Offline:** Os detalhes dos heróis visualizados anteriormente são armazenados em cache, permitindo o acesso sem conexão com a internet.
- **Feedback e Notificações:** A aplicação oferece feedback visual durante o carregamento de dados, informa o usuário sobre termos de busca inválidos, e exibe notificações sobre o status da conexão com a internet.
- **Acessibilidade:** O projeto foi desenvolvido com foco em acessibilidade, utilizando atributos ARIA, semântica HTML e contraste adequado para garantir que a aplicação seja utilizável por todos.

<a name="tecnologias-utilizadas"></a>
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

<a name="arquitetura-e-design-da-aplicação"></a>
## Arquitetura e Design da Aplicação

A aplicação Marvel Hero Finder foi projetada com foco em modularidade, escalabilidade e manutenibilidade. A arquitetura baseia-se nos princípios do desenvolvimento orientado a componentes, com separação clara de responsabilidades e um fluxo de dados unidirecional.

<a name="estrutura-de-componentes-e-métodos"></a>
### Estrutura de Componentes e Métodos

  <a name="appcomponent"></a>
#### AppComponent 

  Componente raiz da aplicação, responsável por gerenciar a estrutura geral e o roteamento. Este componente também monitora o status da conexão com a internet e exibe notificações para o usuário quando o status da conexão muda.

  - **ngOnInit():** Este método é chamado automaticamente quando o componente é inicializado. Ele dispara a ação `checkConnectionStart` para verificar o status da conexão com a internet e se inscreve no seletor `isConnected` do estado da conexão. Quando o status da conexão muda, ele chama o método `handleConnectionChange` e atualiza a variável `isCurrentlyOnline`.

  - **handleConnectionChange(isConnected: boolean):** Este método privado é chamado quando o status da conexão com a internet muda. Ele exibe um snackbar de notificação para o usuário indicando se a conexão está ativa ou não. Se a conexão estiver inativa, o snackbar de notificação persistirá até que a conexão seja restabelecida.

  - **showSnackBar(message: string, color: string, imgPath: string, persist: boolean = false):** Este método privado é usado para exibir notificações para o usuário. Ele recebe uma mensagem, uma cor, um caminho para uma imagem e um booleano indicando se a notificação deve persistir ou não. A notificação é exibida na parte inferior central da tela.
   

  <a name="menucomponent"></a>
#### MenuComponent
  
  Componente que exibe o menu principal e permite a navegação para a funcionalidade de busca de heróis.

  - **onStartClick():** Este método é chamado quando o usuário clica no botão "Iniciar". Ele navega para a rota '/marvel-search', iniciando a funcionalidade de busca de heróis.

 <a name="marvelsearchcomponent"></a>
#### MarvelSearchComponent
 Componente principal da funcionalidade de busca, gerenciando a barra de busca, a lista de heróis e os detalhes do herói selecionado.

 - **displayHero(hero: Marvel):** Este método retorna o nome do herói se ele existir, caso contrário retorna uma string vazia.
 - **handleSearch(term: string):** Este método é chamado quando o usuário realiza uma busca. Ele dispara a ação `searchMarvel` para buscar heróis com o termo de busca fornecido.
 - **handleSelection(hero: Marvel):** Este método é chamado quando o usuário seleciona um herói da lista. Ele registra um evento no Firebase Analytics e dispara a ação `selectMarvel` para selecionar o herói.


 <a name="marveldetailscomponent"></a>
#### MarvelDetailsComponent
Este componente exibe as informações detalhadas do herói selecionado, incluindo imagem, descrição, aparições em quadrinhos e links externos.

- **marvelDetails:** Esta propriedade de entrada recebe os detalhes do herói e as informações geradas pelo GPT-4.
- **getLink(marvel: Marvel, type: 'comiclink' | 'detail' | 'wiki'):** Este método retorna a URL do tipo especificado para o herói dado.
- **toggleText():** Este método alterna a exibição de texto expandido.


 <a name="searchbarcomponent"></a>
#### SearchBarComponent
 Componente reutilizável para a barra de busca, com sugestões em tempo real e histórico de pesquisas.


##### Proprietades
 
 - **options:** Uma lista de opções para autocompletar a busca. Este @Input pode ser vinculado a qualquer fonte de dados externa que retorne uma lista de sugestões.
 - **isLoading:**  Um @Input booleano que indica se o componente está carregando dados. Pode ser usado para mostrar um indicador de carregamento ao usuário.
 - **displayWith:** Uma função que transforma o valor selecionado na forma de exibição adequada. Útil para quando os objetos de sugestão contêm mais do que apenas uma string para exibição.
 - **searchTermChange:** Um @Output que emite o termo da busca quando o usuário digita. Ideal para acionar buscas em tempo real.
 - **selectionChange:** Um @Output que emite o objeto selecionado quando uma opção é escolhida. Isso permite que ações externas sejam tomadas com base na seleção do usuário.
 - **searchControl:** Um FormControl usado para gerenciar o estado do campo de busca, incluindo o valor da entrada e a validação.


##### Métodos

 - **loadSearchHistory():** Carrega o histórico das pesquisas recentes do serviço SearchHistoryService e as apresenta como opções de autocompletação.
 - **onSelect(value: any):** Chamado quando uma opção é selecionada. Registra o valor selecionado, atualiza o campo de busca para mostrar o valor adequado e adiciona a busca ao histórico.
 - **clearSearch():** Limpa o campo de busca e recarrega o histórico de pesquisas, permitindo que o usuário comece uma nova busca com uma visão limpa.
 - **onBlur():** Verifica se o campo de busca está vazio ao perder foco e, em caso afirmativo, recarrega o histórico de pesquisas para apresentar ao usuário.

  <a name="connectionsnackbarcomponent"></a>
#### ConnectionSnackbarComponent
 Componente para exibir notificações sobre o status da conexão com a internet.


##### Propriedades
  - **data:** Um objeto injetado que contém a mensagem a ser exibida, o caminho da imagem (img), e um texto alternativo opcional (altText) para a imagem. Estes dados são passados ao componente quando ele é invocado.
  - **snackBarRef:** Uma referência ao próprio snackbar que permite controlar a sua exibição, como fechá-lo programaticamente.


##### Métodos
  - **close():** Fecha a notificação. Este método é ligado a um botão dentro do template do componente, permitindo ao usuário fechar a notificação manualmente.

<a name="gerenciamento-de-estado-com-ngrx"></a>
### Gerenciamento de Estado com NgRx

O NgRx é utilizado para gerenciar o estado da aplicação de forma centralizada e previsível.

  - **State:** Armazena o estado global da aplicação, incluindo a lista de heróis, o herói selecionado, o status da conexão, etc.
  - **Actions:** Representam eventos que disparam mudanças no estado da aplicação, como buscar heróis, selecionar um herói, atualizar o status da conexão, etc.
  - **Reducers:** Funções que recebem o estado atual e uma action, e retornam um novo estado.
  - **Selectors:**  Funções que extraem informações específicas do estado da aplicação para serem utilizadas pelos componentes.
  - **Effects:** Efeitos colaterais, como chamadas à API, são tratados aqui e disparam novas actions para atualizar o estado.

  <a name="state"></a>
#### State
  - **MarvelState:** Armazena o estado relacionado aos heróis da Marvel, incluindo a lista de heróis, o herói selecionado, descrições detalhadas, e mensagens de erro.
  - **ConnectionState:** Armazena o estado da conexão coma internet.
  - **LoadingState:** Armazena o estado de carregamento da aplicação.

  <a name="actions"></a>
#### Actions
  - **MarvelActions:** Incluem ações `searchMarvel`, `searchMarvelSuccess`, `searchMarvelFailure`, `selectMarvel`, `additionalGptInfo`, `additionalGptInfoSuccess`, `additionalGptInfoFailure` e `clearAdditionalGptInfo`.
  - **ConnectionActions:** Incluem ações `checkConnectionStart`, `checkConnectionSuccess` e `checkConnectionFailure`.
  - **LoadingActions:** Inclui a ação `setLoading`.

 <a name="reducers"></a>
 #### Reducers
  - **MarvelReducers:** Reduzem as ações relacionadas aos heróis da Marvel, atualizando o estado com base nos dados recebidos.
  - **ConnectionReducers:** Reduzem as ações relacionadas ao status da conexão, atualizando o estado com base no status da conexão.
  - **LoadingReducers:** Reduzem a ação `setLoading`, atualizando o estado de carregamento.

 <a name="selectors"></a>
 #### Selectors
  - **MarvelSelectors:** Selecionam informações específicas do estado relacionadas aos heróis da Marvel, como a lista de heróis, o herói selecionado, e as descrições detalhadas.
  - **LoadingSelectors:** Selecionam informações específicas do estado relacionadas ao carregamento, como o estado de carregamento atual.


 <a name="effects"></a>
 #### Effects
    ##### MarvelEffects
    - **searchMarvel$:** Acionado pela ação `searchMarvel`. Ativa o estado de carregamento, faz a busca dos heróis, e em sucesso ou falha, ajusta o estado de carregamento e dispara as ações `searchMarvelSuccess` ou `searchMarvelFailure`.
    - **fetchGptInfo$:**  Desencadeado por `selectMarvel`. Ativa o carregamento, limpa informações prévias, requisita detalhes adicionais do herói selecionado via OpenAI, e em sucesso ou falha, ajusta o carregamento e dispara `additionalGptInfoSuccess` ou `searchMarvelFailure`.

    ##### ConnectionEffects
    - **checkConnection$:** Acionado por `checkConnectionStart`. Monitora o status da conexão com a internet e dispara `checkConnectionSuccess` ou `checkConnectionFailure` com base no resultado.


<a name="acesso-a-dados-e-apis"></a>
### Acesso a Dados e APIs

  <a name="marvelservice"></a>
#### MarvelService
  
  Serviço responsável por interagir com a Marvel REST API, realizando as requisições para buscar informações sobre heróis.

  - **searchMarvel(query: string):** Recebe uma string de consulta como parâmetro e retorna um Observable de um array de heróis da Marvel. Ele configura os parâmetros da requisição HTTP para incluir a chave da API e a consulta de nome inicial. Em seguida, realiza uma requisição GET para a API da Marvel e mapeia a resposta para retornar apenas os resultados dos dados.

  <a name="openaiservice"></a>
#### OpenAIService

  Serviço que interage com a OpenAI API para gerar descrições de heróis utilizando o GPT-4.

  - **getMarvelDetails(marvelName: string):** Consulta detalhes de um personagem da Marvel usando a API da OpenAI. Recebe o nome do personagem (`marvelName`), verifica se existe uma resposta em cache; se existir, retorna essa resposta. Caso contrário, realiza uma solicitação `POST` à API da OpenAI com parâmetros específicos para gerar uma descrição breve do personagem. A resposta é armazenada em cache e o conteúdo relevante é retornado. Erros são registrados e propagados

  <a name="openaicacheservice"></a>
#### OpenAICacheService
  
  Serviço que gerencia o cache de respostas do GPT-4 no IndexedDB para acesso offline.

  - **getCache(key: string):** Recebe uma chave como parâmetro e retorna um Observable com o valor armazenado no IndexedDB. Se a chave não existir, retorna `null`. Deleta o cache depois de 30 dias.
  - **setCache(key: string, value: any):** Recebe uma chave e um valor como parâmetros e armazena o valor no IndexedDB com a chave fornecida.
  - **deleteCache(key: string):** Recebe uma chave como parâmetro e exclui o valor correspondente do IndexedDB.


<a name="estilizacao-e-acessibilidade"></a>
### Estilização e Acessibilidade
  - **CSS customizado:**  Estilos adicionais são aplicados para personalizar a aparência da aplicação.
  - **Atributos ARIA:**  Atributos ARIA são utilizados para melhorar a acessibilidade da aplicação para usuários com deficiências.
  - **Semântica HTML:** Elementos HTML semânticos são utilizados para garantir uma estrutura clara e acessível.

<a name="performance-e-pwa"></a>
### Performance e PWA
  - **Service Worker:** O Angular Service Worker é configurado para habilitar recursos offline, principalmente de arquivos estáticos, e melhorar a performance da aplicação.
  - **IndexedDB:** O cache de dados é armazenado no IndexedDB para permitir o acesso offline aos detalhes dos heróis visualizados anteriormente.
  - **Firebase Hosting:** A aplicação é hospedada no Firebase Hosting para garantir alta disponibilidade e baixa latência.


<a name="melhorias-futuras"></a>
## Melhorias Futuras
 - **Backend com Python:** Implementar um backend em Python para gerenciar as chamadas à API da Marvel e da OpenAI e possiveis novas features.
 - **Pesquisa Avançada:** Adicionar filtros e opções de pesquisa avançada para refinar os resultados.
 - **Feature VERSUS:** Combate simulado entre dois heróis gerado por inteligência artificial.
 - **Animações e Transições:** Adicionar animações e transições para melhorar a experiência do usuário.
 - **Testes E2E:** Implementar testes end-to-end para garantir a qualidade e a integridade da aplicação.
 - **Disponibilidade i18n (en-US e pt-BR):** Feature parcialmente desenvolvida, mas não implementada. Necessaria estratégia de implementação para o Firebase.

<a name="desenvolvedores"></a>
## Desenvolvedores
 Alan K. - Desenvolvedor Front-End

