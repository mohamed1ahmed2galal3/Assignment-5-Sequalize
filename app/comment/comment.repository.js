const { Op } = require("sequelize");
const { Comment } = require("../common/db/comment.model");
const { User } = require("../common/db/user.model");
const { Post } = require("../common/db/post.model");

// getCommentById
async function getCommentById(commentId) {
  const comment = await Comment.findByPk(commentId);
  return comment;
}

// create bulk comments
async function createBulkComments(comments) {
  const createdComments = await Comment.bulkCreate(comments, {
    validate: true,
  });
  return createdComments;
}

// update comment by id
async function updateCommentById(commentId, updatedData) {
  const [updatedRows] = await Comment.update(updatedData, {
    where: { id: commentId },
  });
  return updatedRows;
}

// find or create comment
async function findOrCreateComment(postId, userId, content) {
  const [comment, created] = await Comment.findOrCreate({
    where: { postId, userId, content },
    defaults: { postId, userId, content },
  });
  return { comment, created };
}

// Retrieve all comments that contain a specific word in their content and return the number of comments matched
async function getCommentsByContentWord(word) {
  const comments = await Comment.findAll({
    where: {
      content: {
        [Op.like]: `%${word}%`,
      },
    },
  });
  const count = comments.length;
  return { comments, count };
}

//Retrieve the 3 most recent comments for a specific post, ordered by creation date.
async function getRecentCommentsForPost(postId) {
  const comments = await Comment.findAll({
    where: {
      postId,
    },
    order: [["created_at", "DESC"]],
    limit: 3,
  });
  return comments;
}

// Get Specific Comment By PK with User and Post Information
async function getCommentDetails(id) {
  const comment = await Comment.findByPk(id, {
    attributes: ["id", "content"],
    include: [
      {
        model: User,
        attributes: ["id", "name", "email"],
      },
      {
        model: Post,
        attributes: ["id", "title", "content"],
      },
    ],
  });
  return comment;
}

module.exports = {
  getCommentById,
  createBulkComments,
  updateCommentById,
  findOrCreateComment,
  getCommentsByContentWord,
  getRecentCommentsForPost,
  getCommentDetails,
};
