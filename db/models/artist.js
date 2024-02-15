const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Artist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Artist.init({
    artistId: DataTypes.STRING,
    name: DataTypes.STRING,
    uri: DataTypes.STRING,
    image: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      references: 'Users',
    },
  }, {
    sequelize,
    modelName: 'Artist',
  });
  return Artist;
};
