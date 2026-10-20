const { Sequelize } = require("sequelize");
const { Comment } = require("../common/db/comment.model");
const { sequelize } = require("../common/db/connection");
const { Post } = require("../common/db/post.model");
const { User } = require("../common/db/user.model");

async function createPost(title, content, userId) {
  const post = Post.build({ title, content, userId });
  await post.save();
  return post;
}

async function getPostById(postId) {
  const post = await Post.findByPk(postId);
  return post;
}

async function deletePost(postId) {
  const deletedRows = await Post.destroy({ where: { id: postId } });
  return deletedRows;
}

// get posts by details
async function getPostsByDetails() {
  const posts = await Post.findAll({
    attributes: ["id", "title"],
    include: [
      {
        model: User,
        attributes: ["id", "name"],
      },
      {
        model: Comment,
        attributes: ["id", "content"],
      },
    ],
  });
  return posts;
}

async function getPostsWithCommentCount() {
  const posts = await Post.findAll({
    attributes: [
      "id",
      "title",
      [Sequelize.fn("COUNT", Sequelize.col("Comments.id")), "commentCount"],
    ],
    include: [
      {
        model: Comment,
        attributes: [],
        required: false,
      },
    ],
    group: ["Post.id"],
  });
  return posts;
}

module.exports = {
  createPost,
  getPostById,
  deletePost,
  getPostsByDetails,
  getPostsWithCommentCount,
};
