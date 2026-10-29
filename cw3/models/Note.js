const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("Note", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT
        },
        isCompleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        timestamps: false
    });
};