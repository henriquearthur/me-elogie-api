# Exemplos de Requisições API

## Endpoint de Chat

### Requisição Básica
```bash
curl --location 'http://localhost:3000/chat' \
--header 'Content-Type: application/json' \
--data '{
    "text": "Explique como funciona a IA"
}'
```

### Versão Windows CMD
```cmd
curl -X POST "http://localhost:3000/chat" ^
-H "Content-Type: application/json" ^
-d "{\"text\": \"Explique como funciona a IA\"}"
```

### Versão PowerShell
```powershell
$body = @{
    text = "Explique como funciona a IA"
} | ConvertTo-Json

Invoke-RestMethod -Method Post -Uri "http://localhost:3000/chat" `
-Headers @{"Content-Type"="application/json"} `
-Body $body
```

## Gerador de Elogios para Currículo

### Requisição Básica
```bash
curl --location 'http://localhost:3000/chat' \
--header 'Content-Type: application/json' \
--data '{
    "text": "João Silva\nEngenheiro de Software com 5 anos de experiência\nHabilidades: JavaScript, Node.js, React\nLiderou equipe de 4 desenvolvedores em entrega bem-sucedida de projeto\nReduciu o tempo de carregamento da aplicação em 40%"
}'
```

### Versão Windows CMD
```cmd
curl -X POST "http://localhost:3000/chat" ^
-H "Content-Type: application/json" ^
-d "{\"text\": \"João Silva\nEngenheiro de Software com 5 anos de experiência\nHabilidades: JavaScript, Node.js, React\nLiderou equipe de 4 desenvolvedores em entrega bem-sucedida de projeto\nReduciu o tempo de carregamento da aplicação em 40%\"}"
```

### Versão PowerShell
```powershell
$body = @{
    text = @"
João Silva
Engenheiro de Software com 5 anos de experiência
Habilidades: JavaScript, Node.js, React
Liderou equipe de 4 desenvolvedores em entrega bem-sucedida de projeto
Reduziu o tempo de carregamento da aplicação em 40%
"@
} | ConvertTo-Json

Invoke-RestMethod -Method Post -Uri "http://localhost:3000/chat" `
-Headers @{"Content-Type"="application/json"} `
-Body $body
```
