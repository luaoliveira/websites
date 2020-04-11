const sqlite3 = require('sqlite3 ').verbose()
const db = new sqlite3.Database('./codes.db') /* instancia um objeto  */

db.serialize(function(){

// Criar a tabela
// marcar texto com crase é um template string
db.run(`

    CREATE TABLE IF NOT EXISTS ideas(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT


    );
`)

//Inserir dado na tabela

//Consulta dados na tabela

//Deletar um dado na tabela


})   