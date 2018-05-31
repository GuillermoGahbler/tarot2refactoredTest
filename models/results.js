module.exports=(sequelize,DataTypes)=> {
  const Readings = sequelize.define('readings',{
    user_id: {
      type: DataTypes.INTEGER
    },
    reading:{
      type: DataTypes.STRING
    }
  },{
      timestamps: false
    })
    return Readings;
}