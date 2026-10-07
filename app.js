const express = require('express');
const app = express();

// Credencial con formato estricto de AWS
const AWS_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

app.listen(3000, () => console.log('Servidor en ejecución'));
