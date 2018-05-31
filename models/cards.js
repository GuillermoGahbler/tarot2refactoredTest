module.exports=(sequelize,DataTypes)=> {
  const Cards = sequelize.define('cards',{
    cardType:{
      type: DataTypes.STRING
    },
    name:{
      type: DataTypes.STRING
    },
    cardNumber:{
      type: DataTypes.STRING
    },
    cardSuit:{
      type: DataTypes.STRING
    },
    image:{
      type: DataTypes.STRING
    },
    meaning:{
      type: DataTypes.STRING
    }
  },{
      timestamps: false
    })

    Cards.associate = models => {
      Cards.belongsTo(models.types, { foreignKey: 'cardType',targetKey:'name' });
      Cards.belongsTo(models.numbers, { foreignKey: 'cardNumber',targetKey:'name' });
      Cards.belongsTo(models.suits, { foreignKey: 'cardSuit',targetKey:'name' });
    };

    return Cards;
}