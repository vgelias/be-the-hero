const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors(
  //{ origin: "http://frontendURL"}
  ));
app.use(express.json()); // Converte o JSON em javascript
app.use(routes);


/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Apagar uma informação no back-end
*/

/**
  * Tipos de parâmtros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (/users?name=Diego)
  * Route Params: Parâmetros utilizados para identificar recursos (/users/:id)
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc 
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table('users').select('') --> KNEX.JS
   */



app.listen(3333);