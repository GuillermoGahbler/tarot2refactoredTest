module.exports = (sequelize, DataTypes) => {
  const Numbers = sequelize.define('numbers',{
    name: {
      type: DataTypes.STRING
    },
    meaning:{
      type: DataTypes.STRING
    }
  },{
    timestamps: false
  });

  Numbers.associate = models => Numbers.hasOne(models.cards, { foreignKey: 'cardNumber' });
  
  return Numbers;
}