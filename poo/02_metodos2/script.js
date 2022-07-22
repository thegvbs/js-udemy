const cadastro = { // Objeto
    database: 'MySQL',
    inserir: function(){ // Método
        console.log('Inserindo...');
    },
    deletar: function(){ // Método
        console.log('Deletando...');
    },
    setDB: function(db){
        this.db = database;
    },
    getDB: function(){
        return this.database;
    }
}

cadastro.inserir(); // Inserindo... 
cadastro.deletar(); // Deletando...
console.log(cadastro.getDB()); // MySQL