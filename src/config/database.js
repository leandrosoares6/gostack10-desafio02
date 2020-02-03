module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'fastfeet',
  logging: false,
  define: {
    timpestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
