require('dotenv').config()

module.exports = {
  dialect: 'mysql',
  host: process.env.MYSQL_HOST || 'us-cdbr-east-05.cleardb.net',
  username: process.env.MYSQL_USER || 'bdb85667aefc17',
  password: process.env.MYSQL_PASSWORD || 'da978359',
  database: process.env.MYSQL_DB_NAME || 'heroku_8aa08857f020dd7',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}
