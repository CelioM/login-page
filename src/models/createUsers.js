const {Model, DataTypes} = require('sequelize');

class createUsers extends Model {
    static init(sequelize) {
        super.init({
            firstName: DataTypes.STRING,
            lastName: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,

        },{
            sequelize,
           
        });
        
    }
}
module.exports = createUsers;