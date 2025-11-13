const express = require('express');
const app = express();

// O PDF menciona que sua app expõe a porta 3000 [cite: 16, 40, 206]
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Olá, mundo! O pipeline CI/CD funcionou!');
});

// O PDF sugere uma rota /metrics para o Prometheus [cite: 237]
// Vamos adicionar uma básica:
app.get('/metrics', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.send('# Métricas de exemplo\napp_online 1');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});