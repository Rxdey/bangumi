const Sequelize = require('sequelize');
const sequelize = require("../db/db.js")
const Op = Sequelize.Op;
const Animates = sequelize.define('animates', {
  // allowNull defaultValue type autoIncrement primaryKey unique
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  animateNameCN: Sequelize.STRING,
  animateNameJP: Sequelize.STRING,
  episode: Sequelize.STRING,
  year: Sequelize.STRING,
  month: Sequelize.STRING,
  score: Sequelize.STRING,
  rank: Sequelize.STRING,
  cover: Sequelize.STRING,
  animateId: Sequelize.INTEGER
}, {
  timestamps: false,
  freezeTableName: true,
  tableName: 'animates',
});

const Animatedesc = sequelize.define('animatedescs', {
  // allowNull defaultValue type autoIncrement primaryKey unique
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  animateId: Sequelize.INTEGER,
  animateInfo: Sequelize.TEXT
}, {
  timestamps: false,
  tableName: 'animatedescs',
  freezeTableName: true
});

// Animates.hasOne(Animatedesc,{foreignKey:'animateId'})
Animates.hasOne(Animatedesc, {
  foreignKey: 'animateId',
  targetKey: 'animateId',
  sourceKey: "animateId"
})
Animatedesc.belongsTo(Animates, {
  foreignKey: 'animateId'
})


const find = async ({
  start = 0,
  search = '',
  order = 'id',
  pageSize = 10,
  type = 'asc'
} = {}) => {
  let sql = `SELECT a.*,b.animateInfo from animates a,animatedescs b WHERE a.animateId = b.animateId ORDER BY ${order} ${type} LIMIT ${start},${pageSize}`
  let list = await sequelize.query(sql, {
    raw: true,
    type: sequelize.QueryTypes.SELECT
  })
  return list
}
module.exports = {
  Animates,
  find
}