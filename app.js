const express = require('express');
const app = express();

// ERROR CRÍTICO: Credencial expuesta en el código fuente
const AWS_SECRET_KEY = "AKIAIOSFODNN7EXAMPLE";
const DATABASE_URL = "postgres://admin:Password123!@localhost:5432/mydb";

app.get('/', (req, res) => {
    res.send('Servicio activo');
});

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));