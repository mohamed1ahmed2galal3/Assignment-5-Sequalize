const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("./connection");
const { Post } = require("./post.model");
const { User } = require("./user.model");

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
    },
    postId: {
      type: DataTypes.INTEGER,
      field: "post_id",
      references: {
        model: Post,
        key: "id",
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      field: "user_id",
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "Comment",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
);

Comment.belongsTo(User, { foreignKey: "userId" });
Comment.belongsTo(Post, { foreignKey: "postId" });

User.hasMany(Comment, { foreignKey: "userId" });
Post.hasMany(Comment, { foreignKey: "postId" });

module.exports = { Comment };
