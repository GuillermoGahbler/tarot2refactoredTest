module.exports=(sequelize,DataTypes)=>{
  const Types = sequelize.define('types',{
    name: {
      type: DataTypes.STRING
    },
    meaning: {
      type: DataTypes.STRING
    }
  },{
    timestamps:false
  })
  
  Types.associate = models => Types.hasOne(models.cards, { foreignKey: 'cardType' });
  return Types;
}