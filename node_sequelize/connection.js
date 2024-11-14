const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fsbootcamp2024_sequelize', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(() => {
        console.log('Connected successfully');
    }
).catch( (errors) => {
    console.log(errors);
});

module.exports.sequelize = sequelize;
module.exports.Sequelize = Sequelize;