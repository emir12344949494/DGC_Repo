const express = require('express');
const app = express();

// Token Dummy con el prefijo oficial ghp_ que GitHub detecta obligatoriamente
const GITHUB_TOKEN = "ghp_1234567890abcdefghijklmnopqrstuvwxyz1234";

app.listen(3000, () => console.log('Servidor corriendo'));
