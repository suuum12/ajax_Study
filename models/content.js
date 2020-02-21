module.exports = (sequelize,DataTypes) =>(
    sequelize.define('content',{
        'content':{
            type:DataTypes.STRING(30),
            allowNull:false,
        },
    })
);