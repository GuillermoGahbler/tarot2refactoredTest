module.exports = {
  "development": {
    "username": process.env.SEQUELIZE_USER,
    "password": process.env.SEQUELIZE_PASSWORD,
    "database": process.env.SEQUELIZE_DB,
    "host": process.env.SEQUELIZE_HOST,
    "define": {"timestamps": false},
    "dialect": process.env.SEQUELIZE_DIALECT
  },
  "production": {
    "use_env_variable": process.env.JAWSDB_URL,
    "dialect": "mysql"
  }
}