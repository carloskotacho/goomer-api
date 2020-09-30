module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'goomer',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
