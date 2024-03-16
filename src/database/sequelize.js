import Sequelize from 'sequelize';

//configuração da conexão com o banco de dados SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'//Onde você deseja que o arquivo do banco de dados seja armazenado
});

//Testando a conexão
(async () =>{
    try{
        await sequelize.authenticate();
        console.log('conexão bem sucedida com banco de dados.');
    }catch (error) {
        console.log('Erro ao conectar com o banco de dados.',error);
    }
})();

export default sequelize;