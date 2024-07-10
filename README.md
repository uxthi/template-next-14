Template Next 13 with app routes.

Components/styles: MUI and Emotion.
Testing: Jest and RTL.
Requests: Axios.

## Index

- [Instalando e rodando o projeto](#instalando-e-rodando-o-projeto)
- [Testando](#testando)
- [Rodando com dados fictícios (Mock Server)](#rodando-com-dados-fictícios-mock-server)
- [Internacionalização](#internacionalização)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Deploy](#deploy)

## Instalando e rodando o projeto

### Instalando:

```bash
# Instale as dependências com npm
npm install

# Após a instalação, rode o projeto com o seguinte comando
```

No seu navegador, o projeto estará rodando em [http://localhost:3000](http://localhost:3000).

## Testando

Os testes unitários de componentes e métodos são feitos com React Testing Library e Jest:

```bash
npm run test
```

## Internacionalização

Utilizamos a lib `next-intl` para cuidar da internacionalização. Para utilizar as mensagens traduzidas no seu componente, siga os passos:

1. Adicione as mensagens nas duas línguas:

Na raiz do projeto, na pasta `messages`, basta adicionar as mensagens no json en.json e pt.json, seguindo o padrão <nome da page> + <componente>. Por exemplo:

```ts
{
    components: { // a página onde usaremos essas mensagens
        sidebar: { // o componente
            // os textos consumidos
        }
    }
  }
}
```

2. Importe os hooks no componente:

Importe o hooks do intl no componente onde as mensagens serão consumidas:

```ts
import { useTranslations } from "next-intl";

const t = useTranslations();
//...
<h1>{t("components.sidebar.text")}</h1>;

// Ou para obter somente mensagens de uma chave específica utilize:

const t = useTranslations("components.sidebar");
//...
<h1>{t("text")}</h1>;
```

3. Criação de chaves

Utilize o padrão abaixo para organizar a estrutura de mensagens:

```json
{
  "features": {
    "nomedafeature": {},
  },
  "components": {
    "nomedocomponente": {}
  },
  "routes": {
    "home": {
      "title": {},
      ...
    }
  }
}
```

## Estrutura do projeto

Um breve resumo da estrutura do projeto e seus camadas:

```bash
template-next-13/
├── config/
│   ├── envkey/                  # Configuração para inicialização das variáveis de ambiente
├── messages/                    # Diretório onde armazenado as mensagens de tradução (i18n)
├── src/app/                     # Diretório principal
│   ├── [locale]/(routes)          # Todas as rotas
│   │   ├── alguma-coisa             # Rota custom
│   │   │   └──  page.tsx              # Arquivo base da rota
│   │   │   └──  layout.tsx            # Camada visual de template da rota
│   │   ├── page.tsx                 # Rota
│   │
│   ├── components/                  # Componentes globais de UI
│   │   ├── Button                     # Pasta do componente
│   │   │   └──  Button.tsx             # O componente exportado
│   │   │   └──  styles.tsx             # Estilos do componente
│   │   │   └──  Button.test.ts         # Testes unitários do componente
│   │
│   ├── features/                    # Camada de features
│   │   ├── Forms/                     # Pasta da feature
│   │   │   └── index.tsx                # Camada de regras da feature
│   │   │   └── styles.tsx               # Estilos da feature
│   │   │   ├── components/              # Componentes de UI específicos da feature
│   │           └── ExampleComponent.tsx
│   │
│   ├── services/                     # Camada de integração com serviços externos
│   │   └── useAxios.ts               # Hook do axios/abstração do serviço de requests
│   │   ├── AlgumaCoisa/                   # Diretório de um serviço específico
│   │      └── useAlgumaCoisa.ts             # Hook do serviço específico
│   │      └── useAlgumaCoisa.test.ts        # Teste do hook do serviço específico
│   │
│   └── mappers/               # Camada de mapper pra transformação de data
│   │   ├── AlgumaCoisa/              # Diretório de um serviço específico mapeado (seguir o path do /services)
│   │      └── algumaCoisa.ts           # Método de map dto
│   │      └── algumaCoisa.test.ts      # Teste do método
│   |
|   └── fixtures/                 # Mocks de requests
│   │   ├── post                  # Agrupamento por http da request (post, get, etc)
│   │      └── algumaCoisa.ts       # O mock da request
|
|   └── styles/                 # Estilos/temas globais
|
├── public/                 # Assets estáticos
│       └── images          # Favicon e outras imagens
│

```

## Variáveis de ambiente

TODO:

## Deploy

TODO:
