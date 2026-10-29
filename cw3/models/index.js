const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "metanit.db",
    logging: false
});

const List = require("./List")(sequelize);
const Tag = require("./Tag")(sequelize);
const Note = require("./Note")(sequelize);

List.hasMany(Note, { foreignKey: 'listId', onDelete:'CASCADE' });
Note.belongsTo(List, {foreignKey: 'listId' });

Tag.hasMany(Note, { foreignKey: 'listId', onDelete: "SET NULL" });
Note.belongsTo(Tag, { foreignKey: 'tagId'});

module.exports = {
    sequelize,
    List,
    Tag,
    Note
};
