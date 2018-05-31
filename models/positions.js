module.exports = (sequelize, DataTypes) => {
  const Positions = sequelize.define('positions',{
    name: {
      type: DataTypes.STRING
    },
    meaning:{
      type: DataTypes.STRING
    }
  },{
    timestamps: false
  });
  return Positions;
}