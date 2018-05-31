module.exports = (sequelize, DataTypes) => {
  const Suits = sequelize.define('suits',{
    name: {
      type: DataTypes.STRING
    },
    meaning:{
      type: DataTypes.STRING
    }
  },{
    timestamps: false
  });
  Suits.associate = models => Suits.hasOne(models.cards, { foreignKey: 'cardSuit' });

  return Suits;
}