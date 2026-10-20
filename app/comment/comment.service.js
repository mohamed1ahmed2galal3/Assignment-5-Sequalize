const commentRepository = require("./comment.repository");

// create bulk comments
async function createBulkComments(comments) {
  const createdComments = await commentRepository.createBulkComments(comments);
  return createdComments;
}

// update comment by id & ensure that the comment belongs to the user
async function updateCommentById(commentId, userId, updatedData) {
  // check if the comment exists and belongs to the user
  const comment = await commentRepository.getCommentById(commentId);
  // if not found, throw an error
  if (!comment) {
    throw new Error("Comment not found");
  }
  // if exist check that the comment belongs to the user
  if (comment.userId !== userId) {
    throw new Error("Unauthorized to update this comment");
  }
  // update the comment
  const updatedComment = await commentRepository.updateCommentById(
    commentId,
    updatedData,
  );
  // if updatedComment is 0, throw an error
  if (updatedComment === 0) {
    throw new Error("Failed to update comment");
  }
}

// find or create comment
async function findOrCreateComment(postId, userId, content) {
  const { comment, created } = await commentRepository.findOrCreateComment(
    postId,
    userId,
    content,
  );
  return { comment, created };
}

// Retrieve all comments that contain a specific word in their content and return the number of comments matched
async function getCommentsByContentWord(word) {
  const { comments, count } =
    await commentRepository.getCommentsByContentWord(word);
  return { comments, count };
}

//Retrieve the 3 most recent comments for a specific post, ordered by creation date.
async function getRecentCommentsForPost(postId) {
  const comments = await commentRepository.getRecentCommentsForPost(postId);
  return comments;
}

//Get Specific Comment By PK with User and Post Information
async function getCommentDetails(id) {
  const comment = await commentRepository.getCommentDetails(id);
  if (!comment) throw new Error("comment not found");
  return comment;
}

module.exports = {
  createBulkComments,
  updateCommentById,
  findOrCreateComment,
  getCommentsByContentWord,
  getRecentCommentsForPost,
  getCommentDetails,
};
