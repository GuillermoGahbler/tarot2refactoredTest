module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users',{
    google_id: {
      type: DataTypes.STRING
    },
    twitter_id:{
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    username:{
      type: DataTypes.STRING
    }
  },{
    timestamps: false
  });
  return Users;
}