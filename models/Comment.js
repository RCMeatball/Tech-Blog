const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'user',
            key: 'id'
          }
        },
        blog_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'blog',
            key: 'id'
          }
        },
        comment: {
          type: DataTypes.STRING(1250),
          allowNull: false,
        },
    
      },
      {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
      }
    );