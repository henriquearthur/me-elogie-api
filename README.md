# Me Elogie API

API que utiliza IA generativa (Google Gemini) para criar elogios personalizados baseados em currículos e textos.

## 🚀 Funcionalidades

- Geração de elogios personalizados baseados em currículos
- Processamento de texto utilizando Google Gemini AI
- Limitação de taxa para proteger a API
- Suporte a CORS para integração com frontend

## 📋 Pré-requisitos

- Node.js
- Uma chave de API do Google Gemini

## 🔧 Instalação

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto com:
```
GEMINI_API_KEY=sua_chave_api_aqui
PORT=3000
```

## 🏃‍♂️ Executando o projeto

Para desenvolvimento:
```bash
npm run dev
```

## 📡 Endpoints

### POST /chat

Endpoint principal para processar textos e gerar elogios.

**Corpo da requisição:**
```json
{
    "text": "Seu currículo ou texto aqui"
}
```

**Resposta:**
```json
{
    "result": "Elogio gerado pela IA"
}
```

## 📚 Exemplos

Você pode encontrar exemplos de requisições em diferentes formatos (cURL, PowerShell, CMD) no arquivo [examples/curl-requests.md](./examples/curl-requests.md).

