require('dotenv').config();
const express = require('express');
const app = express();

const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;

app.get('/', (req, res) => res.send('Servidor ejecutándose de forma segura'));
app.listen(3000, () => console.log('Servidor activo'));
